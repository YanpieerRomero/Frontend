import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Observable, catchError, map, mergeMap, of, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class TrackService {
    private readonly URL: string = environment.api;

    dataTracksTrending$: Observable<TrackModel[]> = of([]);
    dataTracksRandom$: Observable<TrackModel[]> = of();

    constructor(private http: HttpClient) { }

    /**
     * 
     * @returns all songs
     */
    getAllTracks$(): Observable<any> {
        return this.http.get<TrackModel[]>(`${this.URL}/tracks`, {
            headers: new HttpHeaders({ authorization: 'Bearer TOKEN' })
        })
            .pipe(
                map(({ data }: any) => {
                    return data;
                })
            );
    }

    /**
     * 
     * @returns random songs
     */
    getAllRandom$(): Observable<any> {
        return this.http.get<TrackModel[]>(`${this.URL}/tracks`)
            .pipe(
                tap(data => console.log('pipe before: ', data)),
                mergeMap(({ data }: any) => {
                    return this.skipById(data, 2);
                }),
                tap(data => console.log('pipe after: ', data)),
                catchError((err) => {
                    const { status, statusText } = err;
                    console.error('Something happened, check me!', [status, statusText]);
                    return of([]);
                })
            );
    }

    private skipById(listTracks: TrackModel[], id: number): Promise<TrackModel[]> {
        return new Promise((resolve, reject) => {
            const listTmp = listTracks.filter((track: TrackModel) => track._id !== id);
            resolve(listTmp);
        });
    }
}
