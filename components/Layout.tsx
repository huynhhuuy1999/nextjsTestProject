import Head from 'next/head'
import styles from '../styles/Layout.module.css'
import Footer from './Footer'
import Header from './Header'

interface ILayout {
  title?: string
  description?: string
  keywords?: string
}
export const Layout: React.FC<ILayout> = ({ title, description, children, keywords }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
