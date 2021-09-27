
  var xhttp = new XMLHttpRequest();
  xhttp.open('GET','data.json',true);
  xhttp.send();

  xhttp.onreadystatechange = function(){
    if(xhttp.readyState == 4 && xhttp.status == 200){

      var data = xhttp.responseText;
      var resp = JSON.parse(data);
      document.getElementById('x').innerHTML = resp.name +"<br> " + resp.lastname;
    }
  }

  


