import Head from 'next/head'
import styles from '@/styles/Layout.module.css'
import Footer from './Footer'
import Header from './Header'
import { useRouter } from 'next/router'
import Showcase from './Showcase'

interface ILayout {
  title?: string
  description?: string
  keywords?: string
}
export const Layout: React.FC<ILayout> = ({
  title = 'title',
  description = 'desciption',
  children,
  keywords = 'music, game',
}) => {
  const route = useRouter()
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      {route.pathname === '/' && <Showcase />}
      {children}
      <Footer />
    </div>
  )
}
