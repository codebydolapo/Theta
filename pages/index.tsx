import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/index.module.css'
import { useEffect, useState } from 'react'
import Intro from '../components/Intro'




const Home: NextPage = () => {


  return (
    <div className={` h-[100vh] w-[100vw] font-opensans flex flex-col justify-end items-center relative ${styles.home_main}`}>
      <Head>
        <title>Theta | Home</title>
        <meta name="description" content="Theta: CodeByDolapo" />
        <link rel="icon" href="/icons/logo.png" />
      </Head>

      <div className={`w-full h-full ${styles.backdrop}`}>

        <Intro />

      </div>

    </div>
  );

}

export default Home
