import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputContainerComponent } from './inputcontainer.component';
import { WordsService } from '../../services/words.service';

describe('InputContainerComponent', () => {
  let component: InputContainerComponent;
  let fixture: ComponentFixture<InputContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputContainerComponent],
      imports: [FormsModule, HttpClientModule],
      providers: [WordsService],
    }).compileComponents();

    fixture = TestBed.createComponent(InputContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
