import axios from 'axios';


class OrionApi {

    async getStations(){
        try {
            return await axios.get("http://localhost:1026/v2/entities");

        } catch (error) {
            console.error('Error en getStations()', error.message)
        }
        


    }

}

export default OrionApi