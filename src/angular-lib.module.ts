import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloWorldComponent } from './hello-world.component';
import { mapLocationComponent } from './mapLocation.component';
import { LocationService } from './apiService';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [HelloWorldComponent,mapLocationComponent],
  imports: [CommonModule,HttpModule ],
  exports: [HelloWorldComponent,mapLocationComponent],
  providers: [LocationService]
})
export class AngularLibModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AngularLibModule
    };
  }
}
