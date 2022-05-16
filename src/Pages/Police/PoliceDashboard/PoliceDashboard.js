import React from 'react';
import PoliceDashBanner from './PoliceDashBanner';
import PoliceNavbar from './PoliceNavbar';

const PoliceDashboard = () => {
	return (
		<div>
			<PoliceNavbar></PoliceNavbar>
			<PoliceDashBanner></PoliceDashBanner>
		</div>
	);
};

export default PoliceDashboard;