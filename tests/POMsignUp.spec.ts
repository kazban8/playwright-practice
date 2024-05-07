import { test, expect } from '@playwright/test';
import { SignUpButton } from '../components/signUpButton';
import { SignUpForm } from '../page-objects/signUpForm';
import { incorrectName, incorrectLastName, incorrectEmail, incorrectPassword, incorrectRePassword, correctEmail, correctLastName,correctName, correctPassword, correctRePassword, incorrectLenght, incorrectLenghtLong } from '../test-data/credentials';

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

      test('Wrong data - "Name is invalid"', async ({ page }) => {
        await signUpForm.open();
        await signUpForm.registerFailLastNameWithCredentials(incorrectLastName)
        await expect(signUpForm.errorMessageBox).toHaveText('Name is invalid');

      });

      test('Wrong length, if < 2 - "Name has to be from 2 to 20 characters long"', async ({ page }) => {
        await signUpForm.open();
        await signUpForm.registerWrongLengthLastName(incorrectLenght)
        await expect(signUpForm.errorMessageBox).toHaveText('Last name has to be from 2 to 20 characters long');
      });

      test('Wrong length, if > 2 - "Name has to be from 2 to 20 characters long"', async ({ page }) => {
        await signUpForm.open();
        await signUpForm.registerWrongLengthLastName(incorrectLenghtLong)
        await expect(signUpForm.errorMessageBox).toHaveText('Last name has to be from 2 to 20 characters long');
      });

      test('Border color red - validation Name', async ({ page }) => {
        await signUpForm.open();
        await signUpForm.registerFailLastNameEmptyWithCredentials()
        await expect(signUpForm.errorMessageBox).toHaveText('Last name required');
        await signUpForm.checkInputBorderColorById('signupLastName', 'rgb(220, 53, 69)');
      });

    });