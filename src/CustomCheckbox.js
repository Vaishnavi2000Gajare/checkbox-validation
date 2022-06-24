import React from 'react'
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import './App.css';

export default function CustomCheckbox() {
  const validation = Yup.object().shape({
    chooseCb: Yup.bool().oneOf([true], 'Checkbox selection is required'),
  })
  const optionsForm = { resolver: yupResolver(validation) }
  const { register, handleSubmit, reset, formState } = useForm(optionsForm)
  const { errors } = formState
  function onCbFormSubmit(data) {
    console.log(JSON.stringify(data, null, 4))
    return false
  }
  return (
    <div className="container mt-3">
     
      <form onSubmit={handleSubmit(onCbFormSubmit)}>
        <div className="form-group">
            <h3 style={{textAlign:'center',marginRight:'70px',marginBottom:'30px',marginTop:'70px',paddingTop:'20px'}}>Login</h3>
        <div className="input-container">
         <label>Email </label>
         <input type="text" name="uname" required />
         </div>
         <div className="input-container">
         <label>Password </label>
         <input type="password" name="pass" required />
         </div>
          <div className="form-check">
            <input
              type="checkbox"
              name="selectCheckbox"
              id="selectCheckbox"
              {...register('chooseCb')}
              className={`form-check-input ${
                errors.chooseCb ? 'is-invalid' : '' 
              }`}
            />
            <label htmlFor="chooseCb" className="form-check-label">
              terms and conditions
            </label>
            <div className="invalid-feedback">{errors.chooseCb?.message}</div>
          </div>
        </div>
        <div className="mt-3">
          <button type="submit" className="btn btn-dark">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}