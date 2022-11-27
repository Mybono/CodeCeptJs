Our story redactor has many different modals, this func test them. We can call it  in test just by: I.modalCheck("create_Placeholder");
this function checks: the text, css & buttons by [grabElements](https://github.com/Mybono/CodeCeptJs/blob/main/grabElements.js) func, in each modal, and initiates a visual comparison.


async modalCheck(activeModal) {
        const playwright = container.helpers("Playwright");

        const cancel = "button.btn-secondary";
        const confirmTitle = "div.confirm-title";
        const modalTitle = "div.modal-title";
        const modalButton = "div.app-modal button";
        const modalLabel = "label.form-label";
        const modalConfirmlabel = "div.confirm-label";

        const feedCreateText = [
            "Name",
            "String ID"
        ];
        const feedEditText = [
            "Name",
            "String ID"
        ];
        const tagCreateText = [
            "Tag",
            "Group"
        ];
        const placeholderText = [
            "Name",
            "Default value",
            "Type"
        ];
        const placeholderEditText = [
            "Default value",
            "Type"
        ];
        const viewOnDevice = [
            "Open",
            "Copy",
        ];
        const invalidFeedback = "div.invalid-feedback";

        await playwright.waitForVisible(modal, 3);
        // Text check
        try {
            switch (activeModal) {
            // General Settings
            case "delete_PrivateKey":
                await playwright.waitForText("Are you sure you want to delete Private API key (everyone who uses it will lose access)?", 2);
                break;
            case "create_PrivateKey":
                await playwright.waitForText("Confirmation", 2, "h1.modal-title");
                await playwright.waitForText("The key provides access to changing data in the project, do not pass it anybody", 2);
                break;
            case "create_PrivateKeyFalse":
                await playwright.waitForText("Not available with actual plan", 2);
                await playwright.waitForText("Change your tariff to access this functionality", 2);
                break;

            case "delete_Promocode":
                await playwright.waitForText("Are you sure you want to delete the promo code", 2, modalConfirmlabel);
                break;
            case "create_Promocode":
                await playwright.waitForText("Create a promo code", 2, "h1.modal-title");
                break;

            case "delete_Segment":
                await playwright.waitForText("Are you sure you want to delete the segment", 2, modalConfirmlabel);
                break;
            case "create_Segment":
                await playwright.waitForText("Create a segment", 2, confirmTitle);
                await playwright.waitForText("Segment has to begin with a letter and contains only letters, numbers, symbols _ or -", 2, "div.input-description");
                await playwright.seeElement(disabledButton);
                break;

            case "delete_Tag":
                await playwright.waitForText("Are you sure you want to delete the tag", 2, modalConfirmlabel);
                break;

            case "create_Tag":
                await playwright.waitForText("Create a tag", 2, "h1.modal-title");
                await this.grabElements(modalLabel, 2, tagCreateText);
                await playwright.waitForText("Tag has to begin with a letter or number and contains only letters, numbers, symbols _ or -", 2, "div.tag-pattern");
                break;
            case "Manage_groups":
                await playwright.waitForText("Manage groups", 2, modalTitle);
                await this.grabElements(modalButton, 2);
                break;
            case "Create_group":
                await playwright.waitForText("Create a group", 2, modalTitle);
                await this.grabElements(modalButton, 3);
                break;
            case "Edit_group":
                await playwright.waitForText("Edit the group", 2, modalTitle);
                await this.grabElements(modalButton, 3);
                break;
            case "delete_Group":
                await playwright.waitForText("Are you sure you want to delete the group", 2, modalConfirmlabel);
                break;

            case "delete_Webhook":
                await playwright.waitForText("Are you sure you want to delete the webhook", 2, modalConfirmlabel);
                break;

            case "delete_Placeholder":
                await playwright.waitForText("Are you sure you want to delete the placeholder", 2, modalConfirmlabel);
                break;
            case "create_Placeholder":
                await playwright.waitForText("Create a placeholder", 2, "h1.modal-title");
                await playwright.waitForText("Placeholder must start with a letter and can only contain letters, numbers, _ or -", 2, "div.input-caption");
                await this.grabElements(modalLabel, 3, placeholderText);
                break;
            case "edit_Placeholder":
                await playwright.waitForText("Edit the placeholder", 2, modalTitle);
                await this.grabElements(modalLabel, 2, placeholderEditText);
                break;

            case "delete_Members":
                await playwright.waitForText("Are you sure you want to delete from your project the member", 2, modalConfirmlabel);
                break;
            case "invite_Members":
                await playwright.waitForText("Invite new members", 2, modalTitle);
                break;
            case "logout":
                await playwright.waitForText("Confirmation", 2, modalTitle);
                await playwright.waitForText("Are you sure you want to log out?", 2, "p.text-center");
                break;

                // Feed
            case "create_Feed":
                await this.grabElements(".modal-confirm .form-label", 2, feedCreateText);
                await playwright.waitForText("Create a feed", 3, confirmTitle);
                break;
            case "edit_Feed":
                await this.grabElements(".modal-confirm .form-label", 2, feedEditText);
                await playwright.waitForText("Edit a feed", 3, confirmTitle);
                break;
            case "delete_Feed":
                await playwright.waitForText("Are you sure you want to delete the feed", 3, modalConfirmlabel);
                break;
            case "View_on_device":
                await playwright.waitForText("View on device", 3, "div.qr-title");
                await playwright.waitForText("Scan QR code with your phone", 3, "div.qr-label");
                await this.grabElements("div.qr-code-wrapper", 1);
                await this.grabElements(".app-modal button.c-btn", 1, viewOnDevice);
                break;

                // Story Settings
            case "delete_Story":
                await playwright.waitForText("Are you sure you want to delete the Story", 2, modalConfirmlabel);
                break;

            case "delete_Alias":
                await playwright.waitForText("Are you sure you want to delete the alias", 2, modalConfirmlabel);
                break;

            case "delete_Variant":
                await playwright.waitForText("Are you sure you want to delete the variant", 2, modalConfirmlabel);
                break;

            case "archive_Story":
                await playwright.waitForText("Are you sure you want to archive the Story", 2, modalConfirmlabel);
                await this.grabElements(".app-modal button", 3);
                break;
            case "clone_Story":
                await playwright.waitForText("Are you sure you want to clone Story", 2, modalConfirmlabel);
                await playwright.waitForText("Only tags that match tags from the current project are transferred to another project and the match in aspect ratio", 2, ".app-modal .attention-label");
                await playwright.waitForText("Select project", 2, "label.clone-label");
                await playwright.waitForText("Name of the clone Story:", 2, "label.clone-name-label");
                await this.grabElements(".app-modal button", 3);
                break;

            case "Labels":
                await playwright.waitForText("Labels", 2, ".modal-labels div.modal-title");
                break;
            case "Create_label":
                await playwright.waitForText("Create a new label", 2, "h1.modal-title");
                await this.grabElements("label.mb-2", 2);
                await this.grabElements("div.cursor-pointer", 10);
                break;
            case "delete_label":
                await playwright.waitForText("Do you really want to delete the label?", 2, modalConfirmlabel);
                break;
            case "edit_label":
                await playwright.waitForText("Edit the label", 2, modalTitle);
                break;
            }
        } catch (e) {
            await playwright.saveScreenshot("modaText.png");
            output.error("Modal: " + "\n" + e);
        }

        // Buttons check
        try {
            switch (activeModal) {
            case "delete_Alias":
            case "delete_Promocode":
            case "delete_Segment":
            case "delete_Tag":
            case "delete_Webhook":
            case "delete_Placeholder":
            case "delete_Members":
            case "delete_Story":
            case "delete_Group":
            case "delete_Variant":
            case "delete_Feed":
            case "delete_label":
            case "delete_PrivateKey":
                await playwright.waitForText("Confirmation", 3, confirmTitle);
                await this.grabElements("div.modal-confirm button", 3);
                await playwright.see("Delete", "div.modal-confirm button");
                await this.grabCSS(modalDeleteButton, "color", "rgb(255, 255, 255)");
                await this.grabCSS(modalDeleteButton, "background-color", "rgb(255, 78, 78)");
                await playwright.see("Cancel", "div.modal-confirm button");
                await this.grabCSS(cancel, "color", "rgb(255, 255, 255)");
                await this.grabCSS(cancel, "background-color", "rgb(108, 117, 125)");
                // cross button
                await this.grabCSS(crossButton, "color", "rgb(133, 133, 133)");
                await playwright.seeElement("div.modal-confirm .modal-close");
                break;

            case "edit_Feed":
                await playwright.see("Edit", "div.modal-confirm button");
                await this.grabCSS("button.c-btn--primary", "color", "rgb(255, 255, 255)");
                await this.grabCSS("button.c-btn--primary", "background-color", "rgb(12, 98, 243)");
                await playwright.see("Delete", "div.modal-confirm button");
                await this.grabCSS(deleteButton, "color", "rgb(255, 255, 255)");
                await this.grabCSS(deleteButton, "background-color", "rgb(255, 78, 78)");
                break;

            case "create_Feed":
                await this.grabElements("div.modal-confirm button", 2);
                break;
            case "create_Segment":
            case "create_Promocode":
                await this.grabElements(modalButton, 2);
                break;
            case "create_Tag":
            case "invite_Members":
            case "Labels":
                await this.grabElements(modalButton, 1);
                break;
            case "create_PrivateKey":
                await playwright.see("Cancel", cancel);
                await this.grabCSS(cancel, "color", "rgb(255, 255, 255)");
                await this.grabCSS(cancel, "background-color", "rgb(108, 117, 125)");
                await this.grabCSS("input.c-btn--primary", "color", "rgb(255, 255, 255)");
                await this.grabCSS("input.c-btn--primary", "background-color", "rgb(12, 98, 243)");
                break;
            case "close_all_sessions":
                await playwright.waitForText("Are you sure you want to close all sessions (except this one)?");
                await playwright.waitForText("Confirmation", "h1.modal-title");
                await playwright.see("Cancel", cancel);
                await this.grabCSS(cancel, "color", "rgb(255, 255, 255)");
                await this.grabCSS(cancel, "background-color", "rgb(108, 117, 125)");
                await this.grabCSS("input.c-btn--primary", "color", "rgb(255, 255, 255)");
                await this.grabCSS("input.c-btn--primary", "background-color", "rgb(12, 98, 243)");
                break;
            case "logout":
                await this.grabCSS(cancel, "color", "rgb(255, 255, 255)");
                await this.grabCSS(cancel, "background-color", "rgb(108, 117, 125)");
                await this.grabCSS("input.c-btn--primary", "color", "rgb(255, 255, 255)");
                await this.grabCSS("input.c-btn--primary", "background-color", "rgb(12, 98, 243)");
                break;
            }
        } catch (e) {
            output.error("Modal buttons: " + "\n" + e);
        }

        // Error message
        try {
            switch (activeModal) {
            case "error":
                await playwright.waitForVisible(".is-invalid", 2); //! input with red hightlights
                await playwright.waitForVisible("div.error");
                await this.grabCSS("div.error", "color", "rgb(255, 78, 78)");
                await this.grabCSS(".is-invalid", "color", "rgb(255, 78, 78)");
                await playwright.seeElement(disabledButton);
                break;
            case "tagError":
            case "placeholderError":
            case "groupError":
                await playwright.waitForVisible(".is-invalid", 2); //! input with red hightlights
                await playwright.waitForVisible(invalidFeedback);
                await this.grabCSS(invalidFeedback, "color", "rgb(255, 78, 78)");
                await this.grabCSS(".is-invalid", "color", "rgb(255, 78, 78)");
                break;
            }
        } catch (e) {
            output.error("Modal error css: " + "\n" + e);
        }

        try {
            switch (activeModal) {
            case "tagError":
                await playwright.waitForText("Tag and segment have to be unique to the project", 2, invalidFeedback);
                break;
            case "groupError":
                await playwright.waitForText("This group already exists", 2, invalidFeedback);
                break;
            case "placeholderError":
                await playwright.waitForText("Placeholder has to be unique to the project", 2, invalidFeedback);
                break;
            }
        } catch (e) {
            output.error("Modal error text: " + "\n" + e);
        }
    }
