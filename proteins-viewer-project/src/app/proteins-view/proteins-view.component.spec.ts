import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProteinsViewComponent } from './proteins-view.component';

describe('ProteinsViewComponent', () => {
  let component: ProteinsViewComponent;
  let fixture: ComponentFixture<ProteinsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProteinsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProteinsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
