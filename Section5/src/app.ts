class Department {
    // private name: string;
    private employees: string[] = [] // you can also add methods as private 

    constructor(private readonly name: string, public id: string) {

    }

    describe(this: Department) {
        console.log("Department: " + this.name + this.id)
    }

    addEmployee(employee: string) {
        this.employees.push(employee)
    }

    printEmployeeInformation() {
        console.log(this.employees.length)
        console.log(this.employees)
    }
}

const ibrahim = new Department("Ibrahim", "a1");

ibrahim.describe();
ibrahim.addEmployee("Ibrahim Shittu")
ibrahim.printEmployeeInformation()

// ibrahim.employees[2] = "Sofiu" #this would not work due to th eprivate keyword in front of employees key

// const ibrahimCopy = { name: "HELLO", describe: ibrahim.describe }

// ibrahimCopy.describe()