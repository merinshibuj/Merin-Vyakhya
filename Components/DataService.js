import   axios  from "axios";

let dataServiceObj = {};

let url =  "http://localhost:3200/data/";

dataServiceObj.getDept =  function()
{    
    return axios.get(url);
};
dataServiceObj.addDept =  function(Obj)
{    
    return axios.post(url, Obj);
};
export default dataServiceObj;