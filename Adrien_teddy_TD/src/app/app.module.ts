import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarreComponent } from './carre/carre.component';
import { CarreHGComponent } from './carre/carre-hg/carre-hg.component';
import { CarreHDComponent } from './carre/carre-hd/carre-hd.component';
import { CarreBDComponent } from './carre/carre-bd/carre-bd.component';
import { CarreBGComponent } from './carre/carre-bg/carre-bg.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CarreComponent,
    CarreHGComponent,
    CarreHDComponent,
    CarreBDComponent,
    CarreBGComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
