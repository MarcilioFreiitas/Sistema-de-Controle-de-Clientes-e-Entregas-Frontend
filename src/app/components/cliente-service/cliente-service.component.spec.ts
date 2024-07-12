import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteServiceComponent } from './cliente-service.component';

describe('ClienteServiceComponent', () => {
  let component: ClienteServiceComponent;
  let fixture: ComponentFixture<ClienteServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClienteServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClienteServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
