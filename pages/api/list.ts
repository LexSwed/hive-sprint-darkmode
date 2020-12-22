import { NextApiHandler } from 'next'

const apps = {
  'app-shell': '61f403dbfbc060d0ffb9820f8bfa64ca9117ca16',
  'chief-app': '33d61fc4bcceee09bae14ca962dfa39ba611d1c7',
  'hall-of-forms': '557c63c8afeabdbd74d78df56d90fbb322f671a5',
  'integrations-panel': '02cbc0cdc638c1069930e07263ada08b008d5195',
  'paprikations': '1987ffd8d0793cbb4fbc266e3a8f80202e99f76d',
}

const handler: NextApiHandler = (req, res) => {
  if (req.method === 'GET') {
    return res.status(200).json(apps)
  }
  return res.status(200).send('OK')
}

export default handler
