function calculate() {
	var y=document.getElementById("h_feet").value;
	var x = document.getElementById("h_inch").value;
	if (isNaN(y) || isNaN(x) )
	{ var message = "Invalid input ! Write a number in the text field";
		document.getElementById("error").textContent = message;
	}
	else if( x.length==0 || y.length==0)
	{
		var message1 = "Please write a value in the empty field";
		document.getElementById("error").textContent = message1;
	}
	else if(document.getElementById("m").checked)
	{  
		var s= document.getElementById("units");
		var op = s.options[s.selectedIndex].value;
		if(op === "kilo")
		{
			var res = 56.2 + (1.41*x);
		}
		else if(op === "pound"){
			res = 123.64 + (3.102*x);
		}

		document.getElementById("res").value = res;
		
		

	}
	else if(document.getElementById("f").checked)
	{  
		var s= document.getElementById("units");
		var op = s.options[s.selectedIndex].value;
		if(op === "kilo")
		{
			var res = 53.1 + (1.36*x);
		}
		else if(op ==="pound"){
			res = 116.82 + (2.992*x);
		}

		document.getElementById("res").value = res;
		
		

	}
	

}
function resett() {

	document.getElementById("calcform").reset();
	document.getElementById("error").textContent = "";
}
function convert() {

        var unit= document.getElementById("units");
		var opt = unit.options[unit.selectedIndex].value;
		if(opt === "kilo")
		{
			var old_value = document.getElementById("res").value;
			var new_value = old_value/2.2 ;
			document.getElementById("res").value = new_value;

		}
		else if(opt ==="pound"){
			var old_value = document.getElementById("res").value;
			var new_value = old_value*2.2 ;
			document.getElementById("res").value = new_value;
		}

}