# Anantadi


we have created basic api,to connect lambda function we will use Api-gateway.
we will make Rest Api in public mode.
We have to click on create new api,then we will create new resource.
After creating resource we have to create method,method can be get or post or anything.
I have created two methods
1.post method
2.Get method.
To execute api we have to deploy first.
Then we have to give stage stage name.

I have created apis for student records just for test purpose.


The sample result looks like this for post:-

{
    "message": "successfully Created",
    "details": {
        "firstname": "akshay",
        "lastname": "kumar",
        "rollNo": 22
    }
}

The sample result for get method:-

{
    "student_details": {
        "firstName": "Akshay",
        "lastName": "Bhardwaj",
        "rollNo": 21
    }
}



