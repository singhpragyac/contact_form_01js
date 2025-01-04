function myalert() {
     alert("Message Sent!Thanks for completing the form. We'll be in touch soon!")
    
}

function myAlert1(message="Thanks for completing the form. We'll be in touch soon!") {
     // let fname_val = document.getElementById("fname").value;
     // let lname_val = document.getElementById("lname").value;
     // let email_val = document.getElementById("email").value;
     // let query_val = document.getElementsByName("query");
     // let message_val = document.getElementById("message").value;
     // let contacted_by_team_val = document.getElementById("contacted_by_team");
     // if(fname_val != '' && lname_val != '' && email_val != '' &&
     //     message_val != '' && contacted_by_team_val.checked == true &&
     //     (query_val[0].checked || query_val[1].checked))
     // {
          // document.getElementById("alertMessage").innerHTML =message;
     // }
     document.getElementById("alertMessage").innerHTML = message;
     document.getElementById("customAlertBox").style.display = "block";
}