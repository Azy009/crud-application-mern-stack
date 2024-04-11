import React from 'react'
import Breadcup from '../../components/Breadcup'
import Header from '../../components/Header'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import img1 from '../../assets/Group 40.png';
import img2 from '../../assets/Group 41.png';
import img3 from '../../assets/asdfg.png';
import img4 from "../../assets/abc.png";
import img5 from "../../assets/cba.png";
import { NavLink, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { gettoken } from '../../Localstorage/Store';
import Loadercomp from '../../components/Loadercomp';
import ReactImageMagnify from 'react-image-magnify';

const Cremittancedetail = () => {


  const {id} = useParams()
  // const [data, setData] = useState({});
  const gettokinval = gettoken();
  const [fname, setfname] = useState();
  const [lname, setlname] = useState();
  const [mobile_no, setmobile_no] = useState();
  const [gender, setgender] = useState("MALE");
  const [emailID, setemailID] = useState();
  const [dob, setdob] = useState();
  const [age, setage] = useState();
  const [company, setcompany] = useState("");
  const [location, setlocation] = useState("");
  const [address, setaddress] = useState();
  const [country, setcountry] = useState();
  const [state, setstate] = useState();
  const [city, setcity] = useState();
  const [pincode, setpincode] = useState();
  const [transaction_no, settransaction_no] = useState();
  const [selectedprod, setselectedprod] = useState();
  const [photograph, setphotograph] = useState("");
  const [cr_thumb, setcr_thumb] = useState("");
  const [cr_index_finger, setcr_index_finger] = useState();
  const [cr_middle_finger, setcr_middle_finger] = useState();
  const [cr_ring_finger, setcr_ring_finger] = useState();
  const [cr_little_finger, setcr_little_finger] = useState();
  const [cl_thumb, setcl_thumb] = useState();
  const [cl_index_finger, setcl_index_finger] = useState();
  const [cl_middle_finger, setcl_middle_finger] = useState();
  const [cl_ring_finger, setcl_ring_finger] = useState();
  const [cl_little_finger, setcl_little_finger] = useState();
  const [thumbimg2, setthumbimg2] = useState('');
    const [rifimg2, setrifimg2] = useState('');
    const [rmfimg2, setrmfimg2] = useState('');
    const [rrfimg2, setrrfimg2] = useState('');
    const [rlfimg2, setrlfimg2] = useState('');
    const [ltfimg2, setltfimg2] = useState('');
    const [lifimg2, setlifimg2] = useState('');
    const [lmfimg2, setlmfimg2] = useState('');
    const [lrfimg2, setlrfimg2] = useState('');
    const [llfimg2, setllfimg2] = useState('');

    const [thumbimg3, setthumbimg3] = useState('');
    const [rifimg3, setrifimg3] = useState('');
    const [rmfimg3, setrmfimg3] = useState('');
    const [rrfimg3, setrrfimg3] = useState('');
    const [rlfimg3, setrlfimg3] = useState('');
    const [ltfimg3, setltfimg3] = useState('');
    const [lifimg3, setlifimg3] = useState('');
    const [lmfimg3, setlmfimg3] = useState('');
    const [lrfimg3, setlrfimg3] = useState('');
    const [llfimg3, setllfimg3] = useState('');
  const [documenttype, setdocumenttype] = useState('PAN');
  const [idnumber, setidnumber] = useState('DTTPA8683J');
  const [documentimage, setdocumentimage] = useState('ASD');
  const [documentissue, setdocumentissue] = useState('SD');
  const [documentexpiry, setdocumentexpiry] = useState('ASD');
  const [status, setstatus] = useState()
  const [created_by, setcreated_by] = useState();
  const [created_at, setcreated_at] = useState();
  const [last_updated_by, setlast_updated_by] = useState();
  const [last_updated_at, setlast_updated_at] = useState();
  const [srtloader, setsrtloader] = useState(true);
  const [customer, setcustomer] = useState();
  const [customerphotograph, setcustomerphotograph] = useState("");
  const [aadhaarImage, setaadhaarImage] = useState();
  const [documentimagebacktwo, setdocumentimagebacktwo] = useState();
  const [cthumbimg2, setcthumbimg2] = useState('');
  const [crifimg2, setcrifimg2] = useState('');
  const [crmfimg2, setcrmfimg2] = useState('');
  const [crrfimg2, setcrrfimg2] = useState('');
  const [crlfimg2, setcrlfimg2] = useState('');
  const [cltfimg2, setcltfimg2] = useState('');
  const [clifimg2, setclifimg2] = useState('');
  const [clmfimg2, setclmfimg2] = useState('');
  const [clrfimg2, setclrfimg2] = useState('');
  const [cllfimg2, setcllfimg2] = useState('');
  const [crtdate, setcrtdate] = useState('');

//fetch user record ----> start
  useEffect(() => {
    async function fetchData() {
      const config = {
        headers: {
          Authorization: `Bearer ${gettokinval.access}`,
        },
      };
      let url = `${process.env.REACT_APP_API_URL}api/remittance/${id}/`;
      const response = await axios.get(url, config);
      console.log(response)
      // setname(response.data.product_name)
      // setlogohelp(response.data.logo)
      setsrtloader(false)
      setfname(response.data.customer_fname)
      setlname(response.data.customer_lname)
      setgender(response.data.customer_gender)
      setmobile_no(response.data.customer_mobile_no)
      setcompany(response.data.customer_company)
      setlocation(response.data.customer_company_location)
      setcountry(response.data.customer_country)
      setstate(response.data.customer_state)
      setaddress(response.data.customer_address)
      setcustomer(response.data.customer)
      setdob(response.data.customer_dob)
      setage(response.data.customer_age)
      setcity(response.data.customer_city)
      setpincode(response.data.customer_pincode)
      setemailID(response.data.customer_emailID)
      setphotograph(response.data.photograph)
      setcustomerphotograph(response.data.customer_photograph)
      settransaction_no(response.data.transaction_no)
      setselectedprod(response.data.product)
      setidnumber(response.data.customer_document_no)
        setdocumenttype(response.data.customer_document_type)
        setdocumentexpiry(response.data.customer_doc_expiry_date)
        setdocumentissue(response.data.customer_doc_issue_date)
        setstatus(response.data.status)
      setcreated_by(response.data.created_by)
      setcreated_at(response.data.created_at)
      setlast_updated_by(response.data.last_updated_by)
      setlast_updated_at(response.data.last_updated_at)
      setllfimg2(response.data.l_little_finger)
      setlrfimg2(response.data.l_ring_finger)
      setlmfimg2(response.data.l_middle_finger)
      setlifimg2(response.data.l_index_finger)
      setltfimg2(response.data.l_thumb)
      setrlfimg2(response.data.r_little_finger)
      setrrfimg2(response.data.r_ring_finger)
      setrmfimg2(response.data.r_middle_finger)
      setrifimg2(response.data.r_index_finger)
      setthumbimg2(response.data.r_thumb)
      setcllfimg2(response.data.customer_l_little_finger)
      setclrfimg2(response.data.customer_l_ring_finger)
      setclmfimg2(response.data.customer_l_middle_finger)
      setclifimg2(response.data.customer_l_index_finger)
      setcltfimg2(response.data.customer_l_thumb)
      setcrlfimg2(response.data.customer_r_little_finger)
      setcrrfimg2(response.data.customer_r_ring_finger)
      setcrmfimg2(response.data.customer_r_middle_finger)
      setcrifimg2(response.data.customer_r_index_finger)
      setcthumbimg2(response.data.customer_r_thumb)
      setdocumentimagebacktwo(response.data.customer_docImg_back)
      setaadhaarImage(response.data.customer_docImg_front)
      if(response.data.customer_dob !== undefined){
        const newdate = () => {
          // const num = parseInt(dateString)
           const dateParts = response.data.customer_dob.split('-');
           console.log("mmmmm",dateParts)
           const year = parseInt(dateParts[0], 10);
           const month = parseInt(dateParts[1], 10);
           const day = parseInt(dateParts[2], 10);
         
           const months = [
             'January',
             'February',
             'March',
             'April',
             'May',
             'June',
             'July',
             'August',
             'September',
             'October',
             'November',
             'December',
           ];
         
           const formattedDate = `${day} ${months[month - 1]}, ${year}`;
           setcrtdate(formattedDate)
         };
         newdate();
      }
    }
    fetchData();
  }, []);
//fetch user record ----> end

  return (
    <div style={{ width: '100%' }}>
      {/* <Header /> */}
      <div className="dashboardcontent px-2">
        {/* <Breadcup name={'Remittance'} second={'Checking'} /> */}
       
        <div className="container-fuild px-2 desgin1">
          <div className="row bg-white ">
            <div className="col-lg-12 d-flex justify-content-between py-2" style={{ background: 'hsla(210, 85%, 32%, 0.2)', color: '#0C5398' }}>
              <p className="m-0 customfont" >Remittance Detail</p>
              <div className="addnew d-block mb-2">
                <button className="btn text-white closebtn"><NavLink to='/checkremittancelist/0' style={{ textDecoration: 'none', color: 'white' }}> x Close</NavLink></button>
              </div>
            </div>
            {/* <div className="col-12 py-3 customtext23" style={{background: 'hsla(210, 85%, 32%, 0.2)',color:'#0C5398'}}> Remittance Detail</div> */}
          </div>
        </div>
        {srtloader == true ? <div className="container-fuild bg-white" style={{position:"relative"}}> <div className="col-12 d-flex justify-content-center" style={{gap:'4px' , position:'absolute',width:"95%"}}>
        <div className='px-2'> <Loadercomp size={100} /></div>
        </div></div> :  <div className="container-fuild pb-4 pt-3 px-2 bg-white">
       <div className="row bg-white pb-4 round" style={{border:'1px solid #E0E0E0',margin:"10px 0px",borderRadius: '3px'}}>
        <div className="col-lg-6 px-4 pt-3">
          <div className="row">
            <div className="col-md-4 col-4">
              <label htmlFor="" className="form-label">
              Customer Id  
              </label>
            </div>
            <div className="col-lg-6 col-md-7 col-8 d-flex justify-content-end">
            <p className='customcolor'>{customer}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 px-4 pt-3">
          <div className="row">
            <div className="col-md-4 col-4">
              <label htmlFor="" className="form-label customw">Email Address  </label>
            </div>
            <div className="col-lg-6 col-md-7 col-8 d-flex justify-content-end">
            <p className='customcolor'>{emailID}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 px-4 pt-3">
          <div className="row">
            <div className="col-md-4 col-4">
              <label htmlFor="" className="form-label">First Name </label>
            </div>
            <div className="col-lg-6 col-md-7 col-8 d-flex justify-content-end">
            <p className='customcolor'>{fname}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 px-4 pt-3">
          <div className="row">
            <div className="col-md-4 col-4">
              <label htmlFor="" className="form-label">Last Name </label>
            </div>
            <div className="col-lg-6 col-md-7 col-8 d-flex justify-content-end">
            <p className='customcolor'>{lname}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 px-4 pt-3">
          <div className="row">
            <div className="col-md-4 col-4">
              <label htmlFor="" className="form-label">Gender </label>
            </div>
            <div className="col-lg-6 col-md-7 col-8 d-flex justify-content-end">
            <p className='customcolor'>{gender}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 px-4 pt-3">
          <div className="row">
            <div className="col-md-4 col-4">
              <label htmlFor="" className="form-label">Mobile No. </label>
            </div>
            <div className="col-lg-6 col-md-7 col-8 d-flex justify-content-end">
            <p className='customcolor'>{mobile_no}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 px-4 pt-3">
          <div className="row">
            <div className="col-md-4 col-4">
              <label htmlFor="" className="form-label">Company </label>
            </div>
            <div className="col-lg-6 col-md-7 col-8 d-flex justify-content-end">
            <p className='customcolor'>{company}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 px-4 pt-3">
          <div className="row">
            <div className="col-md-4 col-4">
              <label htmlFor="" className="form-label">Location </label>
            </div>
            <div className="col-lg-6 col-md-7 col-8 d-flex justify-content-end">
            <p className='customcolor'>{location}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 px-4 pt-3">
          <div className="row">
            <div className="col-md-4 col-4">
              <label htmlFor="" className="form-label">DOB </label>
            </div>
            <div className="col-lg-6 col-md-7 col-8 d-flex justify-content-end">
            <p className='customcolor'>{crtdate}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 px-4 pt-3">
          <div className="row">
            <div className="col-md-4 col-4">
              <label htmlFor="" className="form-label">Age </label>
            </div>
            <div className="col-lg-6 col-md-7 col-8 d-flex justify-content-end">
            <p className='customcolor'>{age}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 px-4 pt-3">
          <div className="row">
            <div className="col-md-4 col-4">
              <label htmlFor="" className="form-label">Address </label>
            </div>
            <div className="col-lg-6 col-md-7 col-8 d-flex justify-content-end">
            <p className='customcolor'>{address}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 px-4 pt-3">
          <div className="row">
            <div className="col-md-4 col-4">
              <label htmlFor="" className="form-label">Country </label>
            </div>
            <div className="col-lg-6 col-md-7 col-8 d-flex justify-content-end">
            <p className='customcolor'>{country}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 px-4 pt-3">
          <div className="row">
            <div className="col-md-4 col-4">
              <label htmlFor="" className="form-label">State </label>
            </div>
            <div className="col-lg-6 col-md-7 col-8 d-flex justify-content-end">
            <p className='customcolor'>{state}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 px-4 pt-3">
          <div className="row">
            <div className="col-md-4 col-4">
              <label htmlFor="" className="form-label">City  </label>
            </div>
            <div className="col-lg-6 col-md-7 col-8 d-flex justify-content-end">
            <p className='customcolor'>{city}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 px-4 pt-3">
          <div className="row">
            <div className="col-md-4 col-4">
              <label htmlFor="" className="form-label">Pincode  </label>
            </div>
            <div className="col-lg-6 col-md-7 col-8 d-flex justify-content-end">
            <p className='customcolor'>{pincode}</p>
            </div>
          </div>
        </div>
       <div className="col-12">
       <div className="row px-4 pt-3">
        <div className="col-md-6">
          <div className="row">
            <div className="col-12"><label htmlFor="" className="form-label">Biometric Detail </label></div>
            <div className="col-12">
            <div className="border round py-3 d-flex justify-content-center">
                        <div className="d-flex flex-column align-items-center justify-content-center" style={{position:"relative"}}>
     <label htmlFor="">Right Hand</label>
     <img src={cthumbimg2 == '' || cthumbimg2 == null ? img5 : img4} alt="rtf" style={{position:"absolute",top:"80px",left:"13px"}} />
     <img src={crifimg2 == '' || crifimg2 == null ? img5 : img4} alt="rif" style={{position:"absolute",top:"37px",left:"35px"}} />
     <img src={crmfimg2 == '' || crmfimg2 == null ? img5 : img4} alt="rmf" style={{position:"absolute",top:"30px",left:"65px"}} />
     <img src={crrfimg2 == '' || crrfimg2 == null ? img5 : img4} alt="rrf" style={{position:"absolute",top:"36px",left:"84px"}} />
     <img src={crlfimg2 == '' || crlfimg2 == null ? img5 : img4} alt="rlf" style={{position:"absolute",top:"55px",left:"103px"}} />
                          <img src={img1} alt="qwerty" />
                          </div>
                          <div className="d-flex flex-column align-items-center justify-content-center" style={{position:"relative"}}>
<label htmlFor="">Left Hand</label>
<img src={cllfimg2 == '' || cllfimg2 == null ? img5 : img4} alt="llf" style={{position:"absolute",top:"56px",left:"13px"}} />
     <img src={clrfimg2 == '' || clrfimg2 == null ? img5 : img4} alt="lrf" style={{position:"absolute",top:"36px",left:"33px"}} />
     <img src={clmfimg2 == '' || clmfimg2 == null ? img5 : img4} alt="lmf" style={{position:"absolute",top:"31px",left:"55px"}} />
     <img src={clifimg2 == '' || clifimg2 == null ? img5 : img4} alt="lif" style={{position:"absolute",top:"38px",left:"80px"}} />
     <img src={cltfimg2 == '' || cltfimg2 == null ? img5 : img4} alt="ltf" style={{position:"absolute",top:"80px",left:"102px"}} />
                          <img src={img2} alt="trew" />
                          </div>
                        </div>
                      </div>
          </div>
          <div className="col-12 py-2 px-4 d-flex justify-content-between">
                <button
                type='button'
                  // className="btn1"
                  style={{backgroundColor:"#0C5398"}}
                  className='btn btn-primary'
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal6"
                >
                  View
                </button>
              </div>
        </div>
        <div className="col-md-6">
        <div className="row">
            <div className="col-12"><label htmlFor="" className="form-label">Photograph </label></div>
            <div className="col-12 ">
            <div className="border round py-3 d-flex justify-content-center">
              {/* <img src={photograph} alt="zxcvbnm" width="140px" height="162px" /> */}
              <button
                type='button'
                style={{border:'none',outline:'none'}}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModalthree"
                >
              <img src={customerphotograph == null ? img3 : customerphotograph} alt="zxcvbnm" width="140px" height="162px" />
              </button>
              {/* <ReactImageMagnify
                            {...{
                                smallImage: {
                                    alt: 'Wristwatch by Versace',
                                    isFluidWidth: true,
                                    src: customerphotograph == null ? img3 : customerphotograph,
                                    width:140,
                                    height:162
                                },
                                largeImage: {
                                    src: customerphotograph == null ? img3 : customerphotograph,
                                    width: 1200,
                                    height: 1800
                                },
                                // enlargedImagePosition: 'over',
                                lensStyle: { backgroundColor: 'rgba(0,0,0,.6)' }
                            }}
                            
                        /> */}
             </div>
            </div>
          </div>
        </div>
       </div>
       </div>
     <div className="col-12">
      <div className="row">
        <div className="col-12 ccolor py-3 px-4">Document</div>
      
        <div className="col-lg-6 px-4" style={{ paddingTop: "28px" }}>
    <div className="row">
      <div className="col-md-4 col-4">
        <label htmlFor="" className="form-label">
        Document Type 
        </label>
      </div>
      <div className="col-lg-6 col-md-7 col-8 d-flex justify-content-end d-flex" style={{ gap: '22px' }}>





                                    <p className='customcolor'>{documenttype}</p>
     
      </div>
    </div>
  </div>


  <div className="col-lg-6 px-4" style={{ paddingTop: "28px" }}>
    <div className="row">
      <div className="col-md-4 col-4">
        <label htmlFor="" className="form-label">
        Document No.
        </label>
      </div>
      <div className="col-lg-6 col-md-7 col-8 d-flex justify-content-end d-flex" style={{ gap: '22px' }}>
      <p className='customcolor'>{idnumber}</p>

      </div>
    </div>
  </div>



{documenttype == 'DRIVING_LICENSE' || documenttype == 'PASSPORT' ? <div className="col-lg-6 px-4">
                            <div className="row">
                                <div className="col-md-4 col-4">
                                    <label htmlFor="" className="form-label">Expiry date </label>
                                </div>
                                <div className="col-lg-6 col-md-7 col-8 d-flex justify-content-end d-flex" style={{ gap: '22px' }}>
                                    <p className='customcolor'>{documentexpiry}</p>
                                    <input class="form-check-input" type="checkbox"
                                    value='2023-04-12'
                        //              value={pincodecheck} onChange={(e) => {
                        //     setpincodecheck(!pincodecheck);
                        //   }} 
                          id="flexCheckChecked" required />
                                </div>
                            </div>
                        </div> : ''}
                        {documenttype == 'DRIVING_LICENSE' || documenttype == 'PASSPORT' ? <div className="col-lg-6 px-4">
                            <div className="row">
                                <div className="col-md-4 col-4">
                                    <label htmlFor="" className="form-label">Issue date </label>
                                </div>
                                <div className="col-lg-6 col-md-7 col-8 d-flex justify-content-end d-flex" style={{ gap: '22px' }}>
                                    <p className='customcolor'>{documentissue}</p>
                                    <input class="form-check-input" type="checkbox"
                                    value='2023-04-12'
                        //              value={pincodecheck} onChange={(e) => {
                        //     setpincodecheck(!pincodecheck);
                        //   }} 
                          id="flexCheckChecked" required />
                                </div>
                            </div>
                        </div> : ''}
                        <div className="offset-col-6 col-md-6 px-4" style={{ paddingTop: "28px" }}>
    <div className="row">
      <div className="col-lg-4">
        Document Front Image
      </div>
      <div className="col-lg-8">
      <img src={aadhaarImage} alt="Modified Aadhaar Card" style={{width:"100%",height:"100%"}} />
      </div>
      <div className=" offset-lg-4 col-lg-8">
      <button
style={{backgroundColor:"#0C5398",marginTop:"5px"}}
type='button'
className='btn btn-primary'
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal34"
                >
View
                </button>
      </div>
    </div>
  </div>
        {documenttype == 'AADHAAR' ?<div className="offset-col-6 col-md-6 px-4" style={{ paddingTop: "28px" }}>
    <div className="row">
      <div className="col-lg-4">
        Document Back Image
      </div>
      <div className="col-lg-8">
      <img src={documentimagebacktwo} alt="Modified Aadhaar Card" style={{width:"100%",height:"100%"}} />
      </div>
      <div className=" offset-lg-4 col-lg-8">
      <button
style={{backgroundColor:"#0C5398",marginTop:"5px"}}
type='button'
className='btn btn-primary'
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal35"
                >
View
                </button>
      </div>
    </div>
  </div> : ''}
        <div className="col-12 py-5 px-4">
          <div style={{background:'#D9D9D9',height:'1px',width:'100%'}}></div>
        </div>

        <div className="col-lg-6 px-4 pt-3">
          <div className="row">
            <div className="col-md-4 col-4">
              <label htmlFor="" className="form-label customw">Select Product  </label>
            </div>
            <div className="col-lg-6 col-md-7 col-8 d-flex justify-content-end">
            <p className='customcolor ps-2'>{selectedprod}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 px-4 pt-3">
          <div className="row">
            <div className="col-md-4 col-4">
              <label htmlFor="" className="form-label customw">Transaction No. </label>
            </div>
            <div className="col-lg-6 col-md-7 col-8 d-flex justify-content-end">
            <p className='customcolor ps-2' >{transaction_no}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 px-4 pt-3">
          <div className="row">
            <div className="col-md-4 col-4">
              <label htmlFor="" className="form-label customw">Created by </label>
            </div>
            <div className="col-lg-6 col-md-7 col-8 d-flex justify-content-end">
            <p className='customcolor'>{created_by}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 px-4 pt-3">
          <div className="row">
            <div className="col-md-4 col-4">
              <label htmlFor="" className="form-label customw">Created Date & Time </label>
            </div>
            <div className="col-lg-6 col-md-7 col-8 d-flex justify-content-end">
            <p className='customcolor'>{created_at}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 px-4 pt-3">
          <div className="row">
            <div className="col-md-4 col-4">
              <label htmlFor="" className="form-label customw">Last Modified by </label>
            </div>
            <div className="col-lg-6 col-md-7 col-8 d-flex justify-content-end">
            <p className='customcolor'>{last_updated_by == null ? "NOT MODIFIED" : last_updated_by}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 px-4 pt-3">
          <div className="row">
            <div className="col-md-4 col-4">
              <label htmlFor="" className="form-label customw">Last Modified Date & Time   </label>
            </div>
            <div className="col-lg-6 col-md-7 col-8 d-flex justify-content-end">
            <p className='customcolor'>{last_updated_at == null ? "NOT MODIFIED" : last_updated_at}</p>
            </div>
          </div>
        </div>

        <div className="col-12">
       <div className="row px-4 pt-3">
       <div className="col-md-6">
          <div className="row">
            <div className="col-12"><label htmlFor="" className="form-label">Biometric Detail <span style={{color:'red'}}>*</span></label></div>
            <div className="col-12">
                        <div className="border round py-3 d-flex justify-content-center">
                        <div className="d-flex flex-column align-items-center justify-content-center" style={{position:"relative"}}>
     <label htmlFor="">Right Hand</label>
     <img src={thumbimg2 == '' || thumbimg2 == null ? img5 : img4} alt="rtf" style={{position:"absolute",top:"80px",left:"13px"}} />
     <img src={rifimg2 == '' || rifimg2 == null ? img5 : img4} alt="rif" style={{position:"absolute",top:"37px",left:"35px"}} />
     <img src={rmfimg2 == '' || rmfimg2 == null ? img5 : img4} alt="rmf" style={{position:"absolute",top:"30px",left:"65px"}} />
     <img src={rrfimg2 == '' || rrfimg2 == null ? img5 : img4} alt="rrf" style={{position:"absolute",top:"36px",left:"84px"}} />
     <img src={rlfimg2 == '' || rlfimg2 == null ? img5 : img4} alt="rlf" style={{position:"absolute",top:"55px",left:"103px"}} />
                          <img src={img1} alt="qwerty" />
                          </div>
                          <div className="d-flex flex-column align-items-center justify-content-center" style={{position:"relative"}}>
<label htmlFor="">Left Hand</label>
<img src={llfimg2 == '' || llfimg2 == null ? img5 : img4} alt="llf" style={{position:"absolute",top:"56px",left:"13px"}} />
     <img src={lrfimg2 == '' || lrfimg2 == null ? img5 : img4} alt="lrf" style={{position:"absolute",top:"36px",left:"33px"}} />
     <img src={lmfimg2 == '' || lmfimg2 == null ? img5 : img4} alt="lmf" style={{position:"absolute",top:"31px",left:"55px"}} />
     <img src={lifimg2 == '' || lifimg2 == null ? img5 : img4} alt="lif" style={{position:"absolute",top:"38px",left:"80px"}} />
     <img src={ltfimg2 == '' || ltfimg2 == null ? img5 : img4} alt="ltf" style={{position:"absolute",top:"80px",left:"102px"}} />
                          <img src={img2} alt="trew" />
                          </div>
                        </div>
                      </div>
                      <div className="col-12 py-2 px-4 d-flex justify-content-between">
                <button
                type='button'
                  // className="btn1"
                  style={{backgroundColor:"#0C5398"}}
                  className='btn btn-primary'
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal5"
                >
                  View
                </button>
              </div>
          </div>
        </div>
        <div className="col-md-6">
        <div className="row">
            <div className="col-12"><label htmlFor="" className="form-label">Photograph </label></div>
            <div className="col-12 ">
            <div className="border round py-3 d-flex justify-content-center">
              {/* <img src={photograph == "" ? img3 : photograph} alt="zxcvbnm"  width="140px" height="162px"  /> */}
              <button
                type='button'
                style={{border:'none',outline:'none'}}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModaltwo"
                >
              <img src={photograph == null ? img3 : photograph} alt="zxcvbnm" width="140px" height="162px" />
              </button>
              {/* <ReactImageMagnify
                            {...{
                                smallImage: {
                                    alt: 'Wristwatch by Versace',
                                    isFluidWidth: true,
                                    src: photograph == null ? img3 : photograph,
                                    width:140,
                                    height:162
                                },
                                largeImage: {
                                    src: photograph == null ? img3 : photograph,
                                    width: 1200,
                                    height: 1800
                                },
                                // enlargedImagePosition: 'over',
                                lensStyle: { backgroundColor: 'rgba(0,0,0,.6)' }
                            }}
                            
                        /> */}
             </div>
            </div>
          </div>
        </div>
       </div>
       
       </div>
        {/* <div className="col-12 py-5 px-4 d-flex justify-content-end" style={{gap:'4px'}}>
          <button className='btn4'>Cancel</button>
          <button className='btn5'>Save</button>
        </div> */}
      </div>
     </div>
      </div>
      </div>}
      </div>


      <div className="modal fade" id="exampleModalthree" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-xl">
              <div className="modal-content">
                <div className="modal-header mod-line">
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                <div className="row bg-white round" style={{ border: '1px solid #E0E0E0', margin: "0px 0px", borderRadius: '3px', paddingBottom: '3rem' }}>
                <div className="col-12 px-2 pt-3">
  <img src={customerphotograph == null ? img3 : customerphotograph} style={{width:"100%",height:"100%"}} alt="photograph" />
  </div>
</div>
                </div>
              </div>
            </div>
          </div>  


      <div className="modal fade" id="exampleModaltwo" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-xl">
              <div className="modal-content">
                <div className="modal-header mod-line">
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                <div className="row bg-white round" style={{ border: '1px solid #E0E0E0', margin: "0px 0px", borderRadius: '3px', paddingBottom: '3rem' }}>
                <div className="col-12 px-2 pt-3">
  <img src={photograph == null ? img3 : photograph} style={{width:"100%",height:"100%"}} alt="photograph" />
  </div>
</div>
                </div>
              </div>
            </div>
          </div>  


          <div className="modal fade" id="exampleModal5" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg">
              <div className="modal-content">
                <div className="modal-header mod-line">
                  {/* <h5 className="modal-title" id="exampleModalLabel"></h5> */}
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">

                <div className="row bg-white round" style={{ border: '1px solid #E0E0E0', margin: "0px 0px", borderRadius: '3px', paddingBottom: '3rem' }}>

<div className="col-lg-6 px-2 pt-3">
    <div className="row">
      <div className="col-12 d-flex align-items-center justify-content-between" style={{gap:"15px"}}>
        <label htmlFor="tf2" className="form-label ">Right Thumb  <span style={{ color: 'red' }}>*</span></label>
        {/* <input type="file" class="form-control" id='tf2' name="image2" style={{opacity:"0",position:'absolute'}}  onChange={(e) => {handleImageChange11(e)}}  /> */}
        {/* <label htmlFor="tf"> */}
        <div style={{ border: '1px solid #E0E0E0', margin: "0px 0px", borderRadius: '3px', paddingBottom: thumbimg2 != '' && thumbimg2 != null ? '' : '3rem',width:"20%" }}> {thumbimg2 != '' && thumbimg2 != null ? <img src={`data:image/png;base64,${thumbimg2}`} width="70px" height="60px" alt="asd" /> : ''}  </div>

      </div>
    </div>
  </div>
  <div className="col-lg-6 px-2 pt-3">
    <div className="row">
      <div className="col-12 d-flex align-items-center justify-content-between" style={{gap:"15px"}}>
        <label htmlFor="ltf2" className="form-label ">Left Thumb  <span style={{ color: 'red' }}>*</span></label>
        {/* <input type="file" className="form-control" style={{opacity:"0",position:'absolute',left:"2035555555"}} id="ltf2" onChange={(e) => {handleImageChange16(e)}} /> */}
        <div style={{ border: '1px solid #E0E0E0', margin: "0px 0px", borderRadius: '3px', paddingBottom: ltfimg2 != '' && ltfimg2 != null ? '' : '3rem',width:"20%" }}> {ltfimg2 != '' && ltfimg2 != null ? <img src={`data:image/png;base64,${ltfimg2}`} width="70px" height="60px" alt="asd" /> : ''}  </div>
      </div>
    </div>
  </div>
  <div className="col-lg-6 px-2 pt-3">
    <div className="row">
      <div className="col-12 d-flex align-items-center justify-content-between" style={{gap:"15px"}}>
        <label htmlFor="rif2" className="form-label ">Right Index Finger <span style={{ color: 'red' }}>*</span></label>
        {/* <input type="file" className="form-control" style={{opacity:"0",position:'absolute',left:"205555555"}} id="rif2" onChange={(e) => {handleImageChange12(e)}} /> */}
        <div style={{ border: '1px solid #E0E0E0', margin: "0px 0px", borderRadius: '3px', paddingBottom: rifimg2 != '' && rifimg2 != null ? '' : '3rem',width:"20%" }}> {rifimg2 != '' && rifimg2 != null ? <img src={`data:image/png;base64,${rifimg2}`} width="70px" height="60px" alt="asd" /> : ''}  </div>
      </div>
    </div>
  </div>
  <div className="col-lg-6 px-2 pt-3">
    <div className="row">
      <div className="col-12 d-flex align-items-center justify-content-between" style={{gap:"15px"}}>
        <label htmlFor="lif2" className="form-label ">Left Index Finger  <span style={{ color: 'red' }}>*</span></label>
        {/* <input type="file" className="form-control" style={{opacity:"0",position:'absolute',left:"2035555555"}} id="lif2" onChange={(e) => {handleImageChange17(e)}} /> */}
        <div style={{ border: '1px solid #E0E0E0', margin: "0px 0px", borderRadius: '3px', paddingBottom: lifimg2 != '' && lifimg2 != null ? '' : '3rem',width:"20%" }}> {lifimg2 != '' && lifimg2 != null ? <img src={`data:image/png;base64,${lifimg2}`} width="70px" height="60px" alt="asd" /> : ''}  </div>
      </div>
    </div>
  </div>
  <div className="col-lg-6 px-2 pt-3">
    <div className="row">
      <div className="col-12 d-flex align-items-center justify-content-between" style={{gap:"15px"}}>
        <label htmlFor="rmf2" className="form-label ">Right Middle Finger<span style={{ color: 'red' }}>*</span></label>
        {/* <input type="file" className="form-control" style={{opacity:"0",position:'absolute',left:"205555555"}} id="rmf2" onChange={(e) => {handleImageChange13(e)}} /> */}
        <div style={{ border: '1px solid #E0E0E0', margin: "0px 0px", borderRadius: '3px', paddingBottom: rmfimg2 != '' && rmfimg2 != null ? '' : '3rem',width:"20%" }}> {rmfimg2 != '' && rmfimg2 != null ? <img src={`data:image/png;base64,${rmfimg2}`} width="70px" height="60px" alt="asd" /> : ''}  </div>
      </div>
    </div>

  </div>
  <div className="col-lg-6 px-2 pt-3">
    <div className="row">
      <div className="col-12 d-flex align-items-center justify-content-between" style={{gap:"15px"}}>
        <label htmlFor="lmf2" className="form-label ">Left Middle Finger <span style={{ color: 'red' }}>*</span></label>
        {/* <input type="file" className="form-control" style={{opacity:"0",position:'absolute',left:"2035555555"}} id="lmf2" onChange={(e) => {handleImageChange18(e)}} /> */}
        <div style={{ border: '1px solid #E0E0E0', margin: "0px 0px", borderRadius: '3px', paddingBottom: lmfimg2 != '' && lmfimg2 != null ? '' : '3rem',width:"20%" }}> {lmfimg2 != '' && lmfimg2 != null ? <img src={`data:image/png;base64,${lmfimg2}`} width="70px" height="60px" alt="asd" /> : ''}  </div>
        
      </div>
    </div>
  </div>
  <div className="col-lg-6 px-2 pt-3">
    <div className="row">
      <div className="col-12 d-flex align-items-center justify-content-between" style={{gap:"15px"}}>
        <label htmlFor="rrf2" className="form-label ">Right Ring Finger  <span style={{ color: 'red' }}>*</span></label>
        {/* <input type="file" className="form-control" style={{opacity:"0",position:'absolute',left:"2035555555"}} id="rrf2" onChange={(e) => {handleImageChange14(e)}} /> */}
        <div style={{ border: '1px solid #E0E0E0', margin: "0px 0px", borderRadius: '3px', paddingBottom: rrfimg2 != '' && rrfimg2 != null ? '' : '3rem',width:"20%" }}> {rrfimg2 != '' && rrfimg2 != null ? <img src={`data:image/png;base64,${rrfimg2}`} width="70px" height="60px" alt="asd" /> : ''}  </div>
       
      </div>
    </div>

  </div>
  <div className="col-lg-6 px-2 pt-3">
    <div className="row">
      <div className="col-12 d-flex align-items-center justify-content-between" style={{gap:"15px"}}>
        <label htmlFor="lrf2" className="form-label ">Left Ring Finger  <span style={{ color: 'red' }}>*</span></label>
        {/* <input type="file" className="form-control" style={{opacity:"0",position:'absolute',left:"2035555555"}} id="lrf2" onChange={(e) => {handleImageChange19(e)}} /> */}
        <div style={{ border: '1px solid #E0E0E0', margin: "0px 0px", borderRadius: '3px', paddingBottom: lrfimg2 != '' && lrfimg2 != null ? '' : '3rem',width:"20%" }}> {lrfimg2 != '' && lrfimg2 != null ? <img src={`data:image/png;base64,${lrfimg2}`} width="70px" height="60px" alt="asd" /> : ''}  </div>
        
      </div>
    </div>
  </div>
  <div className="col-lg-6 px-2 pt-3">
    <div className="row">
      <div className="col-12 d-flex align-items-center justify-content-between" style={{gap:"15px"}}>
        <label htmlFor="rlf2" className="form-label ">Right Little Finger  <span style={{ color: 'red' }}>*</span></label>
        {/* <input type="file" className="form-control" style={{opacity:"0",position:'absolute',left:"2035555555"}} id="rlf2" onChange={(e) => {handleImageChange15(e)}} /> */}
        <div style={{ border: '1px solid #E0E0E0', margin: "0px 0px", borderRadius: '3px', paddingBottom: rlfimg2 != '' && rlfimg2 != null ? '' : '3rem',width:"20%" }}> {rlfimg2 != '' && rlfimg2 != null ? <img src={`data:image/png;base64,${rlfimg2}`} width="70px" height="60px" alt="asd" /> : ''}  </div>
     
      </div>
    </div>
  </div>


 
 
  <div className="col-lg-6 px-2 pt-3">
    <div className="row">
      <div className="col-12 d-flex align-items-center justify-content-between" style={{gap:"15px"}}>
        <label htmlFor="llf2" className="form-label ">Left Little Finger  <span style={{ color: 'red' }}>*</span></label>
        {/* <input type="file" className="form-control" style={{opacity:"0",position:'absolute',left:"2035555555"}} id="llf2" onChange={(e) => {handleImageChange20(e)}} /> */}
        <div style={{ border: '1px solid #E0E0E0', margin: "0px 0px", borderRadius: '3px', paddingBottom: llfimg2 != '' && llfimg2 != null ? '' : '3rem',width:"20%" }}> {llfimg2 != '' && llfimg2 != null ? <img src={`data:image/png;base64,${llfimg2}`} width="70px" height="60px" alt="asd" /> : ''}  </div>
      
      </div>
    </div>
  </div>
</div>
                </div>
                {/* <div className="modal-footer mod-line m-auto">
                  <button type="button" className="btn closecancel">Cancel</button>
                  <button type="button" className="btn closebtn text-white">Submit</button>
                </div> */}
              </div>
            </div>
          </div>




          <div className="modal fade" id="exampleModal34" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-xl">
              <div className="modal-content">
                <div className="modal-header mod-line">
                  {/* <h5 className="modal-title" id="exampleModalLabel"></h5> */}
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">

                <div className="row bg-white round" style={{ border: '1px solid #E0E0E0', margin: "0px 0px", borderRadius: '3px', paddingBottom: '3rem' }}>


  
  <div className="col-12 px-2 pt-3">
  <img src={aadhaarImage == null ? img3 : aadhaarImage} style={{width:"100%",height:"100%"}} alt="photograph" />
  </div>
</div>
                </div>
                {/* <div className="modal-footer mod-line m-auto">
                  <button type="button" className="btn closecancel">Cancel</button>
                  <button type="button" className="btn closebtn text-white">Submit</button>
                </div> */}
              </div>
            </div>
          </div>


          <div className="modal fade" id="exampleModal35" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-xl">
              <div className="modal-content">
                <div className="modal-header mod-line">
                  {/* <h5 className="modal-title" id="exampleModalLabel"></h5> */}
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">

                <div className="row bg-white round" style={{ border: '1px solid #E0E0E0', margin: "0px 0px", borderRadius: '3px', paddingBottom: '3rem' }}>


  
  <div className="col-12 px-2 pt-3">
  <img src={documentimagebacktwo == null ? img3 : documentimagebacktwo} style={{width:"100%",height:"100%"}} alt="photograph" />
  </div>
</div>
                </div>
                {/* <div className="modal-footer mod-line m-auto">
                  <button type="button" className="btn closecancel">Cancel</button>
                  <button type="button" className="btn closebtn text-white">Submit</button>
                </div> */}
              </div>
            </div>
          </div>

          <div className="modal fade" id="exampleModal6" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg">
              <div className="modal-content">
                <div className="modal-header mod-line">
                  {/* <h5 className="modal-title" id="exampleModalLabel"></h5> */}
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">

                <div className="row bg-white round" style={{ border: '1px solid #E0E0E0', margin: "0px 0px", borderRadius: '3px', paddingBottom: '3rem' }}>

<div className="col-6 px-2 pt-3">
    <div className="row">
      <div className="col-12 d-flex align-items-center justify-content-between" style={{gap:"15px"}}>
        <label htmlFor="tf2" className="form-label ">Right Thumb  <span style={{ color: 'red' }}>*</span></label>
        {/* <input type="file" class="form-control" id='tf2' name="image2" style={{opacity:"0",position:'absolute'}}  onChange={(e) => {handleImageChange11(e)}}  /> */}
        {/* <label htmlFor="tf"> */}
        <div style={{ border: '1px solid #E0E0E0', margin: "0px 0px", borderRadius: '3px', paddingBottom: cthumbimg2 != '' && cthumbimg2 != null ? '' : '3rem',width:"20%" }}> {cthumbimg2 != '' && cthumbimg2 != null ? <img src={`data:image/png;base64,${cthumbimg2}`} width="70px" height="60px" alt="asd" /> : ''}  </div>

      </div>
    </div>
  </div>
  <div className="col-6 px-2 pt-3">
    <div className="row">
      <div className="col-12 d-flex align-items-center justify-content-between" style={{gap:"15px"}}>
        <label htmlFor="ltf2" className="form-label ">Left Thumb  <span style={{ color: 'red' }}>*</span></label>
        {/* <input type="file" className="form-control" style={{opacity:"0",position:'absolute',left:"2035555555"}} id="ltf2" onChange={(e) => {handleImageChange16(e)}} /> */}
        <div style={{ border: '1px solid #E0E0E0', margin: "0px 0px", borderRadius: '3px', paddingBottom: cltfimg2 != '' && cltfimg2 != null ? '' : '3rem',width:"20%" }}> {cltfimg2 != '' && cltfimg2 != null ? <img src={`data:image/png;base64,${cltfimg2}`} width="70px" height="60px" alt="asd" /> : ''}  </div>
      </div>
    </div>
  </div>
  <div className="col-6 px-2 pt-3">
    <div className="row">
      <div className="col-12 d-flex align-items-center justify-content-between" style={{gap:"15px"}}>
        <label htmlFor="rif2" className="form-label ">Right Index Finger <span style={{ color: 'red' }}>*</span></label>
        {/* <input type="file" className="form-control" style={{opacity:"0",position:'absolute',left:"205555555"}} id="rif2" onChange={(e) => {handleImageChange12(e)}} /> */}
        <div style={{ border: '1px solid #E0E0E0', margin: "0px 0px", borderRadius: '3px', paddingBottom: crifimg2 != '' && crifimg2 != null ? '' : '3rem',width:"20%" }}> {crifimg2 != '' && crifimg2 != null ? <img src={`data:image/png;base64,${crifimg2}`} width="70px" height="60px" alt="asd" /> : ''}  </div>
      </div>
    </div>
  </div>
  <div className="col-6 px-2 pt-3">
    <div className="row">
      <div className="col-12 d-flex align-items-center justify-content-between" style={{gap:"15px"}}>
        <label htmlFor="lif2" className="form-label ">Left Index Finger  <span style={{ color: 'red' }}>*</span></label>
        {/* <input type="file" className="form-control" style={{opacity:"0",position:'absolute',left:"2035555555"}} id="lif2" onChange={(e) => {handleImageChange17(e)}} /> */}
        <div style={{ border: '1px solid #E0E0E0', margin: "0px 0px", borderRadius: '3px', paddingBottom: clifimg2 != '' && clifimg2 != null ? '' : '3rem',width:"20%" }}> {clifimg2 != '' && clifimg2 != null ? <img src={`data:image/png;base64,${clifimg2}`} width="70px" height="60px" alt="asd" /> : ''}  </div>
      </div>
    </div>
  </div>
  <div className="col-6 px-2 pt-3">
    <div className="row">
      <div className="col-12 d-flex align-items-center justify-content-between" style={{gap:"15px"}}>
        <label htmlFor="rmf2" className="form-label ">Right Middle Finger<span style={{ color: 'red' }}>*</span></label>
        {/* <input type="file" className="form-control" style={{opacity:"0",position:'absolute',left:"205555555"}} id="rmf2" onChange={(e) => {handleImageChange13(e)}} /> */}
        <div style={{ border: '1px solid #E0E0E0', margin: "0px 0px", borderRadius: '3px', paddingBottom: crmfimg2 != '' && crmfimg2 != null ? '' : '3rem',width:"20%" }}> {crmfimg2 != '' && crmfimg2 != null ? <img src={`data:image/png;base64,${crmfimg2}`} width="70px" height="60px" alt="asd" /> : ''}  </div>
      </div>
    </div>

  </div>
  <div className="col-6 px-2 pt-3">
    <div className="row">
      <div className="col-12 d-flex align-items-center justify-content-between" style={{gap:"15px"}}>
        <label htmlFor="lmf2" className="form-label ">Left Middle Finger <span style={{ color: 'red' }}>*</span></label>
        {/* <input type="file" className="form-control" style={{opacity:"0",position:'absolute',left:"2035555555"}} id="lmf2" onChange={(e) => {handleImageChange18(e)}} /> */}
        <div style={{ border: '1px solid #E0E0E0', margin: "0px 0px", borderRadius: '3px', paddingBottom: clmfimg2 != '' && clmfimg2 != null ? '' : '3rem',width:"20%" }}> {clmfimg2 != '' && clmfimg2 != null ? <img src={`data:image/png;base64,${clmfimg2}`} width="70px" height="60px" alt="asd" /> : ''}  </div>
        
      </div>
    </div>
  </div>
  <div className="col-6 px-2 pt-3">
    <div className="row">
      <div className="col-12 d-flex align-items-center justify-content-between" style={{gap:"15px"}}>
        <label htmlFor="rrf2" className="form-label ">Right Ring Finger  <span style={{ color: 'red' }}>*</span></label>
        {/* <input type="file" className="form-control" style={{opacity:"0",position:'absolute',left:"2035555555"}} id="rrf2" onChange={(e) => {handleImageChange14(e)}} /> */}
        <div style={{ border: '1px solid #E0E0E0', margin: "0px 0px", borderRadius: '3px', paddingBottom: crrfimg2 != '' && crrfimg2 != null ? '' : '3rem',width:"20%" }}> {crrfimg2 != '' && crrfimg2 != null ? <img src={`data:image/png;base64,${crrfimg2}`} width="70px" height="60px" alt="asd" /> : ''}  </div>
       
      </div>
    </div>

  </div>
  <div className="col-6 px-2 pt-3">
    <div className="row">
      <div className="col-12 d-flex align-items-center justify-content-between" style={{gap:"15px"}}>
        <label htmlFor="lrf2" className="form-label ">Left Ring Finger  <span style={{ color: 'red' }}>*</span></label>
        {/* <input type="file" className="form-control" style={{opacity:"0",position:'absolute',left:"2035555555"}} id="lrf2" onChange={(e) => {handleImageChange19(e)}} /> */}
        <div style={{ border: '1px solid #E0E0E0', margin: "0px 0px", borderRadius: '3px', paddingBottom: clrfimg2 != '' && crrfimg2 != null ? '' : '3rem',width:"20%" }}> {clrfimg2 != '' && crrfimg2 != null ? <img src={`data:image/png;base64,${clrfimg2}`} width="70px" height="60px" alt="asd" /> : ''}  </div>
        
      </div>
    </div>
  </div>
  <div className="col-6 px-2 pt-3">
    <div className="row">
      <div className="col-12 d-flex align-items-center justify-content-between" style={{gap:"15px"}}>
        <label htmlFor="rlf2" className="form-label ">Right Little Finger  <span style={{ color: 'red' }}>*</span></label>
        {/* <input type="file" className="form-control" style={{opacity:"0",position:'absolute',left:"2035555555"}} id="rlf2" onChange={(e) => {handleImageChange15(e)}} /> */}
        <div style={{ border: '1px solid #E0E0E0', margin: "0px 0px", borderRadius: '3px', paddingBottom: crlfimg2 != '' && crrfimg2 != null ? '' : '3rem',width:"20%" }}> {crlfimg2 != '' && crrfimg2 != null ? <img src={`data:image/png;base64,${crlfimg2}`} width="70px" height="60px" alt="asd" /> : ''}  </div>
     
      </div>
    </div>
  </div>


 
 
  <div className="col-6 px-2 pt-3">
    <div className="row">
      <div className="col-12 d-flex align-items-center justify-content-between" style={{gap:"15px"}}>
        <label htmlFor="llf2" className="form-label ">Left Little Finger  <span style={{ color: 'red' }}>*</span></label>
        {/* <input type="file" className="form-control" style={{opacity:"0",position:'absolute',left:"2035555555"}} id="llf2" onChange={(e) => {handleImageChange20(e)}} /> */}
        <div style={{ border: '1px solid #E0E0E0', margin: "0px 0px", borderRadius: '3px', paddingBottom: cllfimg2 != '' && cllfimg2 != null ? '' : '3rem',width:"20%" }}> {cllfimg2 != '' && cllfimg2 != null ? <img src={`data:image/png;base64,${cllfimg2}`} width="70px" height="60px" alt="asd" /> : ''}  </div>
      
      </div>
    </div>
  </div>
</div>
                </div>
                {/* <div className="modal-footer mod-line m-auto">
                  <button type="button" className="btn closecancel">Cancel</button>
                  <button type="button" className="btn closebtn text-white">Submit</button>
                </div> */}
              </div>
            </div>
          </div>
    </div>
  )
}

export default Cremittancedetail