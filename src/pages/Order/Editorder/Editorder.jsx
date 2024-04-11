import React, { useState } from 'react';
// import img from "../../../assets/loginlogo.png";
import img from "../../../assets/Ecomus.svg";
import { useParams } from 'react-router-dom';
import { useGetSingleOrderQuery, usePostOrderStatusMutation } from '../../../store/api/orderapi';
import {useGetWebinfoQuery} from "../../../store/api/webinfoapi";
const Editorder = () => {
  const {id} = useParams()
  const [status,setstatus] = useState('')
  const [success,setsuccess] = useState('')
  const { data:websiteinfo, isLoading:websiteinfoloading } = useGetWebinfoQuery();
  const {data:orderdetail,isLoading:orderloading} = useGetSingleOrderQuery(id);
  const [postorderstatus] = usePostOrderStatusMutation();
 
  const changestatus = async(value,id) =>{
    const data = {order_status:value};
    const response = await postorderstatus({data, id: id });
console.log("response",response);
setsuccess("Order Status Updated Successfully");
setTimeout(() => {
  setsuccess("");
}, 4000);
  }
  const handlePrint = () => {
    window.print();
  };

  return (
    orderloading == true || websiteinfoloading == true ? <></> : <div style={{padding:'10px 5px'}}>
    <div className="wrapper">
      <section className="invoice">
        <div className="row">
          <div className="col-xs-12">
            <div className="container-fluid">
              <table width="99%" border="0" align="center" cellpadding="0" cellspacing="0" style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', border: '1px solid black' }}>
                <tbody>
                  <tr>
                    <td style={{ borderBottom: '1px solid black', height: '24px', fontSize: '14px' }} align="center"><strong>TAX INVOICE</strong></td>
                  </tr>
                  <tr>
                    <td width="50%" valign="top" style={{ borderBottom: '1px solid black', padding: '8px', lineHeight: '20px' }}>
                      <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tbody>
                          <tr>
                            <td width="49%"><strong>Company Name :</strong>{websiteinfo.data[0].website_name}<br />
                              <strong>Address:</strong> Rz-453T-block Dharampura New Delhi - 110043<br />
                              <strong>Phone no.: </strong>+91{websiteinfo.data[0].mobile_no}<br />
                              {/* <strong>Mobile no.: </strong>Company Mobile<br /> */}
                              <strong>Email: </strong>{websiteinfo.data[0].email}<br />
                              <strong>GSTIN:</strong> 393idkei39ei39993
                            </td>
                            <td width="51%" align="right"><img src={img} alt="Company Logo" style={{ width: '150px' }} /></td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tbody>
                          <tr>
                            <td width="50%" height="24" style={{ borderBottom: '1px solid black', borderRight: '1px solid black', padding: '8px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px' }}><strong>SHIPPING ADDRESS</strong></td>
                            <td width="50%" align="right" style={{ borderBottom: '1px solid black', padding: '8px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px' }}><strong>Invoice No.: {orderdetail.data.orderid}</strong></td>
                          </tr>
                          <tr>
                            <td width="50%" valign="top" style={{ borderBottom: '1px solid black', borderRight: '1px solid black', padding: '8px', lineHeight: '20px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px' }}>
                              <p>
                                <strong>Name:</strong> {orderdetail.data.shipping_first_name}&nbsp;{orderdetail.data.shipping_last_name}<br />
                                <strong>Address:</strong> {orderdetail.data.shipping_address1},{orderdetail.data.shipping_address2},{orderdetail.data.shipping_city},{orderdetail.data.shipping_state},{orderdetail.data.shipping_country}-{orderdetail.data.shipping_pincode}<br />
                                <strong>Phone no.: </strong>{orderdetail.data.shipping_mobile}<br />
                                <strong>Email: </strong>{orderdetail.data.shipping_email}
                              </p>
                            </td>
                            <td width="50%" align="right" valign="top" style={{ borderBottom: '1px solid black', padding: '8px', lineHeight: '20px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px' }}>
                              <p><strong>Date: {new Date(orderdetail.data.order_date.split('Time')[0]).toLocaleDateString('en-GB', {
              hour: 'numeric',
              minute: 'numeric'
            })}</strong></p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid black', borderRight: '1px solid black' }}>
                    <td>
                      <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tbody>
                          {/* ... (Other table rows) */}
                          <tr>
                            <td width="5%" height="24" align="center" style={{ borderBottom: '1px solid black', borderRight: '1px solid black', background: '#CCC', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px' }}><strong>S.NO.</strong></td>
                            <td style={{ borderBottom: '1px solid black', borderRight: '1px solid black', background: '#CCC', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px' }} width="29%" align="center"><strong>PRODUCT DESCRIPTION</strong></td>
                            <td width="12%" align="center" style={{ borderBottom: '1px solid black', borderRight: '1px solid black', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', background: '#CCC' }}><strong>HSN/ SAC</strong></td>
                            <td style={{ borderBottom: '1px solid black', borderRight: '1px solid black', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', background: '#CCC' }} width="15%" align="center"><strong>Qty</strong></td>
                            <td style={{ borderBottom: '1px solid black', borderRight: '1px solid black', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', background: '#CCC' }} width="15%" align="center"><strong>Price Per Product</strong></td>
                            <td style={{ borderBottom: '1px solid black', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', background: '#CCC' }} width="12%" align="center"><strong>Total Price</strong></td>
                          </tr>
                          {orderdetail.existingCartItem.map((rescart, index) => (
                            <tr>
                            <td width="5%" height="24" align="center" style={{ borderBottom: '1px solid black', borderRight: '1px solid black', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px' }}>&nbsp;{index + 1}</td>
                            <td style={{ borderBottom: '1px solid black', borderRight: '1px solid black', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px' }} width="29%" align="center">&nbsp;{rescart.product_name}</td>
                            <td style={{ borderBottom: '1px solid black', borderRight: '1px solid black', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px' }} width="15%" align="center">&nbsp;HSN</td>
                            <td style={{ borderBottom: '1px solid black', borderRight: '1px solid black', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px' }} width="15%" align="center">&nbsp;{rescart.product_qty}</td>
                            <td style={{ borderBottom: '1px solid black', borderRight: '1px solid black', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px' }} width="12%" align="center">&nbsp;{rescart.product_id == null ? rescart.product_variant_id.selling_price : rescart.product_id.selling_price}</td>
                            <td style={{ borderBottom: '1px solid black', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px' }} width="12%" align="center">&nbsp;{rescart.product_id == null ? rescart.product_variant_id.selling_price * rescart.product_qty : rescart.product_id.selling_price * rescart.product_qty}</td>
                          </tr>
                          ))}
                          {/* ... (Other table rows) */}
                          <tr>
                            <td width="5%" height="24" colSpan={3} align="center" style={{ borderBottom: '1px solid black', borderRight: '1px solid black',background: '#CCC', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '14px',fontWeight:'bold' }}>Total</td>
                            <td colSpan={3} style={{ borderBottom: '1px solid black', fontFamily: 'Arial, Helvetica, sans-serif',background: '#CCC', fontSize: '14px',fontWeight:'bold' }} width="15%" align="center">{orderdetail.data.sub_total_amount}</td>
                          </tr>
                          {/* ... (Other table rows) */}
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tbody>
                          {/* ... (Other table rows) */}
                          <tr>
                            <td width="20%" valign="top" style={{ padding: '8px 6px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px',display:'flex',justifyContent:'space-between' }}>
                              <strong>Sub Total :</strong> {orderdetail.data.sub_total_amount} INR
                            </td>
                          </tr>
                          
                          {/* ... (Other table rows) */}
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <table width="100%" border="0"  cellspacing="0" cellpadding="0">
                        <tbody>
                          {/* ... (Other table rows) */}
                          <tr style={{borderTop:'1px solid black'}}>
                            <td width="20%" valign="top" style={{ padding: '8px 6px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px',display:'flex',justifyContent:'space-between' }}>
                              <strong>Shipping Charges :</strong> {orderdetail.data.shipping_charges} INR
                            </td>
                          </tr>
                          
                          {/* ... (Other table rows) */}
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <table width="100%" border="0"  cellspacing="0" cellpadding="0">
                        <tbody>
                          {/* ... (Other table rows) */}
                          <tr style={{borderTop:'1px solid black'}}>
                            <td width="20%" valign="top" style={{ padding: '8px 6px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px',display:'flex',justifyContent:'space-between' }}>
                              <strong>Grand Total :</strong> {orderdetail.data.sub_total_amount} INR
                            </td>
                          </tr>
                          
                          {/* ... (Other table rows) */}
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  {/* ... (Other table rows) */}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="row removeprintbtn" style={{padding:'10px 22px',display:'flex',justifyContent:'space-between'}}>
        <div style={{display:'flex',width:'60%',padding:'0px'}} className='hidebox1'>
      <select className="custom-select hidebox1" onChange={(e)=>{setstatus(e.target.value)}}>
       {orderdetail.data.order_status == "Pending" ? <option value="Pending" selected>Pending</option> : <option value="Pending">Pending</option>} 
       {orderdetail.data.order_status == "Shipped" ? <option value="Shipped" selected>Shipped</option> : <option value="Shipped">Shipped</option>} 
       {orderdetail.data.order_status == "Cancelled" ? <option value="Cancelled" selected>Cancelled</option> : <option value="Cancelled">Cancelled</option>} 
       {orderdetail.data.order_status == "Dilevered" ? <option value="Dilevered" selected>Dilevered</option> : <option value="Dilevered">Dilevered</option>} 
      </select>
      <button className="save-button hidebox1" type='button' onClick={()=>{changestatus(status,orderdetail.data._id)}} style={{background:'#059fe2'}} >
        Save
      </button>
    </div>
          <div style={{display:'flex',justifyContent:'end',width:'40%'}} className='hidebox1'>
          <button onClick={handlePrint} className="removeprintbtn printbtn className='hidebox1'" style={{background:"#059fe2"}}>
  <span role="img" aria-label="Print Icon">🖨️</span> Print Invoice
</button>

          </div>

          <div className="col-12" style={{display:success == "" ? "none" : "block"}}>
          <div class="alert alert-success mt-2" role="alert">
  {success}
</div>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
};

export default Editorder;
