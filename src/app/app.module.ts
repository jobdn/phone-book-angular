import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { IMaskModule } from 'angular-imask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { AddContactFormComponent } from './contact-list/add-contact-form/add-contact-form.component';
import { ContactComponent } from './contact-list/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactListComponent,
    AddContactFormComponent,
    ContactComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, IMaskModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
