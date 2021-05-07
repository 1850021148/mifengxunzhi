// JavaScript Document

var time;
var id=null;
var i=1;
function showtime(){
	var up=document.getElementById("get7");
	if(time==0)
	{
	up.innerHTML="重新获取验证码";
    if(id!=null)
    {clearInterval(id);
     id=null;  
     console.log('倒计时清除成功');}

	}
	else{
	time=time-1;
	up.innerHTML="获取验证码(剩余"+time+"s)";}

	}

function resert(){

if(time<=0||i==1)
{
  time=60;
  if(id!=null)
  {clearInterval(id);
  id=null;}
  
  else
  id=setInterval("showtime()",1000);

i++;}

else{
	alert('操作频繁，请'+time+'s后再重试');}
}	