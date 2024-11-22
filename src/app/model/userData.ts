export class UserLogin {
    EmailId:string;
    Password:string;
    constructor () {
        this.EmailId='';
        this.Password='';
    }
}
export class UserRegister {
    userId: number;
    firstName: string;
    middleName: string;
    lastName: string;
    mobileNo: string;
    emailId: string;
    altMobileNo: string;
    password: string;
    constructor () {
        this.userId=0;
        this.firstName='';
        this.middleName='';
        this.lastName='';
        this.mobileNo='';
        this.emailId='';
        this.altMobileNo='';
        this.password='';
    }
  }

  