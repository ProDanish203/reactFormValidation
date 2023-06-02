import { useState } from 'react';
import './App.css';
import { Input } from './Components/Input';

function App() {

  const [data, setData] = useState({
    username: "",
    email: "",
    birthday: "", 
    password: "",
    cpass: "",
  })

  const inputs = [
    {
      id:1,
      name: "username",
      type: "text",
      label: "Username",
      placeholder: "Username",
      errorMsg: "Username should be 3-16 characters long and shouldn't contain any special characters!",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id:2,
      name: "email",
      type: "email",
      label: "Email Address",
      placeholder: "Email Address",
      errorMsg: "Enter a valid email address",
      required: true,
    },
    {
      id:3,
      name: "birthday",
      type: "date",
      label: "Birthday",
      placeholder: "Birthday",
    },
    {
      id:4,
      name: "password",
      type: "password",
      label: "Password",
      placeholder: "Password",
      errorMsg: "Password should be 8-20 characters long and must include 1 letter, 1 number and 1 special character",
      pattern: "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
      required: true,
    },
    {
      id:5,
      name: "cpass",
      type: "password",
      label: "Confirm Password",
      placeholder: "Confirm Password",
      errorMsg: "Passwords don't match",
      pattern: data.password,
      required: true,
    },
  ]

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target)
    // To get the data of form fields using objects
    // const data = new FormData(e.target);
    // console.log(Object.fromEntries(data.entries()))
    console.log(data);
    alert("Form submitted!")
    window.location.reload(true);

  }

  const onChange = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  }

  return (
    <div className="App">
      <form action="" onSubmit={handleSubmit}>
        {
          inputs.map((input, i) => (
            <Input 
            key={input.id}
            // type={input.type}
            // name={input.name} 
            // placeholder={input.placeholder} 
            // label={input.label} 
            {...input}
            value={data[input.name]}
            onChange={onChange}
            />
          ))
        }
        <button type='submit' className='btn d-btn'>Submit</button>
      </form>
    </div>
  );
}

export default App;
