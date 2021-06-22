import { MomentPipe } from './shared/moment.pipe';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectorComponent } from './selector/selector.component';
import { CalendarComponent } from './calendar/calendar.component';
import { PopupComponent } from './popup/popup.component';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './app.reducer';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';
import { MenuComponent } from './menu/menu.component';
import { CalendarPageComponent } from './calendar-page/calendar-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectorComponent,
    CalendarComponent,
    PopupComponent,
    MomentPipe,
    HeaderComponent,
    LogoComponent,
    MenuComponent,
    CalendarPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ ui: appReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
