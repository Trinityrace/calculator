/*Male
Sunday: Kwasi

Monday: Kwadwo

Tuesday: Kwabena

Wednesday: Kwaku

Thursday:  Yaw

Friday: Kofi

Saturday: Kwame

Female
Sunday: Akosua

Monday: Adwoa

Tuesday: Abenaa

Wednesday: Akua

Thursday:  Yaa

Friday: Afua

Saturday: Ama

Most people do know when their birthdays are, but some might not know what day of the week they were born. Luckily for us, there are ways to calculate the day of the week from a specific date. The following is one of the many methods that exist for that;

Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7

 where;

 CC - is the century digits. For example 1989 has CC = 19

 YY - is the Year digits (1989 has YY = 89)

 MM -  is the Month

 DD - is the Day of the month 

 mod - is the modulus function ( % )*/

 function Akancalculator(){
  var date1 = document.getElementById("db").value;
  var date2 = new Date(date1)
  var date3 = date2.getDay();
  var ged1 = document.getElementById("ged");
  var ged2 = document.getElementById("ged3");
  //  for (var n = 0, ln = ged1.length; n < ln; n++){
  //     if(ged1[n].checked){
  //       var genderfinal = ged1[n].value;
  //       alert(genderfinal);
  //     }
      // else{
      //   genderfinal = ged1[n].value;
      // }
   
  
  // var date2 = date1.toString(); 
  // var cc = parseInt(date2.slice(0,2));
  // var yy = parseInt(date2.slice(2,4));
  // var mm = parseInt(date2.slice(5,7));
  // var dd = parseInt(date2.slice(8,10));
  
  // var dow = Math.trunc (( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7);

  var gendfemale = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
  var gendmale = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
  if (ged1.checked==true){
    alert(gendmale[date3])
  }
  else if(ged2.checked==true){
  alert(gendfemale[date3])
  }
  else{
    alert("Choose gender");
  }
}