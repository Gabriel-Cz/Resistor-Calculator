import express, { Request, Response } from 'express'
import { Colors } from '../models/colors'

const router = express.Router()

router.get('/colors', async (req: Request, res: Response) => {
  try {
    const data = await Colors.find({ name: 'extraColors' });
    return res.status(200).send(data[0]);
  } catch (error) {
    throw new Error(error as any)
  }
})

export default router;