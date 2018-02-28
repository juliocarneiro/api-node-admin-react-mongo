/**
 *
 * Arquivo: src/config/database.js
 * Description: Arquivo responsável pela configuração do banco de dados.
 *
 */

import mongoose from "mongoose";

mongoose.Promise = Promise;

const mongodbUrl =
  process.env.MONGODB_URL || "mongodb://admin:admin@ds247698.mlab.com:47698/brride";

const connect = () =>
  mongoose.connect(mongodbUrl);

export default { connect };
