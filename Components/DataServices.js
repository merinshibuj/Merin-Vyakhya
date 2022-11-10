import   axios  from "axios";

export let dataServicesObj = {
    getAllCustomers
};
 
function  getAllCustomers()
{
    let url =  "http://localhost:3200/data/";
    return axios.get(url);
}
export default dataServicesObj;