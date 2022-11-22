import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { user } = req.query;
  let userData = await fetch('https://api.github.com/users/' + user)
    .then(response => {
      if (!response.ok) {
        res.status(500);
      }
      return response.json()
    })
  
  res.status(200).json(userData);
}