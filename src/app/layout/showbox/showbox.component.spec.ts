import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBoxComponent } from './showbox.component';

describe('ShowboxComponent', () => {
  let component: ShowBoxComponent;
  let fixture: ComponentFixture<ShowBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
