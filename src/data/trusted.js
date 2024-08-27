import { v4 as uuidv4 } from 'uuid';
import creator1 from '../../assets/creators/creator1.jpg'
import creator2 from '../../assets/creators/creator2.jpg'
import creator3 from '../../assets/creators/creator3.jpg'
import creator4 from '../../assets/creators/creator4.jpg'
import creator5 from '../../assets/creators/creator5.jpg'
import creator6 from '../../assets/creators/creator6.jpg'
import { Youtube, Instagram } from 'lucide-react';


export const trusted = [
    {
        id: uuidv4(), 
        total: '1.5M +',
        image: creator1,
        icon: Instagram
    },
    {
        id: uuidv4(), 
        total: '1.5M +',
        image: creator2,
        icon: Youtube
    },
    {
        id: uuidv4(), 
        total: '1.5M +',
        image: creator3,
        icon: Youtube
    },
    {
        id: uuidv4(), 
        total: '1.5M +',
        image: creator4,
        icon: Youtube
    },
    {
        id: uuidv4(), 
        total: '1.5M +',
        image: creator5,
        icon: Instagram
    },
    {
        id: uuidv4(), 
        total: '1.5M +',
        image: creator6,
        icon: Instagram
    },
]