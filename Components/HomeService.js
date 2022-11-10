import axios from "axios";

export let Homeserviceobj = {}

let url = " http://localhost:3500/plants";

Homeserviceobj.getallproducts = function()
{
    return axios.get(url);
}
export default Homeserviceobj;