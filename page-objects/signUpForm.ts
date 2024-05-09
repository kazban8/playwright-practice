import { expect, type Locator, type Page } from '@playwright/test';
import { SignUpButton } from '../components/signUpButton';
import { incorrectLenght, incorrectName, incorrectPassword, incorrectRePassword } from '../test-data/credentials';


export class SignUpForm {
    readonly page: Page;
    readonly emailField: Locator;
    readonly nameField: Locator;
    readonly lastnameField: Locator;
    readonly passwordField: Locator;
    readonly repasswordField: Locator;
    readonly registerButtonDisable: Locator;
    readonly errorMessageBox: Locator;
    readonly errorMessageColor: Locator;
    readonly formHeader: Locator;
    readonly registerButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.nameField = page.locator('#signupName');
        this.lastnameField = page.locator('#signupLastName');
        this.emailField = page.locator('#signupEmail');
        this.passwordField = page.locator('#signupPassword');
        this.repasswordField = page.locator('#signupRepeatPassword');
        this.registerButton = page.locator('button', { hasText: 'Register' });
        this.errorMessageBox = page.locator('.invalid-feedback');
        this.errorMessageColor = page.locator('.invalid-feedback');
        this.registerButtonDisable = page.getByRole('button', { name: 'Register'});
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

    async registerFailEmailEmptyWithCredentials() {
    await this.emailField.focus();
    await this.emailField.blur();
    }

    async registerFaiEmailWithCredentials(incorrectEmail: string){
    await this.emailField.focus();
    await this.emailField.fill(incorrectEmail);
    await this.emailField.blur();
    }

    async registerFailPasswordEmptyWithCredentials() {
        await this.passwordField.focus();
        await this.passwordField.blur();
    }

    async registerFailPasswordWithCredentials() {
    await this.passwordField.focus();
    await this.passwordField.fill(incorrectPassword);
    await this.passwordField.blur();
    }


    async registerFailRePasswordEmptyWithCredentials() {
        await this.repasswordField.focus();
        await this.repasswordField.blur();
    }

    async registerFailRePasswordWithCredentials() {
    await this.repasswordField.focus();
    await this.repasswordField.fill(incorrectRePassword);
    await this.repasswordField.blur();
    }

    async isRegisterButtonDisabled(): Promise<boolean> {
        const registerButtonDisable = await this.registerButtonDisable;
        return await registerButtonDisable.isDisabled();
    }

    async registerUserWithCredentials(correctName: string, correctLastName: string, correctEmail: string, correctPassword: string, correctRePassword: string) {
        await this.nameField.focus();
        await this.nameField.fill(correctName);
        await this.nameField.blur();
        await this.lastnameField.focus();
        await this.lastnameField.fill(correctLastName);
        await this.lastnameField.blur();
        await this.emailField.focus();
        await this.emailField.fill(correctEmail);
        await this.emailField.blur();
        await this.passwordField.focus();
        await this.passwordField.fill(correctPassword);
        await this.passwordField.blur();
        await this.repasswordField.focus();
        await this.repasswordField.fill(correctRePassword);
        await this.repasswordField.blur();
        await this.registerButton.click();
    }


}