import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosEditComponent } from './libros-edit.component';

describe('LibrosEditComponent', () => {
  let component: LibrosEditComponent;
  let fixture: ComponentFixture<LibrosEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibrosEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibrosEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
