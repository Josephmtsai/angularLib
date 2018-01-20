import { Component } from '@angular/core';
import { LocationService } from './apiService';
@Component({
    selector: 'map-location',
    templateUrl: './src/componentTemplate/mapLocation.html',
    providers: [LocationService]
  })
  export class mapLocationComponent {
    constructor(private location: LocationService) { }
    ngOnInit(): void {
        this.location.getLocationList();
    }
  }
  