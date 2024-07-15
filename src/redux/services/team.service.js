import { v4 } from "uuid";
import ApiService from "./api.services";

const baseUrl = 'Teams';
export class TeamService extends ApiService{
    async getAll(){
        return []
    }
    async getOne(id){
        return {id}
    }
    async register(data){
        return {statuscode: 200, result: {...data,id:v4()}}
        
    }
    async deleteAction(id){
        return{id}
    }
    async update(id,data){
        return{id,data}
    }
}