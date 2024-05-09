import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  pages: { title: string, url: string, fragment?: string }[] = [
    { title: 'Contacts', url: '/contacts' }
  ]
}
