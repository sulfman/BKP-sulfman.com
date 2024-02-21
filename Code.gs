function doGet() {
  return HtmlService.createHtmlOutputFromFile('contact');
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function submitForm(data) {
  var sheet = SpreadsheetApp.openById('1YpmtxFxcZMrP09fMLgTYPh8i9WtVvetDPfMU55LNeK0').getActiveSheet();
  sheet.appendRow(data);
}