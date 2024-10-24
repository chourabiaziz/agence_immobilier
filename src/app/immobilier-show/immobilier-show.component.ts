import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Immobilier } from '../model/Immobilier';
import { Data } from '../services/data';

@Component({
  selector: 'app-immobilier-show',
  templateUrl: './immobilier-show.component.html',
  styleUrls: ['./immobilier-show.component.css']
})
export class ImmobilierShowComponent implements OnInit {
  // Assuming you want a single immobilier object for the view
  immobilier: Immobilier | undefined;

  constructor(private activatedRoute: ActivatedRoute, private dataService: Data) {}

  ngOnInit(): void {
    // Subscribe to route parameters
    this.activatedRoute.params.subscribe(params => {
      const id = +params['id'];  // Convert to number
      if (id) {
        this.filterImmobilierById(id);
      }
    });
  }

  private filterImmobilierById(id: number): void {
    const found = this.dataService.properties.find(immobilier => immobilier.id === id);
    
    if (found) {
      this.immobilier = found;  // Store the found immobilier
    } else {
      console.error(`No property found with ID: ${id}`);
      this.immobilier = undefined; // Handle case where no property is found
    }
  }
}
