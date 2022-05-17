import React from 'react';
import UserDashBanner from './UserDashBanner';
import UserNavbar from './UserNavbar';

const UserDashboard = () => {
	return (
		<div>
			<UserNavbar></UserNavbar>
			<UserDashBanner></UserDashBanner>
		</div>
	);
};

export default UserDashboard;