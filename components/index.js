import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css'
import App from './App'




function Index(){
  return(
    <div className = 'index-main'>
     <App />
    </div>
  )
}

ReactDOM.render(<Index />, document.getElementById('root'));

