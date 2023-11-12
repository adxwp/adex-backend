import { Request, Response, Router } from "express";
const router = Router();

// Get Home page.
router.get('/', (req: Request, res: Response) => res.send('Index ....') )

export default router