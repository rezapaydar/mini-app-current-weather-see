function request(){
    let lat=document.getElementById('lat').value;
    let lng=document.getElementById('lon').value;
    let demo= document.getElementById('demo');
    let prop=document.getElementById('prop');
    let placename= document.getElementById('placename');
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       let weatherplace = JSON.parse(this.responseText);
       console.log(weatherplace);
       if(weatherplace.sys.country=="IR")
       weatherplace.sys.country=="ایران"

       if(weatherplace.name=="Hamedan")
       weatherplace.name=="همدان"

       placename.innerHTML=`<th>نام کشور :${weatherplace.sys.country}</th><th colspan="2"> نام منطقه: ${weatherplace.name}</th>`
       demo.innerHTML=`<td>وضعیت هوا</td><td>جزئیات</td><td>اواتار وضعیت</td>`
       prop.innerHTML=`<td>${weatherplace.weather[0].main}</td><td>${weatherplace.weather[0].description}</td><td><img src="http://openweathermap.org/img/wn/${weatherplace.weather[0].icon}@2x.png"></td>`
      }
    };
    xhttp.open("GET", `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=c3f9debc0b81ddc86738fdac03bd2612`, true);
    xhttp.send();
}
