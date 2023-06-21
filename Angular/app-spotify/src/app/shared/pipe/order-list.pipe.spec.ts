import { OrderListPipe } from './order-list.pipe';
import * as mockRaw from '../../data/tracks.json';
import { TrackModel } from '@core/models/tracks.model';

describe('OrderListPipe', () => {
    it('create an instance', () => {
        const pipe = new OrderListPipe();
        expect(pipe).toBeTruthy();
    });

    it('Trying inputs and outputs of values', () => {
        //Arrange or Given
        const pipe = new OrderListPipe();
        const { data }: any = (mockRaw as any).default;

        //Act or When
        const result: TrackModel[] = pipe.transform(data);

        //Assert or Then
        expect(result).toEqual(data);
    });

    it('Trying if will order right way ASC', () => {
        //Arrange or Given
        const pipe = new OrderListPipe();
        const { data }: any = (mockRaw as any).default;
        const firstValue = data.find((i: any) => i._id === 7);
        const lastValue = data.find((i: any) => i._id === 6);

        //Act or When
        const result: TrackModel[] = pipe.transform(data, 'name', 'asc');
        const firstResult = result[0];
        const lastResult = result[result.length - 1];

        //Assert or Then
        expect(firstResult).toEqual(firstValue);
        expect(lastResult).toEqual(lastValue);
    })

    it('Trying if will order right way DESC', () => {
        //Arrange or Given
        const pipe = new OrderListPipe();
        const { data }: any = (mockRaw as any).default;
        const firstValue = data.find((i: any) => i._id === 7);
        const lastValue = data.find((i: any) => i._id === 6);

        //Act or When
        const result: TrackModel[] = pipe.transform(data, 'name', 'desc');
        const firstResult = result[0];
        const lastResult = result[result.length - 1];

        //Assert or Then
        expect(firstResult).toEqual(lastValue);
        expect(lastResult).toEqual(firstValue);
    })

});
