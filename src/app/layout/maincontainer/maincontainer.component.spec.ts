import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContainerComponent } from './maincontainer.component';
import {InputContainerComponent} from '../inputcontainer/inputcontainer.component';
import {ShowBoxComponent} from '../showbox/showbox.component';

describe('MainContainerComponent', () => {
  let component: MainContainerComponent;
  let fixture: ComponentFixture<MainContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MainContainerComponent,
        InputContainerComponent,
        ShowBoxComponent
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
