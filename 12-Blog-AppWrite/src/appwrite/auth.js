import config from "../config/config";
import {Client, Account,ID} from 'appwrite'

export class AuthService{
     client = new Client()
     account;

     constructor(){
        this.client 
                    .setEndpoint(config.appwriteUrl)
                    .setProject(config.appwriteProjectId)

        this.account = new Account(this.client)
     }

     async createAccount({email,password,name}){
        try {
           const userAccount =  await this.account.create(ID.unique,email,password,name)
           if (userAccount) {
            return this.login({email,password})
           } else {
            return userAccount
           }
        } catch (error) {
            throw error
        }
     }
    
     async login({email,password}){
        try {
           return await this.account.createEmailPasswordSession(email,password)
        } catch (error) {
            throw error
        }
     }

     async getCurrentUSer(){
        try {
          return  await this.account.get()
        } catch (error) {
           console.log("Appwrite service :: getCurrentUSer :: error",error);
            
        }
        return null
     }

     async logOut(){
            try {
                await this.account.deleteSession('')
            } catch (error) {
            console.log("Appwrite service :: logOut :: error",error);
                
            }
     }
}




const authService = new AuthService()


export default authService