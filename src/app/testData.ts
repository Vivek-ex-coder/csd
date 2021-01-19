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
            }
        ];
        let activityDetails = [
            { id: 101, heading: 'this is for testing', desicription: 'It has a simple grid-like portfolio and a neat design, but the idea/theme is great.',btnInfo:'More Info' },
            { id: 102, heading: 'HOSTING SEMINAR', desicription: 'It has a simple grid-like portfolio and a neat design, but the idea/theme is great.' ,btnInfo:'More Info'},
            { id: 103, heading: 'HOSTING SEMINAR', desicription: 'It has a simple grid-like portfolio and a neat design, but the idea/theme is great.',btnInfo:'More Info' }
            
        ];
        return {users:user,actdetails:activityDetails}  ;
    }}