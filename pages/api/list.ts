import { NextApiHandler } from 'next'

const apps = {
  'app-shell': '642918d901432ea54fda589fe36f0ede1029984a',
  'chief': '33d61fc4bcceee09bae14ca962dfa39ba611d1c7',
  'hall-of-forms': '44b1cf0a1cc1b057852bb7b38d2fe478ea703226',
  'integrations-panel': '9c06ceae9ecc9047407b38c4e701bc57769c2bfd',
  'paprikations': '1987ffd8d0793cbb4fbc266e3a8f80202e99f76d',
}

const handler: NextApiHandler = (req, res) => {
  if (req.method === 'get') {
    return res.send(apps)
  }

  return res.send({ ok: true })
}

export default handler
