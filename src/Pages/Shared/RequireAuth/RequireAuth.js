import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';

const RequireAuth = ({children}) => {
	const [user, loading, error] = useAuthState(auth);
	const location = useLocation();

	if(loading){
		return <div style={{height:'100vh'}} className='flex justify-center items-center'>
			<Loading></Loading>
		</div>;
	}

	if(!user){
		console.log(location);
		return <Navigate to='/login' state={{from: location}} replace></Navigate>
	}
	if(user){
		const path = location.pathname;
		const doc = JSON.parse(user?.displayName);
		const police = path.includes('police');
		const users = path.includes('user');
		// console.log(police, users);
		if(doc?.accountType==='user' && police){
			return <Navigate to='/login' state={{from: location}} replace></Navigate>
		} else if(doc?.accountType==='police' && users){
			return <Navigate to='/login' state={{from: location}} replace></Navigate>
		}
	}

	return children;
};

export default RequireAuth;