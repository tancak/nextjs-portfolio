import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let userData = await fetch('https://api.github.com/users/' + process.env.GH_USERNAME)
    .then(response => {
      if (!response.ok) {
        res.status(500);
      }
      return response.json()
    })
  
  res.status(200).json(userData);
}