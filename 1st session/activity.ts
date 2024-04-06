enum DistancUnit {
    KILOMETER = "km",
    MILE = "m",
}

type Vehicle = {
    plate_no: string;
    owner_name: string;
    speed: number;
    printSpeed(): void;
};

type Person = {
    full_name: string;
    birthday: Date;
    speed: number;
    printSpeed(): void;
};


const myCar: Vehicle = {
    plate_no: "ABC 1234",
    owner_name: "John Doe",
    speed: 50,
    printSpeed(): void {
        console.log(`The current speed of ${this.plate_no} is ${this.speed} ${DistancUnit.MILE}`)
    },
};

myCar.printSpeed();

const janeDee: Person = {
    full_name: "Jane Dee",
    birthday : new Date ("2002-03-25"),
    speed: 6.5,
    printSpeed(): void {
        console.log(`The current speed of ${this.full_name} is ${this.speed} ${DistancUnit.MILE}`)
    },
};

janeDee.printSpeed();

type Contestant = Person | Vehicle;

function speedTest(contestant: Contestant) : void{
    contestant.printSpeed();
}

speedTest(myCar);
speedTest(janeDee);

