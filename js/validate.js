
	//form validation part
    let mon=document.getElementById('mon')
    let day=document.getElementById('day')
    let year =document.getElementById('year')
    let age =document.getElementById('age')
    let blabel = document.getElementById('birthdate')
	
	function namevalidate(){
		var textField=document.getElementById("textField");
		var inputTxt=document.getElementById("firstname");
		var expname=/^[a-zA-Z ]{3,20}$/;

		if(inputTxt.value != '' ){
        
		if(inputTxt.value.length >= 3 && inputTxt.value.length <= 20  ){
		
			if(inputTxt.value.match(expname)){
				textField.innerHTML = "&nbsp;";
				return true;	
			}
			else{
				
				textField.textContent = 'only letters And White space';
				textField.style.color = "red";
				return false;
				
			}  
		}else{
			
			textField.textContent = 'your input should between 3-20 chracters';
			textField.style.color = "red";
			return false
			
		}   
	}else{
		document.getElementById("firstname").required=true;
		textField.textContent = 'your input is empty';
		textField.style.color = "red";
		return false;
	}
}
	function lastnameval(inputTxt){
	var textField2=document.getElementById("textField2");
	var inputTxt=document.getElementById("lastname");
		var expname=/^[a-zA-Z ]{1,10}$/;
		
		if(inputTxt.value != '' ){
        
		if(inputTxt.value.length >= 1 && inputTxt.value.length <= 10  ){
		
			if(inputTxt.value.match(expname)){
				textField2.innerHTML = "&nbsp;";
				return true;	
			}else{
				
				textField2.textContent = 'only letters And White space';
				textField2.style.color = "red";
				return false;
				
			}  
		}else{
			
			textField2.textContent = 'your input should between 1-10 chracters';
			textField2.style.color = "red";
			return false;
			
		}   
	}else{
		
		textField2.textContent = 'your input is empty';
		textField2.style.color = "red";
		return false;
		
	}

}

	function phoneval(){

	var textField3=document.getElementById("textField3");
	var inputTxt=document.getElementById("phone");
		var expname=/^[0-9]{10}$/;
		
		if(inputTxt.value != '' ){
        
			if(inputTxt.value.match(expname)){
				textField3.innerHTML = "&nbsp;";
				return true;
					
			}
			else{
			
			textField3.textContent = 'must contain 10 numbericals and no alphabets allowed';
			textField3.style.color = "red";
			return false;
			
			}   
		}
		
	else{
		
		textField3.textContent = 'enter number plz';
		textField3.style.color = "red";
		return false;
		
		}
}
	function officeval(){

	var textField4=document.getElementById("textField4");
	var inputTxt=document.getElementById("office");
		var expname=/^[0-9]{10}$/;
		
		if(inputTxt.value != '' ){
        
			if(inputTxt.value.match(expname)){
				textField4.innerHTML = "&nbsp;";
				return true;
					
			}
			else{
			
			textField4.textContent = 'must contain 10 numbericals and no alphabets allowed';
			textField4.style.color = "red";
			return false;
			
			}   
		}
		
	else{
		
		textField4.textContent = 'enter number plz';
		textField4.style.color = "red";
		return false;
		
		}
}

	function checkmail(){
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;//mysite@ourearth.com
	var textField5=document.getElementById("textField5");
	var inputTxt=document.getElementById("email");

		if(inputTxt.value.match(mailformat))
		{
			textField5.innerHTML = "&nbsp;";
			return true;
		}
		else
		{
			textField5.textContent = 'Invalid email eg(mysite@ourearth.com)';
			textField5.style.color = "red";
			return false;
			
		}
}

	function checkpass(){

	var textField6=document.getElementById("textField6");
	var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;//To check a password between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter
	var inputTxt=document.getElementById("password");
			
	if(inputTxt.value.match(passw)) 
	{ 
		textField6.innerHTML = "&nbsp;";
			return true;	
	}
	else
	{ 
		textField6.textContent = 'length(6-20) must contain digit,uppercase,lowercase';
		textField6.style.color = "red";
		return false;
	}
}
	function checkconpass(){
		var textField7=document.getElementById("textField7");
		var pass=document.getElementById("password");
		var inputTxt=document.getElementById("password2");

	if(pass.value==inputTxt.value)
	{ 
		textField7.innerHTML = "&nbsp;";
			return true;	
	}
	else
	{ 
		textField7.textContent = 'plz check your passward and confirm passward fields ';
		textField7.style.color = "red";
		return false;
	}
}

	function validabout(){
	//var val=document.getElementsByTagName("textarea").value;
	var textField12=document.getElementById("textField12");
    var inputTxt=document.getElementById("msg");

	if(inputTxt.value!=""){
		textField12.innerHTML = "&nbsp;";
			return true;
	}
	else{
		textField12.textContent = 'Field cannot be Empty';
		textField12.style.color = "red";
		return false;
	}
}

	function checkboxvalidity() {
		var textField11=document.getElementById("textField11");
		var inputElems = document.getElementsByTagName("input");
      	var count = 0;
     	for (var i=0; i<inputElems.length; i++) {
        if (inputElems[i].type === "checkbox" && inputElems[i].checked === true) {
          count++;
        }
      }
      if(count==0){
        
		textField11.innerHTML = "&nbsp;";
		textField11.innerHTML=" <br> <br>Must select atleast one ";
		textField11.style.color="red";
		
        event.preventDefault();
		return false;	
      }
	  else{
			textField11.innerHTML = "&nbsp;";
			return true;
	  }
};

	function radio_validity(){
	var textField10=document.getElementById("textField11");

	var radios = document.getElementsByName("radio");

     for (var i = 0, len = radios.length; i < len; i++) {
          if (radios[i].checked) {
			textField10.innerHTML = "&nbsp;";
              return true;
          }
     }
	 	textField10.innerHTML = "&nbsp;";
		textField10.innerHTML=" <br> <br>choose any one of choices given ";
		textField10.style.color="red";

     return false;

}

function agecalc(){
    if(mon.value!='mon' && day.value!='day' && year.value!='year'){

    
    const d = new Date()
    

    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

    console.log(date)

    blabel.style.color=""
    const date1 = new Date(mon.value+'/'+day.value+'/'+year.value);
    console.log(d.getMonth()+'/'+d.getDay()+'/'+d.getFullYear());
    const date2 = new Date(d.getMonth()+1+'/'+d.getDate()+'/'+d.getFullYear());
    console.log(date1,date2);
    const diff = Math.abs(date2 - date1);
    const currentAge =(diff/ (1000  *60 * 60 * 24))/365
    age.value=parseFloat(currentAge)
    age.style.border='2px solid green'
    
    return true
    
    }else{
        age.value="";
        alert("please select birthdate to calculate age")
        age.style.border='2px solid red'
        blabel.style.color="red"
        return false
    }
}
		
	

function validate_form(){
	var f1=namevalidate();
	var f2=lastnameval();
	var f3=phoneval();
	var f4=officeval();
    var f5=checkmail();
    var f6=checkpass();
    var f7=checkconpass();
    var f8=checkboxvalidity();
    var f9=radio_validity();
    var f10=agecalc();
    var f11=validabout();


	if(f1 && f2 && f3 && f4 && f5 && f6 && f7 && f8 && f9 && f10 && f11){
		alert("form submitted");
       
        window.location.href = 'https://www.google.com';
        
    
        
	}
	else{
		alert("fill all  fields");
        
        return false;
        
	}
}
