function changeLang()
{
	var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     loadLang(this);
    }
  };
  xmlhttp.open("GET", "ger.xml", true);
  xmlhttp.send();
}
function loadLang(xml)
{
	xmlDoc=xml.responseXML;
	var ev1=xmlDoc.getElementsByTagName("ev1");
	documnet.getElementById("ev1").innerHTML=ev1[0].childNodes[0].nodeValue;
	
	var ev2 = xmlDoc.getElementsByTagName("ev2");
	document.getElementById("ev2").innerHTML = ev2[0].childNodes[0].nodeValue;
	
	var ev3 = xmlDoc.getElementsByTagName("ev3");
	document.getElementById("ev3").innerHTML = ev3[0].childnodes[0].nodeValue;
}
