import { test, expect } from '@playwright/test';

test.describe('Field "Name"', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.getByText('Sign up').click();
})
    test('Empty field - "Name is required"', async ({ page }) => {
        await page.locator('#signupName').focus();
        await page.locator('#signupName').blur();
        await expect(page.getByText('Name required')).toBeVisible();
    });

    test('Wrong data - "Name is invalid"', async ({ page }) => {
      await page.locator('#signupName').focus();
      await page.locator('#signupName').fill('тест');
      await page.locator('#signupName').blur();
      await expect(page.getByText('Name is invalid')).toBeVisible();
    });

    test('Wrong length, if < 2 - "Name has to be from 2 to 20 characters long"', async ({ page }) => {
      await page.locator('#signupName').focus();
      await page.locator('#signupName').fill('T');
      await page.locator('#signupName').blur();
      await expect(page.getByText('Name has to be from 2 to 20 characters long')).toBeVisible();
    });

    test('Wrong length, if > 20 - "Name has to be from 2 to 20 characters long"', async ({ page }) => {
      await page.locator('#signupName').focus();
      await page.locator('#signupName').fill('Tqwertyuioqwertyuiopq');
      await page.locator('#signupName').blur();
      await expect(page.getByText('Name has to be from 2 to 20 characters long')).toBeVisible();
    });

    test(' Cyrillic language', async ({ page }) => {
      await page.locator('#signupName').focus();
      await page.locator('#signupName').fill('Ї');
      await page.locator('#signupName').blur();
      await expect(page.getByText('Name is invalid')).toBeVisible();
      await expect(page.getByText('Name has to be from 2 to 20 characters long')).toBeVisible();
    });

    test('Border color red - validation Name', async ({ page }) => {
      await page.locator('#signupName').focus();
      await page.locator('#signupName').fill('тест');
      await page.locator('#signupName').blur();
      await expect(page.getByText('Name is invalid')).toBeVisible();
      const nameInput = page.locator('#signupName');
      await expect(nameInput).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    });
});

test.describe('Field "Last name"', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.getByText('Sign up').click();
})
  test('Empty field - "Last Name is required"', async ({ page }) => {
      await page.locator('#signupLastName').focus();
      await page.locator('#signupLastName').blur();
      await expect(page.getByText('Last name required')).toBeVisible();
  });

  test('Wrong data - "Last Name is invalid"', async ({ page }) => {
    await page.locator('#signupLastName').focus();
    await page.locator('#signupLastName').fill('тест');
    await page.locator('#signupLastName').blur();
    await expect(page.getByText('Last name is invalid')).toBeVisible();
  });

  test('Wrong length, if < 2 - "Last name has to be from 2 to 20 characters long"', async ({ page }) => {
    await page.locator('#signupLastName').focus();
    await page.locator('#signupLastName').fill('T');
    await page.locator('#signupLastName').blur();
    await expect(page.getByText('Last name has to be from 2 to 20 characters long')).toBeVisible();
  });

  test('Wrong length, if > 20 - "Last name has to be from 2 to 20 characters long"', async ({ page }) => {
    await page.locator('#signupLastName').focus();
    await page.locator('#signupLastName').fill('Tqwertyuioqwertyuiopq');
    await page.locator('#signupLastName').blur();
    await expect(page.getByText('Last name has to be from 2 to 20 characters long')).toBeVisible();
  });

  test('Cyrillic language', async ({ page }) => {
    await page.locator('#signupLastName').focus();
    await page.locator('#signupLastName').fill('Ї');
    await page.locator('#signupLastName').blur();
    await expect(page.getByText('Last name is invalid')).toBeVisible();
    await expect(page.getByText('Last name has to be from 2 to 20 characters long')).toBeVisible();
  });

  test('Border color red - validation LastName', async ({ page }) => {
    await page.locator('#signupLastName').focus();
    await page.locator('#signupLastName').fill('тест');
    await page.locator('#signupLastName').blur();
    await expect(page.getByText('Last name is invalid')).toBeVisible();
    const lastnameInput = page.locator('#signupLastName');
    await expect(lastnameInput).toHaveCSS('border-color', 'rgb(220, 53, 69)');
  });

});

test.describe('Field "Email"', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.getByText('Sign up').click();
})
  test('Empty field - "signupEmail is required"', async ({ page }) => {
    await page.locator('#signupEmail').focus();
    await page.locator('#signupEmail').blur();
    await expect(page.getByText('Email required')).toBeVisible();
});

test('Wrong data - "Email is invalid"', async ({ page }) => {
  await page.locator('#signupEmail').focus();
  await page.locator('#signupEmail').fill('viktor@gmail');
  await page.locator('#signupEmail').blur();
  await expect(page.getByText('Email is incorrect')).toBeVisible();
});

test('Border color red - validation email', async ({ page }) => {
  await page.locator('#signupEmail').focus();
  await page.locator('#signupEmail').fill('viktor@gmail');
  await page.locator('#signupEmail').blur();
  await expect(page.getByText('Email is incorrect')).toBeVisible();
  const emailInput = page.locator('#signupEmail');
  await expect(emailInput).toHaveCSS('border-color', 'rgb(220, 53, 69)');
});

});

test.describe('Field "Password"', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.getByText('Sign up').click();
})

  test('For empty field error - "Password required"', async ({ page }) => {
    await page.locator('#signupPassword').focus();
    await page.locator('#signupPassword').blur();
    await expect(page.getByText('Password required')).toBeVisible();
});

test('Password has to be from 8 to 15 characters ', async ({ page }) => {
  await page.locator('#signupPassword').focus();
  await page.locator('#signupPassword').fill('vik8');
  await page.locator('#signupPassword').blur();
  await expect(page.getByText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')).toBeVisible();
});

test('Border color red - validation password', async ({ page }) => {
  await page.locator('#signupPassword').focus();
  await page.locator('#signupPassword').blur();
  await expect(page.getByText('Password required')).toBeVisible();
  const passwordInput = page.locator('#signupPassword');
  await expect(passwordInput).toHaveCSS('border-color', 'rgb(220, 53, 69)');

});

});

test.describe('Field "Re-enter password"', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.getByText('Sign up').click();
})

  test('For empty field error - "Password required"', async ({ page }) => {
    await page.locator('#signupRepeatPassword').focus();
    await page.locator('#signupRepeatPassword').blur();
    await expect(page.getByText('Re-enter password required')).toBeVisible();
});

test('RePassword has to be from 8 to 15 characters', async ({ page }) => {
  await page.locator('#signupRepeatPassword').focus();
  await page.locator('#signupRepeatPassword').fill('vik');
  await page.locator('#signupRepeatPassword').blur();
  await expect(page.getByText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')).toBeVisible();
});

test('Border color red - validation REpassword', async ({ page }) => {
    await page.locator('#signupRepeatPassword').focus();
    await page.locator('#signupRepeatPassword').blur();
    await expect(page.getByText('Re-enter password required')).toBeVisible();
  const rePasswordInput = page.locator('#signupRepeatPassword');
  await expect(rePasswordInput).toHaveCSS('border-color', 'rgb(220, 53, 69)');

});

test.describe('Registration text', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.getByText('Sign up').click();
})

test('Registration text', async ({ page }) => {
  const guestLoginLink = page.getByText('Registration', { exact: true });
  await guestLoginLink.click();

});

});

test.describe('User registration verification', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.getByText('Sign up').click();
})

  test('TUser registration verification', async ({ page }) => {
    await page.locator('#signupName').focus();
    await page.locator('#signupName').fill('Viktor');
    await page.locator('#signupLastName').focus();
    await page.locator('#signupLastName').fill('Kazban');
    await page.locator('#signupEmail').focus();
    await page.locator('#signupEmail').fill('kazban8+aqa11@gmail.com');
    await page.locator('#signupPassword').focus();
    await page.locator('#signupPassword').fill('Dante12345');
    await page.locator('#signupRepeatPassword').focus();
    await page.locator('#signupRepeatPassword').fill('Dante12345');
    await page.locator('#signupRepeatPassword').blur();
    await page.locator('button', { hasText: 'Register' }).click();
    await page.waitForNavigation({ timeout: 2000 })
    expect(page.url()).toBe('https://qauto.forstudy.space/panel/garage');


});

});

test.describe('Button is disabled', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.getByText('Sign up').click();
})


  test('The registration button is disabled without entering data', async ({ page }) => {
    const registerButton = await page.$('.btn.btn-primary');
    const isDisabled = await registerButton.isDisabled();

});

test('The registration button is disabled - incorrect data', async ({ page }) => {
  await page.locator('#signupName').focus();
  await page.locator('#signupName').fill('T');
  const registerButtonAfterName = await page.$('.btn.btn-primary');
  const isDisabledAfterName = await registerButtonAfterName.isDisabled();
  expect(isDisabledAfterName).toBe(true);
  await page.locator('#signupLastName').focus();
  await page.locator('#signupLastName').fill('Ї');
  const registerButtonAfterLastName = await page.$('.btn.btn-primary');
  const isDisabledAfterLastName = await registerButtonAfterLastName.isDisabled();
  expect(isDisabledAfterLastName).toBe(true);
  await page.locator('#signupEmail').focus();
  await page.locator('#signupEmail').fill('viktor@gmail');
  const registerButtonAfterEmail = await page.$('.btn.btn-primary');
  const isDisabledAfterEmail = await registerButtonAfterEmail.isDisabled();
  expect(isDisabledAfterEmail).toBe(true);
  await page.locator('#signupPassword').focus();
  await page.locator('#signupPassword').fill('vik8');
  const registerButtonAfterPassword = await page.$('.btn.btn-primary');
  const isDisabledAfterPassword = await registerButtonAfterPassword.isDisabled();
  expect(isDisabledAfterPassword).toBe(true); 
  await page.locator('#signupRepeatPassword').focus();
  await page.locator('#signupRepeatPassword').fill('vik');
  await page.locator('#signupRepeatPassword').blur();
  const registerButton = await page.$('.btn.btn-primary');
  const isDisabled = await registerButton.isDisabled();

});

});

});