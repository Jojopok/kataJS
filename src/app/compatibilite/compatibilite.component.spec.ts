import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompatibiliteComponent } from './compatibilite.component';

describe('CompatibiliteComponent', () => {
  let component: CompatibiliteComponent;
  let fixture: ComponentFixture<CompatibiliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompatibiliteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompatibiliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
