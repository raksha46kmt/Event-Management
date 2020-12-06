function getEventDetails() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    console.log(this.responseText)
     var event_list=JSON.parse(this.responseText).events;
     var isEventFound=false;
   var event_name= document.getElementById("eventname").value;
     for(var i=0; i<event_list.length; i++)
     {
      if(event_name==event_list[i].name)
      {
        var t= "<header><b>Event Details</b><header><br/><table><tr><td>Name</td><td>"+event_list[i].name+"</td></tr><tr><td>Phone No</td><td>"+event_list[i].pho_no+"</td></tr><tr><td>Email id</td><td>"+event_list[i].email+"</td></tr><tr><td>Event</td><td>"+event_list[i].event+"</td></tr><tr><td>Venue</td><td>"+event_list[i].venue+"</td></tr><tr><td>Timimg</td><td>"+event_list[i].timing+"</td></tr></table>"
        document.getElementById("event_details").innerHTML=t;
        isEventFound=true;
      }
     }
     if (isEventFound==false)
     {
      document.getElementById("event_details").innerHTML="Event not found";
     }
     
    }
  };
  xhttp.open("GET", "event_details.json", true);
  xhttp.send();
  }

