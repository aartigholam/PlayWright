const{test, page, expect, chromium}=require("@playwright/test")

test("Another way to manage browser", async()=>{

    const browser= await chromium.launch ({headless: false})

   // Test push 1 
})