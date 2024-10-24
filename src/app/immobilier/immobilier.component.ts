import { Component } from '@angular/core';
import { Immobilier } from '../model/Immobilier';
import { ActivatedRoute } from '@angular/router';
import { Data } from '../services/data';

@Component({
  selector: 'app-immobilier',
  templateUrl: './immobilier.component.html',
  styleUrls: ['./immobilier.component.css']
})





export class ImmobilierComponent {
     listImmobilier : Immobilier[] = [];
     searched: string = '';


  constructor(private activatedRoute: ActivatedRoute, private dataService: Data) {}
  ngOnInit() {
     this.listImmobilier = this.dataService.properties;    
 
     this.activatedRoute.params.subscribe(params => {
      const id = +params['id'];  
      if (id) {
        this.filterImmobilierById(id);
      }
    });
    

  }

  private filterImmobilierById(id: number): void {
     this.listImmobilier = this.dataService.properties.filter(immobilier => immobilier.id === id);
  }
}
