function writeDataToFirebase(data, data2, data3, data4, updated) {
  var ss = SpreadsheetApp.openById(""); // id spreadsheet
  var sheet = ss.getSheets()[0]; //ambil sheet pertama
  //var data = sheet.getDataRange().getValues();
  var dataToImport = {};
  
  dataToImport['sensor1'] = {
    data: data,
    data2: data2,
    data3: data3,
    data4: data4,
    updated: updated
  };
  
  var firebaseSecret = ""; //firebase database secret
  var firebaseUrl = "https://"; //url firebase database
  var base = FirebaseApp.getDatabaseByUrl(firebaseUrl,firebaseSecret);
  base.setData("/sensor-latest", dataToImport); //lokasi tempat menyimpan
}
