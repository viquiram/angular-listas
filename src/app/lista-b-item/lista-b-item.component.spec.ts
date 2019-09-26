import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaBItemComponent } from './lista-b-item.component';

describe('ListaBItemComponent', () => {
  let component: ListaBItemComponent;
  let fixture: ComponentFixture<ListaBItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaBItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaBItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
