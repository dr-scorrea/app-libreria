import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosAddComponent } from './libros-add.component';

describe('LibrosAddComponent', () => {
  let component: LibrosAddComponent;
  let fixture: ComponentFixture<LibrosAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibrosAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibrosAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
