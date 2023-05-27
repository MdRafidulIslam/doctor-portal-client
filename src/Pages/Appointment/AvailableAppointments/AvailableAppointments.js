import { format } from 'date-fns';
import React, { useState } from 'react';
import AppointmentOption from './AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../../Shared/Loading/Loading';

const AvailableAppointments = ({ selectedDate }) => {
    // const [appointmentOption, setAppointmentOption] = useState([])
    const [treatment, setTreatment] = useState({})
    const date = format(selectedDate, 'PPPP')

    const { data: appointmentOption = [], refetch, isLoading } = useQuery({
        queryKey: ['appointmentOption', date],
        queryFn: () => fetch(`https://doctor-portal-server-roan.vercel.app/appointmentOption?date=${date}`)
            .then(res => res.json())
    })
    if (isLoading) {
        return <Loading></Loading>
    }
    // useEffect(() => {
    //     fetch('https://doctor-portal-server-roan.vercel.app/appointmentOption')
    //         .then(res => res.json())
    //         .then(data => setAppointmentOption(data))
    // }, [])
    return (
        <section className='my-16'>
            <p className='text-center text-secondary font-bold'>Available Appointments on {format(selectedDate, 'PPPP')}</p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8'>
                {
                    appointmentOption.map(option => <AppointmentOption key={option._id} option={option} setTreatment={setTreatment}></AppointmentOption>)
                }

            </div>
            {treatment && <BookingModal treatment={treatment} selectedDate={selectedDate} setTreatment={setTreatment} refetch={refetch}></BookingModal>}
        </section>
    );
};

export default AvailableAppointments;