import { Routes } from "@angular/router";

export const routerConfig: Routes = [
   {
      path: '',
      loadComponent:  () => import('./pages/voice/voice.component').then(m => m.VoiceComponent)
   }
]