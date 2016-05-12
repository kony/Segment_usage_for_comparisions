// function setCity(){
//   frmCompare.listBoxCity1.masterData=[
//     ["0", "Delhi"],
// 	["3", "Mumbai"],
// 	["2", "Hyderabad"],
// 	["1", "Bengaluru"]
//   ];
//   frmCompare.listBoxCity1.selectedKey="Delhi";
  
//   frmCompare.listBoxCity2.masterData=[
//     ["0", "Delhi"],
// 	["3", "Mumbai"],
// 	["2", "Hyderabad"],
// 	["1", "Bengaluru"]
//   ];
//    frmCompare.listBoxCity2.selectedKey="Hyderabad";
// }
function onListBox1Selection(){
  //alert(frmCompare.listBoxCity1.selectedKeyValue[1]);
  switch(frmCompare.listBoxCity1.selectedKeyValue[1]){
    case "Bengaluru":
      weatherData.result1=records.data_bengaluru;
      break;
    case "Delhi":
      weatherData.result1=records.data_delhi;
      break;
    case "Hyderabad":
      weatherData.result1=records.data_hyd;
      break;
    case "Mumbai":
      weatherData.result1=records.data_mumbai;
      break;
  }
  setWeatherInfo2seg();
}
function onListBox2Selection(){
 // alert(frmCompare.listBoxCity2.selectedKeyValue[1]);
  switch(frmCompare.listBoxCity2.selectedKeyValue[1]){
    case "Bengaluru":
      weatherData.result2=records.data_bengaluru;
      break;
    case "Delhi":
      weatherData.result2=records.data_delhi;
      break;
    case "Hyderabad":
      weatherData.result2=records.data_hyd;
      break;
    case "Mumbai":
      weatherData.result2=records.data_mumbai;
      break;
  }
  setWeatherInfo2seg();
}