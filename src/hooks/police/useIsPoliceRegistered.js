import { useEffect, useState } from "react"

const useIsPoliceRegistered = (user) => {
	const [registered, setRegistered] = useState(false);
	const [policeRegisteredInfo, setPoliceRegisteredInfo] = useState({});
	const [policeRegLoading, setPoliceRegLoading] = useState(true);
	useEffect( () => {
		fetch(`http://localhost:5000/policeRegister/${user?.email}`)
		.then(res => res.json())
		.then(data => {
			if(data){
				setRegistered(true);
				setPoliceRegisteredInfo(data);
				setPoliceRegLoading(false);
			}
		})
	},[user]);


	return [registered, policeRegisteredInfo, policeRegLoading];
}

export default useIsPoliceRegistered;