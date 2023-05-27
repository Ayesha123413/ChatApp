import React, { useState } from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'
const Form = ({ isSignInPage = true }) => {
  const [data, setData] = useState({
    ...(!isSignInPage && {
      fullName: '',
    }),
    email: '',
    password: '',
  })
  console.log(data)
  return (
    <div
      className="bg-white w-[400px] h-[500px]  shadow-lg rounded-lg flex flex-col 
    justify-center items-center"
    >
      <div className="text-3xl font-bold">Welcome{isSignInPage && ' Back'}</div>
      <div className="text-xl font-light mb-8">
        {isSignInPage ? 'Sign in to get explore' : 'Sign up to get started'}
      </div>
      <form
        className="flex flex-col items-center w-full"
        onSubmit={() => console.log('submitted')}
      >
        {!isSignInPage && (
          <Input
            label="Full Name "
            name="name"
            placeholder="Enter your full name"
            className="mb-3"
            value={data.fullName}
            onChange={(e) => {
              setData({ ...data, fullName: e.target.value })
            }}
          />
        )}
        <Input
          label="Email address "
          name="email"
          placeholder="Enter your email"
          className="mb-3"
          type="email"
          value={data.email}
          onChange={(e) => {
            setData({ ...data, email: e.target.value })
          }}
        />
        <Input
          label="Password"
          name="password"
          placeholder="Enter your password"
          className="mb-8"
          value={data.password}
          onChange={(e) => {
            setData({ ...data, password: e.target.value })
          }}
        />
        <Button
          label={isSignInPage ? 'Sign In' : 'Sign Up'}
          type="submit"
          className="mb-2"
        />
      </form>
      <div>
        {isSignInPage ? "Don't have an account" : 'Already have an account?'}{' '}
        <span className="text-primary cursor-pointer underline">
          {isSignInPage ? 'Sign Up' : 'Sign In'}
        </span>
      </div>
    </div>
  )
}

export default Form
