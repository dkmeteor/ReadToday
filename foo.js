var body=document.getElementsByTagName("body")[0];
alert(document.getElementById("body")[0].innerHTML);
var content=body.innerHTML;

var storage = window.localStorage;
var myDate = new Date();
storage.setItem(myDate.getTime(),content);
