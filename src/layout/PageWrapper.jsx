import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
export default function PageWrapper({ title, noNav, noFooter, children }) {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
      }}
    >
      <Helmet>
        <title>{title ? title + '- cinefleex!' : 'CineFleex!'}</title>
        <meta charSet='utf-8' />
      </Helmet>
      {!noNav && <Navbar />}
      <>{children}</>
      {!noFooter && <Footer />}
    </div>
  )
}
