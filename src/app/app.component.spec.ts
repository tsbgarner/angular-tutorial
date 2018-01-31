import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let dom: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [
        AppComponent,
        HeroesComponent,
        HeroDetailComponent
      ],
    }).compileComponents();
    
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    dom = fixture.nativeElement;
    fixture.detectChanges();
  });

  test('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));
  test(`should have as title 'Tour of Heroes'`, async(() => {
    expect(component.title).toEqual('Tour of Heroes');
  }));
  test('should render title in a h1 tag', async(() => {
    fixture.detectChanges();
    expect(dom.querySelector('h1').textContent).toContain(component.title);
  }));
});
