import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackPageComponent } from './track-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SectionGenericComponent } from '@shared/components/section-generic/section-generic.component';

describe('TrackPageComponent', () => {
    let component: TrackPageComponent;
    let fixture: ComponentFixture<TrackPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            declarations: [
                TrackPageComponent,
                SectionGenericComponent
            ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(TrackPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
