import EventItem from '@/components/EventItem'
import { Layout } from '@/components/Layout'
import { URL_API } from 'config'
import { IEvents } from 'model'
import type { GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'

interface IHome {
  events: Array<IEvents>
}

const Home: NextPage<IHome> = ({ events }) => {
  const router = useRouter()
  return (
    <Layout title="Home page">
      <h1>Upcoming event</h1>
      {events.length === 0 && <h3>No events to show</h3>}

      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}
      <button className="btn-secondary" onClick={() => router.push('/events')}>
        View all events
      </button>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${URL_API}/api/events`)
  const events = await res.json()
  return {
    props: { events: events.slice(3) },
    revalidate: 1,
  }
}

export default Home
