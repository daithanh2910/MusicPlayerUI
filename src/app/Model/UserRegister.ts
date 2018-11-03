export class UserRegister{
    UserID: number;
    Email: string;
    Password: string;
    ConfirmPassword: string;
    constructor(userEmail: string, password: string, confirmPassword: string){
        this.Email = userEmail,
        this.Password = password,
        this.ConfirmPassword = confirmPassword
    }
}