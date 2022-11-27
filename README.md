# CodeCeptJs

This is just a small part of my end-to-end auto tests. I propose to look at the code of the [modalcheck](https://github.com/Mybono/CodeCeptJs/blob/main/modalCheck.js) function. Our story redactor has many different modals, [modalcheck](https://github.com/Mybono/CodeCeptJs/blob/main/modalCheck.js) func test them. 
We can call it in test just by: I.modalCheck("create_Placeholder");
[modalcheck](https://github.com/Mybono/CodeCeptJs/blob/main/modalCheck.js) checks: the text, css by [grabCss](https://github.com/Mybono/CodeCeptJs/blob/main/grabCss.js) func & buttons by [grabElements](https://github.com/Mybono/CodeCeptJs/blob/main/grabElements.js) func, in each modal, and initiates a visual comparison.
