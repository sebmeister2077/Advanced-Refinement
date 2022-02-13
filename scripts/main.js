
require('items');
require('liquids');
require('./blocks')


Vars.enableConsole = true;// so i wont have to use the dev mode

const myDialog = new BaseDialog("Dialog Title");
// Add "go back" button
myDialog.addCloseButton();
// Add text to the main content
myDialog.cont.add("Goodbye.");
// Show dialog
myDialog.setVisible(true);

Vars.ui.showInfoPopup("Yo", 40000, 10, 100, 100, 100, 100)
Vars.ui.showInfo("Another info")