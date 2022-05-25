import { async } from '@firebase/util';
import {React, useState} from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2';
import auth from '../../../firebase.init';
import useIsPoliceRegistered from '../../../hooks/police/useIsPoliceRegistered';
import Loading from '../../Shared/Loading/Loading';
import PoliceNavbar from '../PoliceDashboard/PoliceNavbar';

const PoliceRegisteredDetails = () => {
	const [user, loading, error] = useAuthState(auth);
	const [registered,policeRegisteredInfo, policeRegLoading, setRefresh] = useIsPoliceRegistered(user);
	const [close, setClose] = useState(false);
	const navigate = useNavigate();
	
	// console.log(policeRegisteredInfo);
	if(loading || policeRegLoading) {
		return <div className='w-screen h-screen flex justify-center items-center'>
			<Loading></Loading>
		</div>;
	}

	const handleSubmit =async event => {
		event.preventDefault();
		const name = event.target.name.value;
		const rangId =  event.target.rangId.value;
		const responsibility = event.target.responsibility.value;
		const thana = event.target.thana.value;
		const phone = event.target.phone.value;
		console.log(name, rangId, responsibility, thana, phone);
		const doc = {
			name,
			rangId, 
			responsibility,
			thana,
			phone,
			email: user?.email
		}
		event.target.reset();
		setClose(false);
		fetch('https://limitless-tor-92243.herokuapp.com/policeRegister', {
			method:'PUT',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(doc)
		})
		.then(res => res.json())
		.then(async(data) => {
			if(data) {
			await Swal.fire(
					'Hurrah!',
					'Your Registration is updated',
					'success'
				  )
			} 
			setRefresh(new Date().getTime());
			// navigate('/policeRegisterDetails');
		});

	}

	return (
		<div>
			<PoliceNavbar></PoliceNavbar>
			<h2 className='text-center text-3xl my-10 font-semibold'>Police Registerd Details</h2>
			<div className='mx-4 mb-20'>
				<div class="card  md:w-fit lg:w-fit bg-white shadow-xl mx-auto p-6 md:p-10 lg:p-10">
				
					<p className='mb-4 mx-3 md:mx-10 lg:mx-10 text-center md:text-left lg:text-left break-words text-2xl'><span className='font-semibold'>Your Name: </span>{policeRegisteredInfo.name}</p>
					<p className='mb-4 mx-3 md:mx-10 lg:mx-10 text-center md:text-left lg:text-left break-words text-2xl'><span className='font-semibold'>Range ID: </span>{policeRegisteredInfo.rangId}</p>
					<p className='mb-4 mx-3 md:mx-10 lg:mx-10 text-center md:text-left lg:text-left break-words text-2xl'><span className='font-semibold'>Responsibility: </span>{policeRegisteredInfo.responsibility}</p>
					<p className='mb-4 mx-3 md:mx-10 lg:mx-10 text-center md:text-left lg:text-left break-words text-2xl'><span className='font-semibold'>Thana: </span>{policeRegisteredInfo.thana}</p>
					<p className='mb-4 mx-3 md:mx-10 lg:mx-10 text-center md:text-left lg:text-left break-words text-2xl'><span className='font-semibold'>Phone: </span>{policeRegisteredInfo.phone}</p>
					
					{/* <button className='btn btn-primary text-white my-4 mx-3 md:mx-10 lg:mx-10'>Update</button> */}
					<label onClick={() => setClose(true)} for="my-modal-3" class="btn btn-primary text-white my-4 mx-3 md:mx-10 lg:mx-10 modal-button">Update</label>
				</div>


				{/* Modal */}
				<input checked={close} type='checkbox' id="my-modal-3" class="modal-toggle" />
					<div class="modal">
					<div class="modal-box relative bg-white">
						{/* <h3 class="font-bold text-center text-xl">You can now update your Police Registration</h3>
						 */}
						<form onSubmit={handleSubmit} className='grid grid-cols-1 gap-y-4 justify-items-center items-center px-4 my-5'>
							<input name='name' type="text" placeholder="Your Name" class="input input-bordered w-full max-w-xs"  required/>
							<input name='rangId' type="text" placeholder="Your Rang ID" class="input input-bordered w-full max-w-xs"  required/>
							{/* <input type="text" placeholder="Responsibility" class="input input-bordered w-full max-w-xs" /> */}
							<select name='responsibility' class="select select-bordered w-full max-w-xs text-slate-500" required>
								<option value=''>Responsibility</option>
								<option value='Inspector'>Inspector</option>
								<option value='SI'>SI</option>
								<option value='ASI'>ASI</option>
								<option value='Constable'>Constable</option>
							</select>
							{/* <input type="text" placeholder="Thana" class="input input-bordered w-full max-w-xs"  required/> */}
							<select name='thana' class="select select-bordered w-full max-w-xs text-slate-500" required>
								<option value='' className='text-slate-300' >Thana</option>
								<option value='Chandgaon'>Chandgaon</option>
								<option value='Bondor'>Bondor</option>
								<option value='Double Mooring'>Double Mooring</option>
								<option value='Patenga'>Patenga</option>
								<option value='Kotwali'>Kotwali</option>
								<option value='Pahartali'>Pahartali</option>
								<option value='Panchlaish'>Panchlaish</option>
								<option value='Bakalia'>Bakalia</option>
								<option value='Karnafuli'>Karnafuli</option>
								<option value='Halishahar'>Halishahar</option>
								<option value='Khulshi'>Khulshi</option>
							</select>
							<input name='phone' type="number" placeholder="Your Phone Number" class="input input-bordered w-full max-w-xs"  required/>
							
							<div className='flex justify-center'>
								<label onClick={() => setClose(false)} for="my-modal-3" class="btn bg-red-500 border-none text-white mr-2 w-28">Cancel</label>
								<input name='' type="submit" value="Update" className='btn btn-primary text-white px-5'  required/>
							</div>
							
						</form>
						
						
					</div>
				</div>
			</div>
		</div>
	);
};

export default PoliceRegisteredDetails;