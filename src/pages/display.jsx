import { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

const Display = () => {
    const [codeSnippets, setCodeSnippets] = useState([]);

    useEffect(() => {
        // Fetch code snippets from backend when component mounts
        fetchCodeSnippets();
      }, []);

      const fetchCodeSnippets = async () => {
        try {
          const response = await axios.get("https://code-snippets-mini-app-server-code.vercel.app/entries");
        console.log(JSON.stringify(response.data));
       
          setCodeSnippets(response.data);
        } catch (error) {
          console.error('Error fetching code snippets:', error);
        }
      };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Code Snippets</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #ddd' }}>
        <thead>
          <tr>
            <th style={{ padding: '8px', textAlign: 'center', borderBottom: '1px solid #ddd' }}>Username</th>
            <th style={{ padding: '8px', textAlign: 'center', borderBottom: '1px solid #ddd' }}>Language</th>
            <th style={{ padding: '8px', textAlign: 'center', borderBottom: '1px solid #ddd' }}>Code Preview</th>
            <th style={{ padding: '8px', textAlign: 'center', borderBottom: '1px solid #ddd' }}>Execution Output</th>
            <th style={{ padding: '8px', textAlign: 'center', borderBottom: '1px solid #ddd' }}>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {codeSnippets.map((snippet, index) => (
            <tr key={index}>
              <td style={{ padding: '8px', textAlign: 'center', borderBottom: '1px solid #ddd' }}>{snippet.username}</td>
              <td style={{ padding: '8px', textAlign: 'center', borderBottom: '1px solid #ddd' }}>{snippet.language}</td>
              <td style={{ padding: '8px', textAlign: 'center', borderBottom: '1px solid #ddd' }}>{snippet.code_preview}</td>
              <td style={{ padding: '8px', textAlign: 'center', borderBottom: '1px solid #ddd' }}>{snippet.stdout}</td>
              <td style={{ padding: '8px', textAlign: 'center', borderBottom: '1px solid #ddd' }}>{snippet.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ textAlign: 'center', maxWidth: '600px', margin: 'auto' }}>
      <Link to="/" >
      <button style={{ marginTop: '10px' }} >Home</button>
      </Link>
      </div>
    </div>
  )
}

export default Display