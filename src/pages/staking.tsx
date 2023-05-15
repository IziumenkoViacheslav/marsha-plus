import { mdiAccount } from '@mdi/js'
import Head from 'next/head'
import React from 'react'
import type { ReactElement } from 'react'
import BaseButton from '../components/BaseButton'
import LayoutAuthenticated from '../layouts/Authenticated'
import SectionMain from '../components/SectionMain'
import { useSampleClients, useSampleTransactions } from '../hooks/sampleData'
import CardBoxTransaction from '../components/CardBoxTransaction'
import { Client, Transaction } from '../interfaces'
import CardBoxClient from '../components/CardBoxClient'
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
  const { clients } = useSampleClients()
  const { transactions } = useSampleTransactions()
  const clientsListed = clients.slice(0, 4)
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
    toast(`Congratulation, you successfuly transfered ${amount} Marsha+ tokens!`, {
      style: { color: 'green', width: '3xl' },
    })
  }

  async function staking(tokens: number) {
    const stakedTokens = await contract.depositTokenToStaking(tokens)
  }
  async function withdraw() {
    const result = await contract.withdrawTokenFromStaking()
  }

  return (
    <>
      <Head>
        <title>{getPageTitle('Crypto')}</title>
      </Head>

      <SectionMain>
        <Image src="./images/Staking.png" width={1100} height={250} alt="image" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="flex flex-col justify-between">
            {transactions.map((transaction: Transaction) => (
              <CardBoxTransaction key={transaction.id} transaction={transaction} />
            ))}
          </div>
          <div className="flex flex-col justify-between">
            {clientsListed.map((client: Client) => (
              <CardBoxClient key={client.id} client={client} />
            ))}
          </div>
        </div>

        <div className="flex sm:flex-row flex-col">
          <CardBox className="m-2">
            <Formik
              initialValues={{
                tokens: '',
              }}
              onSubmit={(values) => staking(Number(values.tokens))}
            >
              <Form>
                <FormField label="18 months staking" icons={[mdiAccount]}>
                  <Field name="stakTokens" placeholder="amount" />
                </FormField>
                <BaseButtons>
                  <BaseButton type="submit" color="info" label="Stack" />
                </BaseButtons>
              </Form>
            </Formik>

            <BaseDivider />

            <BaseButtons>
              <BaseButton onClick={withdraw} color="info" label="Withdraw" />
            </BaseButtons>
          </CardBox>
          <CardBox className="m-2">
            <Formik
              initialValues={{
                tokens: '',
              }}
              onSubmit={(values) => staking(Number(values.tokens))}
            >
              <Form>
                <FormField label="12 months staking" icons={[mdiAccount]}>
                  <Field name="stakTokens" placeholder="amount" />
                </FormField>
                <BaseButtons>
                  <BaseButton type="submit" color="info" label="Stack" />
                </BaseButtons>
              </Form>
            </Formik>

            <BaseDivider />

            <BaseButtons>
              <BaseButton onClick={withdraw} color="info" label="Withdraw" />
            </BaseButtons>
          </CardBox>
          <CardBox className="m-2">
            <Formik
              initialValues={{
                tokens: '',
              }}
              onSubmit={(values) => staking(Number(values.tokens))}
            >
              <Form>
                <FormField label="6 months staking" icons={[mdiAccount]}>
                  <Field name="stakTokens" placeholder="amount" />
                </FormField>
                <BaseButtons>
                  <BaseButton type="submit" color="info" label="Stack" />
                </BaseButtons>
              </Form>
            </Formik>

            <BaseDivider />

            <BaseButtons>
              <BaseButton onClick={withdraw} color="info" label="Withdraw" />
            </BaseButtons>
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
