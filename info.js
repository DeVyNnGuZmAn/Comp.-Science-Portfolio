// JavaScript File
var item1 = document.getElementById("#item1");
var item2 = document.getElementById("#item2");
var info1 = document.getElementById("#info1");
var info2 = document.getElementById("#info2");


item1.addEventListener("click", function(){
    info1.innerHTML = "Call of Duty: Black Ops III is a military science fiction first-person shooter video game, developed by Treyarch and published by Activision.";
    info2.innerHTML = "It is the twelfth entry in the Call of Duty series and the sequel to the 2012 video game Call of Duty: Black Ops II.";
});
                       
item2.addEventListener("click", function(){
    info1.innerHTML = "Grand Theft Auto Online, more commonly known as GTA Online, consists of open world sessions based in the same map as GTA V.";
    info2.innerHTML = "Sessions are limited to 16 players on PlayStation 3 and Xbox 360 and expanded to 30 players (with 2 extra spaces for viewers) on PlayStation 4, Xbox One and PC.";
});
                       
item3.addEventListener("click", function(){
    info1.innerHTML="BLACK OPS 3 ZOMBIES IS THE MOST IMMERSIVE AND AMBITIOUS CALL OF DUTY ZOMBIES TO DATE."; 
    info2.innerHTML="SHADOWS OF EVIL WILL BRING DARKNESS AND CHAOS LIKE NEVER BEFORE WHILE DELIVERING A TOTALLY UNIQUE AND HIGHLY CREATIVE GAMEPLAY SETTING, COMPLETE WITH A MIND-BLOWING EXPERIENCE WITH A CAPTIVATING STORYLINE, AS WELL AS ITS OWN XP PROGRESSION SYSTEM.";
});