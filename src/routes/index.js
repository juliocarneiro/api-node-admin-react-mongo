/**
 *
 * Arquivo: src/routes/index.js
 * Description: Arquivo responsável por carregar todas as rotas da app.
 *
 */

import express from "express";
import RouterHandler from "./routerHandler";

import ArtigosController from '../controllers/artigos';
import Artigo from '../models/artigo';

const router = express.Router();

// para adicionar rotas para novos controllers, só adicionar os 
// controllers no array abaixo
const controllers = [new ArtigosController(Artigo, '/posts')];
const routerHandler = new RouterHandler(router, controllers);
routerHandler.registerRoutes();

router.get("/", (req, res) =>
  res.json({ message: "Bem Vindo(a) a API Brasil Ride!" })
);

export default router;
