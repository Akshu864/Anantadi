let student={
    firstName:"Akshay",
    lastName:"Bhardwaj",
    rollNo:21
}
exports.handler = async(event) => {
    // TODO implement
    console.log("inside lambda function")
    if(event.httpMethod==="GET"){
       return getStudentRecord(event);
    }
    if(event.httpMethod==='POST'){
         return createStudentRecord(event)
    }
};

function getStudentRecord (event){
    const response={
        statusCode:200,
        body:JSON.stringify({
            
            student_details:student
        })
    };
    return response;
}
function createStudentRecord (event){
    const body=JSON.parse(event.body)
    const response={
        statusCode:200,
        body:JSON.stringify({
            message:"successfully Created",
            details:body
        })
    };
    return response;
    
}
