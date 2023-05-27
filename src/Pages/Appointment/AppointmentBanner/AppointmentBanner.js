import React from 'react';
import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import bgImg from '../../../assets/images/bg.png'

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {

    return (
        <header className='my-8' style={{
            background: `url(${bgImg})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat'
        }}>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} alt='' className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='mr-8'>
                        <DayPicker
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate} />
                    </div>

                </div>
            </div>

        </header>
    );
};

export default AppointmentBanner;