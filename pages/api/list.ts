import { NextApiHandler } from 'next'

const apps = {
  'app-shell': '509ad4e3a19cb41f6dc14a9b83c9e4c042a40fea',
  'chief-app': 'ea9abe2311f4a160048b06d57e38ff20526f40d1',
}

const handler: NextApiHandler = (req, res) => {
  if (req.method === 'GET') {
    return res.status(200).json(apps)
  }
  return res.status(200).send('OK')
}

export default handler
