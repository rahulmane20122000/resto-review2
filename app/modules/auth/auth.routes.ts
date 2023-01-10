import { Router } from "express";
import { createToken } from "./auth.service";

const router = Router();

router.post("/login", createToken);
export default router;
