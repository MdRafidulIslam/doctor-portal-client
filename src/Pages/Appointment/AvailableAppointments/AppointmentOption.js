import React from 'react';

const AppointmentOption = ({ option, setTreatment }) => {
    const { name, slots, price } = option;
    return (
        <div className="card shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-2xl text-center font-bold text-secondary">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try another day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <p><small>price : ${price}</small></p>
                <div className="card-actions justify-center">
                    <label onClick={() => setTreatment(option)} disabled={slots.length === 0} htmlFor="booking-modal" className="btn btn-primary text-white">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;