import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Checkout from '../components/Checkout'
import Header from '../components/Header'
import OrderSummary from '../components/OrderSummary'

const Home: NextPage = () => {
  return (
    <div className='max-w-7xl  font-Poppins mx-auto md:px-2  '>
      <Head>
        <title>
          Stilly Tree Payment
        </title>
        <link rel="icon" href="/vercel.svg" />
      </Head>
      <div className="z-50 header-shadow sticky top-0 bg-white  ">
        <Header />
      </div>
      <main className="flex mt-5 max-w-6xl mx-auto flex-col-reverse md:flex-row border-blue-400">
        <div className='md:w-[70%] mt-2 border md:border-none rounded-3xl shadow-2xl  my-2 md:shadow-none'>
          <Checkout />
        </div>
        <div className='w-full md:w-[30%]'>
          <OrderSummary />
        </div>
      </main>
    </div>
  )
}

export default Home
