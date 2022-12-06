// Test

const{test,expect}= require("@playwright/test")

test("blank user name and pw", async function({page}){
    
    await page.goto("https://ineuron-courses.vercel.app/login")

    await page.locator("button[type='submit']").click()

    expect(await page.locator(".errorMessage").textContent("Email and Password is required"))
})

test("blank user name and valid pw", async function({page}){
    
    await page.goto("https://ineuron-courses.vercel.app/login")

    await page.locator("#password1").type("aarti@123")
    await page.locator("button[type='submit']").click()

    expect(await page.locator(".errorMessage").textContent("Email is required"))
})

test("valid user name and pw", async function({page}){
    
    await page.goto("https://ineuron-courses.vercel.app/login")

    await page.locator("#email1").type("aarti1@playwright.com")
    
    await page.locator("button[type='submit']").click()

    expect(await page.locator(".errorMessage").textContent("Password is required"))
})

test("invalid user name and inavlud pw", async function({page}){
    
    await page.goto("https://ineuron-courses.vercel.app/login")

    await page.locator("#email1").type("aartig@playwright.com")
    await page.locator("#password1").type("aarti123")
    await page.locator("button[type='submit']").click()

    expect(await page.locator(".errorMessage").textContent("USER Email Doesn't Exist"))
})

test("Valid user name and valid password", async function({page}){
    await page.goto("https://ineuron-courses.vercel.app/login")
    await page.locator("#email1").type("aarti3@playwright.com")
    await page.locator("#password1").type("aarti@123")
    await page.locator("button[type='submit']").click()
    await page.getByText("Sign out").click()
    await expect(page).toHaveURL(/.*login/)
})