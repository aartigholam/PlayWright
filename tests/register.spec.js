const{test,expect}= require("@playwright/test")

test('registration with new user',async function({page}){
    // // Register with new user
    // await page.goto("https://ineuron-courses.vercel.app/login")
    // await page.getByText("New user? Signup").click()

    // await expect(page).toHaveURL(/.*signup/)
    
    // await page.locator("#name").type("Aarti")
    // await page.locator("#email").type("aarti4@playwright.com")
    // await page.locator("#password").type("aarti@123")
    // await page.getByLabel("Testing").click()
    // await page.getByRole('radio',{ value : "Female"}).last().click()
    // await page.locator("//select[@id='state']").selectOption("Delhi")
    // await page.locator("//button[@type='submit']").click()

    // Login and verify sign out
    await page.goto("https://ineuron-courses.vercel.app/login")
    await page.locator("#email1").type("aarti3@playwright.com")
    await page.locator("#password1").type("aarti@123")
    await page.locator("button[type='submit']").click()
    await page.getByText("Sign out").click()
    await expect(page).toHaveURL(/.*login/)

})

test("Email Already exist",async function({page}){
    await page.goto("https://ineuron-courses.vercel.app/login")
    await page.getByText("New user? Signup").click()

    await expect(page).toHaveURL(/.*signup/)
    
    await page.locator("#name").type("Aarti")
    await page.locator("#email").type("aarti4@playwright.com")
    await page.locator("#password").type("aarti@123")
    await page.getByLabel("Testing").click()
    await page.getByRole('radio',{ value : "Female"}).last().click()
    await page.locator("//select[@id='state']").selectOption("Delhi")
    await page.locator("//button[@type='submit']").click()

    expect (await page.locator(".errorMessage.false").textContent("Email already registered!"))

})