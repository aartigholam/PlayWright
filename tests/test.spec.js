const{test,expect}= require("@playwright/test")

test("My first test", async function({page}){
 expect(12).toBe(12)
})

test("My second test", async function({page}){
    await page.goto("http://google.com")

    const url=await page.url()

    console.log(("URL is " +url));

    const title=await page.title()

    await expect(page).toHaveTitle("Google")
    })
test("My third test", async function({page}){
    
    await page.goto("https://ineuron-courses.vercel.app/login")

    await page.goto("http://www.google.com")

    await page.goBack()

    expect(await page.getByText("New user? Signup").getAttribute("class")).toContain("subLink")
    
    await page.getByText("New user? Signup").click()

    
    })