export class UserLogin {
    Email: string;
    Password: string;
    UserName: string;
    constructor(){};

    getUserLoginName(): any{
        return localStorage.getItem('userName');
    }
    getUserLoginId(): string{
        let userID : string = localStorage.getItem('id');
        return userID;
    }
}

