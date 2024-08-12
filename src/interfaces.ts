interface User{
    name: string;
    email: string;
    username: string;
    password: string;
}

class Doctor implements User{

    constructor(name: string, email: string, username: string, password:string){
        this.name = name;
        this.email = email;
        this.username = username;
        this.password = password;
    }
}