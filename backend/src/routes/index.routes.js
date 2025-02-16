import { Router } from "express";
import flashCardController from "../controllers/flashCardController.js";

const router = Router()

//flashcard routes
router.get('/flashCard/random', (req, res, next) => flashCardController.getRandom(req, res, next))
router.get('/flashCard/:flashCardId?', (req,res, next) => flashCardController.getOneFlashCard(req, res, next))
router.post('/flashCard', (req, res, next) => flashCardController.createFlashCard(req, res, next))
router.delete('/flashCard/:flashCardId', (req, res, next) => flashCardController.deleteFlashCard(req, res, next))
router.patch('/flashCard/:flashCardId', (req, res, next) => flashCardController.updateFlashCard(req, res, next))


export default router