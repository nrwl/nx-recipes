import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {HeaderComponent} from "@publishing-strategies-multiple-frameworks/client/ui/header";
import {FooterComponent} from "@publishing-strategies-multiple-frameworks/client/ui/footer";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, HeaderComponent, FooterComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
