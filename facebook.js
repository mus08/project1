const puppeteer = require('puppeteer');
const password = require("./config").password;

(async() => {
    try {
        const browser = await puppeteer.launch({
            headless: false,
            defaultViewport: false,
            args: ["--start-maximized"],

        });
        const page = await browser.newPage();
        await page.setDefaultNavigationTimeout(1000000);

        await page.setViewport({ width: 1000, height: 600 });

        await page.goto("https://www.facebook.com");

        // login 
        await page.waitForSelector("#email");
        await page.type('#email', 'jawa.muskan8@gmail.com'); // Enter Your Facebook Mail Id Here
        await page.type('#pass', password);
        await page.click(`[type="submit"]`);
        await page.waitForNavigation();




        await page.waitForSelector(".m9osqain.a5q79mjw.jm1wdb64.k4urcfbm", { visible: true });
        await page.click(".m9osqain.a5q79mjw.jm1wdb64.k4urcfbm");



        //create the post 

        let sentenceList = [
            "Make peace with your past so it won't screw up the present",
            "Success is walking from failure to failure with no loss of enthusiasm",
            " Great things never come from comfort zone",
            "A dream does not become reality through magic, it takes sweat, determination, and hard work"
        ];

        for (let j = 0; j < sentenceList.length; j++) {
            let sentence = sentenceList[j];
            for (let i = 0; i < sentence.length; i++) {
                await page.keyboard.press(sentence[i]);

                if (i == sentence.length - 1) {
                    await page.waitFor(2000);
                    await page.keyboard.down('Control');
                    await page.keyboard.press(String.fromCharCode(13)); //character code for enter is 13
                    await page.keyboard.up('Control');
                    await page.waitFor(4000);


                    await page.click(".m9osqain.a5q79mjw.jm1wdb64.k4urcfbm");

                }

            }


        }

    } catch (error) {
        console.error(error);
    }
})()