import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedUiComponent } from './shared-ui.component';

describe('SharedUiComponent', () => {
  let component: SharedUiComponent;
  let fixture: ComponentFixture<SharedUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
