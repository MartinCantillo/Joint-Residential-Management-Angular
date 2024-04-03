import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CRegistrarseComponent } from './cregistrarse.component';

describe('CRegistrarseComponent', () => {
  let component: CRegistrarseComponent;
  let fixture: ComponentFixture<CRegistrarseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CRegistrarseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CRegistrarseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
