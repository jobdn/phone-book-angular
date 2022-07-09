import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'app-add-contact-form',
  templateUrl: './add-contact-form.component.html',
  styles: [
    `
      input.ng-touched.ng-invalid {
        border: solid red 2px;
      }
      input.ng-touched.ng-valid {
        border: solid green 2px;
      }
    `,
  ],
})
export class AddContactFormComponent {
  @Output() contactEventEmiter: EventEmitter<Contact> =
    new EventEmitter<Contact>();

  name: string = '';
  phone: string = '';
  isShow: boolean = false;

  openForm() {
    this.isShow = true;
  }

  closeFrom() {
    this.isShow = false;
  }

  createContact() {
    const newContact: Contact = {
      name: this.name,
      phone: this.phone,
    };

    this.contactEventEmiter.emit(newContact);

    this.name = '';
    this.phone = '';
    this.isShow = false;
  }
}
