function start ()
{
	var request = new XMLHttpRequest();
    var url = "https://restcountries.eu/rest/v2/name/";
    console.log(url + document.getElementById("vvod").value);
    request.open('GET', url + document.getElementById("vvod").value);

    request.responseType = 'json';
    request.send();
    
    request.onload = function()
    {

    	console.log(request.response); 

    	var otvet = request.response;

    	if(otvet.status ==404)
    	{
    		
    		document.getElementById("image1").src = "err.png";
    		document.getElementById("capital").style.display = "none";
    		document.getElementById("lang").style.display = "none";
    		document.getElementById("val").style.display = "none";
    		document.getElementById("name").style.display = "inline";
    		document.getElementById("name").innerHTML = "Страна не найдена";
    		document.getElementById("bo").style.display = "inline";
    	}
    	else
    	{
    	
    	document.getElementById("bo").style.display = "inline";
    	document.getElementById("image1").src = otvet[0].flag;

    	document.getElementById("name").innerHTML = otvet[0].name;

    	document.getElementById("name").style.display = "inline";
    	if (document.getElementById("check1").checked) 
    	{
    		document.getElementById("capital").innerHTML = otvet[0].capital;
    		document.getElementById("capital").style.display = "inline";
    	}
    	else
    	{
    		document.getElementById("capital").style.display = "none";
    	}

    	if (document.getElementById("check2").checked) 
    	{
    		document.getElementById("lang").innerHTML = otvet[0].languages[0].nativeName;
    		document.getElementById("lang").style.display = "inline";
    	}
    	else
    	{
    		document.getElementById("lang").style.display = "none";
    	}

    	if (document.getElementById("check3").checked) 
    	{
    		document.getElementById("val").innerHTML = otvet[0].currencies[0].name;
    		document.getElementById("val").style.display = "inline";
    	}
    	else
    	{
    		document.getElementById("val").style.display = "none";
    	}
    	}
    }	


}