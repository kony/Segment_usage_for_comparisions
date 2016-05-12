// var segDataArray=[];
// var segDataObj={};
// weatherData["result1"]["list"][i]["main"]["temp"]
// weatherData["result1"]["list"][i]["main"]["humidity"]
// weatherData["result1"]["list"][i]["wind"]["speed"]
// weatherData["result1"]["list"][i]["dt_txt"]
function setWeatherInfo2seg(){
  var segDataArray=[];
var segDataObj={};
  var time;
  frmCompare.segWeather.removeAll();
  for(var i=0;i<7;i++){
    time=(weatherData["result1"]["list"][i]["dt_txt"]).split(" ");
    segDataObj={"lblTime":time[1],
               	"imgIcon":"http://openweathermap.org/img/w/"+weatherData["result1"]["list"][i]["weather"][0]["icon"]+".png",
               	"lblTemp":weatherData["result1"]["list"][i]["main"]["temp"],
               	"lblWindSpeed":weatherData["result1"]["list"][i]["wind"]["speed"],
               	"lblHumidity":weatherData["result1"]["list"][i]["main"]["humidity"],
                "lblLine":" ",
                "lblTime2":time[1],
               	"imgIcon2":"http://openweathermap.org/img/w/"+weatherData["result2"]["list"][i]["weather"][0]["icon"]+".png",
               	"lblTemp2":weatherData["result2"]["list"][i]["main"]["temp"],
               	"lblWindSpeed2":weatherData["result2"]["list"][i]["wind"]["speed"],
               	"lblHumidity2":weatherData["result2"]["list"][i]["main"]["humidity"]
               }
    segDataArray.push(segDataObj);
  }
  frmCompare.segWeather.addAll(segDataArray);
}

function showDetails(result,index){
 // frmWeatherDetails.headers.lblTitle="Hello";
  var time=(weatherData[result]["list"][index]["dt_txt"]).split(" ");
  frmWeatherDetails.show();
  frmWeatherDetails.headers[0].lblTitle.text=weatherData[result]["city"]["name"]+", "+weatherData[result]["city"]["country"];
  frmWeatherDetails.lblDate.text=time[0];
  frmWeatherDetails.lblTime.text=time[1];
  frmWeatherDetails.lblWeatherInfo.text=weatherData[result]["list"][index]["weather"][0]["description"];
  frmWeatherDetails.imgWeatherIcon.src="http://openweathermap.org/img/w/"+weatherData[result]["list"][index]["weather"][0]["icon"]+".png";
  frmWeatherDetails.lblMinTempVal.text=weatherData[result]["list"][index]["main"]["temp_min"];
  frmWeatherDetails.lblCurrentTemp.text=weatherData[result]["list"][index]["main"]["temp"];
  frmWeatherDetails.lblMaxTempVal.text=weatherData[result]["list"][index]["main"]["temp_max"];
  frmWeatherDetails.lblWindSpeedVal.text=weatherData[result]["list"][index]["wind"]["speed"];
  frmWeatherDetails.lblPressureVal.text=weatherData[result]["list"][index]["main"]["pressure"];
  
  // alert(frmWeatherDetails.headers[0].lblTitle.text);
  
}
function setSegWidgetCallBack(){
  flxRow.flxData1.onClick=flx_onclick;
  flxRow.flxData2.onClick=flx_onclick;
 // setCity();
 // FlexContainerFavorite.FlexContainerDeleteBtn.onClick = flx_onclick;
}
  function flx_onclick(widget, context){
	var sectionIndex = context["sectionIndex"];
	var rowIndex = parseInt(context["rowIndex"]);
	var seg = context["widgetInfo"];
   // kony.print(JSON.stringify(widget));
   // alert(widget.id);
   // showDetails(rowIndex,widget.id);
    if(widget.id==="flxData1")
      showDetails("result1",rowIndex);
    else if(widget.id==="flxData2")
      showDetails("result2",rowIndex);
}