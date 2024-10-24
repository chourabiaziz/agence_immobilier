import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  isSearchVisible: boolean = false;

  // Method to toggle the visibility of the search form
  toggleSearch() {
    this.isSearchVisible = !this.isSearchVisible;
  }

  // Method to handle form submission
  onSubmit(formValues: any) {
    console.log(formValues);  // Log or handle the form values
    // You can navigate to search results or filter properties here
  }
}
