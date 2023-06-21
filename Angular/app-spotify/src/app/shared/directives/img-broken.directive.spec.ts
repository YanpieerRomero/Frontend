import { Component, ElementRef } from '@angular/core';
import { ImgBrokenDirective } from './img-broken.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

//Necesita un componente de prueba
@Component({
    template: '<img class="testing-directive" appImgBroken [src]="srcMock" >'
})

class TestComponent {
    public srcMock: any = null;
}

//La prueba de ImgBroken es la siguiente
describe('ImgBrokenDirective', () => {
    let component: TestComponent;
    let fixture: ComponentFixture<TestComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                TestComponent,
                ImgBrokenDirective
            ]
        })

        fixture = TestBed.createComponent(TestComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    //Debera instanciarse correctamente
    it('should create an instance', () => {
        const mockElement = new ElementRef('');
        const directive = new ImgBrokenDirective(mockElement);
        expect(directive).toBeTruthy();
    });

    it('TestComponent should instance correctly', () => {
        expect(component).toBeTruthy();
    })

    it('Directive should change image for a base64', (done: DoneFn) => {
        //Arrange or Given
        const beforeImgElement = fixture.debugElement.query(By.css('.testing-directive')).nativeElement;
        const beforeImgSrc = beforeImgElement.src; //Tenemos la url antes de ser cvambiada por la directiva
        component.srcMock = undefined

        setTimeout(() => {

            const afterImgElement = fixture.debugElement.query(By.css('.testing-directive')).nativeElement;
            const afterImgSrc = afterImgElement.src;

            expect(afterImgSrc).toMatch(/\bdata:image\b/);
            done();
        }, 3000);

        //Act or When


        //Assert or Then
        
    })
});
