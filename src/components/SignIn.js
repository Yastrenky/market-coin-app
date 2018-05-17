import React from 'react';

const SignIn = entrie => {

	return (

		<div className="sign-in">
			<section className="form-elegant">


				<div className="card">

					<div className="card-body mx-4">


						<div className="text-center">
							<h3 className="dark-grey-text mb-5"><strong>Sign in</strong></h3>
						</div>

						{/* <div className="md-form">
							<input disabled={"true"} type="text" id="Form-email1" className="form-control" />
							<label >Your email</label>
						</div>

						<div className="md-form pb-3">
							<input disabled={"true"} type="password" id="Form-pass1" className="form-control" />
							<label >Your password</label>
							<p className="font-small blue-text d-flex justify-content-end">Forgot <a href="/" className="blue-text ml-1" > Password?</a></p>
						</div>

						<div className="text-center mb-3">
							<button type="button" className="btn blue-gradient btn-block btn-rounded z-depth-1a" disabled>Sign in</button>
						</div> */}
						<div className="text-center mb-3">
							<button type="button" className="btn blue-gradient btn-block btn-rounded z-depth-1a" onClick={entrie.login}><i id="facebook-official" className="fa fa-facebook-official" aria-hidden="true"></i>Sigin with Facebook</button>
						</div>
					</div>


					{/* <div className="modal-footer mx-5 pt-3 mb-1">
				 	<p className="font-small grey-text d-flex justify-content-end">Not a member? <a href="/" className="blue-text ml-1" > Sign Up</a></p>
					 </div> */}

				</div>


			</section>
		</div>

	)

}

export default SignIn;