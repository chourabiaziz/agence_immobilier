import { Injectable } from '@angular/core';
import { Immobilier } from '../model/Immobilier';
 

@Injectable({
  providedIn: 'root'
})
export class Data {

    properties: Immobilier[] = [
        {
          id: 1134,
          title: '204 Mount Olive Road Two',
          location: 'Chicago, IL 606543',
          propertyType: 'House',
          status: 'Sale',
          description: 'A beautiful house located in the heart of Chicago. It features modern architecture, spacious living areas, and a gorgeous backyard.',
          price: 450000,
          rent: false,
          area: 340,
          beds: 4,
          baths: 2,
          garages: '1',
          imageUrl: 'assets/img/property-1.jpg'
        },
        {
          id: 1135,
          title: 'Luxury Apartment Downtown',
          location: 'New York, NY 10001',
          propertyType: 'Apartment',
          status: 'Rent',
          description: 'A luxurious apartment in the heart of downtown New York, offering stunning views and high-end finishes. Perfect for city living.',
          price: 3000,
          rent: true,
          area: 120,
          beds: 2,
          baths: 2,
          garages: '0',
          imageUrl: 'assets/img/property-2.jpg'
        },
        {
          id: 1136,
          title: 'Cozy Cottage by the Lake',
          location: 'Lake Tahoe, CA 96150',
          propertyType: 'Cottage',
          status: 'Sale',
          description: 'A charming cottage located by the serene Lake Tahoe, featuring a rustic design and beautiful nature views. Ideal for a getaway.',
          price: 650000,
          rent: false,
          area: 180,
          beds: 3,
          baths: 1,
          garages: '1',
          imageUrl: 'assets/img/property-3.jpg'
        },
        {
          id: 1137,
          title: 'Modern Townhouse in Suburb',
          location: 'Austin, TX 78701',
          propertyType: 'Townhouse',
          status: 'Rent',
          description: 'A modern townhouse in a quiet suburb of Austin, featuring an open floor plan, contemporary finishes, and a community pool.',
          price: 2500,
          rent: true,
          area: 200,
          beds: 3,
          baths: 2,
          garages: '2',
          imageUrl: 'assets/img/property-4.jpg'
        }
      ];
  constructor() { }

}
