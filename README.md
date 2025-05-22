### Lifecycle to Interact with AWS Lambda with the help of Application Load Balancer

Client ---> ALB ---> Lambda and then Lambda ---> ALB ---> Client

the client will send request with the help of ALB, but lambda function takes input parameters, we client will send hhtp request, so ALB will convert the http request to json and same way for the response from AWS Lambda


