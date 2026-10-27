import * as dotenv from 'dotenv';
dotenv.config();

import { setupFastify } from './server/server';
import { log } from './libs/logger';

(async () => {
  const server = await setupFastify();

  const HOST = '0.0.0.0';
  try {
    await server.listen({
      port: 8080,
      host: HOST,
    });
    log.info('processor listening', { port: 8080, nodeVersion: process.version });
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
})();
