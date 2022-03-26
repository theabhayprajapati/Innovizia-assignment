import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Checkout from '../components/Checkout'
import Header from '../components/Header'
import OrderSummary from '../components/OrderSummary'

const Home: NextPage = () => {
  return (
    <div className='max-w-7xl font-Poppins mx-auto px-2  '>
      <Head>
        <title>
          Stilly Tree Payment
        </title>
        <link rel="icon" href="/vercel.svg" />
      </Head>
      <div className="z-50 shadow-lg sticky ">
        <Header />
      </div>
      <main className="flex flex-col-reverse md:flex-row border-blue-400">
        <div className='md:w-[70%]  mt-2 border-2'>
          <Checkout />
        </div>
        <div className=' w-full md:w-[30%]'>

          <OrderSummary />
        </div>
      </main>
    </div>
  )
}

export default Home
