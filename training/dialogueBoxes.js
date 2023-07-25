// Dialog Boxes in Javascript

/*
INTRODUCTION

JavaScript supports dialog boxes. These dialog boxes or popups are used to interact with the user. They are also used to notify a user or to receive some user input before proceeding. 

There are three types of dialog boxes:

1. Alert Dialog Box
2. Prompt Dialog Box
3. Confirm Dialog Box


These dialog boxes' appearance is defined by the operating system or browser settings. They cannot be changed using CSS. Also, dialog boxes are modal windows, which means that when one is presented, code execution stops and only begins when the dialog box is dismissed.

============================================================================
Alert Dialog Box
============================================================================
An alert dialog box is typically used to provide users with a warning message. For example, if one input field requires text input but does not provide any, use an alert box to display a warning message.

alert("You haven’t filled everything");

================================================================
Prompt Dialog Box
================================================================

If you want the user to enter a value before proceeding to the next page, a prompt box is a solution.

The prompt() method is used to display this dialog box, and it accepts two parameters: (i) a label to display in the text box and (ii) a default string to display in the text box.

Example:
var Val = prompt("Enter name : ", "name");


================================================================
Confirm Dialog Box
================================================================

Confirm Dialog Box allows users to confirm or approve anything. To proceed, the user must click "OK" or "Cancel" when a confirmation window appears. It will return true if the user hits the OK button. If the user presses the Cancel button, confirm() returns false, and null is displayed.

Example:
var value = confirm("Do you want to continue? ");
*/

