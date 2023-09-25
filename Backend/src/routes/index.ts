import express, { Request, Response } from 'express';
import resistorRoutes from './resistor';

const router = express.Router();

router.get('/status', (req: Request, res: Response) => {
  res.status(200).json({ status: 'ok' });
});

router.use('/resistor', resistorRoutes);

export default router;
