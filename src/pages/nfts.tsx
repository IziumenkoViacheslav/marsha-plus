import Head from 'next/head'
import React from 'react'
import type { ReactElement } from 'react'
import LayoutAuthenticated from '../layouts/Authenticated'
import SectionMain from '../components/SectionMain'
import { getPageTitle } from '../config'
import CardBoxComponentEmpty from '../components/CardBoxComponentEmpty'
import Image from 'next/image'

const Nfts = () => {
  return (
    <>
      <Head>
        <title>{getPageTitle('Charity')}</title>
      </Head>
      <SectionMain>
        <Image
          src="./images/Black Gradient Minimalist Corporate Business Personal Profile New LinkedIn Banner-5.png"
          width={1100}
          height={250}
          alt="image"
        />
        <CardBoxComponentEmpty />
      </SectionMain>
    </>
  )
}

Nfts.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default Nfts
