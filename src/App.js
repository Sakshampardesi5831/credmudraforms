import React, { Fragment,useEffect,useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {BsArrowRight,BsArrowLeft} from 'react-icons/bs'
import {salariedIMG,selfEmployeedIMG,bankTransfer,cash,man,couple} from '../src/assets/index'
import {MDBInputSelect} from 'mdbreact'
import axios from 'axios'
const ContainerStyler={
  minHeight:"100vh",
  // border:"2px solid red",
  padding:"20px 0px"
}
const ColStyler={
  minHeight:"40vh",
  border:"2px solid green",
  display:"flex",
  flexDirection:"column",
  justifyContent:"center",
  gap:"10px",
  padding:"10px 15px"
}



const App = () => {
  /**---------------ALL FORMS USESTATE FOR SHOW AND HIDE-------------------------------------------------------------- */
   const [formSteps, setformSteps] = useState('initial')
   const [choosing,setChoosing]=useState("");
   const [gender,setGender]=useState("");
   const [transfer,setTransfer]=useState("");
   const [employeeForm,setEmployeeForm]=useState("");
   const [selectedDate, setSelectedDate] = useState('');
    const handleDateChange = (event) => {
    const newDate = event.target.value;
    setSelectedDate(newDate);
    };
    const changeSalariedBg=()=>{
      setChoosing("salaried");
      setEmployeeForm("salaried");
    }
    const changeSelfEmployeeBg=()=>{
     setChoosing("selfemployed");
     setEmployeeForm("selfemployed");
    }
    const userSelected=()=>{
    if(employeeForm==="salaried"){
       setformSteps("salaried");
    }
    if(employeeForm==="selfemployed"){
      setformSteps("selfEmployed");
    }
    }
    const redirectToPersonalDetails=()=>{
      if(employeeForm ==="selfemployed"){
        setformSteps("personalDetails");
      }
      if(employeeForm ==="salaried"){
        setformSteps("personalDetails");
      }
    }
    const backToPreviousSelectedForm=()=>{
    if(employeeForm ==="selfemployed"){
        setformSteps("selfEmployed");
      }
     if(employeeForm ==="salaried"){
        setformSteps("salaried");
      }
    }
  /**----------------------------------------------------------------------------------------------------------------------- */
   return (
    <Fragment>
      <div className='container'  style={ContainerStyler}>
         <div  className='row' style={{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"100vh"}} >
                {formSteps === "initial" && (
                  <div style={ColStyler} className='col-lg-5 col-md-11 col-sm-11'>
                  <h1  style={{fontSize:"40px",fontWeight:"800",color:"#243771"}} >Welcome to CredMudra</h1>
                    <div className='formWrapper'>
                      <h6>Enter your 10 digit mobile number to proceed: *</h6>
                      <input className='inputStyler' placeholder='XXXXXXXXXX'></input>
                    </div>
                      <button onClick={()=>setformSteps("verify")}className='mainButton'>
                       Next <BsArrowRight/>
                      </button>
                      <div className="form-check">
                        <input className="form-check-input" style={{backgroundColor:"#243771"}} type="checkbox" value="" id="flexCheckDefault"/>
                       <label className="form-check-label" htmlFor="flexCheckDefault">
                             By continuing, I agree to Credmudra's Privacy Policy and Terms & Conditions and receive communication from Credmudra via SMS, E-mail, and WhatsApp.
                       </label>
                 </div>
                  </div>
                )}
                {formSteps ==="verify" && (
                  <div className='col-lg-5 col-md-11 col-sm-11 col-xs-11' style={ColStyler}>
                <h1  style={{fontSize:"40px",fontWeight:"800",color:"#243771"}} >Verify Mobile</h1>
                <div className='formWrapper'>
                    <h6>Enter the Otp Receive on Mobile</h6>
                     <input className='inputStyler' placeholder='XXXXXXXXXX'></input>
                </div>
                <button onClick={()=> setformSteps("loan")}className='mainButton'>
                  Next <BsArrowRight/>
                </button>
                 </div>
                )}
                {formSteps ==="loan" && (
                  <div className='col-lg-5 col-md-11 col-sm-11 col-xs-11' style={ColStyler}  lg={5}>
                  <h1  style={{fontSize:"40px",fontWeight:"800",color:"#243771"}} >Loan Details</h1>
                  <div className='formWrapper'>
                       <div className='contentWrapper'>
                        <h6>Enter the Loan Amount</h6>
                       <input className='inputStyler' placeholder='Enter the Loan Amount'></input> 
                       </div>
                       <div className='contentWrapper' >
                       <h6>Enter the Loan Tenure</h6>
                       <input className='inputStyler' placeholder='Enter the Loan Tenure'></input>
                       </div>
                       <div className='contentWrapper' >
                       <h6>PAN Card Number</h6>
                       <input className='inputStyler' placeholder='PAN Card Number'></input>
                       </div>
                       <div className='contentWrapper' >
                       <h6>Email Address</h6>
                       <input className='inputStyler' placeholder='Email Address'></input>
                       </div>
                  </div>
                   <div className='buttonWrapper'>
                  <button onClick={()=>setformSteps("employeType")} className='mainButton'>
                    Next <BsArrowRight/>
                    </button>
                  </div>
                 </div>
                )}
                {formSteps === "employeType" && (
                 <div className='col-lg-5 col-md-11 col-sm-11 col-xs-11' style={ColStyler}  lg={5}>
                 <h1  style={{fontSize:"40px",fontWeight:"800",color:"#243771"}} >Select Employee Type</h1>
                 <div className='formWrapper'>
                      <h5  style={{fontSize:"20px"}} >Your Profession</h5>
                      <div className='selectBox'>
                          <div onClick={()=>changeSalariedBg()} style={choosing==="salaried"?{backgroundColor:"#f7d64a",border:"none"}:{backgroundColor:"transparent",border:"2px solid #243771"}} className='employeeBox'>
                              <div className='employeeImg'>
                                  <img src={salariedIMG} alt='salaried'/>
                              </div>
                              <h6>Salaried</h6>
                          </div>
                          <div onClick={()=>changeSelfEmployeeBg()} style={choosing==="selfemployed"?{backgroundColor:"#f7d64a",border:"none"}:{backgroundColor:"transparent",border:"2px solid #243771"}}  className='employeeBox'>
                             <div className='employeeImg'>
                                  <img src={selfEmployeedIMG} alt='selfEmployed'/>
                              </div>
                              <h6>Self Employeed</h6>
                          </div>
                      </div>
                 </div>
                  <div className='buttonWrapper2'>
                  <button onClick={()=> setformSteps("loan")} className='mainButton2'>
                   <BsArrowLeft/> Previous 
                   </button>
                    <button onClick={()=>userSelected()} className='mainButton'>
                   Next <BsArrowRight/>
                   </button>
                 </div>
                </div>
                )}
                {formSteps ==="salaried" && (
                 <div className='col-lg-5 col-md-11 col-sm-11 col-xs-11' style={ColStyler}  lg={6}>
                 <h1  style={{fontSize:"40px",fontWeight:"800",color:"#243771"}} >Employment Details</h1>
                 <div className='formWrapper'>
                      <h5  style={{fontSize:"20px",color:"green"}}>Salaried Employee</h5>
                      <div className='formWrapperContent'>
                          <div className='formContent'>
                             <h6>Company Type</h6>
                             <select className='inputStyler'>
                               <option>Private</option>
                               <option>Public</option>
 
                             </select>
                          </div>
                          <div className='formContent'>
                             <h6>Company Type</h6>
                             <select className='inputStyler'>
                               <option>AdvertiseMent and VR</option>
                               
                             </select>
                          </div>
                          <div className='formContent'>
                             <h6>Enter the Designation</h6>
                             <input className='inputStyler' placeholder='Enter the Designation'></input>
                          </div>
                          <div className='formContent'>
                             <h6>Enter Company Name</h6>
                             <input className='inputStyler' placeholder='Enter the Company Name'></input>
                          </div>
                          <div className='formContent'>
                             <h6>Company Address</h6>
                             <input className='inputStyler' placeholder='Enter the Company Pincode'></input>
                             <input className='inputStyler' placeholder='City'></input>
                             <input className='inputStyler' placeholder='State'></input>
                             <input className='inputStyler' placeholder='Country'></input>
                          </div>
                          <div className='formContent'>
                             <h6>How Many Years You Are Working in Current Company? *</h6>
                             <select className='inputStyler'>
                               <option> 1 Year</option>
                               <option> 1-2 Year</option>
                             </select>
                          </div>
                          <div className='formContent'>
                             <h6>Monthly Income</h6>
                             <input className='inputStyler' placeholder='Enter the Monthly Income'></input>
                          </div>
                         <div className='modeOfTransfer'>
                         <div id='title'>Mode Of Salary *</div>
                          <div className='modeWrapper'>
                               <div className='modeBox' onClick={()=> setTransfer("bank")} style={transfer ==="bank"?{backgroundColor:"#f7d64a",border:"none"}:{backgroundColor:"transparent",border:"2px solid #243771"}} >
                                  <div   className='modeBoxImg'><img src={bankTransfer} alt="banktransfer" /></div>
                                  <h6>Bank Trasnfer</h6>
                               </div>
                               <div className='modeBox' onClick={()=>setTransfer("cash")} style={transfer ==="cash"?{backgroundColor:"#f7d64a",border:"none"}:{backgroundColor:"transparent",border:"2px solid #243771"}}>
                                  <div  className='modeBoxImg'><img src={cash} alt="cash"/></div>
                                  <h6>Cash</h6>
                               </div>
                          </div>
                         </div>
                         <div className='formContent'>
                             <h6>Name of Bank Account</h6>
                             <select className='inputStyler'>
                               <option>Ab Ltd bank</option>
                               <option>SBI</option>
                             </select>
                          </div>
                      </div>
                 </div>
                  <div className='buttonWrapper2'>
                  <button onClick={()=>setformSteps("employeType")} className='mainButton2'>
                   <BsArrowLeft/> Previous 
                   </button>
                 <button onClick={()=>redirectToPersonalDetails()}  className='mainButton'>
                   Next <BsArrowRight/>
                   </button>
                 </div>
                </div>
                )}
                {formSteps ==="selfEmployed" && (
                <div className='col-lg-6 col-md-11 col-sm-11 col-xs-11' style={ColStyler}>
                <h1  style={{fontSize:"40px",fontWeight:"800",color:"#243771"}} >Fill SelfEmployed Details</h1>
                <div className='formWrapper'>
                     <h5  style={{fontSize:"20px",color:"green"}} >Businness</h5>
                     <div className='formContent'>
                            <h6>Bussiness Run By</h6>
                            <select className='inputStyler'>
                              <option>Self</option>
                              <option>Parent</option>
                              <option>Spouse</option>
                              <option>Others</option>
                            </select>
                      </div>
                      <div className='formContent'>
                            <h6>How Many Years You Are Working in Current Business?*</h6>
                            <select className='inputStyler'>
                              <option>1 Year</option>
                              <option>1 - 1.5 year </option>
                              <option>2-10 Year</option>
                              <option>more than 10</option>
                            </select>
                      </div>
                      <div className='formContent'>
                            <h6>Business Type</h6>
                            <select className='inputStyler'>
                              <option> Limited Company </option>
                              <option>LLP</option>
                              <option>One Person Company</option>
                              <option>Not Registered</option>
                            </select>
                      </div>
                      <div className='formContent'>
                            <h6>Industry</h6>
                            <select className='inputStyler'>
                              <option>AdvertiseMent</option>
                              <option>Animation</option>
                              <option>Banking</option>
                              <option>AeroSpace Flims</option>
                            </select>
                      </div>
                      <div className='formContent'>
                            <h6>Company Name</h6>
                            <input className='inputStyler' placeholder='Enter the Company Name'></input>
                      </div>
                      <div className='formContent'>
                            <h6>Company Address</h6>
                            <input className='inputStyler' placeholder='Enter the Company Pincode'></input>
                            <input className='inputStyler' placeholder='City'></input>
                            <input className='inputStyler' placeholder='State'></input>
                            <input className='inputStyler' placeholder='Country'></input>
                      </div>
                      <div className='formContent'>
                            <h6>Designation</h6>
                            <input className='inputStyler' placeholder='Enter Your Designation'></input>
                      </div>
                      <div className='formContent'>
                            <h6>Monthly Profit</h6>
                            <input className='inputStyler' placeholder='Enter Your Monthly Profit'></input>
                      </div>
                      <div className='formContent'>
                            <h6>Business/Current Account Is With? *</h6>
                            <select className='inputStyler'>
                              <option>A B BANK LTD</option>
                              <option>State Bank of India</option>
                              <option>ICICI Bank</option>
                              <option>Assam Gramin Vikash Bank</option>
                            </select>
                      </div>
                      <div className='formContent'>
                            <h6>Primary/Savings Bank Account Is With? *</h6>
                            <select className='inputStyler'>
                              <option>A B BANK LTD</option>
                              <option>State Bank of India</option>
                              <option>ICICI Bank</option>
                              <option>Assam Gramin Vikash Bank</option>
                            </select>
                      </div>
                </div>
                 <div className='buttonWrapper2'>
                 <button onClick={()=> setformSteps("employeType")}className='mainButton2'>
                  <BsArrowLeft/> Previous 
                  </button>
                <button onClick={()=>redirectToPersonalDetails()} className='mainButton'>
                  Next <BsArrowRight/>
                  </button>
                </div>
                </div>
                )}
                {formSteps ==="personalDetails" && (
                <div className='col-lg-5 col-md-11 col-sm-11 col-xs-11' style={ColStyler}>
                <h1  style={{fontSize:"40px",fontWeight:"800",color:"#243771"}} >Personal Details</h1>
                <div className='formWrapper'>
                    <div className='formContent'>
                           <h6>First Name (As per PAN card) *</h6>
                           <input className='inputStyler' placeholder=' Enter the First Name'></input>
                     </div>
                     <div className='formContent'>
                           <h6>Last Name (As per PAN card) *</h6>
                           <input className='inputStyler' placeholder=' Enter the Last Name'></input>
                     </div>
                     <div className='formContent'>
                     <h6>DOB</h6>
                     <input type="date" className="inputStyler"   id="dob" name="dob" value={selectedDate} onChange={setSelectedDate} placeholder="dd/mm/yyyy" />
                     </div>
                     <div className='formContent'>
                           <h6>Gender *</h6>
                           <select className='inputStyler'>
                             <option>Male</option>
                             <option>Female</option>
                             <option>TransGender</option>
                           </select>
                     </div>
                     <div className='martialStatus'>
                        <div id='title'>Martial Status*</div>
                        <div className='martialStatusWrapper'>
                            <div className='martialStatusBox' onClick={()=>setGender("Male")} style={gender==="Male"?{backgroundColor:"#f7d64a",border:"none"}:{backgroundColor:"transparent",border:"2px solid #243771"}} >
                                <div className='martialImg'>
                                     <img src={man} alt="man" />
                                </div>
                                 <h6>Single</h6>
                            </div>
                            <div className='martialStatusBox' onClick={()=>setGender("Female")} style={gender==="Female"?{backgroundColor:"#f7d64a",border:"none"}:{backgroundColor:"transparent",border:"2px solid #243771"}} >
                            <div className='martialImg'>
                                     <img src={couple} alt="couple"/>
                                </div>
                                 <h6>Married</h6>
                            </div>
                        </div>
                       
                     </div>
                     <div className='formContent'>
                           <h6>Qualification *</h6>
                           <select className='inputStyler'>
                             <option>Under Gratuate</option>
                             <option>Graduate</option>
                             <option> Post Graduate</option>
                           </select>
                     </div>
                </div>
                <div className='buttonWrapper2'>
                <button onClick={()=>backToPreviousSelectedForm()} className='mainButton2'>
                 <BsArrowLeft/> Previous 
                 </button>
                  <button onClick={()=>setformSteps("address")}  className='mainButton'>
                 Next <BsArrowRight/>
                 </button>
                 </div>
                </div>
                )}
                {formSteps ==="address" && (
                   <div className='col-lg-6 col-md-11 col-sm-11 col-xs-11' style={ColStyler}>
                   <h1  style={{fontSize:"40px",fontWeight:"800",color:"#243771"}} >Address Details</h1>
                   <div className='formWrapper'>
                          <div className='formContent'>
                               <h6>Address Line 1 (Flat/Block) *</h6>
                               <input className='inputStyler' placeholder=' Enter the Address'></input>
                         </div>
                         <div className='formContent'>
                               <h6>Landmark (Area/Locality) *</h6>
                               <input className='inputStyler' placeholder=' Enter the LandMark'></input>
                         </div>
                         <div className='formContent'>
                               <h6>Pincode *</h6>
                               <input className='inputStyler' placeholder='Pincode'></input>
                         </div>
                         <div className='formContent'>
                               <h6>City *</h6>
                               <input className='inputStyler' placeholder='City'></input>
                         </div>
                         <div className='formContent'>
                               <h6>State *</h6>
                               <input className='inputStyler' placeholder='Country'></input>
                         </div>
                         <div className='formContent'>
                               <h6>Resident Type *</h6>
                               <select className='inputStyler'>
                                 <option>Self-Owned</option>
                                 <option>Owned By Parents</option>
                                 <option>Owned By Siblings</option>
                                 <option value="">Rented</option>
                                 <option value="">Company Provided</option>
                               </select>
                         </div>
                         <div className='formContent'>
                               <h6>How Many Years You Are Living in Current Address? *</h6>
                               <select className='inputStyler'>
                                 <option>1 Year</option>
                                 <option>1-2 year</option>
                                 <option>2-3 year</option>
                                 <option value="">4-5 year</option>
                                 <option value="">5+ year</option>
                               </select>
                         </div>
                   </div>
                   <div className='buttonWrapper2'>
                    <button onClick={()=>setformSteps("personalDetails")} className='mainButton2'>
                     <BsArrowLeft/> Previous 
                     </button>
                      <button onClick={()=> setformSteps("otherdetails")}  className='mainButton'>
                     Next <BsArrowRight/>
                     </button>
                   </div>
                   </div>
                )}
                {formSteps ==="otherdetails" && (
                 <div style={ColStyler}  className='col-lg-5 col-md-11 col-sm-11 col-xs-11'>
                 <h1  style={{fontSize:"40px",fontWeight:"800",color:"#243771"}} >Other Details</h1>
                 <div className='formWrapper'>
                     <div className='formContent'>
                         <h6>Total EMI Pay currently Per Month: *</h6>
                          <input className='inputStyler' placeholder='Total EMI Pay currently Per Month'></input>
                     </div>
                     <div className='formContent'>
                              <h6>Are you interested in getting any credit card? *</h6>
                              <select className='inputStyler'>
                                <option>Yes</option>
                                <option>No</option>
                              </select>
                    </div>
                 </div>
                 <div className='buttonWrapper2'>
                   <button onClick={()=>setformSteps("address")} className='mainButton2'>
                    <BsArrowLeft/> Previous 
                    </button>
                     <button onClick={()=>setformSteps("submitLoan")}  className='mainButton'>
                    Next <BsArrowRight/>
                    </button>
                  </div>
                 </div>
                )}
                {formSteps ==="submitLoan" && (
                  <div style={ColStyler}  className='col-lg-5 col-md-11 col-sm-11 col-xs-11'>
                <h1  style={{fontSize:"40px",fontWeight:"800",color:"#243771",width:"100%",paddingLeft:"10px"}} >Submit Loan Request</h1>
                <div className='formWrapper'>
                <div className="form-check">
                   <input className="form-check-input" style={{backgroundColor:"#243771"}} type="checkbox" value="" id="flexCheckDefault"/>
                     <label className="form-check-label" htmlFor="flexCheckDefault">
                     I hereby declare that I have read, understood and agree to the Terms & Conditions and the Privacy Policy of this platform. I allow Credmudra, its Lending Partners and subsidiaries to contact me via phone,email or any other mode of communication for loan, credit card or any other related matters, Information or promotions.
                     </label>
                 </div>
                </div>
                <div className='buttonWrapper2'>
                  <button onClick={()=> setformSteps("otherdetails")} className='mainButton2'>
                   <BsArrowLeft/> Previous 
                   </button>
                    <button  className='mainButton'>Submit</button>
                 </div>
                  </div>
                )}
         </div>
      </div >
    </Fragment>
  )
}

export default App

