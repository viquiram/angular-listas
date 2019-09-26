import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCItemComponent } from './lista-c-item.component';

describe('ListaCItemComponent', () => {
  let component: ListaCItemComponent;
  let fixture: ComponentFixture<ListaCItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaCItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
