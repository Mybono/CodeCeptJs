const _ = require("lodash");
const {
    textAlignBottom,
} = require("./customLocators");

const { I } = inject();

const textValue = ["0", "1.65", "1.2", "0.1", "0"];
let newValue = ["75", "1.65", "1.2", "0.1", "0"];

module.exports = {

    locators: {

    },

    double_click(element) {
        I.waitForVisible(element, 2);
        const pos1 = I.grabElementBoundingRect(element);
        I.click(element);
        I.doubleClick(element);
        let pos2 = I.grabElementBoundingRect(element);

        if (!(_.isEqual(pos1, pos2))) {
            throw new Error("positions are not equal");
        }

        I.doubleClick(textAlignBottom);
        I.doubleClick(textAlignBottom);
        pos2 = I.grabElementBoundingRect(element);
        if (!(_.isEqual(pos1, pos2))) {
            throw new Error("textAlignBottom positions are not equal");
        }
    },


    element(object, element, events) {
        const pos1 = I.grabElementBoundingRect(element);
        events.forEach(func => func());
        const pos2 = I.grabElementBoundingRect(element);
        switch (object) {
        case "Widget":
            if (JSON.stringify(pos1) != JSON.stringify(pos2)) {
                throw new Error("positions are not equal");
            }
            break;
        }
    },

};
