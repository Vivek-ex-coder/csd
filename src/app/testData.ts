import {  InMemoryDbService  } from 'angular-in-memory-web-api';    

export class TestData implements InMemoryDbService {
    createDb() {
        let user = [
            {
                userId: 101, 
                firstName: 'Rishikesh', 
                lastName: 'Singh',
                email:'rksingh@gmail.com',
                phoneNumber: 922222221 ,
                password:'admin'
            },
            {
                userId: 102, 
                firstName: 'Rishikesh', 
                lastName: 'Singh',
                email:'rahul@gmail.com',
                phoneNumber: 922222221 ,
                password:'admin12'
            }
        ];
        let complain = [
            {
                Id: 1001, 
                custName: 'Rohan', 
                mail: 'rohan11@gmail.com',
                productName:'iphone',
                productId: 1101 ,
                productAdress:'Delhi',
                contactNumber: '9275634592',
                repair:'yes',
                complain:'defective product '
            }
        ];
        let feed = [
            {
                 
                userName: 'Rohan', 
                contactNumber: '9275634592',
                rateService:'5',
                suggestion:' Should be more Colourful. '
            }
        ];
        let activityDetails = [
            { id: 101, heading: 'this is for testing', desicription: 'It has a simple grid-like portfolio and a neat design, but the idea/theme is great.',btnInfo:'More Info' },
            { id: 102, heading: 'HOSTING SEMINAR', desicription: 'It has a simple grid-like portfolio and a neat design, but the idea/theme is great.' ,btnInfo:'More Info'},
            { id: 103, heading: 'HOSTING SEMINAR', desicription: 'It has a simple grid-like portfolio and a neat design, but the idea/theme is great.',btnInfo:'More Info' }
            
        ];
        return {users:user,complains:complain,feedback:feed,actdetails:activityDetails}  ;

    }}