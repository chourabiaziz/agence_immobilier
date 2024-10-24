import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'; // Import NgForm to manage the form
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public router: Router) {} 
  searched: string = '';

  // Make Router available in the template

  
}
