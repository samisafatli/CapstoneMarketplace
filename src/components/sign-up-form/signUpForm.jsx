import { useState } from 'react'
import './signUpForm.styles.scss'
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth
} from '../../firebase/config'
import FormInput from '../form-input/formInput'
import Button from '../button/button'

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { displayName, email, password, confirmPassword } = formFields

  const resetFormFields = () => {
    setFormFields({})
  }

  const handleChange = event => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (password !== confirmPassword) {
      alert("Passwords do not match")
      return
    } try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password)
      await createUserDocumentFromAuth(user, { displayName })
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') alert('Email already in use')
      if (error.code === 'auth/weak-password') alert('Password too weak')
      console.log(error)
    }
    resetFormFields()
  }

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit} action="">

        <FormInput
          label='Display Name'
          required
          onChange={handleChange}
          type="text"
          name="displayName"
          value={displayName}
        />

        <FormInput
          label='Email'
          required
          onChange={handleChange}
          type="email"
          name="email"
          value={email}
        />

        <FormInput
          label='Password'
          required
          onChange={handleChange}
          type="password"
          name="password"
          value={password}
        />

        <FormInput
          label='Confirm Password'
          required
          onChange={handleChange}
          type="password"
          name="confirmPassword"
          value={confirmPassword}
        />

        <Button type='submit'>Sign Up</Button>
      </form>
    </div>
  )
}

export default SignUpForm
