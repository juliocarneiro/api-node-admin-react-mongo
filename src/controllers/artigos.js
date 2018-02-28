/**
 *
 * Arquivo: src/controllers/artigos.js
 * Description: Arquivo responsável por fazer a chamada das rotas do HTTP no
 * arquivo 'baseController.js'.
 *
 */

import BaseController from "./baseController";

class ArtigosController extends BaseController {
  constructor(Artigo, apiRoot) {
    super(apiRoot, Artigo);
  }
}

export default ArtigosController;
