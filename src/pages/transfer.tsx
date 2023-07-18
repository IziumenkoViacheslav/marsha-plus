import { mdiAccount, mdiMail } from '@mdi/js'
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

const Transfer = () => {
  const contract: MarshaPlus = useAppSelector((state) => state.crypto.contract)
  const [isModalInfoActive, setIsModalInfoActive] = useState(false)
  const [amount, setAmount] = useState(0)
  const [walletTo, setWalletTo] = useState('')

  async function transferToWallet(contract, walletTo: string, amount: number) {
    if (!contract) {
      toast('Connect to metamask first and try again', { style: { color: 'red' } })
      return null
    }
    if (!walletTo) {
      toast('walletTo required!', { style: { color: 'red' } })
      return null
    }
    if (!amount) {
      toast('amount must be greather then 0!', { style: { color: 'red' } })
      return null
    }
    const transaction = await contract.transferTo(walletTo, amount)
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
        <Image
          src="./images/WalletTransfer.png"
          width={999}
          height={200}
          alt="image"
          className="w-full rounded-2xl mb-4"
        />
        <CardBox>
          <Formik
            initialValues={{
              walletTo: '',
              amount: '',
            }}
            onSubmit={(values) => {
              if (!contract) {
                toast('Connect to metamask first and try again', { style: { color: 'red' } })
                return null
              }
              if (!values.walletTo) {
                toast('Wallet must be valid string!', { style: { color: 'red' } })
                return null
              }
              if (!values.amount) {
                toast('Amount must be greather then 0!', { style: { color: 'red' } })
                return null
              }
              setAmount(Number(values.amount))
              console.log('values.walletTo', values.walletTo)
              console.log({ values })

              setWalletTo(values.walletTo)
              setIsModalInfoActive(true)
            }}
          >
            <Form>
              <FormField label="Transfer" icons={[mdiAccount, mdiMail]}>
                <Field name="walletTo" placeholder="to wallet" />
                <Field name="amount" placeholder="amount" />
              </FormField>
              <BaseButtons>
                <BaseButton type="submit" color="info" label="Send" />
              </BaseButtons>
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
            transferToWallet(contract, walletTo, amount)
            setIsModalInfoActive(false)
          }}
          onCancel={() => {
            setIsModalInfoActive(false)
          }}
        >
          {`Confirm transfer ${amount} tokens to wallet ${walletTo}`}
        </CardBoxModal>
      </SectionMain>
    </>
  )
}

Transfer.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default Transfer
