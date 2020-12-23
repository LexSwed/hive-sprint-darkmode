import { NextApiHandler } from 'next'

const apps = {
  'app-shell': 'd9a8a7450f96db5a7f9bc3d74f6cd02b95e9969c',
  'chief-app': '33d61fc4bcceee09bae14ca962dfa39ba611d1c7',
  'hall-of-forms': '15eabe49cac4f541c08715046807da176d0f0f3d',
  'integrations-panel': '28b912d2d41c4332504244460e9b29199d0efcd3',
  'paprikations': '25f16a959745c847f68995513e28876d3fb3fbf6',
}

const handler: NextApiHandler = (req, res) => {
  if (req.method === 'GET') {
    return res.status(200).json(apps)
  }
  return res.status(200).send('OK')
}

export default handler
