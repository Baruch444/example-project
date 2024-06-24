class UserModel{

    public id:number;
    public firstName:string;
    public lastName:string;
    public email:string;
    public password:string;
    public role: "Admin" | "User";

}
export default UserModel;