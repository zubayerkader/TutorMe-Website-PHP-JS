function studentSignUp()
{
	/*
		take info from html form
		put it in DB
		load sign in page
	*/

	var Fname = document.getElementById("fname").value;

	var Lname = document.getElementById("lname").value;

	var Email = document.getElementById("email").value;

	var Pass = document.getElementById("password").value;

	var Phone = document.getElementById("phone").value;

	var Gender;
	var radios = document.getElementsByName("gender");
	for (var i = 0, length = radios.length; i < length; i++) 
	{
    	if (radios[i].checked) 
    	{
        	// do whatever you want with the checked radio
        	Gender = radios[i].value;
        	// only one radio can be logically checked, don't check the rest
        	break;
    	}
	}

	var selectedMajor = document.getElementById("selectMajor");
	var Major = selectedMajor.options[selectedMajor.selectedIndex].value;

	var selectedSchool = document.getElementById("selectSchool");
	var School = selectedSchool.options[selectedSchool.selectedIndex].value;

	/*var queryString = "insertSignUp.php?fname=" + fname +
									"&lname=" + lname +
									"&email=" + email +
									"&pass=" + pass +
									"&cellphone=" + cellphone +
									"&major=" + major +
									"&school=" + school;*/
 
	var obj = {
		fname: Fname,
		lname: Lname,
		email: Email,
		pass: Pass,
		phone: Phone,
		gender: Gender,
		major: Major,
		school: School
	};

	var data = JSON.stringify(obj);

	document.getElementById("demo1").innerHTML = data;

	var xhr = new XMLHttpRequest();
	xhr.open("POST", "http://localhost:8888/studentSignUp.php", true);
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.onreadystatechange = function () 
	{
	    if (this.readyState == 4 && this.status == 200) 
			document.getElementById("demo2").innerHTML = this.responseText;
		//document.write(this.responseText);
	};
	xhr.send(data);
}

function studentSignIn()
{

	var Email = document.getElementById("email").value;

	var Pass = document.getElementById("pass").value;

	var obj = {
		email: Email,
		pass: Pass,
	};

	var data = JSON.stringify(obj);
	
	//document.getElementById("demo1").innerHTML = data;

	var xhr = new XMLHttpRequest();
	xhr.open("POST", "http://localhost:8888/studentSignIn.php", true);
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.onreadystatechange = function () 
	{
	    if (this.readyState == 4 && this.status == 200) 
	    {
			var resultText = this.responseText;
			document.getElementById("demo2").innerHTML = resultText;
			//document.write(this.responseText);
			if (resultText == "Password is valid!")//.indexOf("valid") > 0)
			{

				//document.getElementById("demo2").innerHTML = this.responseText;
				window.location.href = "http://localhost:8888/studentDashboard.php";
			}
		}
	};
	xhr.send(data);
	
}

function tutorSignIn(){}

function tutorSignUp(){}