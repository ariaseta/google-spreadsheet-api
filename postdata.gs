function doPost(request){
  
  var ss = SpreadsheetApp.openById(''); //isikan spreadsheet ID
  
  var timestamp = Utilities.formatDate(new Date(), "GMT+7", "MM/dd/yyyy HH:mm:ss");
  var nama = request.parameter.nama;
  var jenis_kelamin = request.parameter.jenis_kelamin;
  var alamat = request.parameter.alamat;
  
  ss.appendRow([timestamp, nama, jenis_kelamin, alamat]);
  
  var jsonObject =
  {
    status: 'sukses'  
  }
  
  var JSONString = JSON.stringify(jsonObject);
  var JSONOutput = ContentService.createTextOutput(JSONString);
  JSONOutput.setMimeType(ContentService.MimeType.JSON);
  return JSONOutput;
  
}
