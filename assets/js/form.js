function submitHandler() {
    const Projectname = document.getElementById("Projectname").value;
    const Startdate = document.getElementById("Startdate").value;
    const Enddate = document.getElementById("Enddate").value;
    const Message = document.getElementById("Message").value;
    // let Nodejs = document.getElementById("Nodejs").value;
    
    if (Projectname == "") {
     alert("plss type ur name");
    } else if (Startdate == ""){
     alert("plss type ur Email");
    } else if (Enddate == ""){
     alert("plss type ur phone number");
    } else if (Message == ""){
     alert("plss type ur Message");
    // }  if (Nodejs == ""){
    //     alert("plss type ur subject")
    }

}
