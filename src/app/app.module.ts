import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextFormatPipe } from './pipes/text-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TextFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule  // Add FormsModule to your imports to use ngModel directive in your templates
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
