import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/index.module.css'
// import { useEffect } from 'react'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {

  return (
    <div className={` h-[100vh] w-[100vw] font-opensans flex flex-col justify-end items-center ${styles.home_main}`}>
      <Head>
        <title>Solaris | Home</title>
        <meta name="description" content="Solaris: CodeByDolapo" />
        <link rel="icon" href="/icons/logo.png" />
      </Head>

      <Navbar/>

      <div className={`w-[100%] h-[80vh] text-white flex flex-row items-center justify-center mt-[10vh] ${``}`}>
        <div className={`w-[50%] h-inherit flex flex-col items-left justify-center px-[5%] ${``}`}>
          <h3 className = {`uppercase tracking-[2px] font-bold text-2xl`}>So, you want to travel to</h3>
          <h1 className = {`uppercase text-[10rem] leading-[10rem] tracking-widest font-extrabold font-times`}>Space</h1>
          <h4 className = {`font-opensans text-lg font-light leading-xl tracking-[1px] capitalize`}>
            The Universe Awaits! Sit back and relax, because we’ll give you a truly out of this
            world experience!
          </h4>
        </div>

        <div className={`w-[50%] h-inherit flex itesms-center justify-center`}>
          <div className={`w-[25rem] h-[25rem] rounded-full hover:bg-[#ffffff1a] ease text-black flex items-center justify-center`}>
            <div className={`text-black w-[20rem] h-[20rem] rounded-full ease flex items-center justify-center bg-white uppercase`}>
              <h1 className = {`text-4xl text-black tracking-[2px] fomt-times font-light`}>Explore</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default Home
