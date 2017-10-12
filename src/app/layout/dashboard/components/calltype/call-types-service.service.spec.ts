import { TestBed, inject } from '@angular/core/testing';

import { CallTypesServiceService } from './call-types-service.service';
import {HttpClientModule} from "@angular/common/http";

describe('CallTypesServiceService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports : [
                HttpClientModule
            ],
            providers: [CallTypesServiceService]
    });
    });

    it('should be created', inject([CallTypesServiceService], (service: CallTypesServiceService) => {
        expect(service).toBeTruthy();
    }));
});
