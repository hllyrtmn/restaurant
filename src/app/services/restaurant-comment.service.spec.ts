import { TestBed } from '@angular/core/testing';

import { RestaurantCommentService } from './restaurant-comment.service';

describe('RestaurantCommentService', () => {
  let service: RestaurantCommentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestaurantCommentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
