// JavaScript Document
function ca(){
	var total,total1,total2,r,total4;
	
	total3=0,total1=0,total2=0,total4=0;
	
	if(form1.RadioGroup1_0.checked){total=17999;}
	else if(form1.RadioGroup1_1.checked){total=13586;}
	else if(form1.RadioGroup1_2.checked){total=3499;}
	//////////////////////////////////////////////
	if(form1.Chek1_0.checked){total1=total1+153;}
    if(form1.Chek1_1.checked){total1=total1+49;}
	if(form1.Chek1_2.checked){total1=total1+219;}
 ///////////////////////////////////////////////
	if(form1.T2.selectedIndex ==0){total2=10;}	
else if(form1.T2.selectedIndex ==1){total2=20;}	
else if(form1.T2.selectedIndex ==2){total2=30;}	
else if(form1.T2.selectedIndex ==3){total2=40;}	
else if(form1.T2.selectedIndex ==4){total2=50;}	
else if(form1.T2.selectedIndex ==5){total2=100;}	
else if(form1.T2.selectedIndex ==6){total2=150;}	
else if(form1.T2.selectedIndex ==7){total2=200;}
else if(form1.T2.selectedIndex ==8){total2=500;}	
else if(form1.T2.selectedIndex ==9){total2=1000;}	
		////////////////////////////////////////////
		
		if(form1.T1.selectedIndex ==0){
		total4=(total+total1)/(100);
		total3=total+total1-(total4*3)+total2;
		}
		else if(form1.T1.selectedIndex ==1){
		total3=total+total1+total2;}
		else if(form1.T1.selectedIndex ==2){
		total4=(total+total1)/(100);
		total3=total+total1+(total4*3)+total2;}
	
	
	
		document.form1.r.value=total3;
	}