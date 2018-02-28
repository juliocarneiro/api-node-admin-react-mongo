/**
 *
 * Arquivo: src/models/artigo.js
 * Description: Arquivo responsável pelo modelo: 'Post'
 *
 */

import mongoose from "mongoose";

const ArtigoSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  subtitulo: { type: String, required: true },
  mensagem: { type: String, required: true }
});

const Artigo = mongoose.model("Artigo", ArtigoSchema);

export default Artigo;
