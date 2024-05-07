import { expect, type Locator, type Page } from '@playwright/test';
import { SignUpButton } from '../components/signUpButton';
import { incorrectLenght, incorrectName } from '../test-data/credentials';


export class SignUpForm {
    readonly page: Page;
    readonly emailField: Locator;
    readonly nameField: Locator;
    readonly lastnameField: Locator;
    readonly passwordField: Locator;
    readonly repasswordField: Locator;
    readonly registerButton: Locator;
    readonly errorMessageBox: Locator;
    readonly errorMessageColor: Locator;
    // readonly errorMessageName: Locator;
    // readonly errorMessageNameLenght: Locator;
    // readonly errorMessageLastName: Locator;
    // readonly errorMessageEmail: Locator;
    // readonly errorMessagePassword: Locator;
    // readonly errorMessageRePassword: Locator;
    readonly formHeader: Locator;

    constructor(page: Page) {
        this.page = page;
        this.nameField = page.locator('#signupName');
        this.lastnameField = page.locator('#signupLastName');
        this.emailField = page.getByLabel('Email');
        this.passwordField = page.getByLabel('Password');
        this.registerButton = page.locator('button', { hasText: 'Register' });
        this.errorMessageBox = page.locator('.invalid-feedback');
        this.errorMessageColor = page.locator('.invalid-feedback');
        this.formHeader = page.getByText('Sign up');
    }

    async open() {
        const signUpButton = new SignUpButton(this.page); 
        await signUpButton.clickSignUpButton();
        await expect(this.formHeader).toBeVisible();


    }

    async registerFailNameEmptyWithCredentials() {
        await this.nameField.focus();
        await this.nameField.blur();
    }

    async registerFailNameWithCredentials(incorrectName: string) {
        await this.nameField.focus();
        await this.nameField.fill(incorrectName);
        await this.nameField.blur();
    }

    async registerWrongLength(incorrectLenght: string){
        await this.nameField.focus();
        await this.nameField.fill(incorrectLenght);
        await this.nameField.blur();
    }

    async registerWrongLengthLong(incorrectLenghtLong: string){
        await this.nameField.focus();
        await this.nameField.fill(incorrectLenghtLong);
        await this.nameField.blur();
    }

    async checkInputBorderColorById(id: string, color: string) {
        const input = this.page.locator(`#${id}`);
        await expect(input).toHaveCSS('border-color', color);
    }

    async registerFailLastNameEmptyWithCredentials() {
        await this.lastnameField.focus();
        await this.lastnameField.blur();
    }

    async registerFailLastNameWithCredentials(incorrectLastName: string) {
        await this.lastnameField.focus();
        await this.lastnameField.fill(incorrectLastName);
        await this.lastnameField.blur();
    }

    async registerWrongLengthLastName(incorrectLenght: string){
        await this.lastnameField.focus();
        await this.lastnameField.fill(incorrectLenght);
        await this.lastnameField.blur();
    }


}