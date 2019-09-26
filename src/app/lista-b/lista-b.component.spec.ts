import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaBComponent } from './lista-b.component';

describe('ListaBComponent', () => {
  let component: ListaBComponent;
  let fixture: ComponentFixture<ListaBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
