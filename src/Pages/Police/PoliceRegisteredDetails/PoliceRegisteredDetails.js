import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import useIsPoliceRegistered from '../../../hooks/police/useIsPoliceRegistered';
import Loading from '../../Shared/Loading/Loading';
import PoliceNavbar from '../PoliceDashboard/PoliceNavbar';

const PoliceRegisteredDetails = () => {
	const [user, loading, error] = useAuthState(auth);
	const [registered,policeRegisteredInfo, policeRegLoading] = useIsPoliceRegistered(user);
	
	// console.log(policeRegisteredInfo);
	if(loading || policeRegLoading) {
		return <div className='w-screen h-screen flex justify-center items-center'>
			<Loading></Loading>
		</div>;
	}
	return (
		<div>
			<PoliceNavbar></PoliceNavbar>
			<h2 className='text-center text-3xl my-10 font-semibold'>Police Registerd Details</h2>
			<div className='mx-4'>
				<div class="card  md:w-fit lg:w-fit bg-white shadow-xl mx-auto p-6 md:p-10 lg:p-10">
				
					<p className='mb-2 text-center md:text-left lg:text-left break-words text-2xl'><span className='font-semibold'>Your Name: </span>{policeRegisteredInfo.name}</p>
					<p className='mb-2 text-center md:text-left lg:text-left break-words text-2xl'><span className='font-semibold'>Range ID: </span>{policeRegisteredInfo.rangId}</p>
					<p className='mb-2 text-center md:text-left lg:text-left break-words text-2xl'><span className='font-semibold'>Responsibility: </span>{policeRegisteredInfo.responsibility}</p>
					<p className='mb-2 text-center md:text-left lg:text-left break-words text-2xl'><span className='font-semibold'>Thana: </span>{policeRegisteredInfo.thana}</p>
					<p className='mb-2 text-center md:text-left lg:text-left break-words text-2xl'><span className='font-semibold'>Phone: </span>{policeRegisteredInfo.phone}</p>
					
					<button className='btn btn-primary text-white my-4'>Update</button>
				</div>
			</div>
		</div>
	);
};

export default PoliceRegisteredDetails;