
function Ninja(name, health){
    const speed = 3;
    const strength = 3;
    this.health = 100;
    this.name = name;
    this.sayName = function(){
        console.log("My ninja name is " + this.name);
    };
    this.showStats = function(){
        console.log("Name: " + this.name, "Health: " + this.health, "Speed: " + speed, "Strength: " + strength);
    };
    Ninja.prototype.punch = function (blueNinja) {
        if (blueNinja.constructor != Ninja) {
            console.log("ahhhh");
            return;
        }
        blueNinja.health -= 5;
        console.log(`${this.name} punched ${blueNinja.name} and did 5 damage!`)
    };
    Ninja.prototype.kick = function (blueNinja) {
            if (blueNinja.constructor != Ninja) {
                console.log("ahhhhh");
                return;
            }
            blueNinja.health -= (strength * 15);
            console.log(`${this.name} kick ${blueNinja.name} and did ${15 * strength} damage!`)

    };
}
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();


const blueNinja = new Ninja("Goemon");
const redNinja = new Ninja("Bill Gates");
redNinja.punch(blueNinja);
blueNinja.showStats();
redNinja.kick(blueNinja);
blueNinja.showStats();