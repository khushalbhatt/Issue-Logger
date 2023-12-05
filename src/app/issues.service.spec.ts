import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { IssuesService } from './issues.service';

describe('IssuesService', () => {
  let service: IssuesService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let issueService: IssuesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        IssuesService
      ],
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    issueService = TestBed.inject(IssuesService);
  });

});
