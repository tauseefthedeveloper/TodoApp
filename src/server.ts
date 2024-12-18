import { enableProdMode } from '@angular/core';
import { createServer } from 'http';
import { AppServerModule } from './app/app.server.module';
import { renderModule } from '@angular/platform-server';

enableProdMode();

const PORT = process.env.PORT || 4201;

createServer((req, res) => {
  renderModule(AppServerModule, {
    document: '<app-root></app-root>',
    url: req.url,
  }).then(html => {
    res.status(200).send(html);
  }).catch(err => {
    res.status(500).send(err);
  });
}).listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
