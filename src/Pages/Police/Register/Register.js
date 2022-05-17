import React from 'react';
import PoliceNavbar from '../PoliceDashboard/PoliceNavbar';

const Register = () => {

	const handleSubmit = event => {
		event.preventDefault();
		const name = event.target.name.value;
		const rangId =  event.target.rangId.value;
		const responsibility = event.target.responsibility.value;
		const thana = event.target.thana.value;
		const phone = event.target.phone.value;
		console.log(name, rangId, responsibility, thana, phone);
	}
	return (
		<div>
			<PoliceNavbar></PoliceNavbar>
			
				<div class="card w-2/5 bg-white shadow-xl mx-auto my-10">
					<h2 className='text-center text-primary text-2xl font-bold mt-5'>Register</h2>
					<div className='mt-5 mb-7'>
						<form className='grid grid-cols-1 gap-y-4 justify-items-center items-center' onSubmit={handleSubmit}>
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
								<option value='Chandgaon'>Chandgaon</option>
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
							<input name='' type="submit" value="Submit" className='btn btn-primary text-white px-5'  required/>
						</form>
					</div>
				</div>
		</div>
	);
};

export default Register;