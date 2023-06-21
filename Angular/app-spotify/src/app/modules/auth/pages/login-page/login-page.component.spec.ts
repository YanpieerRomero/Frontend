import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageComponent } from './login-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('LoginPageComponent', () => {
    let component: LoginPageComponent;
    let fixture: ComponentFixture<LoginPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
                ReactiveFormsModule],
            declarations: [LoginPageComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(LoginPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    //Primer enunciado que debe asegurar lo siguiente
    //Debe de asegurarse que el formulario sea invalido cuando se ingrese datos erroneos
    //Patron AAA
    it('should return the invalidate form', () => {
        // Arrange or Given
        const mockCredentials = {
            email: '0x0x0x0x0x0',
            password: '111111111111111111111111'
        }

        const emailForm: any = component.formLogin.get('email');
        const passwordForm: any = component.formLogin.get('password');

        // Act or When
        emailForm.setValue(mockCredentials.email);
        passwordForm.setValue(mockCredentials.password);

        // Assert or Then
        expect(component.formLogin.invalid).toEqual(true);
    });

    it('should return the validate form', () => {
        // Arrange or Given
        const mockCredentials = {
            email: 'test@test.com',
            password: '12345678'
        }

        const emailForm: any = component.formLogin.get('email');
        const passwordForm: any = component.formLogin.get('password');

        // Act or When
        emailForm.setValue(mockCredentials.email);
        passwordForm.setValue(mockCredentials.password);

        // Assert or Then
        expect(component.formLogin.invalid).toEqual(false);
    });

    it('The button should have the word "Iniciar sesión"', () => {
        
        const elementRef = fixture.debugElement.query(By.css('.form-action button'));
        const getInnerText = elementRef.nativeElement.innerText;

        expect(getInnerText).toEqual('Iniciar sesión');
    })
});
