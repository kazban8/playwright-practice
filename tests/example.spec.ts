import { test, expect } from '@playwright/test';

test.describe('Field "Name"', () => {
    test('Empty field - "Name is required"', async ({ page }) => {
        await page.goto('/');
        await page.getByText('Sign up').click();
        await page.locator('#signupName').focus();
        await page.locator('#signupName').blur();
        await expect(page.getByText('Name required')).toBeVisible();
    });

    test('Wrong data - "Name is invalid"', async ({ page }) => {
      await page.goto('/');
      await page.getByText('Sign up').click();
      await page.locator('#signupName').focus();
      await page.locator('#signupName').fill('тест');
      await page.locator('#signupName').blur();
      await expect(page.getByText('Name is invalid')).toBeVisible();
    });

    test('Wrong length, if < 2 - "Name has to be from 2 to 20 characters long"', async ({ page }) => {
      await page.goto('/');
      await page.getByText('Sign up').click();
      await page.locator('#signupName').focus();
      await page.locator('#signupName').fill('T');
      await page.locator('#signupName').blur();
      await expect(page.getByText('Name has to be from 2 to 20 characters long')).toBeVisible();
    });

    test('Wrong length, if > 20 - "Name has to be from 2 to 20 characters long"', async ({ page }) => {
      await page.goto('/');
      await page.getByText('Sign up').click();
      await page.locator('#signupName').focus();
      await page.locator('#signupName').fill('Tqwertyuioqwertyuiopq');
      await page.locator('#signupName').blur();
      await expect(page.getByText('Name has to be from 2 to 20 characters long')).toBeVisible();
    });

    test('Less than 2 characters. Cyrillic language', async ({ page }) => {
      await page.goto('/');
      await page.getByText('Sign up').click();
      await page.locator('#signupName').focus();
      await page.locator('#signupName').fill('Ї');
      await page.locator('#signupName').blur();
      await expect(page.getByText('Name is invalid')).toBeVisible();
      await expect(page.getByText('Name has to be from 2 to 20 characters long')).toBeVisible();
    });

    test('Border color red', async ({ page }) => {
      await page.goto('/');
      await page.getByText('Sign up').click();
      await page.locator('#signupName').focus();
      await page.locator('#signupName').fill('тест');
      await page.locator('#signupName').blur();
      await expect(page.getByText('Name is invalid')).toBeVisible();
      const textColor = await page.evaluate(() => {
        const element = document.querySelector('p');
        const styles = getComputedStyle(element);
        return styles.color;
    });
    expect(textColor).toEqual('rgb(255, 255, 255)');

    // const element = page.locator('.invalid-feedback');
    // await expect(element).toBeVisible();
    });
});

test.describe('Field "Last name"', () => {
  test('Empty field - "Name is required"', async ({ page }) => {
      await page.goto('/');
      await page.getByText('Sign up').click();
      await page.locator('#signupLastName').focus();
      await page.locator('#signupLastName').blur();
      await expect(page.getByText('Last name required')).toBeVisible();
  });

  test('Wrong data - "Name is invalid"', async ({ page }) => {
    await page.goto('/');
    await page.getByText('Sign up').click();
    await page.locator('#signupLastName').focus();
    await page.locator('#signupLastName').fill('тест');
    await page.locator('#signupLastName').blur();
    await expect(page.getByText('Last name is invalid')).toBeVisible();
  });

  test('Wrong length, if < 2 - "Last name has to be from 2 to 20 characters long"', async ({ page }) => {
    await page.goto('/');
    await page.getByText('Sign up').click();
    await page.locator('#signupLastName').focus();
    await page.locator('#signupLastName').fill('T');
    await page.locator('#signupLastName').blur();
    await expect(page.getByText('Last name has to be from 2 to 20 characters long')).toBeVisible();
  });

  test('Wrong length, if > 20 - "Last name has to be from 2 to 20 characters long"', async ({ page }) => {
    await page.goto('/');
    await page.getByText('Sign up').click();
    await page.locator('#signupLastName').focus();
    await page.locator('#signupLastName').fill('Tqwertyuioqwertyuiopq');
    await page.locator('#signupLastName').blur();
    await expect(page.getByText('Last name has to be from 2 to 20 characters long')).toBeVisible();
  });

  test('Less than 2 characters. Cyrillic language', async ({ page }) => {
    await page.goto('/');
    await page.getByText('Sign up').click();
    await page.locator('#signupLastName').focus();
    await page.locator('#signupLastName').fill('Ї');
    await page.locator('#signupLastName').blur();
    await expect(page.getByText('Last name is invalid')).toBeVisible();
    await expect(page.getByText('Last name has to be from 2 to 20 characters long')).toBeVisible();
  });

});

test.describe('Field "Email"', () => {
  test('Empty field - "signupEmail is required"', async ({ page }) => {
    await page.goto('/');
    await page.getByText('Sign up').click();
    await page.locator('#signupEmail').focus();
    await page.locator('#signupEmail').blur();
    await expect(page.getByText('Email required')).toBeVisible();
});

test('Wrong data - "Email is invalid"', async ({ page }) => {
  await page.goto('/');
  await page.getByText('Sign up').click();
  await page.locator('#signupEmail').focus();
  await page.locator('#signupEmail').fill('viktor@gmail');
  await page.locator('#signupEmail').blur();
  await expect(page.getByText('Email is incorrect')).toBeVisible();
});

});

test.describe('Field "Password"', () => {
  test('For empty field error - "Password required"', async ({ page }) => {
    await page.goto('/');
    await page.getByText('Sign up').click();
    await page.locator('#signupPassword').focus();
    await page.locator('#signupPassword').blur();
    await expect(page.getByText('Password required')).toBeVisible();
});

test('Wrong data - "Email is invalid"', async ({ page }) => {
  await page.goto('/');
  await page.getByText('Sign up').click();
  await page.locator('#signupPassword').focus();
  await page.locator('#signupPassword').fill('vik8');
  await page.locator('#signupPassword').blur();
  await expect(page.getByText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')).toBeVisible();
});
});

test.describe('Field "Re-enter password"', () => {
  test('For empty field error - "Password required"', async ({ page }) => {
    await page.goto('/');
    await page.getByText('Sign up').click();
    await page.locator('#signupRepeatPassword').focus();
    await page.locator('#signupRepeatPassword').blur();
    await expect(page.getByText('Re-enter password required')).toBeVisible();
});

test('Wrong data - "Email is invalid"', async ({ page }) => {
  await page.goto('/');
  await page.getByText('Sign up').click();
  await page.locator('#signupRepeatPassword').focus();
  await page.locator('#signupRepeatPassword').fill('vik');
  await page.locator('#signupRepeatPassword').blur();
  await expect(page.getByText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')).toBeVisible();
});

});

test.describe('Button is disabled', () => {
  test('The registration button is disabled without entering data', async ({ page }) => {
    await page.goto('/');
    await page.getByText('Sign up').click();
    const registerButton = await page.$('.btn.btn-primary');
    const isDisabled = await registerButton.isDisabled();

});

test('The registration button is disabled - incorrect data', async ({ page }) => {
  await page.goto('/');
  await page.getByText('Sign up').click();
  await page.locator('#signupName').focus();
  await page.locator('#signupName').fill('T');
  await page.locator('#signupLastName').focus();
  await page.locator('#signupLastName').fill('Ї');
  await page.locator('#signupEmail').focus();
  await page.locator('#signupEmail').fill('viktor@gmail');
  await page.locator('#signupPassword').focus();
  await page.locator('#signupPassword').fill('vik8');
  await page.locator('#signupRepeatPassword').focus();
  await page.locator('#signupRepeatPassword').fill('vik');
  await page.locator('#signupRepeatPassword').blur();
  const registerButton = await page.$('.btn.btn-primary');
  const isDisabled = await registerButton.isDisabled();

});

});
test.describe('Registration text', () => {
test('Registration text', async ({ page }) => {
  await page.goto('/');
  await page.getByText('Sign up').click();
  const guestLoginLink = page.getByText('Registration', { exact: true });
  await guestLoginLink.click();

});

});

test.describe('User registration verification', () => {
  test('TUser registration verification', async ({ page }) => {
    await page.goto('/');
    await page.getByText('Sign up').click();
    await page.locator('#signupName').focus();
    await page.locator('#signupName').fill('Viktor');
    await page.locator('#signupLastName').focus();
    await page.locator('#signupLastName').fill('Kazban');
    await page.locator('#signupEmail').focus();
    await page.locator('#signupEmail').fill('kazban8+aqa04@gmail.com');
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