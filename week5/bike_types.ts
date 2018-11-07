
class Bike {
  
    constructor(public price:number, public max_speed:number, public miles:number = 0){}
    

    displayInfo(){
        console.log(`Price ${this.price}`);
       console.log(`Max Speed : ${this.max_speed}`);
       console.log(`Miles : ${this.miles}`);
       return this
    }
    reverseBike(){
        console.log(" ------- ----- reversing")
        if (this.miles > 5)
       this.miles = this.miles - 5
       return this
    }
    rideBike(){
        console.log("riding  wroom wroom .... ^^^^^^")
       this.miles = this.miles + 10 ;
        return this
    }
    
}

const bike1 = new Bike(440,25)
const bike2 = new Bike(500,25)
const bike3 = new Bike(430,30)

bike1.rideBike().rideBike().rideBike().reverseBike().displayInfo();
bike2.rideBike().rideBike().reverseBike().reverseBike().displayInfo();
bike3.reverseBike().reverseBike().reverseBike().displayInfo();


