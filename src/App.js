import React, { Fragment,useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {BsArrowRight,BsArrowLeft} from 'react-icons/bs'
import {salariedIMG,selfEmployeedIMG,bankTransfer,cash} from '../src/assets/index'
const ContainerStyler={
  minHeight:"100vh",
  border:"2px solid red"
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
   const [formCount,setFormCount]=useState(0);
   const [userNumber,setUserNumber]=useState(true);
   const [userVerify,setUserVerify]=useState(false);
   const [userLoan,setUserLoan]=useState(false);
   const [userEmployeeType,setUserEmployeeType]=useState(false);
   const [salaried,setSalaried]=useState(false);
   const [selfEmployeed,setSelfEmployed]=useState(false);
   /**--------------------------------------------- */
   const [employeeForm,setEmployeeForm]=useState("");
   const [userSalary,setUserSalary]=useState(false);
   const [userSelfEmployed,setUserSelfEmployed]=useState(false);
    const userSelected=()=>{
        if(employeeForm==="salaried"){
          //  console.log(employeeForm);
           setUserEmployeeType(false);
           setUserSalary(true);
           setUserSelfEmployed(false);
        }
        if(employeeForm==="selfemployed"){
          //  console.log(employeeForm);
          setUserEmployeeType(false);
          setUserSelfEmployed(true);
          setUserSalary(false);
        }
    }

   /**---------------------------------------------- */
   const changeSalariedBg=()=>{
      setSalaried(true);
      setSelfEmployed(false);
      setEmployeeForm("salaried");
   }
   const changeSelfEmployeeBg=()=>{
       setSalaried(false);
       setSelfEmployed(true);
       setEmployeeForm("selfemployed");
   }
   const redirectToVerify=()=>{
       setUserNumber(false);
       setUserVerify(true);
   }
   const redirectToLoanForm=()=>{
      setUserVerify(false);
      setUserLoan(true);
   }
   const redirectToEmployeeType=()=>{
     setUserLoan(false);
     setUserEmployeeType(true);
   }
   const backtoLoan=()=>{
     setUserLoan(true);
     setUserEmployeeType(false);
   }
   const backtoEmployType=()=>{
    setUserEmployeeType(true);
    setUserSalary(false);
   }
   /**----------------------------------------------- */

   return (
    <Fragment>
      <Container style={ContainerStyler}>
         <Row  style={{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"100vh"}} >
             {userNumber?
                 <Col style={ColStyler}  lg={5}>
                 <h1  style={{fontSize:"40px",fontWeight:"800",color:"#243771"}} >Welcome to CredMudra</h1>
                 <div className='formWrapper'>
                     <h6>Enter your 10 digit mobile number to proceed: *</h6>
                      <input className='inputStyler' placeholder='XXXXXXXXXX'></input>
                 </div>
                 <button onClick={()=>redirectToVerify()}className='mainButton'>
                   Next <BsArrowRight/>
                 </button>
                 </Col>
             :""}
             {userVerify?
               <Col style={ColStyler}  lg={5}>
               <h1  style={{fontSize:"40px",fontWeight:"800",color:"#243771"}} >Verify Mobile</h1>
               <div className='formWrapper'>
                   <h6>Enter the Otp Receive on Mobile</h6>
                    <input className='inputStyler' placeholder='XXXXXXXXXX'></input>
               </div>
               <button onClick={()=>redirectToLoanForm()}className='mainButton'>
                 Next <BsArrowRight/>
               </button>
              </Col>
            :""}  
             {userLoan?
               <Col style={ColStyler}  lg={5}>
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
               <button onClick={()=>redirectToEmployeeType()} className='mainButton'>
                 Next <BsArrowRight/>
                 </button>
               </div>
              </Col>
            :""}  
             {userEmployeeType?
               <Col style={ColStyler}  lg={5}>
               <h1  style={{fontSize:"40px",fontWeight:"800",color:"#243771"}} >Select Employee Type</h1>
               <div className='formWrapper'>
                    <h5  style={{fontSize:"20px"}} >Your Profession</h5>
                    <div className='selectBox'>
                        <div onClick={()=>changeSalariedBg()} style={salaried?{backgroundColor:"#f7d64a",border:"none"}:{backgroundColor:"transparent",border:"2px solid #243771"}} className='employeeBox'>
                            <div className='employeeImg'>
                                <img src={salariedIMG} alt='salaried'/>
                            </div>
                            <h6>Salaried</h6>
                        </div>
                        <div onClick={()=>changeSelfEmployeeBg()} style={selfEmployeed?{backgroundColor:"#f7d64a",border:"none"}:{backgroundColor:"transparent",border:"2px solid #243771"}}  className='employeeBox'>
                           <div className='employeeImg'>
                                <img src={selfEmployeedIMG} alt='selfEmployed'/>
                            </div>
                            <h6>Self Employeed</h6>
                        </div>
                    </div>
               </div>
                <div className='buttonWrapper2'>
                <button onClick={()=>backtoLoan()} className='mainButton2'>
                 <BsArrowLeft/> Previous 
                 </button>
                  <button onClick={()=>userSelected()} className='mainButton'>
                 Next <BsArrowRight/>
                 </button>
               </div>
              </Col>
            :""} 
             {userSalary ?
                <Col style={ColStyler}  lg={6}>
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
                         <div className='selectBox'>
                            <div className='userTransfer'>
                                 <div className='transferImg'>
                                    <img  src={bankTransfer} alt='img' />
                                 </div>
                                 <h6>Bank Transfer</h6>
                            </div>
                            <div className='userTransfer'>
                                  <div className='transferImg'> 
                                    <img src={cash}  alt='img'/>
                                  </div>
                                  <h6>Cash</h6>
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
                 <button onClick={()=>backtoEmployType()} className='mainButton2'>
                  <BsArrowLeft/> Previous 
                  </button>
                <button  className='mainButton'>
                  Next <BsArrowRight/>
                  </button>
                </div>
               </Col>
             :""}
             {userSelfEmployed ?
                <Col style={ColStyler}  lg={6}>
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
                </div>
                 <div className='buttonWrapper2'>
                 <button className='mainButton2'>
                  <BsArrowLeft/> Previous 
                  </button>
                <button  className='mainButton'>
                  Next <BsArrowRight/>
                  </button>
                </div>
               </Col>
             :""}
         </Row>
      </Container>
    </Fragment>
  )
}

export default App

