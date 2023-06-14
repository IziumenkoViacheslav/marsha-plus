import { mdiAccount } from '@mdi/js'
import Head from 'next/head'
import React, { useState } from 'react'
import type { ReactElement } from 'react'
import BaseButton from '../components/BaseButton'
import LayoutAuthenticated from '../layouts/Authenticated'
import SectionMain from '../components/SectionMain'
import CardBox from '../components/CardBox'
import { getPageTitle } from '../config'
import { Formik, Form, Field } from 'formik'
import BaseButtons from '../components/BaseButtons'
import BaseDivider from '../components/BaseDivider'
import FormField from '../components/FormField'
import { toast } from 'react-hot-toast'
import { useAppSelector } from '../stores/hooks'
import { MarshaPlus } from '../../typechain-types/MarshaPlus'
import Image from 'next/image'
import CardBoxModal from '../components/CardBoxModal'

enum PERIOD {
  halfYear = 'HALF_YEAR',
  year = 'YEAR',
  yearAndHalf = 'YEAR_AND_HALF',
}
const periodInDays = { [PERIOD.halfYear]: 183, [PERIOD.year]: 365, [PERIOD.yearAndHalf]: 548 }

const Stacking = () => {
  const contract: MarshaPlus = useAppSelector((state) => state.crypto.contract)
  const [isModalInfoActive, setIsModalInfoActive] = useState(false)
  const [amount, setAmount] = useState<number>(null)
  const [period, setPeriod] = useState<string>('')

  async function handleStakingButton(amount: string, period: string) {
    if (!contract) {
      toast('Connect to metamask first and try again', { style: { color: 'red' } })
      return null
    }
    if (!amount) {
      toast('amount must be greather then 0!', { style: { color: 'red' } })
      return null
    }
    setAmount(Number(amount))
    setPeriod(period)
    setIsModalInfoActive(true)
  }

  async function staking(amount: number, period: string) {
    if (!contract) {
      toast('Connect to metamask first and try again', { style: { color: 'red' } })
      return null
    }
    if (!amount) {
      toast('amount must be greather then 0!', { style: { color: 'red' } })
      return null
    }
    try {
      const signerAdress = await contract.signer.getAddress()
      console.log({ signerAdress })
      const balans = Number(await contract.balanceOf(signerAdress))
      console.log({ balans })

      if (Number(balans) < amount) {
        toast(`You balance is ${balans}, it is not enaph to staking ${amount} Marsha+ tokens`, {
          style: { color: 'red' },
        })
        return null
      }
      const stakedTokens = await contract.depositTokenToStaking(amount, period, {
        gasLimit: 3000000,
      })
      const resTrans = await stakedTokens.wait()
      console.log({ resTrans })

      const stakingMap = await contract.stakingByPeriod(signerAdress, period)
      console.log({ stakingMap })
      const dateStart = stakingMap.date.toNumber()
      console.log(new Date(dateStart).toDateString())
      const tokensStaked = stakingMap.tokens.toNumber()
      console.log({ tokensStaked })
      toast(`Congratulations, you successfully staking ${amount} Marsha+ tokens`, {
        style: { color: 'green' },
      })
    } catch (error) {
      console.log({ error })
      console.log(error?.data?.message)
      if (error?.data?.message) {
        toast(error?.data?.message, { style: { color: 'red' } })
      } else {
        toast(error?.message, { style: { color: 'red' } })
      }
    }
  }
  async function withdraw(period: string) {
    if (!contract) {
      toast('Connect to metamask first and try again', { style: { color: 'red' } })
      return null
    }
    const signerAdress = await contract.signer.getAddress()
    const stakingMap = await contract.stakingByPeriod(signerAdress, period)
    const tokensStaked = stakingMap.tokens.toNumber()
    console.log('stakingMap.date', Number(stakingMap.date))
    const timeOfStakedInSeconds = stakingMap.date.toNumber() // in seconds
    console.log({ timeOfStakedInSeconds })
    // TODO uncoment before prod, now for testing using minutes insted of days!!!
    // const timeOfRevardInSeconds = timeOfStakedInSeconds + periodInDays[period] * 24 * 60 * 60
    const timeOfRevardInSeconds = timeOfStakedInSeconds + 6 * 60 // 6 minutes for testing
    console.log({ timeOfRevardInSeconds })
    const daysLeft = Math.floor((timeOfRevardInSeconds - Date.now() / 1000) / (24 * 60 * 60))
    console.log({ daysLeft })
    console.log('timeOfRevardInSeconds * 1000', timeOfRevardInSeconds * 1000)
    console.log('Date.now()', Date.now())

    if (timeOfRevardInSeconds * 1000 < Date.now()) {
      toast(`Not enouph time pass to revard, it is left ${daysLeft} days`, {
        style: { color: 'red' },
      })
      return null
    }

    const result = await contract.withdrawTokenFromStaking(period, { gasLimit: 3000000 })
    const resWithdeaw = await result.wait()
    console.log({ resWithdeaw })
    const balansAfterWithdraw = await contract.balanceOf(signerAdress)
    console.log('balansafterWithdraw', Number(balansAfterWithdraw))

    toast(
      `Congratulations, you successfully withdraw ${tokensStaked} Marsha+ tokens with profit ${resWithdeaw} tokens`,
      {
        style: { color: 'green' },
      }
    )
  }

  return (
    <>
      <Head>
        <title>{getPageTitle('Staking')}</title>
      </Head>

      <SectionMain>
        <Image
          src="./images/Staking.png"
          width={999}
          height={250}
          alt="image"
          className="w-full rounded-2xl mb-4"
        />

        <div className="flex flex-row flex-wrap justify-around">
          <CardBox className="m-2">
            <table>
              <tr className=" flex justify-around md:flex-none">
                <th>Token</th>
                <th>Type</th>
                <th>Month</th>
                <th>APY</th>
              </tr>
              <tr className="flex justify-around md:flex-none">
                <td className="">MRA</td>
                <td className=" font-bold border-none">Hard</td>
                <td className=" border-none">12</td>
                <td className="text-green-400  font-bold border-none">5%</td>
              </tr>
            </table>
            <Formik
              initialValues={{
                amount: '',
              }}
              onSubmit={(values) => {
                handleStakingButton(values.amount, PERIOD.year)
              }}
            >
              <Form>
                {/* <FormField label="MRA 18 Months Staking" icons={[mdiAccount]}> */}
                <FormField label="" icons={[mdiAccount]}>
                  <Field name="amount" placeholder="amount" />
                </FormField>
                <div className="flex flex-row justify-around">
                  <BaseButtons>
                    <BaseButton type="submit" color="info" label="Stake" />
                  </BaseButtons>
                  <BaseButtons>
                    <BaseButton onClick={() => withdraw('YEAR')} color="info" label="Reward" />
                  </BaseButtons>
                </div>
                <div className="text-sm mt-4 ml-4">
                  <ul className="list-disc">
                    <li>Lock-up period: 12 months</li>
                    <li>Staking deposit withdrawal: 365 days after</li>
                    <li>Reward Withdrawal: Any time</li>
                    <li>Reward level: 5% APY</li>
                  </ul>
                </div>
              </Form>
            </Formik>
            <BaseDivider />
          </CardBox>
          <CardBox className="m-2">
            <table>
              <tr className=" flex justify-around md:flex-none">
                <th className="text-center">Token</th>
                <th className="text-center">Type</th>
                <th className="text-center">Month</th>
                <th className="text-center">APY</th>
              </tr>
              <tr className="flex justify-around md:flex-none">
                <td className="text-center">MRA</td>
                <td className="text-center font-bold border-none">Hard</td>
                <td className="text-center border-none">18</td>
                <td className="text-green-400 text-center font-bold border-none">8%</td>
              </tr>
            </table>
            <Formik
              initialValues={{
                amount: '',
              }}
              onSubmit={(values) => {
                handleStakingButton(values.amount, PERIOD.yearAndHalf)
              }}
            >
              <Form>
                <FormField label="" icons={[mdiAccount]}>
                  <Field name="amount" placeholder="amount" />
                </FormField>
                <div className="flex flex-row justify-around">
                  <BaseButtons>
                    <BaseButton type="submit" color="info" label="Stake" />
                  </BaseButtons>
                  <BaseButtons>
                    <BaseButton
                      onClick={() => withdraw('YEAR_AND_HALF')}
                      color="info"
                      label="Reward"
                    />
                  </BaseButtons>
                </div>
                <div className="text-sm mt-4 ml-4">
                  <ul className="list-disc">
                    <li>Lock-up period: 18 months</li>
                    <li>Staking deposit withdrawal: 548 days after</li>
                    <li>Reward Withdrawal: Any time</li>
                    <li>Reward level: 8% APY</li>
                  </ul>
                </div>
              </Form>
            </Formik>
            <BaseDivider />
          </CardBox>
          <CardBox className="m-2">
            <table>
              <tr className=" flex justify-around md:flex-none">
                <th className="text-center">Token</th>
                <th className="text-center">Type</th>
                <th className="text-center">Month</th>
                <th className="text-center">APY</th>
              </tr>
              <tr className="flex justify-around md:flex-none">
                <td className="text-center">MRA</td>
                <td className="text-center font-bold border-none">Soft</td>
                <td className="text-center border-none">6</td>
                <td className="text-green-400 text-center font-bold border-none">3%</td>
              </tr>
            </table>

            <Formik
              initialValues={{
                amount: '',
              }}
              onSubmit={(values) => {
                handleStakingButton(values.amount, PERIOD.halfYear)
              }}
            >
              <Form>
                {/* <FormField label="MRA 18 Months Staking" icons={[mdiAccount]}> */}
                <FormField label="" icons={[mdiAccount]}>
                  <Field name="amount" placeholder="amount" />
                </FormField>
                <div className="flex flex-row justify-around">
                  <BaseButtons>
                    <BaseButton type="submit" color="info" label="Stake" />
                  </BaseButtons>
                  <BaseButtons>
                    <BaseButton onClick={() => withdraw('HALF_YEAR')} color="info" label="Reward" />
                  </BaseButtons>
                </div>
                <div className="text-sm mt-4 ml-4">
                  <ul className="list-disc">
                    <li>Lock-up period: No lock-up period</li>
                    <li>Staking deposit withdrawal: Any Time</li>
                    <li>Reward withdrawal: Every 30 days</li>
                    <li>Reward level: 3% APY</li>
                  </ul>
                </div>
              </Form>
            </Formik>

            <BaseDivider />
          </CardBox>
          <CardBoxModal
            title="Please confirm action"
            buttonColor="info"
            buttonLabel="Confirm"
            isActive={isModalInfoActive}
            onConfirm={() => {
              staking(amount, period)
              setIsModalInfoActive(false)
            }}
            onCancel={() => {
              setIsModalInfoActive(false)
            }}
          >
            {`Confirm staking ${amount} tokens for ${period} period`}
          </CardBoxModal>
        </div>
      </SectionMain>
    </>
  )
}

Stacking.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default Stacking
