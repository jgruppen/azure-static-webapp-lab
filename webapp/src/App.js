import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Custom Environment Variables</h1>
      <div>REACT_APP_BACKEND_URI: {process.env.REACT_APP_BACKEND_URI}</div>
      <div>REACT_APP_AAD_AUTHORITY: {process.env.REACT_APP_AAD_AUTHORITY}</div>
      <div>REACT_APP_AAD_CLIENT_ID: {process.env.REACT_APP_AAD_CLIENT_ID}</div>  
      <div>JG_Test: {process.env.JG_Test}</div>  
    </div>
  );
}

export default App;
