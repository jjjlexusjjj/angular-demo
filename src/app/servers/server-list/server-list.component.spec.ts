import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerListComponent } from './server-list.component';
import { SharedModule } from '@app/shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { ServerComponent } from '../server/server.component';
import { ServerService } from '../server.service';
import { of } from 'rxjs';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PopUpService } from '@app/core/pop-up/pop-up.service';

describe('ServerListComponent', () => {
  let component: ServerListComponent;
  let fixture: ComponentFixture<ServerListComponent>;
  let serverServiceStub: Partial<ServerService> = {};
  let popUpServiceStub: Partial<PopUpService> = {};

  beforeEach(async(() => {

    serverServiceStub = {
      getServers: () => of([])
    };

    popUpServiceStub = {};

    TestBed.configureTestingModule({
      imports: [SharedModule, RouterTestingModule, NoopAnimationsModule],
      declarations: [ ServerListComponent, ServerComponent ],
      providers: [
        {provide: ServerService, useValue: serverServiceStub},
        {provide: PopUpService, useValue: popUpServiceStub}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
