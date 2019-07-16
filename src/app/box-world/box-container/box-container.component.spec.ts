import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxContainerComponent } from './box-container.component';
import { BoxItemComponent } from '../box-item/box-item.component';
import { PopUpService } from '@app/core/pop-up/pop-up.service';

describe('BoxContainerComponent', () => {
  let component: BoxContainerComponent;
  let fixture: ComponentFixture<BoxContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [ BoxContainerComponent, BoxItemComponent ],
      providers: [PopUpService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
