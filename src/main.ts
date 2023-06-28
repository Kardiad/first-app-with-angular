import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

/**
 * Aquí está puesto para que se cree en web, pero en principio cambiando esta 
 * línea puedes hacer una aplicación para lo que sea.
 */

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
