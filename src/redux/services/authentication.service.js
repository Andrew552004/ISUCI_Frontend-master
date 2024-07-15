//Son metodos para manejar operaciones de registro y login
import ApiService from "./api.services";

const baseUrl = 'Users';

export class AuthService extends ApiService{
    async register(data){
        try{
            const response = await this.axios.post(`/${baseUrl}`, data);
            const result = 
            {
                userName: response.data.userName,
                userLastName: response.data.userLastName,
                userEmail: response.data.userEmail,
                id: response.data.id,
                userRole: response.data.userRole,
            }

            return{
                statuscode: response.status,
                result:{
                    user: result,
                },
            }
        }catch (error) {
            console.log(error); 
        return {
            statuscode: 1,
        }
        }   


    }
//Revisar que el result concuerde con los datos 
    async login(data){
        try{
            const response = await this.axios.post(`/${baseUrl}`, data);
            const result = response.data

            return{
                statusCode: response.status,
                result:{
                    user: result,
                },
            }
        }catch (error) {
            console.log(error); 
            return {
                statuscode:500,
            };
        }

    }
}