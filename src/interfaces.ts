interface User{
    name: string;
    email: string;
    username: string;
    password: string;
}

class Doctor implements User{
    
    name: string;
    id!: number;
    email: string;
    username: string;
    password: string;
    specialization: string;

    constructor(name: string, email: string, username: string, password:string, specialization: string){
        this.name = name;
        this.email = email;
        this.username = username;
        this.password = password;
        this.specialization = specialization;
    }

}
const doc = new Doctor("Arsalan", "arsalan@appointment.io", "drarsalan", "abc", "dentist");

console.log(doc.name)

class Patient implements User{

    name: string;
    id: number;
    email: string;
    username: string;
    password: string;
    medicalHistory: string;

    constructor(id: number, name: string, email: string, username: string, password: string, medicalHistory: string){
        this.id = id;
        this.name = name;
        this.email = email;
        this.username = username;
        this.password = password;
        this.medicalHistory = medicalHistory;
    }

}

const babu =  new Patient (2,"babu","babu@aapointment.net","babupat","passabc","n/a")

console.log(babu.medicalHistory)