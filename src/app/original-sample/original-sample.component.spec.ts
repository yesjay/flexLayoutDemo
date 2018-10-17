import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OriginalSampleComponent } from './original-sample.component';

describe('OriginalSampleComponent', () => {
  let component: OriginalSampleComponent;
  let fixture: ComponentFixture<OriginalSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OriginalSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OriginalSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
