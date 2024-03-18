import { useState } from "react";
// import { Home } from "./home";

import { Link } from 'react-router-dom';

const Submit = () => {

    const [username, setUsername] = useState('');
    const [language, setLanguage] = useState('');
    const [stdin, setStdin] = useState('');
    const [code, setCode] = useState('');

    //const [didSubmit, setDidSubmit] = useState(false);

    const handleSubmit = async(e) => {
        e.preventDefault();
        
        const body = JSON.stringify({
            "username": username, 
            "language": language, 
            "stdin": stdin, 
            "code": code

        })
        console.log('Form submitted:', body );

        try{
            const response = await fetch("https://code-snippets-mini-app-server-code.vercel.app/submit", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: body,
            });
            console.log(response);
            //setDidSubmit(true);
        }catch(error){
            console.error('Error:', error);
            console.log('An error occured');
        }
        
        
      };

    //   if(didSubmit) {
    //     return <Home />
    //   }

  return (
    <div style={{ textAlign: 'center', maxWidth: '600px', margin: 'auto' }}>
      <h1>Submit Code Snippet</h1>
      <form onSubmit={handleSubmit}>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label style={{ display: 'block', marginBottom: '10px' }}>
        Language:
          <br />
          <input
            type="radio"
            name="language"
            value="52"
            checked={language === '52'}
            onChange={(e) => setLanguage(e.target.value)}
          />
          C++
          <br />
          <input
            type="radio"
            name="language"
            value="62"
            checked={language === '62'}
            onChange={(e) => setLanguage(e.target.value)}
          />
          Java
          <br />
          <input
            type="radio"
            name="language"
            value="63"
            checked={language === '63'}
            onChange={(e) => setLanguage(e.target.value)}
          />
          Javascript
          <br />
          <input
            type="radio"
            name="language"
            value="71"
            checked={language === '71'}
            onChange={(e) => setLanguage(e.target.value)}
          />
          Python
        </label>
        <br />
        <label style={{ display: 'block', marginBottom: '10px' }}>
          Standard Input:
          <input
            type="text"
            value={stdin}
            onChange={(e) => setStdin(e.target.value)}
          />
        </label>
        <br />
        <label style={{ display: 'block', marginBottom: '10px' }}>
          Code:
          <textarea
            style={{ width: '100%', minHeight: '200px' }}
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </label>
        <br />
        <button style={{ marginTop: '10px' }} type="submit">Submit</button>
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: 'auto' }}>
        <Link to="/" >
        <button style={{ marginTop: '10px' }} >Home</button>
        </Link>
      </div>
      </form>
    </div>
  )
}

export default Submit