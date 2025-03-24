import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { FormsModule } from '@angular/forms'; // Import FormsModule for child components using ngModel
import { MainContainerComponent } from './maincontainer.component';
import { InputContainerComponent } from '../inputcontainer/inputcontainer.component';
import { ShowBoxComponent } from '../showbox/showbox.component';

describe('MainContainerComponent', () => {
  let component: MainContainerComponent;
  let fixture: ComponentFixture<MainContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MainContainerComponent,
        InputContainerComponent, // Declare child component
        ShowBoxComponent, // Declare child component
      ],
      imports: [HttpClientModule, FormsModule], // Import HttpClientModule and FormsModule
    }).compileComponents();

    fixture = TestBed.createComponent(MainContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
