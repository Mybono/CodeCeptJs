    async grabElements(element, number, array) {
        const playwright = container.helpers("Playwright");
        await playwright.waitForElement(element, 3);

        //! checking the number of elements in an array
        try {
            const numOfElements = await playwright.grabNumberOfVisibleElements(element);
            assert.equal(numOfElements, number);
        } catch (e) {
            throw new Error("Num Of elements: " + e);
        }

        //! validating text in an array
        if (Array.isArray(array)) {
            const newArray = await playwright.grabTextFromAll(element);
            const numOfElements = newArray
                .map(val => val.trim())
                .filter(val => val != "");
            if (JSON.stringify(numOfElements) !== JSON.stringify(array)) {
                throw new Error("Arrays are not equal:" + "\n" + numOfElements + "\n" + array);
            }
        }
    }
