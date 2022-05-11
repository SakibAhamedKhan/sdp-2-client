import { signOut } from 'firebase/auth';
import React from 'react';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const PoliceNavbar = () => {
	const menuItem = 
	<>
		<li><Link to='/policeRegister' className='font-semibold'>Register</Link></li>
		<li><Link to='/policeProfile' className='font-semibold'>Profile</Link></li>
		<li><p onClick={() => {
			signOut(auth);
		}} className='font-semibold'>Log out</p></li>
	</>
	
	return (
		<div class="navbar bg-white" style={{
			boxShadow: `rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px`
		}}>
			<div class="navbar-start">
				<div class="dropdown">
				<label tabindex="0" class="btn btn-ghost lg:hidden">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
				</label>
				<ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52">
					{
						menuItem
					}
				</ul>
				</div>
				<Link to='/policeDashboard' class="btn btn-ghost normal-case text-xl hidden lg:flex">Police Dashboard</Link>
			</div>

			<div class="navbar-end hidden lg:flex">
				<ul class="menu menu-horizontal p-0">
					{
						menuItem
					}
				</ul>
			</div>
			<div className='navbar-end lg:hidden'>
			<Link to='/policeDashboard' class="btn btn-ghost normal-case text-xl ">Police Dashboard</Link>
			</div>
		</div>
	);
};

export default PoliceNavbar;