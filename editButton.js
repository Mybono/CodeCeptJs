Scenario("Edit check", async (
    {
        I,
        checkPosition,
        check,
        color,
        sliders
    }) => {
    I.amOnConsolePage("/projects/1/stories/100/edit");
    I.checkingTitle("Editor");

    I.clickElement("widgetMenuButton");

    __`edit check`;
    I.testUrlField();

    await sliders.check("Button");
    check.menu();

    __`testing transparent button`;
    checkPosition.element("Widget", widget, [
        async () => {
            check.transparentButton("Button");
        }
    ]);

    __`testting Align to bottom`;
    await check.alignToBottom("Button");

    __`color check`;
    await color.check("Button");

    __`checking the visibility of the tooltip after deleting the widget`;
    //! 529 https://trello.com/c/tCj8IrtG
    checkPosition.element("Widget", widget, [
        async () => { await I.click(slide); },
        async () => { await I.click(widget); },
    ]);

    I.moveCursorTo("[data-action=\"text-italic\"]");
    I.waitForTooltip("Button");
    I.pressKey("Delete");
    I.waitForInvisible(widget, 2);
    I.dontSeeElement("div.bs-tooltip-top");
}).tag("element").tag("button").tag("");
