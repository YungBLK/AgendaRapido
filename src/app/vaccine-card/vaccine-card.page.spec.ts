import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VaccineCardPage } from './vaccine-card.page';

describe('VaccineCardPage', () => {
  let component: VaccineCardPage;
  let fixture: ComponentFixture<VaccineCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaccineCardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VaccineCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
