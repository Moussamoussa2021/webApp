console.log("good morning"+"page loaded...");
function play(vid){
     vid.play();
}
function pause(vid){
    vid.pause();
}
var videoid=document.querySelector('#videoid');
console.log(videoid);
function skip(){
    videoid.src="assets/Time_Lapse_Video_Of_Night_Sky.mp4";
}