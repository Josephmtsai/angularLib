import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expect } from 'chai';
import { HelloWorldComponent } from '../src/hello-world.component';
import { AngularLibModule } from '../src';

describe('directive-hello-world component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AngularLibModule.forRoot()]
    });
  });

  it('should say hello world', () => {
    const fixture: ComponentFixture<
      HelloWorldComponent
    > = TestBed.createComponent(HelloWorldComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.innerHTML.trim()).to.equal(
      'Hello world from the angularLib module!'
    );
  });
});
