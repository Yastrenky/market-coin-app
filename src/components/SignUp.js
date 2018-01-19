import React from 'react';

const SignUp =entrie=>{

        return(
      
            <div className="sign-up">
 <section className="form-elegant">
 
 
     <div className="card">
 
         <div className="card-body mx-4">
 
       
             <div className="text-center">
                 <h3 className="dark-grey-text mb-5"><strong>Sign Up</strong></h3>
             </div>
             <div className="md-form">
                 <input type="text" id="Form-name1" className="form-control"/>
                 <label >Your Name</label>
             </div>
 
             <div className="md-form">
                 <input type="text" id="Form-email1" className="form-control"/>
                 <label >Your email</label>
             </div>
 
             <div className="md-form pb-3">
                 <input type="password" id="Form-pass1" className="form-control"/>
                 <label >Your password</label>
                 
             </div>
             <div className="form-group">
                    <input type="checkbox" id="checkbox"/>
                    <label  className="grey-text">Accept the<a href="#" className="blue-text"> Terms and Conditions</a></label>
                </div>
             <div className="text-center mb-3">
                 <button type="button" className="btn blue-gradient btn-block btn-rounded z-depth-1a">Sign Up</button>
             </div>
            
 
 
         </div>
 
    
        
 
     </div>
 
 
 </section>
      </div>
        
            )
          
    }

export default SignUp;