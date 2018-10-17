import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexLayoutSampleComponent } from './flex-layout-sample.component';

describe('FlexLayoutSampleComponent', () => {
  let component: FlexLayoutSampleComponent;
  let fixture: ComponentFixture<FlexLayoutSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexLayoutSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexLayoutSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
