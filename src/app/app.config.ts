import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router'
import { provideHttpClient } from '@angular/common/http'
import { routerConfig } from './router.module';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(),
    provideRouter(routerConfig),
    provideHttpClient()
  ]
};
