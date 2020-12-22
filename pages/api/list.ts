import { NextApiHandler } from 'next'

const apps = {
  'app-shell': '',
  'chief': '',
  'integrations-panel': '',
}

const handler: NextApiHandler = (req, res) => {
  if (req.method === 'get') {
    return res.send(apps)
  }

  return res.send({ ok: true })
}

export default handler
