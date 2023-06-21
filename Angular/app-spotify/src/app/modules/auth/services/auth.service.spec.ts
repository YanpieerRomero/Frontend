import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthService } from './auth.service';
import * as mockRaw from '../../../data/user.json';
import { of } from 'rxjs';

describe('AuthService', () => {
    let service: AuthService;
    let mockUser: any = (mockRaw as any).default;
    let httpClientSpy: { post: jasmine.Spy };

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule]
        });
        httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
        service = new AuthService(httpClientSpy as any);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    //Prueba del sendCredentials
    it('Should return an object with "data" and "tokenSession"',
        (done: DoneFn) => {
            // Arrange or Given
            const user: any = mockUser.userOk;
            const mockResponse = {
                data: {},
                tokenSession: '0x0x0x'
            };

            httpClientSpy.post.and.returnValue(
                of(mockResponse) // Ya es oservable
            );

            //Act or When
            service.sendCredentials(user.email, user.password).subscribe({
                next: (responseApi) => { //['data', 'tokenSession']
                    const getProperties = Object.keys(responseApi);
                    expect(getProperties).toContain('data');
                    expect(getProperties).toContain('tokenSession');
                    done();
                }
            });
        });

});
