import { PlaywrightCrawler } from "crawlee";

const crawler = new PlaywrightCrawler({
  // Request handler to process each crawled page
  async requestHandler({ page, request, enqueueLinks }) {
    console.log(`Opening page: ${request.url}`);

    // Open the Instagram user page
    await page.goto(request.url, { waitUntil: "networkidle" });

    // Extract the links to be enqueued
    const links = await page.$$eval(
      'a[class="x1i10hfl xjbqb8w x1ejq31n xd10rxx x1sy0etr x17r0tee x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz _a6hd"]',
      (els) => els.map((el) => el.getAttribute("href"))
    );

    //TODO: REMOVE!!!
    if (1 === 1) {
      await enqueueLinks({ urls: links.slice(0, 1) });
    } else {
      await enqueueLinks({ urls: links });
    }

    // Process the main content within an <article> tag when navigating to those links
    const articleSelector = "article";
    const articleExists = await page.$(articleSelector);

    if (articleExists) {
      // Extract the main image
      const imageUrl = await page.$eval(
        `${articleSelector} div._aagv img`,
        (img) => img.src
      );

      // Extract the text content within the role="button" div
      const buttonText = await page.$$eval(
        `${articleSelector} div[role="button"]`,
        (buttons) => buttons.map((button) => button.textContent.trim())
      );

      console.log("Main Image URL:", imageUrl);
      console.log("Button Texts:", buttonText.join("\n"));
    }
  },
});

// Start the crawler
(async () => {
  await crawler.run([
    "https://www.instagram.com/amandamccants/", // Example URL
  ]);
})();
