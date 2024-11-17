var users=[];
export default class UserModel{
    constructor(id,name,email,password){
        this.id=id;
        this.name=name;
        this.email=email;
        this.password=password;
        
    }
    static addUser(name,email,password){
        const newuser=new UserModel(
            users.length+1,
            name,
            email,
            password
        )
            users.push(newuser);



    }

    static isValid(email,password){
        const result=users.find((us)=>us.email==email && us.password==password)
        return result;
    }
    
    
}

