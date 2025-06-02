import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedUi } from './shared-ui';

describe('SharedUi', () => {
  let component: SharedUi;
  let fixture: ComponentFixture<SharedUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedUi],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedUi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
