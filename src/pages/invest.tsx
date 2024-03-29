import { mdiAccount, mdiCurrencyBtc, mdiEthereum } from '@mdi/js'
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

const Invest = () => {
  const contract: MarshaPlus = useAppSelector((state) => state.crypto.contract)

  return (
    <>
      <Head>
        <title>{getPageTitle('Staking')}</title>
      </Head>

      <SectionMain>
        <Image
          src="./images/Swap.png"
          width={999}
          height={250}
          alt="image"
          className="w-full rounded-2xl mb-4"
        />

        {/* <div className="flex flex-row flex-wrap justify-around"> */}
        <div className="">
          <CardBox className="m-2">
            <Formik
              initialValues={{
                amount: '',
              }}
              onSubmit={(values) => console.log({ values })}
            >
              <Form>
                <div className="md:flex md:flex-row">
                  <div className="md:w-[50%] p-4">
                    <FormField label="You want to invest" icons={[mdiAccount]}>
                      <Field name="amount" placeholder="amount" />
                    </FormField>
                    <FormField label="" icons={[mdiCurrencyBtc]}>
                      <Field as="select" name="coinIn" className="text-black">
                        <option value="usdt">usdt</option>
                        <option value="marsha+">marsha+</option>
                        <option value="ether">ether</option>
                        <option value="btc">btc</option>
                      </Field>
                    </FormField>
                  </div>
                  <div className="md:w-[50%] p-4">
                    <FormField label="You will achive" icons={[mdiAccount]}>
                      <Field name="amount" placeholder="amount" />
                    </FormField>
                    <FormField label="" icons={[mdiEthereum]}>
                      <Field as="select" name="coinOut" className="text-black">
                        <option value="marsha+">marsha+</option>
                        <option value="usdt">usdt</option>
                        <option value="ether">ether</option>
                        <option value="btc">btc</option>
                      </Field>
                    </FormField>
                  </div>
                </div>
                <div className="flex justify-center m-4">
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

Invest.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default Invest
