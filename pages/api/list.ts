import { NextApiHandler } from 'next'

const apps = {
  'app-shell': '8033ee457ace4ebc10f05827c45e27ee315f6455',
  'chief-app': '33d61fc4bcceee09bae14ca962dfa39ba611d1c7',
  'hall-of-forms': '15eabe49cac4f541c08715046807da176d0f0f3d',
  'integrations-panel': '28b912d2d41c4332504244460e9b29199d0efcd3',
  'paprikations': '25f16a959745c847f68995513e28876d3fb3fbf6',
  'shareinguito': '7cbab525bde72876ce356a776f4203f6a0b6e261',
}

const handler: NextApiHandler = (req, res) => {
  if (req.method === 'GET') {
    return res.status(200).json(apps)
  }
  return res.status(200).send('OK')
}

export default handler
