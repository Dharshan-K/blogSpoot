import {useState} from "react";
import axios from "axios";

export default function CreateForm(){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();

    const data = {name:name,email:email,password:password}
    
    // console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);

    axios.post("http://localhost:5000/users/createUser",data).then(response=>{
      console.log("response", response)
    })

    console.log("hi")



    // Reset form fields
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Account</h2>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Create Account</button>
    </form>
  );
};

