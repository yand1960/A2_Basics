export class Person {
	
	id: number;
	firstName: string;
	lastName: string;
	salary: number;
    photo: string;
	
	constructor(id:number, firstName: string, lastName: string, salary:number, photo:string) {
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.salary = salary;
        this.photo = photo;
	}
	
	toString(): string {
		return this.firstName + " " + this.lastName;
	}
}


export class Repository {
 
    static lowPaidLevel = 100000;
    people: Array<Person> = [];

    constructor() {
        this.people.push(new Person(1,"Yuri","Andrienko",123456,"yuri.jpg"));
        this.people.push(new Person(2,"Vasya","Pupkin",77777,"vasya.jpg"));
        this.people.push(new Person(3,"Masha","Mashkina",222222,"masha.jpg"));
    }


}