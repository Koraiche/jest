class fetchData {
    fetch(){
        return "Data from API";
    }
    fetchAsPromise(){
        return new Promise((resolve, reject)=>{
            resolve("Data from API")
        });
    }
    
}


module.exports = new fetchData();