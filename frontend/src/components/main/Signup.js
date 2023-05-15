import { useFormik } from "formik"
import React from 'react'
import * as Yup from 'yup';

const Signup = () => {
  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(20, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup
    .string()
    .required('Please Enter your password')
    // .matches(
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    //   "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    // )
  });

    const signupForm = useFormik({
        initialValues: {
            name : '',
            email : '',
            password : '',
            cPassword : ''
        },
        onSubmit : async (values) => { 
          console.log( values );
          // making request to backend
          // 1. address url
          // 2. request method
          // 3. Data
          // 4. Data Format to be sent

          const res = await fetch('http://localhost:5000/user/add', {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
              'Content-Type' : 'application/json'
            }
          });

          console.log(res.status);
          console.log(await res.text());

          console.log('Form Submitted');


        },
        validationSchema : SignupSchema
    });
  return (
    <>
  {/* Section: Design Block */}
  <section className="text-center text-lg-start">
    <style
      dangerouslySetInnerHTML={{
        __html:
          "\n    .cascading-right {\n      margin-right: -50px;\n    }\n\n    @media (max-width: 991.98px) {\n      .cascading-right {\n        margin-right: 0;\n      }\n    }\n  "
      }}
    />
    {/* Jumbotron */}
    <div className="container py-4">
      <div className="row g-0 align-items-center justify-content-center">
        <div className="col-lg-3 mb-5 mb-lg-0">
          <div
            className="card cascading-right"
            style={{
              background: "hsla(0, 0%, 100%, 0.55)",
              backdropFilter: "blur(30px)"
            }}
          >
            <div className="card-body p-5 shadow-5 ">
              <h2 className="fw-bold mb-5">Sign up now</h2>
              <form onSubmit={signupForm.handleSubmit}>
                {/* 2 column grid layout with text inputs for the first and last names */}
                <div className="row">
                  <div className="col-md-12 mb-4">
                    <div>
                      <label className="form-label" htmlFor="form3Example1">
                        Full name
                      </label>
                      <input
                        type="text"
                        id="name"
                        onChange={signupForm.handleChange}
                        value={signupForm.values.name}
                        className="form-control"
                      />
                    </div>
                  </div>
                  </div>
                {/* Email input */}
                <div className="mb-4">
                  <label className="form-label" htmlFor="form3Example3">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    onChange={signupForm.handleChange}
                    value={signupForm.values.email}
                    className="form-control"
                  />
                </div>
                {/* Password input */}
                <div className="mb-4">
                  <label className="form-label" htmlFor="form3Example4">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    onChange={signupForm.handleChange}
                    value={signupForm.values.password}
                    className="form-control"
                  />
                </div>
                {/* Checkbox */}
                <div className="form-check d-flex justify-content-center mb-4">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    defaultValue=""
                    id="form2Example33"
                    defaultChecked=""
                  />
                  <label className="form-check-label" htmlFor="form2Example33">
                    Subscribe to our newsletter
                  </label>
                </div>
                {/* Submit button */}
                <button
                  type="submit"
                  className="btn btn-primary btn-block mb-4"
                >
                  Sign up
                </button>
                {/* Register buttons */}
                <div className="text-center">
                  <p>or sign up with:</p>
                  <button
                    type="button"
                    className="btn btn-link btn-floating mx-1"
                  >
                    <i className="fab fa-facebook-f" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-link btn-floating mx-1"
                  >
                    <i className="fab fa-google" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-link btn-floating mx-1"
                  >
                    <i className="fab fa-twitter" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-link btn-floating mx-1"
                  >
                    <i className="fab fa-github" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mb-5 mb-lg-0">
          <img
            src="https://img.freepik.com/free-vector/brand-building-isometric-concept-with-characters-colorful-blocks-3d-illustration_1284-64000.jpg?w=2000"
            className="w-100 rounded-4 shadow-4"
            alt=""
          />
        </div>
      </div>
    </div>
    {/* Jumbotron */}
  </section>
  {/* Section: Design Block */}
</>


  )
}

export default Signup