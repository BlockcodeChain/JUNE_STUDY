class ApiResponse  {
    constructor(statuscode ,message="Success" ,data =null){
        this.statuscode=statuscode;
        this.message=message;
        this.data=data;
    }
}

export default ApiResponse