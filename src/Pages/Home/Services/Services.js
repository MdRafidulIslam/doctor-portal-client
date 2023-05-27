import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {
    const servicesData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam repellat repellendus quis recusandae! Ducimus ipsa quas consequatur',
            img: fluoride
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam repellat repellendus quis recusandae! Ducimus ipsa quas consequatur',
            img: cavity
        },
        {
            id: 1,
            name: 'Teeth Whitening',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam repellat repellendus quis recusandae! Ducimus ipsa quas consequatur',
            img: whitening
        }
    ]
    return (
        <div className='mt-20'>
            <div className='text-center'>
                <h3 className='text-xl font-bold text-primary uppercase'>Our services</h3>
                <h2 className='text-3xl'>Services We Provide</h2>
            </div>
            <div className='grid gap-9 grid-cols-1 lg:grid-cols-3 md:grid-cols-2'>
                {
                    servicesData.map(service => <Service key={service.id} service={service}></Service>)
                }

            </div>
        </div>
    );
};

export default Services;