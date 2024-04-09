import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Rick-and-Morty';

  constructor(private router: Router) { }

  navigateForm(url: string): void {
    console.log("url",url);
    
    this.router.navigate([url]);
  }
}
