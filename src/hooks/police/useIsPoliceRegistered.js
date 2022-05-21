import { useEffect, useState } from "react"

const useIsPoliceRegistered = (user) => {
	const [registered, setRegistered] = useState(false);
	const [policeRegisteredInfo, setPoliceRegisteredInfo] = useState({});
	const [policeRegLoading, setPoliceRegLoading] = useState(true);
	const [refresh, setRefresh] = useState('');
	useEffect( () => {
		fetch(`https://limitless-tor-92243.herokuapp.com/policeRegister/${user?.email}`)
		.then(res => res.json())
		.then(data => {
			if(data){
				setRegistered(true);
				setPoliceRegisteredInfo(data);
				
			}
			setPoliceRegLoading(false);
		})
	},[user, refresh]);


	return [registered, policeRegisteredInfo, policeRegLoading, setRefresh];
}

export default useIsPoliceRegistered;