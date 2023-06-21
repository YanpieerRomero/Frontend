import { Component, OnInit } from '@angular/core';
import { SearchService } from '@modules/history/services/search.service';
import { Observable, of } from 'rxjs';

@Component({
    selector: 'app-history-page',
    templateUrl: './history-page.component.html',
    styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent implements OnInit {
    listResults$: Observable<any> = of([]);

    constructor(private searchService: SearchService) { }

    ngOnInit(): void {
        // TODO document why this method 'ngOnInit' is empty
    }

    receiveData(event: string): void {
        console.log('I am in the father!!', event);
        /* this.searchService.searchTracks$(event).subscribe({
            next: ({ data }) => {
                console.log('------', data);
                this.listResults$ = data;
            }
        }); */
        this.listResults$ = this.searchService.searchTracks$(event);
    }
}
