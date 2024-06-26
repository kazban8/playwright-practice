import { test, expect } from '@playwright/test';
import { SignUpButton } from '../components/signUpButton';
import { SignUpForm } from '../page-objects/signUpForm';
import { incorrectName, incorrectLastName, incorrectEmail, incorrectPassword, incorrectRePassword, correctEmail, correctLastName, correctName, correctPassword, correctRePassword, incorrectLenght, incorrectLenghtLong } from '../test-data/credentials';

test.describe('Field "Name - POM"', () => {

    let signUpForm: SignUpForm;

    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        signUpForm = new SignUpForm(page);
    })
    test('Empty field - "Name is required"', async ({ page }) => {
        await signUpForm.open();
        await signUpForm.registerFailNameEmptyWithCredentials()
        await expect(signUpForm.errorMessageBox).toHaveText('Name required');
    });

    test('Wrong data - "Name is invalid"', async ({ page }) => {
        await signUpForm.open();
        await signUpForm.registerFailNameWithCredentials(incorrectName)
        await expect(signUpForm.errorMessageBox).toHaveText('Name is invalid');

    });

    test('Wrong length, if < 2 - "Name has to be from 2 to 20 characters long"', async ({ page }) => {
        await signUpForm.open();
        await signUpForm.registerWrongLength(incorrectLenght)
        await expect(signUpForm.errorMessageBox).toHaveText('Name has to be from 2 to 20 characters long');
    });

    test('Wrong length, if > 2 - "Name has to be from 2 to 20 characters long"', async ({ page }) => {
        await signUpForm.open();
        await signUpForm.registerWrongLengthLong(incorrectLenghtLong)
        await expect(signUpForm.errorMessageBox).toHaveText('Name has to be from 2 to 20 characters long');
    });


    test('Border color red - validation Name', async ({ page }) => {
        await signUpForm.open();
        await signUpForm.registerFailNameEmptyWithCredentials()
        await expect(signUpForm.errorMessageBox).toHaveText('Name required');
        await signUpForm.checkInputBorderColorById('signupName', 'rgb(220, 53, 69)');
    });
});

test.describe('Field "Last name - POM"', () => {
    let signUpForm: SignUpForm;

    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        signUpForm = new SignUpForm(page);
    })

    test('Empty field - "Last Name is required"', async ({ page }) => {
        await signUpForm.open();
        await signUpForm.registerFailLastNameEmptyWithCredentials()
        await expect(signUpForm.errorMessageBox).toHaveText('Last name required');
    });

    test('Wrong data - "Last Name is invalid"', async ({ page }) => {
        await signUpForm.open();
        await signUpForm.registerFailLastNameWithCredentials(incorrectLastName)
        await expect(signUpForm.errorMessageBox).toHaveText('Last name is invalid');

    });

    test('Wrong length, if < 2 - "Last Name has to be from 2 to 20 characters long"', async ({ page }) => {
        await signUpForm.open();
        await signUpForm.registerWrongLengthLastName(incorrectLenght)
        await expect(signUpForm.errorMessageBox).toHaveText('Last name has to be from 2 to 20 characters long');
    });

    test('Wrong length, if > 2 - "Last Name has to be from 2 to 20 characters long"', async ({ page }) => {
        await signUpForm.open();
        await signUpForm.registerWrongLengthLastName(incorrectLenghtLong)
        await expect(signUpForm.errorMessageBox).toHaveText('Last name has to be from 2 to 20 characters long');
    });

    test('Border color red - validation Last Name', async ({ page }) => {
        await signUpForm.open();
        await signUpForm.registerFailLastNameEmptyWithCredentials()
        await expect(signUpForm.errorMessageBox).toHaveText('Last name required');
        await signUpForm.checkInputBorderColorById('signupLastName', 'rgb(220, 53, 69)');
    });

});

test.describe('Field "Email - POM"', () => {
    let signUpForm: SignUpForm;

    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        signUpForm = new SignUpForm(page);
    })

    test('Empty field - "signupEmail is required"', async ({ page }) => {
        await signUpForm.open();
        await signUpForm.registerFailEmailEmptyWithCredentials()
        await expect(signUpForm.errorMessageBox).toHaveText('Email required');
    });

    test('Wrong data - "Email is incorrect"', async ({ page }) => {
        await signUpForm.open();
        await signUpForm.registerFaiEmailWithCredentials(incorrectEmail)
        await expect(signUpForm.errorMessageBox).toHaveText('Email is incorrect');

    });

    test('Border color red - validation email', async ({ page }) => {
        await signUpForm.open();
        await signUpForm.registerFailEmailEmptyWithCredentials()
        await expect(signUpForm.errorMessageBox).toHaveText('Email required');
        await signUpForm.checkInputBorderColorById('signupEmail', 'rgb(220, 53, 69)');
    });
});

test.describe('Field "Password" - POM"', () => {
    let signUpForm: SignUpForm;

    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        signUpForm = new SignUpForm(page);
    })

    test('For empty field error - "Password required"', async ({ page }) => {
        await signUpForm.open();
        await signUpForm.registerFailPasswordEmptyWithCredentials();
        await expect(signUpForm.errorMessageBox).toHaveText('Password required');
    });

    test('Password has to be from 8 to 15 characters ', async ({ page }) => {

        await signUpForm.open();
        await signUpForm.registerFailPasswordWithCredentials();
        await expect(signUpForm.errorMessageBox).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
    });

    test('Border color red - validation password', async ({ page }) => {
        await signUpForm.open();
        await signUpForm.registerFailPasswordEmptyWithCredentials();
        await expect(signUpForm.errorMessageBox).toHaveText('Password required');
        await signUpForm.checkInputBorderColorById('signupPassword', 'rgb(220, 53, 69)');
    });

});

test.describe('Field "Re-enter password" - POM', () => {
    let signUpForm: SignUpForm;

    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        signUpForm = new SignUpForm(page);
    })

    test('For empty field error - "RePassword required"', async ({ page }) => {
        await signUpForm.open();
        await signUpForm.registerFailRePasswordEmptyWithCredentials();
        await expect(signUpForm.errorMessageBox).toHaveText('Re-enter password required');
    });

    test('RePassword has to be from 8 to 15 characters ', async ({ page }) => {

        await signUpForm.open();
        await signUpForm.registerFailRePasswordWithCredentials();
        await expect(signUpForm.errorMessageBox).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
    });

    test('Border color red - validation Re-password', async ({ page }) => {
        await signUpForm.open();
        await signUpForm.registerFailRePasswordEmptyWithCredentials();
        await expect(signUpForm.errorMessageBox).toHaveText('Re-enter password required');
        await signUpForm.checkInputBorderColorById('signupRepeatPassword', 'rgb(220, 53, 69)');
    });

});

test.describe('Button is disabled - POM', () => {
    let signUpForm: SignUpForm;

    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        signUpForm = new SignUpForm(page);
    })


    test('The registration button is disabled without entering data', async ({ page }) => {
        await signUpForm.open();
        const isDisabledAfterName = await signUpForm.isRegisterButtonDisabled();
        expect(isDisabledAfterName).toBe(true);

    });
    test('The registration button is disabled - incorrect data', async ({ page }) => {
        await signUpForm.open();
        await signUpForm.registerFailNameWithCredentials(incorrectName)
        const isDisabledAfterName = await signUpForm.isRegisterButtonDisabled();
        expect(isDisabledAfterName).toBe(true);
        await signUpForm.registerFailLastNameWithCredentials(incorrectLastName)
        const isDisabledAfterLastName = await signUpForm.isRegisterButtonDisabled();
        expect(isDisabledAfterLastName).toBe(true);
        await signUpForm.registerFaiEmailWithCredentials(incorrectEmail)
        const isDisabledAfterEmail = await signUpForm.isRegisterButtonDisabled();
        expect(isDisabledAfterEmail).toBe(true);
        await signUpForm.registerFailPasswordWithCredentials();
        const isDisabledAfterPassword = await signUpForm.isRegisterButtonDisabled();
        expect(isDisabledAfterPassword).toBe(true);
        await signUpForm.registerFailRePasswordWithCredentials();
        const isDisabledAfterRePassword = await signUpForm.isRegisterButtonDisabled();
        expect(isDisabledAfterRePassword).toBe(true);
    });

});

test.describe('User registration verification - POM', () => {
    let signUpForm: SignUpForm;

    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        signUpForm = new SignUpForm(page);
    })

    test('User registration verification', async ({ page }) => {
        await signUpForm.open();
        await signUpForm.registerUserWithCredentials(correctName, correctLastName, correctEmail, correctPassword, correctRePassword
        );
        await page.waitForURL('https://qauto.forstudy.space/panel/garage', { timeout: 2000 });
        expect(page.url()).toBe('https://qauto.forstudy.space/panel/garage');
        await expect(page.getByRole('heading', { name: 'Garage' })).toBeVisible();

    });

});