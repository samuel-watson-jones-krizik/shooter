class Zombie {
constructor(ID, chance){
    //creating html objects
    this.element = document.createElement("div");
    this.image = document.createElement("img");
    //chance roll for armored zombie, setting image accordingly and setting size, also setting zombie speed
    this.armored = Math.random() < chance; 
    if (this.armored) {
        this.image.src = "Zombie/ZombieHard.png"
        this.element.id = `zombiehard${ID}`;
        this.speed = 1;
        this.HP = 4;
    }
    else {
        this.image.src = "Zombie/Zombie.png"; 
        this.element.id = `zombie${ID}`;
        this.speed = 2;
        this.HP = 2;
    } 
    this.element.appendChild(this.image);
    this.image.style.height = `8vh`;
    this.image.style.width = `8vh`;
    this.element.style.position = "absolute"; 
    // add to the playing field
    document.body.appendChild(this.element);

    // give zombie random vertical starting position and start him all the way to the left
    this.element.style.top = Math.floor(Math.random() * (88)+ 4) + 'vh';
    this.element.style.left = '0vw';
    // start moving
    this.mover = setInterval(() =>{
        if (!gameover) {
            this.element.style.left = (parseInt(this.element.style.left, 10) + this.speed) + "vw";
            if (parseInt(this.element.style.left, 10) >= 90) {
                this.playSound(4);
                showRestartButton();
            }
        }
    }, 300);
    this.addClickListener();
    CurrentlyAliveZombies++;
}
addClickListener() {
    this.element.addEventListener("click", () => {
        this.shoot(); // Call shoot method when clicked
    });
}
shoot() {
    if (!cooldown){    //check for gun cooldown
        this.HP--;
        //change zombie image or kill zombie based on remaining HP
        if (this.armored){
            switch(this.HP){
                case 3:
                {
                    this.image.src = "Zombie/ZombieHardHit.png"
                    this.playSound(1);
                    break;
                }
                case 2:
                {
                    this.image.src = "Zombie/ZombieHardHit2.png"
                    this.playSound(1);
                    break;
                }
                case 1: 
                {
                    this.image.src = "Zombie/ZombieHardHit3.png"
                    this.playSound(1);
                    break;
                }
                case 0: this.death(); break;
                default:{
                    console.error("Houston, we have a problem, this guys HP is:", this.HP);
                    this.element.remove(); //overkilled, delete the sprite
                } 
            }
        }
        else {
            if (this.HP==1) {
                this.image.src = "Zombie/ZombieHit.png";
                this.playSound(1);
            }
            else this.death();
        }
    }

}
death(){
    this.element.style.backgroundColor = "red"; // Temporary visual effect
    clearInterval(this.mover);
    this.playSound(2);
    CurrentlyAliveZombies--;
    setTimeout(() => {
        this.element.remove(); // destroy zombie sprite
        console.log(CurrentlyAliveZombies);
    }, 200);
    if (CurrentlyAliveZombies==0) 
        {
            this.AllDead();
            this.playSound(3);
        }
}
playSound(int) {
    switch(int){
        case 1: 
        {
            const sound = new Audio("Sound/ZombieHurt.mp3");
            sound.play();
            break;
        }
        case 2:
        {
            const sound = new Audio("Sound/ZombieDie.mp3");
            sound.play();
            break;
        }
        case 3:
        {
            const sound = new Audio("Sound/Inter.mp3");
            sound.play();
            break;
        }
        case 4:
            {
                if (!gameover){
                    gameover = true;    
                    const sound = new Audio("Sound/GameOver.mp3");
                    sound.play();
                    break;  
                }
            }
    }
      // Play the sounds without interrupting other sounds
}
AllDead() {
    setTimeout(() => {
        LevelComplete++;
    }, 10000); // 10-second timeout
}
}