import express from "express";
import { findArticle } from "../controller/article.js";
import { findLinkYoutube } from "../controller/youtube.js";



const router = express.Router();
router.get("/article", findArticle);
router.get("/youtube", findLinkYoutube);

export default router;

