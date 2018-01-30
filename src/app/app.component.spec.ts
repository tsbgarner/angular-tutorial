import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let dom:any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    dom = fixture.nativeElement;
  }));
  test('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));
  test(`should have as title 'Test'`, async(() => {
    expect(component.title).toEqual('Test');
  }));
  test('should render title in a h1 tag', async(() => {
    fixture.detectChanges();
    expect(dom.querySelector('h1').textContent).toContain('Welcome to Test!');
  }));
});
