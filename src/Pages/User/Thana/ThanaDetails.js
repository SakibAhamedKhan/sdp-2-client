import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UserNavbar from '../UserDashboard/UserNavbar';

const ThanaDetails = () => {
    const {thana_id} = useParams();
    const [inspector, setInspector] = useState([]);
    const [si, setSi] = useState([]);
    const [asi, setAsi] = useState([]);
    const [constable, setConstable] = useState([]);
    const [thana, setThana] = useState({});

    // fetch thana data
    useEffect( () => {
        fetch(`http://localhost:5000/thanaById/${thana_id}`)
        .then(res => res.json())
        .then(data => {
            setThana(data);
        })
    },[thana_id]);


    // fetch Inspector data
    useEffect( () => {
        fetch(`http://localhost:5000/policeThana/${thana_id}/Inspector`)
        .then(res => res.json())
        .then(data => {
            setInspector(data);
        })
    },[thana_id]);

    // fetch SI data
    useEffect( () => {
        fetch(`http://localhost:5000/policeThana/${thana_id}/SI`)
        .then(res => res.json())
        .then(data => {
            setSi(data);
        })
    },[thana_id]);

    // fetch ASI data
    useEffect( () => {
        fetch(`http://localhost:5000/policeThana/${thana_id}/ASI`)
        .then(res => res.json())
        .then(data => {
            setAsi(data);
        })
    },[thana_id]);

    // fetch Constable data
    useEffect( () => {
        fetch(`http://localhost:5000/policeThana/${thana_id}/Constable`)
        .then(res => res.json())
        .then(data => {
            setConstable(data);
        })
    },[thana_id]);
    
    return (
        <div>
            <UserNavbar></UserNavbar>
            <div className='my-10'>
                <h2 className='text-center text-2xl font-bold'>Thana : {thana.thana_name}</h2>
            </div>        
        </div>
    );
};

export default ThanaDetails;