// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { events } from './data.json'

const handle = (req: NextApiRequest, res: NextApiResponse<any>) => {
  if (req.method === 'GET') {
    let filter = events.filter((item) => item.slug === req.query.slug)
    res.status(200).json(filter)
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).json({ message: `method ${req.method} is not allowed` })
  }
}

export default handle
