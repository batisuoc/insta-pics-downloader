const puppeteer = require("puppeteer");

const main = async () => {
  const launchOpts = {
    args: ["--start-maximized"],
    executablePath: "/opt/google/chrome/google-chrome",
  };
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.instagram.com/");
  await page.screenshot({ path: "ex.png" });
  // const imgSrcSets = await page.evaluate(() => {
  //   const imgs = Array.from(document.querySelectorAll("article img"));
  //   // const srcs = imgs.map((i) => i.getAttribute("srcset"));
  //   console.log(imgs);
  //   return imgs;
  // });
  await browser.close();
};

main();
