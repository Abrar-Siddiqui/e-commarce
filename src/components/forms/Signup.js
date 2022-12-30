import { Field, Formik, Form } from 'formik'
import React from 'react'
import * as yup from 'yup'
import ErrorMessageComponents from './ErrorMessageComponents'
const Signup = () => {
  const NewValidation = yup.object({
    name:yup.string().min(3).max(10).required("Name is Must.."),
    age:yup.number().min(18).max(50).required("Age is Must.."),
    number:yup.number().min(1000000000,"Minimum number is 10.").max(9999999999,"Maximum number is 10.").required("Mobile is Must.."),
    pass:yup.string().matches(/(^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,}))/,"Enter Strong Password..").required("Password is Must.."),
    gender:yup.string().required("Gender is Must.."),
    email:yup.string().matches(/(^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z])/,"Note Matched email..").required("E-mail is Must.."),
    commit:yup.string().min(50,"Enter Min 50 Char..").required("Commit is Must.."),
    hobbies:yup.array().min(1,"1 Hobbies is Must").required("Select Hobbies.."),
    country:yup.string().required("Plaese Select Country..")
  })
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4 m-auto card py-4 px-3 my-5 border border-0 shadow-lg rounded'>
          <h3 className='text-center border border-1 shadow-lg rounded-pill py-2'>Register Form</h3>
            <Formik 
            validationSchema={NewValidation}
            initialValues={{
              name:'',
              email:'',
              pass:'',
              age:'',
              gender:'',
              hobbies:[],
              country:'',
              commit:'',
              number:''
            }}
           onSubmit={(values, action)=>{
            console.log(values)
            action.resetForm();
            
           }}
            >
              <Form >
                <div className='my-3'>
                  <Field  type="text" name="name" className="form-control" placeholder="Enter Name"/>
                  <ErrorMessageComponents name="name"/>
                </div>
                <div className='my-3'>
                  <Field type="text" name="email" className="form-control" placeholder="Enter E-mail" />
                  <ErrorMessageComponents name="email"/>
                </div>
                <div className='my-3'>
                  <Field type="text" name="pass" className="form-control" placeholder="Enter Password" />
                  <ErrorMessageComponents name="pass"/>
                </div>
                <div className='my-3'>
                  <Field type="number" name="number" className="form-control" placeholder="Mobile No." />
                  <ErrorMessageComponents name="number"/>
                </div>
                <div className='my-3'>
                  <Field type="number" name="age" className="form-control" placeholder="Enter Your Age" />
                  <ErrorMessageComponents name="age"/>
                </div>
                <div className='my-3 d-flex '>
                  <label htmlFor=''>Gender</label> : &nbsp;
                  <Field type="radio" name="gender"   value="Male"  />  &nbsp;Male
                  &nbsp;&nbsp;
                  <Field type="radio" name="gender"  value="Female" / >  &nbsp;Female &nbsp;
                  <ErrorMessageComponents name="gender"/>
                </div>
                <div className='my-3 d-flex '>
                  <label htmlFor=''>Hobbies</label> : &nbsp;
                    <Field type="checkbox" name="hobbies"   value="Waritnig"  />  &nbsp;Writing
                  &nbsp;&nbsp;
                    <Field type="checkbox" name="hobbies"  value="Reading" />  &nbsp;Reading
                  &nbsp;&nbsp;
                    <Field type="checkbox" name="hobbies"  value="Gamming" />  &nbsp;Play Game &nbsp;
                </div>
                <div className='text-center mb-2'>
                  <ErrorMessageComponents name="hobbies"/>
                </div>
                
                <Field as="textarea" className="form-control" placeholder="Commint here..." name="commit">Commints :</Field>
                <ErrorMessageComponents name="commit"/>
                <div className='my-3'>
                  <Field name="country" className="form-control" as="select">
                    <option value="">--------Select Country---------</option>
                    <option value="India">India</option>
                    <option value="UK">Uk</option>
                    <option value="USA">USA</option>
                  </Field>
                  <ErrorMessageComponents name="country"/>
                </div>
                <div className='my-3'>
                  <Field type="submit" name="age" className="form-control btn btn-primary" value="Submit" />
                </div>
              </Form>
            </Formik> 
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup