import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/index.module.css'
// import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Link from 'next/link'
import Menu from '../components/Menu'


const Home: NextPage = () => {

  return (
    <div className={` h-[100vh] w-[100vw] font-opensans flex flex-col justify-end items-center ${styles.home_main}`}>
      <Head>
        <title>Solaris | Home</title>
        <meta name="description" content="Solaris: CodeByDolapo" />
        <link rel="icon" href="/icons/logo.png" />
      </Head>

      <Navbar />
      <Menu/>

      <div className={`w-[100%] h-[80vh] text-white flex lg:flex-row lg:pt-0 items-center lg:justify-center mt-[10vh] xs:flex-col overflow-y-scroll xs:pt-[5rem] ${``}`}>
        <div className={`lg:w-[50%] h-inherit flex flex-col lg:items-left justify-center px-[5%] xs:items-center xs:w-[100vw] ${``}`}>
          <h3 className={`uppercase tracking-[2px] lg:font-bold md:text-2xl lg:text-left xs:text-center xs:text-lg`}>So, you want to travel to</h3>
          <h1 className={`uppercase lg:text-[10rem] lg:leading-[10rem] tracking-widest font-extrabold font-times xs:text-[6rem] xs:leading-[6rem]`}>Space</h1>
          <h4 className={`font-opensans lg:text-lg lg:mt-0 lg:text-left font-light leading-xl tracking-[1px] capitalize md:text-base xs:text-sm xs:text-center xs:mt-[2rem]`}>
            The Universe Awaits! Sit back and relax, because we’ll give you a truly out of this
            world experience!
          </h4>
        </div>

        <div className={`lg:w-[50%] h-inherit flex items-center justify-center xs:w-[100vw]`}>
          <Link href="/">
            <div className={`w-[25rem] h-[25rem] rounded-full hover:bg-[#ffffff1a] ease text-black flex items-center justify-center`}>
              <div className={`text-black w-[20rem] h-[20rem] rounded-full ease flex flex-col items-center justify-center bg-white`}>
                <h1 className={`text-sm text-black tracking-[2px] font-light uppercase`}>Click To</h1>
                <h1 className={`text-4xl text-black tracking-[2px] font-light my-3 uppercase`}>Explore</h1>
                <h1 className={`text-sm text-black tracking-[2px] font-light uppercase`}>For as low as 1ETH</h1>
              </div>
            </div>
          </Link>
        </div>
      </div>
      
    </div>
  );

}

export default Home
