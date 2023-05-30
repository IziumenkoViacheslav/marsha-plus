import { mdiAccount } from '@mdi/js'
import Head from 'next/head'
import React from 'react'
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

const Stacking = () => {
  const contract: MarshaPlus = useAppSelector((state) => state.crypto.contract)

  async function transferToWallet(contract, walletTo: string, amount: number) {
    if (!contract) {
      toast('Connect to metamask first and try again', { style: { color: 'red' } })
      return null
    }
    if (!amount) {
      toast('amount must be greather then 0!', { style: { color: 'red' } })
      return null
    }
    const transaction = contract && (await contract.transferTo(walletTo, amount))
    const res = await transaction.wait()
    console.log({ res })

    toast(`Congratulation, you successfuly transfered ${amount} Marsha+ tokens!`, {
      style: { color: 'green', width: '3xl' },
    })
  }

  async function staking(amount: number, period: string) {
    if (!amount) {
      toast('amount must be greather then 0!', { style: { color: 'red' } })
      return null
    }
    if (!contract) {
      toast('connected to metamask', { style: { color: 'blue' } })
    }

    console.log({ amount })
    console.log({ period })
    try {
      const stakedTokens = await contract.depositTokenToStaking(amount, period)
      const resTrans = await stakedTokens.wait()
      console.log({ resTrans })
      const signerAdress = await contract.signer.getAddress()
      console.log({ signerAdress })

      const stakingMap = await contract.stakingByPeriod(signerAdress, 'YEAR')
      console.log({ stakingMap })
      const dateStart = stakingMap.date.toNumber()
      console.log(new Date(dateStart).toDateString())
      const tokensStaked = stakingMap.tokens.toNumber()
      console.log({ tokensStaked })
    } catch (error) {
      console.log(error?.data?.message)
      console.log({ error })
    }
  }
  async function withdraw(period: string) {
    const result = await contract.withdrawTokenFromStaking(period)
    console.log({ result })
    const resTrans = await result.wait()
    console.log({ resTrans })
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
                amount: 0,
              }}
              onSubmit={(values) => {
                console.log({ values })
                staking(Number(values.amount), 'YEAR')
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
                amount: 0,
              }}
              onSubmit={(values) => staking(Number(values.amount), 'YEAR_AND_HALF')}
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
                amount: 0,
              }}
              onSubmit={(values) => staking(Number(values.amount), 'HALF_YEAR')}
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
        </div>
      </SectionMain>
    </>
  )
}

Stacking.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default Stacking
