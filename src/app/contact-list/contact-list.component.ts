import { Component } from '@angular/core';

import { Contact } from '../models/contact.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
})
export class ContactListComponent {
  contacts: Contact[] = [
    { name: 'Danila', phone: '+7 (908) 459-82-99' },
    { name: 'Igor', phone: '+7 (911) 422-88-55' },
  ];

  onAddContact(contact: Contact) {
    this.contacts.push(contact);
  }
}
