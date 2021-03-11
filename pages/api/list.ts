import { NextApiHandler } from 'next'

const apps = {
  'app-shell': 'new-colors',
  'chief-app': 'new-colors',
}

const handler: NextApiHandler = (req, res) => {
  if (req.method === 'GET') {
    return res.status(200).json(apps)
  }
  return res.status(200).send('OK')
}

export default handler
