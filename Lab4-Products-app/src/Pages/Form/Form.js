import React, { useState } from "react";
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBIcon, MDBCheckbox } from 'mdb-react-ui-kit';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    image: null,
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
    setErrors({ ...errors, image: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();
  };

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.includes(" ")) {
      newErrors.name = "Name should not contain spaces";
    }

    // Email validation
    const emailPattern = /^\S+@\S+\.\S+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email = "Email format is invalid";
    }

    // Password validation
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password should be at least 8 characters long";
    } else if (formData.password.length > 12) {
      newErrors.password = "Password should not exceed 12 characters";
    }

    // Confirm password validation
    if (!formData.confirmPassword.trim()) {
      newErrors.confirmPassword = "Confirm password is required";
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    // Image validation
    if (!formData.image) {
      newErrors.image = "Image is required";
    }

    if (Object.keys(newErrors).length === 0) {
      console.log("Form data:", formData);
      // Make API request or perform further actions
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <MDBContainer fluid >
      <MDBCard className='text-black mx-5 mt-2' style={{ borderRadius: '25px' }}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

              <div className="d-flex flex-row align-items-center mb-1 ">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput
                  label='Your Name'
                  id='name'
                  type='text'
                  className='w-100'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <p className="text-danger">{errors.name}</p>}
              </div>

              <div className="d-flex flex-row align-items-center mb-1">
                <MDBIcon fas icon="envelope me-3" size='lg' />
                <MDBInput
                  label='Your Email'
                  id='email'
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="text-danger">{errors.email}</p>}
              </div>

              <div className="d-flex flex-row align-items-center mb-1">
                <MDBIcon fas icon="lock me-3" size='lg' />
                <MDBInput
                  label='Password'
                  id='password'
                  type='password'
                  name='password'
                  value={formData.password}
                  onChange={handleChange}
                />
                {errors.password && <p className="text-danger">{errors.password}</p>}
              </div>

              <div className="d-flex flex-row align-items-center mb-1">
                <MDBIcon fas icon="key me-3" size='lg' />
                <MDBInput
                  label='Confirm Password'
                  id='confirmPassword'
                  type='password'
                  name='confirmPassword'
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                {errors.confirmPassword && <p className="text-danger">{errors.confirmPassword}</p>}
              </div>

              <div className="d-flex flex-row align-items-center mb-1">
                <input
                  type="file"
                  id="image"
                  accept="image/*"
                  onChange={handleImageChange}
                />
                {errors.image && <p className="text-danger">{errors.image}</p>}
              </div>

              <MDBBtn className='mb-1' size='lg' onClick={handleSubmit}>Register</MDBBtn>
            </MDBCol>

            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <img
                src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp'
                className='img-fluid'
                alt='Registration'
              />
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default RegistrationForm;
