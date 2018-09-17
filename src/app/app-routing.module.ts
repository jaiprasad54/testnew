import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactSearchComponent } from './contact-search/contact-search.component';
import { PageNotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
  { path: '',  redirectTo: '/contact-search', pathMatch: 'full' },
  { path: 'contact-search', component: ContactSearchComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
     RouterModule.forRoot(
      appRoutes,
      {
        //enableTracing: true, // <-- debugging purposes only
      }
    )
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
