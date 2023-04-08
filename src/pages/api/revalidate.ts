import { NextApiRequest, NextApiResponse } from 'next'

const revalidateHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await res.revalidate('/about')
    res.status(200).json({ message: 'Revalidate success' })
  } catch (e: any) {
    console.log('Error: ', e.message)
    res.status(500).json({ message: e.message })
  }
}

export default revalidateHandler
