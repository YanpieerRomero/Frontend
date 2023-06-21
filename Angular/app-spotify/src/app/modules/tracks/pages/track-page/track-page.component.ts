import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-track-page',
    templateUrl: './track-page.component.html',
    styleUrls: ['./track-page.component.css'],
})
export class TrackPageComponent implements OnInit, OnDestroy {
    tracksTrending: Array<TrackModel> = [];
    tracksRandom: Array<TrackModel> = [];
    listObservers: Array<Subscription> = [];

    constructor(private trackService: TrackService) {
        //
    }

    ngOnInit(): void {
        /* const { data }: any = (dataRaw as any).default;
        this.mockTracksList = data; */
        /*   const observer1$ = this.trackService.dataTracksTrending$.subscribe({
          next: (data) => {
            console.log('Tracks Trending', data);
            this.tracksTrending = data;
            this.tracksRandom = data;
          },
        });
    
        const observer2$ = this.trackService.dataTracksRandom$.subscribe({
          next: (data) => {
            console.log('Random song entering...', data);
            this.tracksRandom = [...this.tracksRandom, ...data];
          },
        });
    
        this.listObservers = [observer1$, observer2$]; */

        this.loadDataAll();
        this.loadDataRandom();
        // this.loadDataAllPromise();
    }

    loadDataAll(): void {
        this.trackService.getAllTracks$().subscribe({
            next: (data: TrackModel[]) => {
                console.log('Tracks Trending', data);
                this.tracksTrending = data;
            },
            error: (err) => {
                alert('Connetion error')
                console.error('Connetion error: ', err);
            }
        });
    }

    async loadDataAllPromise(): Promise<any> {
        this.tracksTrending = await this.trackService.getAllTracks$().toPromise();
        this.tracksRandom = await this.trackService.getAllRandom$().toPromise();
    }

    loadDataRandom(): void {
        this.trackService.getAllRandom$().subscribe({
            next: (data: TrackModel[]) => {
                console.log('Tracks Random', data);
                this.tracksRandom = data;
            },
            error: (err) => {
                console.error('Connetion error: ', err);
            }
        });
    }

    ngOnDestroy(): void {
        // this.listObservers.forEach((observer) => observer.unsubscribe());
    }
}
