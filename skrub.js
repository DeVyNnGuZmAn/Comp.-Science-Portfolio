var starta = document.getElementById("choice1");

// var choice2a = document.getElementById("choice2");

var container = document.getElementById("container");

starta.addEventListener("click", addText1);
// choice2a.addEventListener("click", addText2);

function addText1() {

    // THe Below handles if the user picked choice1a
    var firstPar = document.createElement("p");
    var secondPar = document.createElement("p");
    var thirdPar = document.createElement("p");
    var fourthPar = document.createElement("p");
    var fifthPar = document.createElement("p");
    var sixthPar = document.createElement("p");
    var seventhPar = document.createElement("p");
    var eighthPar = document.createElement("p");
    var choice1b = document.createElement("input");
    var choice2b = document.createElement("input");

    firstPar.className = 'you';
    secondPar.className = 'you';
    thirdPar.className = 'you';
    fourthPar.className = 'you';
    fifthPar.className = 'you';
    sixthPar.className = 'you';
    seventhPar.className = 'you';
    eighthPar.className = 'you';
    choice1b.className = 'PP';
    choice2b.className = 'PP';


    firstPar.textContent = "It has been approximately 2 days since the outbreak started.";
    secondPar.textContent = "My friend Barry was lucky enough to have gone to Hawaii on vacation a day before the outbreak.";
    thirdPar.textContent = "Somehow the cell towers weren't affected, so now Barry is pretty much the only person I trust right now.";
    fourthPar.textContent = "The town was evacuated quickly, but I have been known for my bad luck, so while I was rummaging through the remains of a Walmart scavenging for food my mother and sister were evaced to a nearby army base.";
    fifthPar.textContent = "However, I have heard rumors among the small community of the forgotten (that's the name for us who were left behind) that the army only evacuated to kill everyone so that the disease would not spread.";
    sixthPar.textContent = "I don't listen to their rumors, but this one makes me doubt that my mother and sister are alive.";
    seventhPar.textContent = "Now I am on a mission to get through town and get to the forest so I can reunite with my family.";
    eighthPar.textContent = "And NOTHING will stop me.";


    choice1b.value = "Continue with the story";
    choice2b.value = "NO OTHER OPTION";

    choice1b.type = 'button';
    choice2b.type = 'button';

    container.appendChild(firstPar);
    container.appendChild(secondPar);
    container.appendChild(thirdPar);
    container.appendChild(fourthPar);
    container.appendChild(fifthPar);
    container.appendChild(sixthPar);
    container.appendChild(seventhPar);
    container.appendChild(eighthPar);
    container.appendChild(choice1b);
    container.appendChild(choice2b);


    //If they pick the first choice
    choice1b.addEventListener("click", function() {

        var firstPara = document.createElement("p");
        var secondPara = document.createElement("p");
        var thirdPara = document.createElement("p");
        var fourthPara = document.createElement("p");
        var choice1c = document.createElement("input");
        var choice2c = document.createElement("input");

        firstPara.className = 'you';
        secondPara.className = 'you';
        thirdPara.className = 'you';
        fourthPara.className = 'you';
        choice1c.className = 'PP';
        choice2c.className = 'PP';

        firstPara.textContent = " Hey Barry. 'Yeah?' Remember how I said I needed ammo for my guns and there was a gun shop nearby?";
        secondPara.textContent = "'Let me guess, there's something in your way.' Yeah and that something is 3 zombies.";
        thirdPara.textContent = "Any ideas? 'Umm try doing a collateral' Umm give me a sec or two. ";
        fourthPara.textContent = "Okay so I have two snipers, the Locus Bolt or the SVG-100. Which should I use?";

        choice1c.value = " SVG-100.";
        choice2c.value = " Locus Bolt";

        choice1c.type = 'button';
        choice2c.type = 'button';

        container.appendChild(firstPara);
        container.appendChild(secondPara);
        container.appendChild(thirdPara);
        container.appendChild(fourthPara);
        container.appendChild(choice1c);
        container.appendChild(choice2c);

        choice1c.addEventListener("click", function() {

            var firstParb = document.createElement("p");
            var secondParb = document.createElement("p");
            var thirdParb = document.createElement("p");
            var fourthParb = document.createElement("p");
            var fifthParb = document.createElement("p");
            var sixthParb = document.createElement("p");
            var choice1d = document.createElement("input");
            var choice2d = document.createElement("input");


            firstParb.className = 'you';
            secondParb.className = 'you';
            thirdParb.className = 'you';
            fourthParb.className = 'you';
            fifthParb.className = 'you';
            sixthParb.className = 'you';
            choice1d.className = 'PP';
            choice2d.className = 'PP';

            firstParb.textContent = "Okay I'm lining up the heads...and...";
            secondParb.textContent = "BAM! Okay 2 down 1 to go. Wait, is the zombie running to me?";
            thirdParb.textContent = "'Will are ready for a quickscope? Uh I guess??";
            fourthParb.textContent = "C'mon please work. BANG! 'Hey Will you there?' Yeah I'm here. Oh god that scared the hell out of me.";
            fifthParb.textContent = "Promise me I won't ever have to do that again. Okay, so I think the doors are shut. Well, it turns out that they are locked.";
            sixthParb.textContent = "Do you think I should break in or go around back?";


            choice1d.value = "go around back";
            choice2d.value = "bust through the front";

            choice1d.type = 'button';
            choice2d.type = 'button';

            container.appendChild(firstParb);
            container.appendChild(secondParb);
            container.appendChild(thirdParb);
            container.appendChild(fourthParb);
            container.appendChild(fifthParb);
            container.appendChild(sixthParb);
            container.appendChild(choice1d);
            container.appendChild(choice2d);


            choice2d.addEventListener("click", function() {

                var firstParf = document.createElement("p");
                var secondParf = document.createElement("p");
                var thirdParf = document.createElement("p");
                var fourthParf = document.createElement("p");

                var choice1f = document.createElement("input");
                var choice2f = document.createElement("input");

                firstParf.className = 'you';
                secondParf.className = 'you';
                thirdParf.className = 'you';
                fourthParf.className = 'you';
                choice1f.className = 'PP';
                choice2f.className = 'PP';

                firstParf.textContent = "Okay so I have to find something to break this stupid door. Oh I know I'll shoot the door knob!";
                secondParf.textContent = "BANG! Okay the good news I opened the door, but the bad news is I have no ammo to use against zombies if they're in the store";
                thirdParf.textContent = "Hey Barry I have a problem. 'What is the problem.' There's ammo but not the right kind that I need. ' So find a gun to match it' THERE ARE NO GUNS!'oh'";
                fourthParf.textContent = "Uh if you were in my shoes would you go to the dark back of a store?'You have a sword m8 you'll be fine.' Yeah sword! A sword! Against a zombie that doesn't react when I cut off one of his limbs! 'Have you seen what you can do?' Okay fine, do yhou honestly think I should go in there on give up and leave?";

                choice1f.value = "okay you're right maybe it is not safe to go in there";
                choice2f.value = "Dude, grow a pair just do it, go in there.";

                choice1f.type = 'button';
                choice2f.type = 'button';

                container.appendChild(firstParf);
                container.appendChild(secondParf);
                container.appendChild(thirdParf);
                container.appendChild(fourthParf);
                container.appendChild(choice1f);
                container.appendChild(choice2f);

                choice1f.addEventListener("click", function() {

                    var firstParh = document.createElement("p");
                    var secondParh = document.createElement("p");
                    var thirdParh = document.createElement("p");
                    var fourthParh = document.createElement("p");
                    var fifthParh = document.createElement("p");
                    var sixthParh = document.createElement("p");
                    var choice1h = document.createElement("input");
                    var choice2h = document.createElement("input");

                    firstParh.textContent = " Crunch. Crunch. Crunch was the sound that the broken glass made under his feet as he walked out of the shop. He suddenly heard a noise he hadn't heard since the infection. The sound of car engines.";
                    secondParh.textContent = "He went to the corner and saw 4 Humvees and a tank coming down the street. He thought that it was the army and they were here to help him, but as they got closer Will could hear the General giving orders to fire at the zombie.";
                    thirdParh.textContent = "He saw no zombie and immediately realized that they were talking about him. Will started yelling, but the soldiers thought he was going crazy, so they started firing.";
                    fourthParh.textContent = "He ran into the store and he could hear the humvees roll to a stop and the soldiers jump out. He heard the heard the crunch of their boots and suddenly the voice of the general filled the air.";
                    fifthParh.textContent = "Son! We are the army. You might've noticed your body has been changing. You're turning into a zombie! Will knew they were going to kill him, but he needed some advice.";
                    sixthParh.textContent = "Barry! Should I fight back or simply die?";

                    choice1h.value = "Fight back man! Show them what you're made of!";
                    choice2h.value = "No don't do it! See if there's a back entrance.";

                    choice1h.type = 'button';
                    choice2h.type = 'button';

                    container.appendChild(firstParh);
                    container.appendChild(secondParh);
                    container.appendChild(thirdParh);
                    container.appendChild(fourthParh);
                    container.appendChild(fifthParh);
                    container.appendChild(sixthParh);
                    container.appendChild(choice1h);
                    container.appendChild(choice2h);

                })
                choice2f.addEventListener("click", function() {

                    var firstParj = document.createElement("p");
                    var secondParj = document.createElement("p");
                    var thirdParj = document.createElement("p");
                    var fourthParj = document.createElement("p");
                    var fifthParj = document.createElement("p");
                    var sixthParj = document.createElement("p")

                    firstParj.textContent = "Hey Barry. 'Yeah?' It's really dark in here. I don't think I can hit anything or anyone in here.'It's fine, what could go wrong?'";
                    secondParj.textContent = "Grrrrr... Oh man I screwed and my phone lost signal. STUPID VERIZON! Whatever. Here zombie zombie.";
                    thirdParj.textContent = "AHHH!!! It's got me!! Its got me!! HEY SIRI! START A RECORDING! Hey anyone who's reading this! If you find my phone delete all the illegal music files!!";
                    fourthParj.textContent = " Wait no! I I  I   I   I...";
                    fifthParj.textContent = "Will has died";
                    sixthParj.textContent = "The end";

                    container.appendChild(firstParj);
                    container.appendChild(secondParj);
                    container.appendChild(thirdParj);
                    container.appendChild(fourthParj);
                    container.appendChild(fifthParj);
                    container.appendChild(sixthParj);


                })
            })
                choice1d.addEventListener("click", function() {


                    var firstPare = document.createElement("p");
                    var secondPare = document.createElement("p");
                    var thirdPare = document.createElement("p");
                    var fourthPare = document.createElement("p");

                    firstPare.className = 'you';
                    secondPare.className = 'you';
                    thirdPare.className = 'you';
                    fourthPare.className = 'you';

                    firstPare.textContent = " You're right. It might be safer to go through the back and as a plus if there happens to be someone in there I can kill them from behind.";
                    secondPare.textContent = "Assassins Creed style. Wait a minute is that a..a..a GIANT ZOMBIE!! Ohhhh God Will what have you done!!! I'm gonna DIE!!!! Wait he doesn't see me, unless he has superhuman abilities.";
                    thirdPare.textContent = "Wait he just turned around to look at me! Now he's coming towards me and he's fast. There's nowhere to run. This is the end. Goodbye";
                    fourthPare.textContent = "WILL HAS DIED";

                    container.appendChild(firstPare);
                    container.appendChild(secondPare);
                    container.appendChild(thirdPare);
                    container.appendChild(fourthPare);


                })
            
        })
        choice2c.addEventListener("click", function() {

            var firstParc = document.createElement("p");
            var secondParc = document.createElement("p");
            var thirdParc = document.createElement("p");
            var fourthParc = document.createElement("p");
            var fifthParc = document.createElement("p");
            var sixthParc = document.createElement("p");
            var choice1p = document.createElement("input");
            var choice2p = document.createElement("input");


            firstParc.className = 'you';
            secondParc.className = 'you';
            thirdParc.className = 'you';
            fourthParc.className = 'you';
            fifthParc.className = 'you';
            sixthParc.className = 'you';
            choice1p.className = 'PP';
            choice2p.className = 'PP';

            firstParc.textContent = "Okay I'm lining up the heads...and...";
            secondParc.textContent = "BAM! Okay 2 down 1 to go. Wait, is the zombie running to me?";
            thirdParc.textContent = "'Will are ready for a quickscope? Uh I guess??";
            fourthParc.textContent = "C'mon please work. BANG! 'Hey Will you there?' Yeah I'm here. Oh god that scared the hell out of me.";
            fifthParc.textContent = "Promise me I won't ever have to do that again. Okay, so I think the doors are shut. Well, it turns out that they are locked.";
            sixthParc.textContent = "Do you think I should break in or go around back?";


            choice1p.value = "go around back";
            choice2p.value = "bust through the front";

            choice1p.type = 'button';
            choice2p.type = 'button';

            container.appendChild(firstParc);
            container.appendChild(secondParc);
            container.appendChild(thirdParc);
            container.appendChild(fourthParc);
            container.appendChild(fifthParc);
            container.appendChild(sixthParc);
            container.appendChild(choice1p);
            container.appendChild(choice2p);


            choice1p.addEventListener("click", function() {

                var firstPard = document.createElement("p");
                var secondPard = document.createElement("p");
                var thirdPard = document.createElement("p");
                var fourthPard = document.createElement("p");

                firstPard.className = 'you';
                secondPard.className = 'you';
                thirdPard.className = 'you';
                fourthPard.className = 'you';

                firstPard.textContent = " You're right. It might be safer to go through the back and as a plus if there happens to be someone in there I can kill them from behind.";
                secondPard.textContent = "Assassins Creed style. Wait a minute is that a..a..a GIANT ZOMBIE!! Ohhhh God Will what have you done!!! I'm gonna DIE!!!! Wait he doesn't see me, unless he has superhuman abilities.";
                thirdPard.textContent = "Wait he just turned around to look at me! Now he's coming towards me and he's fast. There's nowhere to run. This is the end. Goodbye";
                fourthPard.textContent = "WILL HAS DIED";

                container.appendChild(firstPard);
                container.appendChild(secondPard);
                container.appendChild(thirdPard);
                container.appendChild(fourthPard);

            })

            choice2p.addEventListener("click", function() {

                var firstParg = document.createElement("p");
                var secondParg = document.createElement("p");
                var thirdParg = document.createElement("p");
                var fourthParg = document.createElement("p");
                var choice1g = document.createElement("input");
                var choice2g = document.createElement("input");

                firstParg.textContent = "Okay so I have to find something to break this stupid door. Oh I know I'll shoot the door knob!";
                secondParg.textContent = "BANG! Okay the good news I opened the door, but the bad news is I have no ammo to use against zombies if they're in the store";
                thirdParg.textContent = "Hey Barry I have a problem. 'What is the problem.' There's ammo but not the right kind that I need. ' So find a gun to match it' THERE ARE NO GUNS!'oh'";
                fourthParg.textContent = "Uh if you were in my shoes would you go to the dark back of a store?'You have a sword m8 you'll be fine.' Yeah sword! A sword! Against a zombie that doesn't react when I cut off one of his limbs! 'Have you seen what you can do?' Okay fine, do you honestly think I should go in there on give up and leave?";

                choice1g.value = "okay you're right maybe it is not safe to go in there";
                choice2g.value = "Dude, grow a pair just do it, go in there.";

                choice1g.type = "button";
                choice2g.type = "button";

                container.appendChild(firstParg);
                container.appendChild(secondParg);
                container.appendChild(thirdParg);
                container.appendChild(fourthParg);
                container.appendChild(choice1g);
                container.appendChild(choice2g);


                choice1g.addEventListener("click", function() {

                    var firstPari = document.createElement("p");
                    var secondPari = document.createElement("p");
                    var thirdPari = document.createElement("p");
                    var fourthPari = document.createElement("p");
                    var fifthPari = document.createElement("p");
                    var sixthPari = document.createElement("p");
                    var choice1i = document.createElement("input");
                    var choice2i = document.createElement("input");

                    firstPari.textContent = " Crunch. Crunch. Crunch was the sound that the broken glass made under his feet as he walked out of the shop. He suddenly heard a noise he hadn't heard since the infection. The sound of car engines.";
                    secondPari.textContent = "He went to the corner and saw 4 Humvees and a tank coming down the street. He thought that it was the army and they were here to help him, but as they got closer Will could hear the General giving orders to fire at the zombie.";
                    thirdPari.textContent = "He saw no zombie and immediately realized that they were talking about him. Will started yelling, but the soldiers thought he was going crazy, so they started firing.";
                    fourthPari.textContent = "He ran into the store and he could hear the humvees roll to a stop and the soldiers jump out. He heard the heard the crunch of their boots and suddenly the voice of the general filled the air.";
                    fifthPari.textContent = "Son! We are the army. You might've noticed your body has been changing. You're turning into a zombie! Will knew they were going to kill him, but he needed some advice.";
                    sixthPari.textContent = "Barry! Should I fight back or simply die?";

                    choice1i.value = "Fight back man! Show them what you're made of!";
                    choice2i.value = "No don't do it! See if there's a back entrance.";

                    choice1i.type = 'button';
                    choice2i.type = 'button';

                    container.appendChild(firstPari);
                    container.appendChild(secondPari);
                    container.appendChild(thirdPari);
                    container.appendChild(fourthPari);
                    container.appendChild(fifthPari);
                    container.appendChild(sixthPari);
                    container.appendChild(choice1i);
                    container.appendChild(choice2i);


                })

                choice2g.addEventListener("click", function() {

                    var firstPark = document.createElement("p");
                    var secondPark = document.createElement("p");
                    var thirdPark = document.createElement("p");
                    var fourthPark = document.createElement("p");
                    var fifthPark = document.createElement("p");
                    var sixthPark = document.createElement("p")

                    firstPark.textContent = "Hey Barry. 'Yeah?' It's really dark in here. I don't think I can hit anything or anyone in here.'It's fine, what could go wrong?'";
                    secondPark.textContent = "Grrrrr... Oh man I screwed and my phone lost signal. STUPID VERIZON! Whatever. Here zombie zombie.";
                    thirdPark.textContent = "AHHH!!! It's got me!! Its got me!! HEY SIRI! START A RECORDING! Hey anyone who's reading this! If you find my phone delete all the illegal music files!!";
                    fourthPark.textContent = " Wait no! I I  I   I   I...";
                    fifthPark.textContent = "Will has died";
                    sixthPark.textContent = "The end";

                    container.appendChild(firstPark);
                    container.appendChild(secondPark);
                    container.appendChild(thirdPark);
                    container.appendChild(fourthPark);
                    container.appendChild(fifthPark);
                    container.appendChild(sixthPark);

                })

            })
        })

    })



}