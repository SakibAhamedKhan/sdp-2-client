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
    const [checked, setChecked] = useState(false);
    const [police, setPolice] = useState({});

    // fetch thana data
    useEffect( () => {
        fetch(`https://limitless-tor-92243.herokuapp.com/thanaById/${thana_id}`)
        .then(res => res.json())
        .then(data => {
            setThana(data);
        })
    },[thana_id]);


    // fetch Inspector data
    useEffect( () => {
        fetch(`https://limitless-tor-92243.herokuapp.com/policeThana/${thana_id}/Inspector`)
        .then(res => res.json())
        .then(data => {
            setInspector(data);
        })
    },[thana_id]);

    // fetch SI data
    useEffect( () => {
        fetch(`https://limitless-tor-92243.herokuapp.com/policeThana/${thana_id}/SI`)
        .then(res => res.json())
        .then(data => {
            setSi(data);
        })
    },[thana_id]);

    // fetch ASI data
    useEffect( () => {
        fetch(`https://limitless-tor-92243.herokuapp.com/policeThana/${thana_id}/ASI`)
        .then(res => res.json())
        .then(data => {
            setAsi(data);
        })
    },[thana_id]);

    // fetch Constable data
    useEffect( () => {
        fetch(`https://limitless-tor-92243.herokuapp.com/policeThana/${thana_id}/Constable`)
        .then(res => res.json())
        .then(data => {
            setConstable(data);
        })
    },[thana_id]);

    const handleShowDetails = (range_id) => {
        fetch(`https://limitless-tor-92243.herokuapp.com/police/${range_id}`)
        .then(res => res.json())
        .then(data => {
            setPolice(data);
        })
        setChecked(true);

    }
    console.log(police);
    
    return (
        <div>
            <UserNavbar></UserNavbar>
            <div className='my-10'>
                <h2 className='text-center text-2xl font-bold mb-5'>Thana : {thana.thana_name}</h2>

                <div class="card bg-white shadow-xl mx-10 mb-10">
                    <div class="card-body">
                        <h2 class="card-title text-2xl">Inspector</h2>
                        <div class="overflow-x-auto overflow-y-auto h-60">
                            <table class="table w-full">
                                <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Range Id</th>
                                    <th>Phone Number</th>
                                    <th>See Details</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    inspector.map((i,index) => <tr
                                    key={i._id}
                                    >
                                        <th>{index+1}</th>
                                        <td>{i.name}</td>
                                        <td>{i.rangId}</td>
                                        <td>{i.phone}</td>
                                        <td>
                                            <button onClick={() => handleShowDetails(i.rangId)} className='btn btn-primary btn-sm text-white whitespace-nowrap '>Show Details</button>
                                        </td>
                                    </tr>)
                                }
                                
                               
                                </tbody>
                            </table>
                        </div>
                       
                    </div>
                </div>
                <div class="card bg-white shadow-xl mx-10 mb-10">
                    <div class="card-body">
                        <h2 class="card-title text-2xl">SI</h2>
                        <div class="overflow-x-auto overflow-y-auto h-60">
                            <table class="table w-full">
                                <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Range Id</th>
                                    <th>Phone Number</th>
                                    <th>See Details</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    si.map((i,index) => <tr
                                    key={i._id}
                                    >
                                        <th>{index+1}</th>
                                        <td>{i.name}</td>
                                        <td>{i.rangId}</td>
                                        <td>{i.phone}</td>
                                        <td>
                                            <button onClick={() => handleShowDetails(i.rangId)} className='btn btn-primary btn-sm text-white whitespace-nowrap '>Show Details</button>
                                        </td>
                                    </tr>)
                                }
                                
                               
                                </tbody>
                            </table>
                        </div>
                       
                    </div>
                </div>
                <div class="card bg-white shadow-xl mx-10 mb-10">
                    <div class="card-body">
                        <h2 class="card-title text-2xl">ASI</h2>
                        <div class="overflow-x-auto overflow-y-auto h-60">
                            <table class="table w-full">
                                <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Range Id</th>
                                    <th>Phone Number</th>
                                    <th>See Details</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    asi.map((i,index) => <tr
                                    key={i._id}
                                    >
                                        <th>{index+1}</th>
                                        <td>{i.name}</td>
                                        <td>{i.rangId}</td>
                                        <td>{i.phone}</td>
                                        <td>
                                            <button onClick={() => handleShowDetails(i.rangId)}  className='btn btn-primary btn-sm text-white whitespace-nowrap '>Show Details</button>
                                        </td>
                                    </tr>)
                                }
                                
                               
                                </tbody>
                            </table>
                        </div>
                       
                    </div>
                </div>
                <div class="card bg-white shadow-xl mx-10 mb-10">
                    <div class="card-body">
                        <h2 class="card-title text-2xl">Constable</h2>
                        <div class="overflow-x-auto overflow-y-auto h-60">
                            <table class="table w-full">
                                <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Range Id</th>
                                    <th>Phone Number</th>
                                    <th>See Details</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    constable.map((i,index) => <tr
                                    key={i._id}
                                    >
                                        <th>{index+1}</th>
                                        <td>{i.name}</td>
                                        <td>{i.rangId}</td>
                                        <td>{i.phone}</td>
                                        <td>
                                            <button onClick={() => handleShowDetails(i.rangId)} className='btn btn-primary btn-sm text-white whitespace-nowrap '>Show Details</button>
                                        </td>
                                    </tr>)
                                }
                                
                               
                                </tbody>
                            </table>
                        </div>
                       
                    </div>
                </div>


                {/* modal */}
                <input checked={checked} type="checkbox" id="my-modal-3" class="modal-toggle" />
                <div class="modal">
                    <div class="modal-box relative">
                        <button onClick={() => setChecked(false)} class="btn btn-sm btn-circle absolute right-2 top-2 text-white    ">✕</button>
                        <h3 class="text-2xl font-bold">Responsibility: {police.responsibility}</h3>
                        <div class="avatar">
                            <div class="w-24 mask mask-squircle my-4">
                                <img src={police.image} />
                            </div>
                        </div>
                        <p class="py-1">Name: {police.name}</p>
                        <p class="py-1">Range Id: {police.rangId}</p>
                        <p class="py-1">Thana: {police.thana}</p>
                        <p class="py-1">Phone: {police.phone}</p>
                    </div>
                </div>


            </div>        
        </div>
    );
};

export default ThanaDetails;