import { mdiAccount, mdiEthereum } from '@mdi/js'
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

const Swap = () => {
  const contract: MarshaPlus = useAppSelector((state) => state.crypto.contract)

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
      const signerAdress = await contract.signer.getAddress()
      const balans = await contract.balanceOf(signerAdress)
      console.log({ balans })

      if (Number(balans) < amount) {
        toast(`You balance is ${balans}, it is not enaph to staking ${amount} Marsha+ tokens`, {
          style: { color: 'red' },
        })
        return null
      }
      const stakedTokens = await contract.depositTokenToStaking(amount, period)
      const resTrans = await stakedTokens.wait()
      console.log({ resTrans })

      const stakingMap = await contract.stakingByPeriod(signerAdress, 'YEAR')
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
            <Formik
              initialValues={{
                amount: 0,
              }}
              onSubmit={(values) => staking(Number(values.amount), 'YEAR')}
            >
              <Form>
                <FormField label="You have" icons={[mdiAccount]}>
                  <Field name="amount" placeholder="amount" />
                </FormField>
                <FormField label="" icons={[mdiEthereum]}>
                  <Field as="select" name="coinIn" className="text-black">
                    <option value="marsha+">marsha+</option>
                    <option value="usdt">usdt</option>
                    <option value="ether">ether</option>
                    <option value="btc">btc</option>
                  </Field>
                </FormField>
                <FormField label="You want to achive" icons={[mdiAccount]}>
                  <Field name="amount" placeholder="amount" />
                </FormField>
                <FormField label="" icons={[mdiEthereum]}>
                  <Field as="select" name="coinOut" className="text-black">
                    <option value="usdt">usdt</option>
                    <option value="ether">ether</option>
                    <option value="btc">btc</option>
                  </Field>
                </FormField>

                <div className="flex flex-row justify-around p-2">
                  <BaseButtons>
                    <BaseButton type="submit" color="info" label="Stake" />
                  </BaseButtons>
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

Swap.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default Swap
