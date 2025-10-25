Class Person {
	constructor(name,age) {
		this.name=name
		this.age=age
	}
	greet(){
		console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`)
	}
}
Class Employee extends Person{
	constructor(name,age,jobtitle) {
		super(name,age)
		this.jobtitle=jobtitle
	}
	jobGreet(){
		console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobtitle}`)
	}
}
// const emp=new Employee("Alice",25,"Manager")
// emp.greet()
// emp.jobGreet()
// Do not change the code below this line
window.Person = Person;
window.Employee = Employee;
