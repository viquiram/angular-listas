import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAComponent } from './lista-a.component';

describe('ListaAComponent', () => {
  let component: ListaAComponent;
  let fixture: ComponentFixture<ListaAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
