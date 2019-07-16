import { TestBed } from '@angular/core/testing';

import { BlackListService } from './black-list.service';
import { AngularFireDatabase } from '@angular/fire/database';

describe('BlackListService', () => {
  const afDB: Partial<AngularFireDatabase> = {};
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlackListService, {provide: AngularFireDatabase, useValue: afDB}]
    });
  });

  it('should be created', () => {
    const service: BlackListService = TestBed.get(BlackListService);
    expect(service).toBeTruthy();
  });
});
