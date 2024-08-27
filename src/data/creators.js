import creator1 from '../../assets/creators/creator1.jpg'
import creator2 from '../../assets/creators/creator2.jpg'
import creator3 from '../../assets/creators/creator3.jpg'
import creator4 from '../../assets/creators/creator4.jpg'
import creator5 from '../../assets/creators/creator5.jpg'
import creator6 from '../../assets/creators/creator6.jpg'
import { v4 as uuidv4 } from 'uuid';

export const creators = [
    {
        id: uuidv4(), 
        name: 'John Doe',
        designation: 'Manager',
        image: creator1
    },
    {
        id: uuidv4(), 
        name: 'John Doe',
        designation: 'Manager',
        image: creator2
    },
    {
        id: uuidv4(), 
        name: 'John Doe',
        designation: 'Manager',
        image: creator3
    },
    {
        id: uuidv4(), 
        name: 'John Doe',
        designation: 'Manager',
        image: creator4
    },
    {
        id: uuidv4(), 
        name: 'John Doe',
        designation: 'Manager',
        image: creator5
    },
    {
        id: uuidv4(), 
        name: 'John Doe',
        designation: 'Manager',
        image: creator6
    },
]