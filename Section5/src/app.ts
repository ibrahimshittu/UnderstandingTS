abstract class Department {
    // private name: string;
    static fiscalYear = 2020; // you cannot access this under any other method not static
    protected employees: string[] = [] // you can also add methods as private 

    constructor(private readonly name: string, public id: string) {

    }

    // static method
    static createEmployee(name: string) {
        return { name: name }
    }


    describe(this: Department) {
        console.log("Department: " + this.name + this.id)
    }

    // abstract methods and classes
    abstract abstractDescribe(this: Department): void;

    addEmployee(employee: string) {
        this.employees.push(employee)
    }

    printEmployeeInformation() {
        console.log(this.employees.length)
        console.log(this.employees)
    }
}

class ITDepartment extends Department {
    constructor(id: string, public admins: string[]) {
        super(id, "IT");
    }

    abstractDescribe() {
        console.log("Hello Abstract" + this.id)
    }
}
class AccountingDepartment extends Department {
    private reports: string[]
    lastReport: string;

    get mostRecentReport() {
        if (this.lastReport) {
            this.lastReport
        }
        throw new Error("no Report found!")
    }

    set mostRecentReport(value: string) {
        if (!value) {
            throw new Error("pass in value!")
        }
        this.addAndPrintReport(value)
    }

    constructor(id: string, reports: string[]) {
        super(id, "Accounting");
        this.reports = reports;
        this.lastReport = reports[0];
    }

    abstractDescribe() {
        console.log("Hello Abstract" + this.id)
    }

    addEmployee(name: string) {
        if (name === "max") {
            return
        }
        this.employees.push(name)
    }

    addAndPrintReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
        console.log("This is the text: " + text)
    }
}

const employee1 = Department.createEmployee("Ibrahim")
const fiscalYear = Department.fiscalYear

const ibrahim = new Department("Ibrahim", "a1");
const itDepartment = new ITDepartment("Ibrahim", ["a1"]);
new AccountingDepartment("a1", ["hello"]).mostRecentReport = 'lates report'

ibrahim.describe();
ibrahim.addEmployee("Ibrahim Shittu")
ibrahim.printEmployeeInformation()


// ibrahim.employees[2] = "Sofiu" #this would not work due to th eprivate keyword in front of employees key

// const ibrahimCopy = { name: "HELLO", describe: ibrahim.describe }

// ibrahimCopy.describe()