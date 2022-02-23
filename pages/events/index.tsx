import EventItem from '@/components/EventItem'
import { Layout } from '@/components/Layout'
import { URL_API } from 'config'
import { IEvents } from 'model'
import { GetStaticProps, NextPage } from 'next'

interface IHome {
  events: Array<IEvents>
}

const EventsPage: NextPage<IHome> = ({ events }) => {
  return (
    <Layout title="My Events">
      <div>
        <h1>Upcoming event</h1>
        {events.length === 0 && <h3>No events to show</h3>}

        {events.map((evt) => (
          <EventItem key={evt.id} evt={evt} />
        ))}
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${URL_API}/api/events`)
  const events = await res.json()
  return {
    props: { events },
    revalidate: 1,
  }
}

export default EventsPage
