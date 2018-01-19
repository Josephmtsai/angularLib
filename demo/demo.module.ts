import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularLibDemoModule } from '../src';
import { DemoComponent } from './demo.component';

@NgModule({
  declarations: [DemoComponent],
  imports: [BrowserModule, AngularLibDemoModule.forRoot()],
  bootstrap: [DemoComponent]
})
export class DemoModule {}
