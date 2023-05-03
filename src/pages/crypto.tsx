import {
  mdiAccountMultiple,
  mdiCartOutline,
  mdiChartTimelineVariant,
  mdiEthereum,
  mdiGithub,
  mdiMonitorCellphone,
} from '@mdi/js'
import Head from 'next/head'
import React, { useState } from 'react'
import type { ReactElement } from 'react'
import BaseButton from '../components/BaseButton'
import LayoutAuthenticated from '../layouts/Authenticated'
import SectionMain from '../components/SectionMain'
import SectionTitleLineWithButton from '../components/SectionTitleLineWithButton'
import CardBoxWidget from '../components/CardBoxWidget'
import { useSampleClients, useSampleTransactions } from '../hooks/sampleData'
import CardBoxTransaction from '../components/CardBoxTransaction'
import { Client, Transaction } from '../interfaces'
import CardBoxClient from '../components/CardBoxClient'
import CardBox from '../components/CardBox'
import { sampleChartData } from '../components/ChartLineSample/config'
import NotificationBar from '../components/NotificationBar'
import TableSampleClients from '../components/TableSampleClients'
import { getPageTitle } from '../config'

const Crypto = () => {
  const { clients } = useSampleClients()
  const { transactions } = useSampleTransactions()

  const clientsListed = clients.slice(0, 4)

  return (
    <>
      <Head>
        <title>{getPageTitle('Crypto')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton icon={mdiChartTimelineVariant} title="Overview" main>
          <BaseButton
            href="https://github.com/justboil/admin-one-react-tailwind"
            target="_blank"
            icon={mdiGithub}
            label="Star on GitHub"
            color="contrast"
            roundedFull
            small
          />
        </SectionTitleLineWithButton>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6">
          <CardBoxWidget
            trendLabel="12%"
            trendType="up"
            trendColor="success"
            icon={mdiEthereum}
            iconColor="success"
            number={12}
            label="You have Marsha+ tokens"
          />
          <CardBoxWidget
            trendLabel="16%"
            trendType="down"
            trendColor="danger"
            icon={mdiCartOutline}
            iconColor="info"
            number={7770}
            numberPrefix="$"
            label="Sales"
          />
          <CardBoxWidget
            trendLabel="Overflow"
            trendType="warning"
            trendColor="warning"
            icon={mdiChartTimelineVariant}
            iconColor="danger"
            number={256}
            numberSuffix="%"
            label="Performance"
          />
        </div>

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

        {/* <div className="my-6">
          <SectionBannerStarOnGitHub />
        </div> */}

        {/* <SectionTitleLineWithButton icon={mdiChartPie} title="Trends overview">
          <BaseButton icon={mdiReload} color="whiteDark" onClick={fillChartData} />
        </SectionTitleLineWithButton> */}

        {/* <CardBox className="mb-6">{chartData && <ChartLineSample data={chartData} />}</CardBox> */}

        <SectionTitleLineWithButton icon={mdiAccountMultiple} title="Clients" />

        <NotificationBar color="info" icon={mdiMonitorCellphone}>
          <b>Responsive table.</b> Collapses on mobile
        </NotificationBar>

        <CardBox hasTable>
          <TableSampleClients />
        </CardBox>
      </SectionMain>
    </>
  )
}

Crypto.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default Crypto
