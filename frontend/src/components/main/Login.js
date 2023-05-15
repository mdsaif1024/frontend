import React from 'react'
import { useFormik } from 'formik';
import Swal from 'sweetalert2';
import { MBDInput, MDBInput } from 'mdb-react-ui-kit';


const Login = () => {
  const loginForm = useFormik({
    initialValues: {
      email: '',
      password: ''
    },

    onSubmit: async (values) => {
      console.log(values);

      const res = await fetch('http://localhost:5000/user/authenticate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });

      if (res.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Logged in Successfully'
        })
      } else if (res.status === 401) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Invalid Credentials'
        })
      }
    }
  })
  return (
    <section className="h-100 " style={{ backgroundImage: "url('https://opengeekslab.com/wp-content/uploads/2019/10/7-tips-on-brand-building-in-2020.png')" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black mask-custom gradient-form">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4 ">
                    <div className="text-center">
                      <h1 className="mt-1 mb-5 pb-1 text-black">Log in</h1>
                    </div>
                    <form>
                      <p>Please login to your account</p>
                      <div className="mb-4">
                        <MDBInput label='Username or phone number' type='text' id="email"
                          onChange={loginForm.handleChange}
                          value={loginForm.values.username} />

                      </div>
                      <div className=" mb-4">
                        <MDBInput label='Password' type='text' id="password"
                          onChange={loginForm.handleChange}
                          value={loginForm.values.password} />
                      </div>
                      <div className="text-center pt-1 mb-5 pb-1">
                        <button
                          className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                          type="submit"
                        >
                          Log in
                        </button>
                        <a className="text-muted" href="#!">
                          Forgot password?
                        </a>
                      </div>
                      <div className="d-flex align-items-center justify-content-center pb-4">
                        <p className="mb-0 me-2">Don't have an account?</p>
                        <button type="button" className="btn btn-outline-danger">
                          Create new
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div className="text-white px-3 py-4 ps-5 me-5 pe-5">
                    <div className='d-block m-auto mb-5 ps-5'>
                      <img height={150} src="https://www.brandbuilders.com.pk/wp-content/uploads/2021/07/brand-builders-brandbuilders-digital-marketing-agency-lahore-amr1-new.png" alt="" />
                      <h4 className="mt-1  ms-3 mb-5 pb-1 text-black">We are The BrandBuilder</h4>
                    </div>
                    <h4 className="mb-4 text-dark">We are more than just a company</h4>
                    <p className="small mb-0 text-dark">
                      Brand building is the process of creating and promoting a brand to establish a unique identity and differentiate it from its competitors.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


  )
}

export default Login