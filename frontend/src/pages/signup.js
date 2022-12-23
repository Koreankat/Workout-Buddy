import { useState } from "react"
const Signup = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return (
    <form className='signup' onSubmit={() => {}}>
      <h3>Sign up </h3>
      <label>Email:</label>
      <input
        type='email'
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <label>Email:</label>
      <input
        type='password'
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
    </form>
  )
}
export default Signup
