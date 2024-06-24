import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginlayoutcomponentComponent } from './loginlayoutcomponent.component';

describe('LoginlayoutcomponentComponent', () => {
  let component: LoginlayoutcomponentComponent;
  let fixture: ComponentFixture<LoginlayoutcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginlayoutcomponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginlayoutcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
