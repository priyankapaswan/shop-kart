import { Component } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';
import { Contact } from 'src/app/model/contact';

@Component({
  selector: 'app-news-letter',
  templateUrl: './news-letter.component.html',
  styleUrls: ['./news-letter.component.css']
})
export class NewsLetterComponent {

  public contact!: Contact;

  constructor(private apiService: ApiServiceService) {
    this.contact = new Contact();
  }

  onSubmit() {
    if (this.isValid()) {
      var id = this.apiService.saveContact(this.contact);
      alert("Subscription saved with ID " + id);
      this.contact = new Contact();
    }
  }

  isValid(): Boolean {
    if (this.contact.name.length == 0) {
      alert("Name cannot be empty");
      return false;
    }
    if (this.contact.email.length == 0) {
      alert("Email cannot be empty");
      return false;
    }
    if (this.contact.message.length == 0) {
      alert("Message cannot be empty");
      return false;
    }
    return true;
  }

}
