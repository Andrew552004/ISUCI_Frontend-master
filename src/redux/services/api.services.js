//Encapsula la configuración y el manejo de las solicitudes HTTP utilizando Axios
import Axios from "axios"
class ApiService {
    constructor() {
        this.axios = Axios.create({
            baseURL: "https://dot.runasp.net/api" || '',
        })
    } 
}
export default ApiService;