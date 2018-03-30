import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuoteComponent } from './components/quote/quote.component';


@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [QuoteComponent],
  bootstrap: [ AppComponent]
})
export class AppModule { }
