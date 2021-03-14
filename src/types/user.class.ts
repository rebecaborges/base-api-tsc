class UserData {
  name: string;
  email: string;
  phone: number;
  isActive: boolean;
  password: string;
  
  constructor (name?:string, email?:string, phone?:number, isActive?:boolean, password?:string) {
    this.name = name
    this.email = email
    this.phone = phone
    this.isActive = isActive
    this.password = password
  }
}

export default UserData
