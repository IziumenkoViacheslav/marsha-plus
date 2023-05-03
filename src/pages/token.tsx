import { mdiAccount, mdiMail } from '@mdi/js'
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

const Token = () => {
  const { clients } = useSampleClients()
  const { transactions } = useSampleTransactions()

  const contract = useAppSelector((state) => state.crypto.contract)

  const clientsListed = clients.slice(0, 4)

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

  return (
    <>
      <Head>
        <title>{getPageTitle('Crypto')}</title>
      </Head>
      <SectionMain>
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

        <CardBox>
          <Formik
            initialValues={{
              wolletTo: '',
              amount: '',
            }}
            onSubmit={(values) =>
              transferToWallet(contract, values.wolletTo, Number(values.amount))
            }
          >
            <Form>
              <FormField label="Transfer" icons={[mdiAccount, mdiMail]}>
                <Field name="wolletTo" placeholder="to wallet" />
                <Field name="amount" placeholder="amount" />
              </FormField>
              <BaseButtons>
                <BaseButton type="submit" color="info" label="Send" />
              </BaseButtons>
            </Form>
          </Formik>
          <BaseDivider />

          <Formik
            initialValues={{
              stackTokens: '',
              amount: '',
              phone: '',
              color: 'green',
              textarea: 'Hello',
            }}
            onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
          >
            <Form>
              <FormField label="Stack for one year" icons={[mdiAccount, mdiMail]}>
                <Field name="stackTokens" placeholder="amount" />
              </FormField>
              <BaseButtons>
                <BaseButton type="submit" color="info" label="Stack" />
              </BaseButtons>
            </Form>
          </Formik>
        </CardBox>
      </SectionMain>
    </>
  )
}

Token.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default Token
