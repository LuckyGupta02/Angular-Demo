import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { Route } from '@angular/router';



platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
