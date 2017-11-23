function doGet(request){
  var ss      = SpreadsheetApp.openById(''); //isikan spreadsheet ID
  
  var data = ss.getDataRange().getValues();
  
  var jumlahKolom = data[0].length;
  var namaKolom = data[0];

  var jsonArray = [];
  
  var banyakData = data.length;
  
  for (var i = 1; i < banyakData; i++) {
    var jsonObject = {};
    for(var kolomAktif = 0; kolomAktif < jumlahKolom; kolomAktif++){
    
      jsonObject[data[0][kolomAktif]] = data[i][kolomAktif];
     
    }
    jsonArray.push(jsonObject);
    
  }
  
  var JSONString = JSON.stringify(jsonArray);
  var JSONOutput = ContentService.createTextOutput(JSONString);
  JSONOutput.setMimeType(ContentService.MimeType.JSON);
  return JSONOutput;

}


function doPost(request) {
  
 // Return plain text Output
 // return ContentService.createTextOutput("success");
  

}



