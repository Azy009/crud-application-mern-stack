import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Loadercomp from '../../components/Loadercomp';

const Profiledetail = () => {
    const [srtloader, setsrtloader] = useState(false);


    const [Data,setData] = useState({});

    useEffect(() => {
        async function fetchData() {
            setsrtloader(true)
        let url = `${process.env.REACT_APP_API_URL}api/profile`;
          const response = await axios.get(url);
          setData(response.data);
          setsrtloader(false)
        }
        fetchData();
    },[]);


    return (
        <div style={{ width: '100%' }}>
            
            {/* <Header /> */}
            <div className="dashboardcontent">
                {/* <Breadcup name={'Profile'} /> */}
                <div className="container-fuild px-2 desgin1">
                    <div className="row bg-white ">
                        {/* <div className="col-12 py-3 customtext23" style={{ background: 'hsla(210, 85%, 32%, 0.2)', color: '#0C5398' }}>Personal Detail</div> */}
                        <div className="col-lg-12 d-flex justify-content-between py-2" style={{ background: 'hsla(210, 85%, 32%, 0.2)', color: '#0C5398' }}>
              <p className="m-0 customfont" >Personal Detail</p>
              <div className="addnew d-block mb-2">
                <button className="btn text-white closebtn"><NavLink to='/dashboard' style={{ textDecoration: 'none', color: 'white' }}> x Close</NavLink></button>
              </div>
    
            </div>
                    </div>
                </div>
            
                {srtloader === true ? <div className="container-fuild bg-white"> <div className="col-12 d-flex justify-content-center" style={{gap:'4px' , position:'absolute',width:"80%"}}>
        <div className='px-2'> <Loadercomp size={100} /></div>
        </div></div> :
                <div className="container-fuild px-2 pb-4 pt-3 bg-white">
                    <div className="row bg-white pb-4 round" style={{ border: '1px solid #E0E0E0', margin: "10px 0px", borderRadius: '3px' }}>
                        <div className="col-6 px-4 pt-4">
                            <div className="row">
                                <div className="col-3">
                                    <label htmlFor="" className="form-label">
                                        Full Name
                                    </label>
                                </div>
                                <div className="col-9">
                                    <p className='customcolor'>{Data.first_name ? Data.first_name : ''}</p>
                                </div>
                            </div>
                        </div>                        
                        <div className="col-6 px-4 pt-4">
                            <div className="row">
                                <div className="col-3">
                                    <label htmlFor="" className="form-label">Email </label>
                                </div>
                                <div className="col-9">
                                    <p className='customcolor'>{Data.email ? Data.email : ''}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 px-4 pt-4">
                            <div className="row">
                                <div className="col-3">
                                    <label htmlFor="" className="form-label customw">Date of Birth  </label>
                                </div>
                                <div className="col-9">
                                    <p className='customcolor'>{Data.dob ? Data.dob : ''}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 px-4 pt-4">
                            <div className="row">
                                <div className="col-3">
                                    <label htmlFor="" className="form-label">Mobile No. </label>
                                </div>
                                <div className="col-9">
                                    <p className='customcolor'>{Data.mobile_no ? Data.mobile_no : ''}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 px-4 pt-4">
                            <div className="row">
                                <div className="col-3">
                                    <label htmlFor="" className="form-label">Address </label>
                                </div>
                                <div className="col-9">
                                    <p className='customcolor'>{Data.address ? Data.address : ''}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 px-4 pt-4">
                            <div className="row">
                                <div className="col-3">
                                    <label htmlFor="" className="form-label">Country  </label>
                                </div>
                                <div className="col-9">
                                    <p className='customcolor'>{Data.country ? Data.country : ''}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 px-4 pt-4">
                            <div className="row">
                                <div className="col-3">
                                    <label htmlFor="" className="form-label">State  </label>
                                </div>
                                <div className="col-9">
                                    <p className='customcolor'>{Data.state ? Data.state : ''}</p>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-6 px-4 pt-4">
                            <div className="row">
                                <div className="col-3">
                                    <label htmlFor="" className="form-label">City </label>
                                </div>
                                <div className="col-9">
                                    <p className='customcolor'>Gurugram</p>
                                </div>
                            </div>
                        </div> */}
                        <div className="col-6 px-4 pt-4">
                            <div className="row">
                                <div className="col-3">
                                    <label htmlFor="" className="form-label">Pincode </label>
                                </div>
                                <div className="col-9">
                                    <p className='customcolor'>{Data.pincode ? Data.pincode : '' }</p>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-12">
                            <div className="row">
                                <div className="col-12 py-5 px-4 d-flex justify-content-end" style={{ gap: '4px' }}>
                                   <a href="/Addprofile"><button className='btn3'>Edit Profile</button></a>
                                    
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default Profiledetail