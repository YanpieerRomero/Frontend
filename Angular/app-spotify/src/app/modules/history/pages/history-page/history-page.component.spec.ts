import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryPageComponent } from './history-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SearchComponent } from '@modules/history/components/search/search.component';
import { PlayListBodyComponent } from '@shared/components/play-list-body/play-list-body.component';
import { OrderListPipe } from '@shared/pipe/order-list.pipe';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

describe('HistoryPageComponent', () => {
    let component: HistoryPageComponent;
    let fixture: ComponentFixture<HistoryPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
                RouterTestingModule,
                FormsModule
            ],
            declarations: [
                HistoryPageComponent,
                SearchComponent,
                PlayListBodyComponent,
                OrderListPipe
            ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(HistoryPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
