let btn=document.querySelector("#btn");
let content=document.querySelector("#content");

function speak(text){
let text_speak=new SpeechSynthesisUtterance(text);
text_speak.volume=1;
text_speak.rate=1;
text_speak.pitch=1;
text_speak.lang="hi-GB";
window.speechSynthesis.speak(text_speak);
}
//let name=prompt("Enter your Name");
function wishMe(){
    let time=new Date();
    let hours=time.getHours();
    let clock=time.getDate();
    if(hours>=5 && hours<12){
        speak("Good Morning Sir");
    }
   else if(hours>=12 && hours<17){
        speak("Good Afternoon Sir");
    }
   else if(hours>=17 && hours<21){
        speak("Good Evening Sir");
    }
    else {
        speak("Good Night Sir");
    }
    speak(`Aaj ${clock} taarikh hai`);
}



let speechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition= new speechRecognition();

recognition.onresult=(event)=>{
let currIndex=event.resultIndex;
let transcript=event.results[currIndex][0].transcript;
content.innerHTML=`${transcript}`;
takeCommand(transcript.toLowerCase());
}

btn.addEventListener("click",()=>{
    recognition.start();
    btn.style.display="none";
    document.querySelector(".voice-pic").style.display="block";
})


function takeCommand(message){
    btn.style.display="flex";
    document.querySelector(".voice-pic").style.display="none";
    if(message.includes("hello jenny")|| message.includes("hi jenny")|| message.includes("hey jenny")){
        speak(`Hello ${name}`);
        speak("How can I help you?");
    }
    else if(message.includes("who are you")|| message.includes("who created you")){
        speak("I am Jenny");
        speak("A virtual Assistant");
        speak("Created by Debajit Sir");
    }
    else if(message.includes("how are you")){
        speak("I am fine");
        speak("Are you Ok Sir?");
    }
    else if(message.includes("yes i am ok")|| message.includes("no i am not ok")){
        speak("Take care ");
        speak("Sir");
    }
    else if(message.includes("open youtube")){
        speak("Opening    ");
        speak("UTube");
        window.open("https://www.youtube.com/");
    } 
    else if(message.includes("jenny open google")){
        speak("Opening    ");
        speak("Google");
        window.open("https://www.google.com/");
    }
    else if(message.includes("open facebook")){
        speak("Opening    ");
        speak("Facebook");
        window.open("https://www.facebook.com/");
    }
    else if(message.includes("open instagram")){
        speak("Opening    ");
        speak("Instagram");
        window.open("https://www.instagram.com/");
    }
    else if(message.includes("open twitter")){
        speak("Opening    ");
        speak("Twitter");
        window.open("https://x.com/home?lang=en");
    }
    else if(message.includes("refresh page")){
        window.onload=wishMe();
        window.location.reload();
    }
    else if(message.includes("open whatsapp")){
        speak("Opening    ");
        speak("Whatsapp");
        window.open("https://web.whatsapp.com/");
    }
    else if(message.includes("open calculator")){
        speak("Opening    ");
        speak("calculator");
         window.open("https://www.google.com/search?q=calculator");
    }

    else if(message.includes("open chat gpt")){
        speak("Opening    ");
        speak("chat Gpt");
         window.open("https://chatgpt.com/");
    }
else if(message.includes("what is time")){
    let samay=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"});
    speak(samay);
}
else if(message.includes(" what is date")){
    let tarikh=new Date().toLocaleString(undefined,{day:"numeric",month:"short",weekday:"short",year:"numeric"});
    speak(tarikh);
}
    else {
       let finalText="showing results about"+message.replace("jenny","");
       speak(finalText);
       window.open(`https://www.google.com/search?q=${message.replace("jenny","")}`);
    }
}