import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPlayerComponent } from './card-player.component';
import { ImgBrokenDirective } from '@shared/directives/img-broken.directive';

describe('CardPlayerComponent', () => {
    let component: CardPlayerComponent;
    let fixture: ComponentFixture<CardPlayerComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                CardPlayerComponent,
                ImgBrokenDirective
            ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(CardPlayerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
