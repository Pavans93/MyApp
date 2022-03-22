import { TestBed } from '@angular/core/testing';

import { SocialGuard } from './social.guard';

describe('SocialGuard', () => {
    let guard: SocialGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        guard = TestBed.inject(SocialGuard);
    });

    it('should be created', () => {
        expect(guard).toBeTruthy();
    });
});
