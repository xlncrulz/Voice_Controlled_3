var SpeechRecognition= window.webkitSpeechRecognition;
var recognition =new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}

recognition.onresult= function(event) {

console.log(event);
var Content=event.results[0][0].transcript;
console.log(Content);

document.getElementById("textbox").innerHTML=Content;
console.log(Content);
if(Content =="take my selfie")
{
    console.log("taking selfie --- ")

speak();
   }
}

function speak(){
    var snyth =window.speechSynthesis;
    speak_data="Taking Your Selfie in 5 Seconds";
    var utterThis =new SpeechSynthesisUtterance(speak_data);
    snyth.speak(utterThis);
    Webcam.attach(camera);

    setTimeout(function()
    {
        img_id="selfie1";
        take_snapshot();
        save();
        speak_data="Taking Your Selfie in 10 Seconds";
    var utterThis =new SpeechSynthesisUtterance(speak_data);
    snyth.speak(utterThis); 
    },5000);

    setTimeout(function()
    {
        img_id="selfie2";
        take_snapshot();
        save();
        speak_data="Taking Your Selfie in 15 Seconds";
    var utterThis =new SpeechSynthesisUtterance(speak_data);
    snyth.speak(utterThis); 
    },10000);
    

    setTimeout(function()
    {
        img_id="selfie3";
        take_snapshot();
        save(); 
    },15000);
}

Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
})
camera=document.getElementById("camera");

function take_snapshot()
{
    Webcam.snap(function(data_uri){
if(img_id=="selfie1"){
    document.getElementById("result1").innerHTML='<img id="selfie1" src="'+data_uri+'">';
}
if(img_id=="selfie2"){
    document.getElementById("result2").innerHTML='<img id="selfie2" src="'+data_uri+'">';
}
if(img_id=="selfie3"){
    document.getElementById("result3").innerHTML='<img id="selfie3" src="'+data_uri+'">';
}
    });
}

