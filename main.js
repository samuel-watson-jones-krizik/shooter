let cooldown = false;
    //declaring global variables
    let TotalZombieCount = 1;
    let CurrentlyAliveZombies = 0;
    let LevelComplete = 0;
    let Start = false;
    let gun = new Gun();
    let gameover = false;
    level0 = setInterval(() =>
        {
            if (Start){ //The hardest of all, level 0, clicking the start button
                Gunlevel = 1;
                gun.SetStats();
                MassSummon(10,800,0.15);// LEVEL 1
                const sound = new Audio("Sound/start.mp3");
                sound.play();
                clearInterval(level0);
            }
        }, 200)
    level1 = setInterval(() =>
    {
        if (LevelComplete==1){
            Gunlevel = 2;
            gun.SetStats();
            MassSummon(20,700,0.3); // LEVEL 2
            clearInterval(level1);
        }
    }, 200)
    level2 = setInterval(() =>
        {
            if (LevelComplete==2){
                Gunlevel = 3;
                gun.SetStats();
                MassSummon(30,600,0.5); // LEVEL 3
                clearInterval(level2);
            }
        }, 200)
    level3 = setInterval(() =>
        {
            if (LevelComplete==3){
                clearInterval(level3);
                showRestartButton();
                let text = document.createElement("div");
                text.innerText = "GG";
            }
        }, 200)