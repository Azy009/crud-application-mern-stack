import React, { useEffect, useState } from 'react'
import Breadcup from '../../components/Breadcup'
import Header from '../../components/Header'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import img1 from '../../assets/Group 40.png';
import img2 from '../../assets/Group 41.png';
import img3 from '../../assets/asdfg.png';
import img4 from "../../assets/abc.png";
import img5 from "../../assets/cba.png";
import { NavLink, useParams } from 'react-router-dom';
import axios from 'axios';
import { gettoken } from '../../Localstorage/Store';
import Loadercomp from '../../components/Loadercomp';
import ReactImageMagnify from 'react-image-magnify';

const Cagentdetail = () => {

  
  const [agentusername,setagentusername] = useState()
  const [agentname,setagentname] = useState()
  const [agentlast,setagentlast] = useState()
  const [agentemail,setagentemail] = useState()
  const [ffn,setffn] = useState()
  const [agentgender,setagentgender] = useState()
  const [agentmobile,setagentmobile] = useState()
  const [agentchecker,setagentchecker] = useState(false)
  const [agentmaker,setagentmaker] = useState(false)
  const [agentapprover,setagentapprover] = useState(false)
  const [agentcountry,setagentcountry] = useState()
  const [agentstate,setagentstate] = useState()
  const [agentcity,setagentcity] = useState()
  const [agentaddress,setagentaddress] = useState()
  const [agentpincode,setagentpincode] = useState()
  const [agentsuperadmin,setagentsuperadmin] = useState()
  const[defaultv,setdefaultv] = useState('')
  const[defaultvtwo,setdefaultvtwo] = useState('')
  const [created_by, setcreated_by] = useState();
  const [dob, setdob] = useState();
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
  const [cusage, setcusage] = useState();
  const [created_at, setcreated_at] = useState();
  const [last_updated_by, setlast_updated_by] = useState();
  const [last_updated_at, setlast_updated_at] = useState();
  const [srtloader, setsrtloader] = useState(true);
  const gettokinval = gettoken();
  const [photograph, setphotograph] = useState("");
  const [documenttype, setdocumenttype] = useState('PAN');
  const [idnumber, setidnumber] = useState('DTTPA8683J');
  const [documentimage, setdocumentimage] = useState('ASD');
  const [documentissue, setdocumentissue] = useState('SD');
  const [aadhaarImage, setaadhaarImage] = useState('');
  const [documentimagebacktwo, setdocumentimagebacktwo] = useState('');
  const [documentexpiry, setdocumentexpiry] = useState('ASD');
  const [documenttypetwo, setdocumenttypetwo] = useState();
  const [idnumbertwo, setidnumbertwo] = useState();
  const [documentissuetwo, setdocumentissuetwo] = useState();
  const [documentexpirytwo, setdocumentexpirytwo] = useState();
  const [modifiedImagenumbertwo, setModifiedImagenumbertwo] = useState(null);
  const [documentimageback2, setdocumentimageback2] = useState(null);
  const [crtdate, setcrtdate] = useState('');
  const {id} = useParams()

  // fetch agent details ----->start
  useEffect(() => {
    async function fetchData() {
      const config = {
        headers: {
          Authorization: `Bearer ${gettokinval.access}`,
        },
      };
      let url = `${process.env.REACT_APP_API_URL}api/agent/${id}/`;
      
      const response = await axios.get(url, config);
      // setdefaultv(response.data.company)
      setagentusername(response.data.username)
      setagentname(response.data.first_name)
      setagentlast(response.data.last_name)
      setagentemail(response.data.email)
      setagentmobile(response.data.mobile_no.substring(3))
      setagentaddress(response.data.address)
      setagentcountry(response.data.country)
      setagentstate(response.data.state)
      setagentcity(response.data.city)
      setagentpincode(response.data.pincode)
      setagentgender(response.data.gender)
      setdefaultv(response.data.company)
      setdefaultvtwo(response.data.location)
      setcreated_by(response.data.created_by)
      setcreated_at(response.data.created_at)
      setffn(response.data.fathersFullNm)
      setlast_updated_by(response.data.last_updated_by)
      setlast_updated_at(response.data.last_updated_at)
      setagentapprover(response.data.Approver)
      setdocumentimageback2(response.data.docImg_back2)
      setModifiedImagenumbertwo(response.data.docImg_front2)
      setdocumentexpirytwo(response.data.expiry_date2)
      setdocumentissuetwo(response.data.issue_date2)
      setidnumbertwo(response.data.document_no2)
      setdocumenttypetwo(response.data.document_type2)
      setagentmaker(response.data.Maker)
      setidnumber(response.data.document_no)
      setdocumenttype(response.data.document_type)
      setdocumentexpiry(response.data.expiry_date)
      setdocumentissue(response.data.issue_date)
      setagentchecker(response.data.Checker)
      setphotograph(response.data.photograph)
      setagentsuperadmin(response.data.is_superuser)
      setdob(response.data.dob)
      setdocumentimagebacktwo(response.data.docImg_back)
      setaadhaarImage(response.data.docImg_front)
      setcusage(response.data.agent_age)
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
      if(response.data.dob !== undefined){
        const newdate = () => {
          // const num = parseInt(dateString)
           const dateParts = response.data.dob.split('-');
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
      setsrtloader(false)
 
    }
    fetchData();
  }, []);
  // fetch agent details ----->end 
  return (
    <div style={{ width: '100%' }}>
      {/* <Header /> */}
      <div className="dashboardcontent px-2"> 
        {/* <Breadcup name={'Agent'} second={'Checking'} /> */}
        
        <div className="container-fuild px-2 desgin1">
          <div className="row bg-white ">
            <div className="col-lg-12 d-flex justify-content-between py-2" style={{ background: 'hsla(210, 85%, 32%, 0.2)', color: '#0C5398' }}>
              <p className="m-0 customfont" >Agent Detail</p>
              <div className="addnew d-block mb-2">
                <button className="btn text-white closebtn"><NavLink to='/checkagentlist/0' style={{ textDecoration: 'none', color: 'white' }}> x Close</NavLink></button>
              </div>
            </div>
            {/* <div className="col-12 py-3 customtext23" style={{background: 'hsla(210, 85%, 32%, 0.2)',color:'#0C5398'}}>Agent Detail</div> */}
          </div>
        </div>
        {srtloader == true ? <div className="container-fuild bg-white" style={{position:'relative'}}> <div className="col-12 d-flex justify-content-center" style={{gap:'4px' , position:'absolute',width:"95%"}}>
        <div className='px-2'> <Loadercomp size={100} /></div>
        </div></div> : <div className="container-fuild px-2 pb-4 pt-4 bg-white">
          <div className="row bg-white pb-4 round" style={{ border: '1px solid #E0E0E0', margin: "10px 0px", borderRadius: '3px' }}>
            <div className="col-lg-6 px-4 pt-3">
              <div className="row">
                <div className="col-md-4 col-4">
                  <label htmlFor="" className="form-label">
                    Username
                  </label>
                </div>
                <div className="col-lg-6 col-md-7 col-8 d-flex justify-content-end" style={{ gap: '22px' }}>
                  <p className='customcolor'>{agentusername}</p>

                </div>
              </div>
            </div>
            <div className="col-lg-6 px-4 pt-3">
              <div className="row">
                <div className="col-md-4 col-4">
                  <label htmlFor="" className="form-label customw">Email Address </label>
                </div>
                <div className="col-lg-6 col-md-7 col-8 d-flex justify-content-end" style={{ gap: '22px' }}>
                  <p className='customcolor'>{agentemail}</p>

                </div>
              </div>
            </div>
            <div className="col-lg-6 px-4 pt-3">
              <div className="row">
                <div className="col-md-4 col-4">
                  <label htmlFor="" className="form-label">First Name</label>
                </div>
                <div className="col-lg-6 col-md-7 col-8 d-flex justify-content-end" style={{ gap: '22px' }}>
                  <p className='customcolor'>{agentname}</p>

                </div>
              </div>
            </div>
            <div className="col-lg-6 px-4 pt-3">
              <div className="row">
                <div className="col-md-4 col-4">
                  <label htmlFor="" className="form-label">Last Name</label>
                </div>
                <div className="col-lg-6 col-md-7 col-8 d-flex justify-content-end" style={{ gap: '22px' }}>
                  <p className='customcolor'>{agentlast != "undefined" && agentlast != "" ? agentlast : ''}</p>

                </div>
              </div>
            </div>
            <div className="col-lg-6 px-4 pt-3">
              <div className="row">
                <div className="col-md-4 col-4">
                  <label htmlFor="" className="form-label customw">Father Name</label>
                </div>
                <div className="col-lg-6 col-md-7 col-8 d-flex justify-content-end" style={{ gap: '22px' }}>
                  <p className='customcolor'>{ffn}</p>

                </div>
              </div>
            </div>
            <div className="col-lg-6 px-4 pt-3">
              <div className="row">
                <div className="col-md-4 col-4">
                  <label htmlFor="" className="form-label">Gender</label>
                </div>
                <div className="col-lg-6 col-md-7 col-8 d-flex justify-content-end" style={{ gap: '22px' }}>
                  <p className='customcolor'>{agentgender}</p>

                </div>
              </div>
            </div>
            <div className="col-lg-6 px-4 pt-3">
              <div className="row">
                <div className="col-md-4 col-4">
                  <label htmlFor="" className="form-label">Mobile No.</label>
                </div>
                <div className="col-lg-6 col-md-7 col-8 d-flex justify-content-end" style={{ gap: '22px' }}>
                  <p className='customcolor'>{agentmobile}</p>

                </div>
              </div>
            </div>
            <div className="col-lg-6 px-4 pt-3">
              <div className="row">
                <div className="col-md-4 col-4">
                  <label htmlFor="" className="form-label">DOB</label>
                </div>
                <div className="col-lg-6 col-md-7 col-8 d-flex justify-content-end" style={{ gap: '22px' }}>
                  <p className='customcolor'>{crtdate}</p>

                </div>
              </div>
            </div>
            <div className="col-lg-6 px-4 pt-3">
              <div className="row">
                <div className="col-md-4 col-4">
                  <label htmlFor="" className="form-label">Age</label>
                </div>
                <div className="col-lg-6 col-md-7 col-8 d-flex justify-content-end" style={{ gap: '22px' }}>
                  <p className='customcolor'>{cusage}</p>

                </div>
              </div>
            </div>
            <div className="col-lg-6 px-4 pt-3">
              <div className="row">
                <div className="col-md-4 col-4">
                  <label htmlFor="" className="form-label">Company</label>
                </div>
                <div className="col-lg-6 col-md-7 col-8 d-flex justify-content-end" style={{ gap: '22px' }}>
                  <p className='customcolor'>{defaultv}</p>

                </div>
              </div>
            </div>
            <div className="col-lg-6 px-4 pt-3">
              <div className="row">
                <div className="col-md-4 col-4">
                  <label htmlFor="" className="form-label">Location</label>
                </div>
                <div className="col-lg-6 col-md-7 col-8 d-flex justify-content-end" style={{ gap: '22px' }}>
                  <p className='customcolor'>{defaultvtwo}</p>

                </div>
              </div>
            </div>
            <div className="col-lg-6 px-4 pt-3">
              <div className="row">
                <div className="col-md-4 col-4">
                  <label htmlFor="" className="form-label">Address</label>
                </div>
                <div className="col-lg-6 col-md-7 col-8 d-flex justify-content-end" style={{ gap: '22px' }}>
                  <p className='customcolor'>{agentaddress}</p>

                </div>
              </div>
            </div>
            <div className="col-lg-6 px-4 pt-3">
              <div className="row">
                <div className="col-md-4 col-4">
                  <label htmlFor="" className="form-label">Country</label>
                </div>
                <div className="col-lg-6 col-md-7 col-8 d-flex justify-content-end" style={{ gap: '22px' }}>
                  <p className='customcolor'>{agentcountry}</p>

                </div>
              </div>
            </div>
            <div className="col-lg-6 px-4 pt-3">
              <div className="row">
                <div className="col-md-4 col-4">
                  <label htmlFor="" className="form-label">State</label>
                </div>
                <div className="col-lg-6 col-md-7 col-8 d-flex justify-content-end" style={{ gap: '22px' }}>
                  <p className='customcolor'>{agentstate}</p>

                </div>
              </div>
            </div>
            <div className="col-lg-6 px-4 pt-3">
              <div className="row">
                <div className="col-md-4 col-4">
                  <label htmlFor="" className="form-label">City</label>
                </div>
                <div className="col-lg-6 col-md-7 col-8 d-flex justify-content-end" style={{ gap: '22px' }}>
                  <p className='customcolor'>{agentcity}</p>

                </div>
              </div>
            </div>
            <div className="col-lg-6 px-4 pt-3">
              <div className="row">
                <div className="col-md-4 col-4">
                  <label htmlFor="" className="form-label">Pincode</label>
                </div>
                <div className="col-lg-6 col-md-7 col-8 d-flex justify-content-end" style={{ gap: '22px' }}>
                  <p className='customcolor'>{agentpincode}</p>

                </div>
              </div>
            </div>
            <div className="col-lg-6 px-4 pt-3">
          <div className="row">
            <div className="col-md-4 col-4">
              <label htmlFor="" className="form-label">User Type</label>
            </div>
            <div className="col-lg-6 col-md-7 col-8 d-flex justify-content-end">
              <p className='customcolor'>{agentsuperadmin == true ? "Super Admin" : " Agent"}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 px-4 pt-3">
          <div className="row">
            <div className="col-md-4 col-4">
              <label htmlFor="" className="form-label">Created by</label>
            </div>
            <div className="col-lg-6 col-md-7 col-8 d-flex justify-content-end">
            <p className='customcolor ps-4'>{created_by}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 px-4 pt-3">
          <div className="row">
            <div className="col-md-4 col-4">
              <label htmlFor="" className="form-label">Created Date & Time</label>
            </div>
            <div className="col-lg-6 col-md-7 col-8 d-flex justify-content-end">
            <p className='customcolor ps-4'>{created_at}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 px-4 pt-3">
          <div className="row">
            <div className="col-md-4 col-4">
              <label htmlFor="" className="form-label">Last Modified by </label>
            </div>
            <div className="col-lg-6 col-md-7 col-8 d-flex justify-content-end">
            <p className='customcolor ps-4'>{last_updated_by ? last_updated_by : "NOT MODIFIED"}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 px-4 pt-3">
          <div className="row">
            <div className="col-md-4 col-4">
              <label htmlFor="" className="form-label">Last Modified Date & Time </label>
            </div>
            <div className="col-lg-6 col-md-7 col-8 d-flex justify-content-end">
            <p className='customcolor ps-4'>{last_updated_at ? last_updated_at : "NOT MODIFIED"}</p>
            </div>
          </div>
        </div>
            <div className="col-12 px-4 pt-3">
              <div className="row">
                <div className="col-2">
                  <label htmlFor="" className="form-label">Role</label>
                </div>
                {agentchecker == true ?   <div className="col-md-4 col-4"> <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked /> <label htmlFor="" className="form-label" style={{ paddingRight: '6px' }}>Checker</label></div> : ''}
               {agentmaker == true ? <div className="col-md-4 col-4"> <label htmlFor="" className="form-label" style={{ paddingRight: '6px' }}>Maker</label> <input className="form-check-input" type="checkbox" value="" checked /></div> : ''}
                {agentapprover == true ? <div className="col-md-4 col-4"> <label htmlFor="" className="form-label" style={{ paddingRight: '6px' }}>Approver</label> <input className="form-check-input" type="checkbox" value="" checked /></div> : ''}
              </div>
            </div>
            <div className="col-12">
              <div className="row px-4 pt-3">
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-12"><label htmlFor="" className="form-label" style={{ paddingRight: '10px' }}>Biometric Detail</label> </div>
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
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-12"><label htmlFor="" className="form-label" style={{ paddingRight: '10px' }}>Photograph</label></div>
                    <div className="col-12 ">
                      <div className="border round py-3 d-flex justify-content-center">
                        {/* <img src={ photograph ? photograph : img3} alt="zxcvbnm" width="140px" height="162px" /> */}
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
                                    width: 836,
                                    height: 1100
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
                <div className="col-12 ccolor py-4 px-4">Document </div>
                <div className="col-lg-6 px-4 pt-3" style={{ paddingTop: "28px" }}>
    <div className="row">
      <div className="col-md-4 col-4">
        <label htmlFor="" className="form-label">
        Document Type 
        </label>
      </div>
      <div className="col-lg-6 col-md-7 col-8 d-flex justify-content-end" style={{ gap: '22px' }}>





                                    <p className='customcolor'>{documenttype}</p>
     
      </div>
    </div>
  </div>
  <div className="col-lg-6 px-4 pt-3" style={{ paddingTop: "28px" }}>
    <div className="row">
      <div className="col-md-4 col-4">
        <label htmlFor="" className="form-label">
        Document No.
        </label>
      </div>
      <div className="col-lg-6 col-md-7 col-8 d-flex justify-content-end" style={{ gap: '22px' }}>
      <p className='customcolor'>{idnumber}</p>

      </div>
    </div>
  </div>
  {documenttype == 'DRIVING_LICENSE' || documenttype == 'PASSPORT' ? <div className="col-lg-6 px-4 pt-3">
                            <div className="row">
                                <div className="col-md-4 col-4">
                                    <label htmlFor="" className="form-label">Expiry date </label>
                                </div>
                                <div className="col-lg-6 col-md-7 col-8 d-flex justify-content-end" style={{ gap: '22px' }}>
                                    <p className='customcolor'>{documentexpiry}</p>
                                </div>
                            </div>
                        </div> : ''}
                        {documenttype == 'DRIVING_LICENSE' || documenttype == 'PASSPORT' ? <div className="col-lg-6 px-4 pt-3">
                            <div className="row">
                                <div className="col-md-4 col-4">
                                    <label htmlFor="" className="form-label">Issue date </label>
                                </div>
                                <div className="col-lg-6 col-md-7 col-8 d-flex justify-content-end" style={{ gap: '22px' }}>
                                    <p className='customcolor'>{documentissue}</p>
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
  <div className="offset-col-6 col-md-6 px-4" style={{ paddingTop: "28px" }}>
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
  </div> 
                {/* <div className="col-12 py-3 px-4">
                  <div style={{ background: '#D9D9D9', height: '1px', width: '100%' }}></div>
                </div> */}
                {/* <div className="col-12 py-5 px-4 d-flex justify-content-end" > */}
                  {/* <div>
                    <label htmlFor="" className="form-label customw">Checked All </label>

                  </div> */}
                  {/* <div className=" d-flex justify-content-end" style={{ gap: '4px' }}>
                    <button className='btn4'>Cancel</button>
                    <button className='btn5'>Save</button>
                  </div> */}
                {/* </div> */}
              </div>
            </div>















            <div className="col-12">
              <div className="row">
                <div className="col-12 ccolor py-4 px-4">Document 2</div>
                <div className="col-lg-6 px-4 pt-3" style={{ paddingTop: "28px" }}>
    <div className="row">
      <div className="col-md-4 col-4">
        <label htmlFor="" className="form-label">
        Document Type 
        </label>
      </div>
      <div className="col-lg-6 col-md-7 col-8 d-flex justify-content-end" style={{ gap: '22px' }}>





                                    <p className='customcolor'>{documenttypetwo}</p>
     
      </div>
    </div>
  </div>
  <div className="col-lg-6 px-4 pt-3" style={{ paddingTop: "28px" }}>
    <div className="row">
      <div className="col-md-4 col-4">
        <label htmlFor="" className="form-label">
        Document No.
        </label>
      </div>
      <div className="col-lg-6 col-md-7 col-8 d-flex justify-content-end" style={{ gap: '22px' }}>
      <p className='customcolor'>{idnumbertwo}</p>

      </div>
    </div>
  </div>
  {documenttypetwo == 'DRIVING_LICENSE' || documenttypetwo == 'PASSPORT' ? <div className="col-lg-6 px-4 pt-3">
                            <div className="row">
                                <div className="col-md-4 col-4">
                                    <label htmlFor="" className="form-label">Expiry date </label>
                                </div>
                                <div className="col-lg-6 col-md-7 col-8 d-flex justify-content-end" style={{ gap: '22px' }}>
                                    <p className='customcolor'>{documentexpirytwo}</p>
                                </div>
                            </div>
                        </div> : ''}
                        {documenttypetwo == 'DRIVING_LICENSE' || documenttypetwo == 'PASSPORT' ? <div className="col-lg-6 px-4 pt-3">
                            <div className="row">
                                <div className="col-md-4 col-4">
                                    <label htmlFor="" className="form-label">Issue date </label>
                                </div>
                                <div className="col-lg-6 col-md-7 col-8 d-flex justify-content-end" style={{ gap: '22px' }}>
                                    <p className='customcolor'>{documentissuetwo}</p>
                                </div>
                            </div>
                        </div> : ''}
                        <div className="offset-col-6 col-md-6 px-4" style={{ paddingTop: "28px" }}>
    <div className="row">
      <div className="col-lg-4">
        Document Front Image
      </div>
      <div className="col-lg-8">
      <img src={modifiedImagenumbertwo} alt="Modified Aadhaar Card" style={{width:"100%",height:"100%"}} />
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
  <div className="offset-col-6 col-md-6 px-4" style={{ paddingTop: "28px" }}>
    <div className="row">
      <div className="col-lg-4">
        Document Back Image
      </div>
      <div className="col-lg-8">
      <img src={documentimageback2} alt="Modified Aadhaar Card" style={{width:"100%",height:"100%"}} />
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
  </div> 
                {/* <div className="col-12 py-3 px-4">
                  <div style={{ background: '#D9D9D9', height: '1px', width: '100%' }}></div>
                </div> */}
                {/* <div className="col-12 py-5 px-4 d-flex justify-content-end" > */}
                  {/* <div>
                    <label htmlFor="" className="form-label customw">Checked All </label>

                  </div> */}
                  {/* <div className=" d-flex justify-content-end" style={{ gap: '4px' }}>
                    <button className='btn4'>Cancel</button>
                    <button className='btn5'>Save</button>
                  </div> */}
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>}
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
    </div>
  )
}

export default Cagentdetail