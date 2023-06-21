import { EventEmitter, Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { BehaviorSubject, Observable, Observer, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class MultimediaService {
    callback: EventEmitter<any> = new EventEmitter<any>();

    myObservable1$: Observable<any> = new Observable();
    myObservable2$: Subject<any> = new Subject();
    myObservable3$: BehaviorSubject<any> = new BehaviorSubject('flow!!!');

    public trackInfo$: BehaviorSubject<any> = new BehaviorSubject(undefined);
    public audio!: HTMLAudioElement;
    public timeElapsed$: BehaviorSubject<string> = new BehaviorSubject('00:00');
    public timeRemaining$: BehaviorSubject<string> = new BehaviorSubject('-00:00');
    public playerStatus$: BehaviorSubject<string> = new BehaviorSubject('paused');
    public playerPercentage$: BehaviorSubject<number> = new BehaviorSubject(0);

    constructor() {
        /*         this.myObservable1$ = new Observable((observer: Observer<any>) => {
                    observer.next('flow!');
        
                    setTimeout(() => {
                        observer.complete();
                    }, 1500);
        
                    setTimeout(() => {
                        observer.next('flow!');
                    }, 2500);
        
                    setTimeout(() => {
                        observer.error('flow!');
                    }, 3500);
                });
        
                setTimeout(() => {
                    this.myObservable2$.next('flow!!');
                }, 1000);
                
                setTimeout(() => {
                    this.myObservable2$.error('flow!!');
                }, 2500);
        
                setTimeout(() => {
                    this.myObservable3$.next('flow!!!');
                }, 1000);
                
                setTimeout(() => {
                    this.myObservable3$.error('flow!!!');
                }, 2500); */
        this.audio = new Audio();
        this.trackInfo$.subscribe({
            next: (responseOK) => {
                if (responseOK) {
                    this.setAudio(responseOK);
                }
            }
        })
        this.listenAllEvents();
    }

    public setAudio(track: TrackModel): void {
        console.log('--->', track);
        this.audio.src = track.url;
        this.audio.play();
    }

    public togglePlayer(): void {
        (this.audio.paused) ? this.audio.play() : this.audio.pause();
    }

    public seekAudio(percentage: number): void {
        const { duration } = this.audio;
        const percentageToSecond = (duration * percentage) / 100;
        console.log(`Song duration: ${duration}, Percentage: ${percentage}, Percentage to second: ${percentageToSecond}`);
        this.audio.currentTime = percentageToSecond;
        
    }

    private listenAllEvents(): void {
        this.audio.addEventListener('timeupdate', this.calculateTime, false);
        this.audio.addEventListener('playing', this.setPlayerStatus, false);
        this.audio.addEventListener('play', this.setPlayerStatus, false);
        this.audio.addEventListener('pause', this.setPlayerStatus, false);
        this.audio.addEventListener('ended', this.setPlayerStatus, false);
    }

    private setPlayerStatus = (state: any) => {
        console.log('State: ', state);
        switch (state.type) {
            case 'play':
                this.playerStatus$.next('play');
                break;
            case 'playing':
                this.playerStatus$.next('playing');
                break;
            case 'ended':
                this.playerStatus$.next('ended');
                break;
            default:
                this.playerStatus$.next('paused');
                break;
        }
    }

    private calculateTime = () => {
        console.log('Disparando evento');
        const { duration, currentTime } = this.audio;
        // console.table([duration, currentTime]);
        this.setTimeElapsed(currentTime);
        this.setRemaining(currentTime, duration);
        this.setPercentage(currentTime, duration);
    }

    private setTimeElapsed(currentTime: number): void {
        let seconds = Math.floor(currentTime % 60);
        let minutes = Math.floor((currentTime / 60) % 60);

        const displaySeconds = (seconds < 10) ? `0${seconds}` : seconds;
        const displayMinutes = (minutes < 10) ? `0${minutes}` : minutes;
        const displayFormat = `${displayMinutes}:${displaySeconds}`;

        this.timeElapsed$.next(displayFormat);
    }

    private setRemaining(currentTime: number, duration: number): void {
        let timeLeft = duration - currentTime;
        let seconds = Math.floor(timeLeft % 60);
        let minutes = Math.floor((timeLeft / 60) % 60);

        const displaySeconds = (seconds < 10) ? `0${seconds}` : seconds;
        const displayMinutes = (minutes < 10) ? `0${minutes}` : minutes;
        const displayFormat = `-${displayMinutes}:${displaySeconds}`;

        this.timeRemaining$.next(displayFormat);
    }

    private setPercentage(currentTime: number, duration: number): void {
        let percentage = (currentTime * 100) / duration;
        this.playerPercentage$.next(percentage);
    }

}
