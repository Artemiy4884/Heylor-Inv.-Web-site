import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  pages: { title: string, url: string, fragment?: string }[] = [
    { title: 'Home', url: '/main' },
    { title: 'About', url: '/about' },
    { title: 'Activities', url: '/activities' },
    { title: 'Contact', url: '/contact' }
  ];
}
