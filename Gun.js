class Gun {
constructor(){
    this.attachMouseListener();
}
SetStats(){
    this.image = document.createElement("img");
    switch(Gunlevel){
        case 1:
            {
                this.name = "Colt 45";
                this.image.src = "Gun/Colt45.png";
                this.cooldowntime = 175;
                this.reloadtime = 3350;
                this.MaxAmmo = 6;
                this.soundPath = 'Sound/colt.mp3';
                this.reloadpath = 'Sound/coltreload.mp3';
                break;
            }
        case 2:
            {
                let existingGunImage = gunholster.querySelector('img');
                if (existingGunImage) {
                    existingGunImage.remove();
                }
                this.name = "Glock-17";
                this.image.src = "Gun/Glock-17.png";
                this.cooldowntime = 50; 
                this.reloadtime = 2500; 
                this.MaxAmmo = 17; 
                this.soundPath = 'Sound/glock.mp3';
                this.reloadpath = 'Sound/glockreload.mp3';
                break;
            }
        case 3:
            {
                let existingGunImage = gunholster.querySelector('img');
                if (existingGunImage) {
                    existingGunImage.remove();
                }
                this.name = "AK-47";
                this.image.src = "Gun/AK-47.png";
                this.cooldowntime = 17;
                this.reloadtime = 2500;
                this.MaxAmmo = 30;
                this.soundPath = 'Sound/AK47.mp3';
                this.reloadpath = 'Sound/reloadak47.mp3';
                break;
            }
        default:
            {

            }
            
    }
    this.currentAmmo = this.MaxAmmo;
    document.getElementById('gunname').innerText = this.name;
    this.holster = document.getElementById('gunholster');
    this.holster.appendChild(this.image);
    document.getElementById('ammo').innerText = `${this.currentAmmo}/${this.MaxAmmo}`;
}
attachMouseListener() {
    document.addEventListener('click', () => {
        // If not in cooldown, shoot
        
        if (!cooldown) {
            this.shoot();


        }
    });
}
shoot (){
    if (this.currentAmmo >= 2){
        this.currentAmmo--;
        this.cooldownfunc(this.cooldowntime);
        document.getElementById('ammo').innerText = `${this.currentAmmo}/${this.MaxAmmo}`;
        this.playGunshot();
    }else {
        this.currentAmmo--;
        this.cooldownfunc(this.reloadtime)
        document.getElementById('ammo').innerText = `Reloading...`;
        this.currentAmmo = this.MaxAmmo;
        this.playReload();
        setTimeout(() => {
            document.getElementById('ammo').innerText = `${this.currentAmmo}/${this.MaxAmmo}`;
        }, this.reloadtime);
    }

}
cooldownfunc(time){
    cooldown = true;
    this.CDTimer = setTimeout(() => {
         if (!gameover) cooldown = false;
    }, time)
}
playGunshot() {
    const gunshot = new Audio(this.soundPath);  // Create a new instance of Audio each time
    gunshot.play();  // Play the gunshot sound without interrupting other sounds
}
playReload() {
    const reload = new Audio(this.reloadpath);
    reload.play();  
}


}