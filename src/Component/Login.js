import React,{useState} from 'react'
import axios from'axios';
const Login = () => {
    
    const Login = () => {
      const [username, setUsername] = useState('');
      const [password, setPassword] = useState('');
      const [error, setError] = useState('');
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('/api/login', { username, password });
        
          const token = response.data.token;
          localStorage.setItem('token', token);
    
          window.location.href = '/dashboard';
        } catch (err) {
          setError('Invalid username or password');
        }
      };



  return (
    <div>
         <h2>Login</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username/Email:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        
        
        
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
  
}

export default Login