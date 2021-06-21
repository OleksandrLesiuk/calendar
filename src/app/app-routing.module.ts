import { FormPageComponent } from './form-page/form-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { CalendarPageComponent } from './calendar-page/calendar-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: CalendarPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'form', component: FormPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
