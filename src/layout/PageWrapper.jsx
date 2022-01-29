import { PageHeader } from 'antd'
import React from 'react'
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
export default function PageWrapper({ title, noNav, noFooter, children }) {
  const navigate = useNavigate()
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        background: '#0b010d',
      }}
    >
      <Helmet>
        <title>{title ? title + '- cinefleex!' : 'CineFleex!'}</title>
        <meta charSet='utf-8' />
      </Helmet>
      {/* {!noNav && <Navbar />} */}
      {/* <PageHeader
        className='site-page-header'
        onBack={() => navigate(-1)}
        title={title}
        subTitle='This is a subtitle'
      /> */}
      <>{children}</>
      {/* {!noFooter && <Footer />} */}
    </div>
  )
}
