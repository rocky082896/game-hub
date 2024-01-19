import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api/',
    params:{
        key: 'b1abc63454f045c8bcf230df50635eac'
    }
})