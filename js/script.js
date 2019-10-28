Male
Sunday: Kwasi

Monday: Kwadwo

Tuesday: Kwabena

Wednesday: Kwaku

Thursday:  Yaw

Friday: Kofi

Saturday: Kwame

Female
Sunday: Akosua
/*
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
  // alert(date1);
  var ged1 = document.getElementById("ged").value;
  
  var date2 = date1.toString(); 
  var cc = date2.slice(0,2);
  var yy =date2.slice(2,4);
  var mm =date2.slice(5,7);
  var dd =date2.slice(8,10);
  
  var dow = ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7
  alert(date2);
 }