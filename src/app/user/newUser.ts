export class NewUser{
    UserName : string;
    UserEmail: string;
    UserPassword: string;

    constructor(Name: string, Password: string){
        this.UserName = Name,
        this.UserEmail = Name,
        this.UserPassword = Password
    }
}