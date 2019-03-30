import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoEntryProductComponent } from './po-entry-product.component';

describe('PoEntryProductComponent', () => {
  let component: PoEntryProductComponent;
  let fixture: ComponentFixture<PoEntryProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoEntryProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoEntryProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
