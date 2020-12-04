function getUserName() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
		console.log(this.responseText)
     var event_list=JSON.parse(this.responseText).users;
     var isUserFound=false;
	 var ur_name= document.getElementById(user_name).value;
     for(var i=0; i<event_list.length; i++)
     {
     	if(ur_name==user_list[i].user_name)
     	{
     		var t= "<header><b>User Details</b><header><br/><table><tr><td>Name</td><td>"+user_list[i].name+"</td></tr><tr><td>Phone No</td><td>"+user_list[i].pho_no+"</td></tr><tr><td>Email id</td><td>"+user_list[i].email+"</td></tr><tr><td>Event</td><td>"+user_list[i].event+"</td></tr><tr><td>Venue</td><td>"+user_list[i].venue+"</td></tr><tr><td>Timimgs</td><td>"+user_list[i].timing+"</td></tr></table>"
     		document.getElementById("user_name").innerHTML=t;
     		isUserFound=true;
     	}
     }
     if (isUserFound==false)
     {
     	document.getElementById("user_name").innerHTML="user details not found";
     }
     
    }
  };
  xhttp.open("GET", "user_details.json", true);
  xhttp.send();
  }