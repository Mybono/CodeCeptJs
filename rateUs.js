const {
    widgetToolbarPopup,
    bottomRight,
    slide,
} = require("../../../../helpers/common/customLocators");

Feature("Element Rate Us");

Before(({ login }) => {
    login("admin");
});

Scenario("Rate Us check", async ({ I }) => {
    I.amOnConsolePage("/projects/1/stories/503/edit");
    I.checkingTitle("Editor");

    I.clickElement("widgetMenuButton");

    const editMenuText = [
        "Disable header",
        "Android link",
        "Apple link",
        "Dialog",
    ];
    await within(widgetToolbarPopup, async () => {
        editMenuText.forEach(element => I.see(element));
    });

    __`Resize check`;
    I.dragSlider(bottomRight, -50);
    I.elementVisualCompare(locate(slide).at(1), "rate_us_resize.png", 1);
}).tag("element").tag("rate_us").tag("");
