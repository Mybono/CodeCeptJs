Scenario("Checking the position of an element with rotation on click",
    async ({ I }) => {
        I.amOnConsolePage("/projects/1/stories/102/edit");
        //! if data-action="align-bottom" - ON

        __`Single click by widget`;
        let pos1 = await I.grabElementBoundingRect(widget);

        I.clickElement("slide");
        I.clickElement("widget");
        I.clickElement("slide");

        let pos2 = await I.grabElementBoundingRect(widget);
        if (JSON.stringify(pos1) !== JSON.stringify(pos2)) {
            throw new Error("Single click: positions are not equal: " + "\n" +
            (JSON.stringify(pos1)) + "\n" +
            (JSON.stringify(pos2))
            );
        }

        __`Double click by widget`;
        pos1 = await I.grabElementBoundingRect(widget);

        I.clickElement("slide");
        I.doubleClick(widget);
        I.clickElement("slide");

        pos2 = await I.grabElementBoundingRect(widget);
        if (JSON.stringify(pos1) !== JSON.stringify(pos2)) {
            throw new Error("Double click: positions are not equal: " + "\n" +
            (JSON.stringify(pos1)) + "\n" +
            (JSON.stringify(pos2))
            );
        }
    }).tag("element").tag("text").tag("");
