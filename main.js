var SpeechRecognition = window.webkitSpeechRecognition;
var recocognition = new SpeechRecognition();

function Start(){
    document.getElementById("textbox").innerHTML="";
    recocognition.start();
}

recocognition.onresult = function run(event) {
    console.log(event);
    var Content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
    if(Content =='take my selfie')
    {
        console.log("taking selfie ------ ");
        Speak();
    }
    
}

function Speak(){
    var synth = window.speechSynthesis;
    var speak_data = "Taking you selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);

    setTimeout(function()
    {
     take_snapshot();
     save();
    }, 5000);
    
} 

Webcam.set({
    width:360,
    height:250,
    image_format: 'png',
    png_quality:90
 });
var Camera=document.getElementById("camera");

function take_snapshot(){
    Webcam.snap(function(data_url){
     document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_url+'">';
    });
}

function save()
{
    link = document.getElementById("link");
    Image = document.getElementById("selfie_image").src ; 
    link.href = Image ;
    link.click();
}