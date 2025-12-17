import { Router } from "express";
import { promo } from "../controllers/promo.controller.js";

const index = Router();
index.route("/promo").post(promo);
export default index;
