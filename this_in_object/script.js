let ninja = {
    class: 'professional',
    gun: 'shuriken',
    gunShoot: function() {
        console.log("U shoot with a " + this.gun)
    }
}

let ninja2 = {
    class: 'professional',
    gun: 'kunai',
    gunShoot: function() {
        console.log("U shoot with a " + this.gun)
    }
}

ninja2.gunShoot()
ninja.gunShoot()

ninja2.gun == 'kunai' ? console.log('u are a ninja') : console.log('u are not a ninja')