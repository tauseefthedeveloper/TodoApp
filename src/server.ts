import { enableProdMode } from '@angular/core';
import { createServer } from 'http';
import { AppServerModule } from './app/app.server.module';
import { renderModule } from '@angular/platform-server';

enableProdMode();

const PORT = process.env.PORT || 4201;

const server = createServer((req, res) => {
  renderModule(AppServerModule, {
    document: '<app-root></app-root>',
    url: req.url,
  }).then(html => {
    res.status(200).send(html);
  }).catch(err => {
    res.status(500).send(err);
  });
});

// Export the server for use in Vercel
export const app = server; // Use `module.exports = { app: server };` for CommonJS
