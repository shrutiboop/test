let name="shruti";
console.log(name);
const address="1291 Gordon Street";
console.log(address);

//challenge-2

let street="1291 gordon street";
let country="canada";

let area=street+" "+country;
console.log(area);

//challenge-3
let score1=70;
let score2=80;
let score3=90;
let total=score1+score2+score3;
let average=total/3;

console.log(total,average);


//challenge-4

let fruitbasket=["apple" ,"orange","banana","111"];
console.log(fruitbasket[3],fruitbasket[1],fruitbasket[2],fruitbasket[0]);

fruitbasket[3]="mango";

let doctorrecommeded= fruitbasket[0];
console.log(doctorrecommeded,fruitbasket[3]);

//Challenge-5

function calculateTotal(value1,value2){
    let total=value1+value2;
    return total;
}

let order1,order2,order3;

order1=calculateTotal(2,3);
order2=calculateTotal(10,20)
order3=calculateTotal(23,111);

console.log(order1,order2,order3);


//challenge-6

const car={
     make:"bla",
  model:'EMI',
     year:2019,
     colors:["blue","black","yellow"],
     hybrid:"true",

    drive:function(){
        console.log("hi drive");
    
    },
  
    stop:function(){
      console.log("bla bla")
    },
};
    console.log(car.make);
    console.log(car.colors[0]);
    car.drive();
    car.stop();

    //challenge-7

    const person1={
        age:23,
        name:"harry",
        status:["resident","tourist"],


    };

    const person2={
        age:24,
        name:"larry",
        status: "resident",
        
    };


if(person2.age>18&& person2.status==="resident"){
    console.log("congrats")
}
else{
    console.log("sorry")
}


//challenge-8

function fullName(Fname,Lname){
    let fullname=Fname+' '+Lname;
    return fullName.toUpperCase();

}

console.log(fullName('shruti','reddy'));