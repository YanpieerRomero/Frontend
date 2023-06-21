import { Component, OnDestroy, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-media-player',
    templateUrl: './media-player.component.html',
    styleUrls: ['./media-player.component.css'],
})
export class MediaPlayerComponent implements OnInit, OnDestroy {
    // mockCover!: TrackModel;
    @ViewChild('progressBar') progressbar: ElementRef = new ElementRef('');
    listObservers$: Array<Subscription> = [];
    state: string = 'paused';

    constructor(public multimediaService: MultimediaService) { }

    ngOnInit(): void {
        /*         const observer1$: Subscription = this.multimediaService.callback.subscribe({
                    next: (data: TrackModel) => {
                        console.log('Receiving song...', data);
                    },
                });
                this.listObservers$ = [observer1$];
        
                const observable1$ = this.multimediaService.myObservable1$
                    .subscribe({
                        next: (responseOk: any) => {
                            console.log('El agua llega perfecto!', responseOk);
                        },
                        error: (error: any) => {
                            console.error('Se tapo la tuberia!', error);
                        },
                        complete: () => {
                            console.info('Complete!');
                        }
                    });
        
                const observable2$ = this.multimediaService.myObservable2$
                    .subscribe({
                        next: (responseOk: any) => {
                            console.log('El agua llega perfecto!', responseOk);
                        },
                        error: (error: any) => {
                            console.error('Se tapo la tuberia!', error);
                        },
                        complete: () => {
                            console.info('Complete!');
                        }
                    });
        
                const observable3$ = this.multimediaService.myObservable3$
                    .subscribe({
                        next: (responseOk: any) => {
                            console.log('El agua llega perfecto!', responseOk);
                        },
                        error: (error: any) => {
                            console.error('Se tapo la tuberia!', error);
                        },
                        complete: () => {
                            console.info('Complete!');
                        }
                    }); */

        /*         this.multimediaService.trackInfo$.subscribe({
                    next: (data) => {
                        console.log('Debo reproducir esta cancion', data);
                        this.mockCover = data
                    }
                }) */

        const observer1$ = this.multimediaService.playerStatus$.subscribe({
            next: (status) => {
                console.log('status: ', status);
                this.state = status
            },
        })
        this.listObservers$ = [observer1$];
    }

    ngOnDestroy(): void {
        this.listObservers$.forEach(observer => observer.unsubscribe());
        console.log('BOOM!');
    }

    handlePosition(event: MouseEvent): void {
        const elNative: HTMLElement = this.progressbar.nativeElement
        const { clientX } = event;
        const { x, width } = elNative.getBoundingClientRect();
        const clickX = clientX - x;
        const percentageFromX = (clickX * 100) / width;
        console.log(`Click(x): ${percentageFromX}`);
        this.multimediaService.seekAudio(percentageFromX);        
    }
}
