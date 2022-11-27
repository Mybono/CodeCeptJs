## [CodeCeptJs](https://codecept.io/)

### This is just a small part of my end-to-end auto tests. 
### I propose to look at the code of the [modalCheck.js](https://github.com/Mybono/CodeCeptJs/blob/main/modalCheck.js) function. Our story redactor has many different  modals, [modalCheck.js](https://github.com/Mybono/CodeCeptJs/blob/main/modalCheck.js) func test them. We can call it in test just by: I.modalCheck("create_Placeholder"); [modalCheck.js](https://github.com/Mybono/CodeCeptJs/blob/main/modalCheck.js) checks: the text, css by [grabCss.js](https://github.com/Mybono/CodeCeptJs/blob/main/grabCss.js) func & buttons by [grabElements.js](https://github.com/Mybono/CodeCeptJs/blob/main/grabElements.js) func, in each modal.

### And second example is [Checking the position of an element func](https://github.com/Mybono/CodeCeptJs/blob/main/checkPosition.js), this function checks the coordinates of elements between different events. For example you can look at [editButton.js](https://github.com/Mybono/CodeCeptJs/blob/main/editButton.js)

### Last one is [rateUs.js](https://github.com/Mybono/CodeCeptJs/blob/main/rateUs.js), the test continues less than 7 seconds but checks almost all the functionality of one of the widgets. In addition, the test uses the [visual compare function](https://github.com/Mybono/CodeCeptJs/blob/main/elementVisualCompare.js).


