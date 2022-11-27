    async elementVisualCompare(element, screenshot, tolerance) {
        const playwright = container.helpers("Playwright");
        const visualCompare = container.helpers("ResembleHelper");
        await playwright.waitForVisible(element, 2);
        await playwright.saveScreenshot(screenshot);
        try {
            await visualCompare.seeVisualDiffForElement(element, screenshot, {
                tolerance, prepareBaseImage: false
            });
        } catch (e) {
            throw new Error("Visual: " + e);
        }
    }
