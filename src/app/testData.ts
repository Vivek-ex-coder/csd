import { InMemoryDbService } from 'angular-in-memory-web-api';

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
        return {users:user}  
    }}