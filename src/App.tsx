import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
      <h1 className="App-title">
          📜School Rules Request📜
        </h1>
      <p>
          <a href="#request" className="App-request">
            Request rules
          </a>
          {'  '}
          <a href="#read" className="App-request">
             Read Request
          </a>
       </p>

       <p>
          <a
            className="App-link"
            href="#rules"
            rel="noopener noreferrer"
         >
            Read rules
          </a>
          {' | '}
        <a
           className="App-link"
            href="#privacy"
            rel="noopener noreferrer"
          >
            Privacy
          </a>
          {' | '}
          <a
           className="App-link"
           href="#learn"
            rel="noopener noreferrer"
          >
            Learn more
          </a>
        </p>
      </header>
      <div className="App-header" id="request">
        <h3>Request Rules</h3>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSegPF99lOulpjDCwKt6J20zwJJpR0SqfxdtSPZ3qN419jC31Q/viewform?embedded=true" width="640" height="519" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        <p>
          <a
            className="App-link"
            href=""
            rel="noopener noreferrer"
         >
            Back
          </a>
          {' | '}
        <a
           className="App-link"
           href="#rules"
            
            rel="noopener noreferrer"
          >
            Read rules
          </a>
          {' | '}
          <a
           className="App-link"
           href="#read"
            
            rel="noopener noreferrer"
          >
            Read request
          </a>
        </p>
      </div>
      <div className="App-header" id="read">
        <h3>Read Request📜</h3>
        <div>
          - Request
        </div>
        <p>
          <a
            className="App-link"
            href=""
            rel="noopener noreferrer"
         >
            Back
          </a>
          {' | '}
        <a
           className="App-link"
           href="#request"
            
            rel="noopener noreferrer"
          >
            Request rules
          </a>
          {' | '}
          <a
           className="App-link"
           href="#rules"
            
            rel="noopener noreferrer"
          >
            Read rules
          </a>
        </p>
      </div>
      <div className="App-header" id="rules">
        <h3>Read Rules📜</h3>
        <a 
        href="http://www.satitm.chula.ac.th/images/pdf/studentmanual64.pdf"
        className="App-link"
       
        rel="next"
        >
          Click here to read school rules
        </a>
        <p>Notice : Rules is in slide number 131-167.</p>
        <p>
          <a
            className="App-link"
            href=""
            rel="noopener noreferrer"
         >
            Back
          </a>
          {' | '}
        <a
           className="App-link"
           href="#request"
            
            rel="noopener noreferrer"
          >
            Request rules
          </a>
          {' | '}
          <a
           className="App-link"
           href="#read"
            
            rel="noopener noreferrer"
          >
            Read request
          </a>
        </p>
      </div>
      <div className="App-header" id="learn">
        <h3>Learn more</h3>
        <div>
          This is school rules request. You can request rules by click  <a href="#request" className="App-link">here</a> also please request in polite languages. <br />
          <a href="#privacy" className="App-link">Click here to learn about privacy</a>
        </div>
        <p>
          <a
            className="App-link"
            href=""
            rel="noopener noreferrer"
         >
            Back
          </a>
          {' | '}
        <a
           className="App-link"
           href="#request"
            
            rel="noopener noreferrer"
          >
            Request rules
          </a>
          {' | '}
          <a
           className="App-link"
           href="#read"
            
            rel="noopener noreferrer"
          >
            Read request
          </a>
        </p>
      </div>
      <div className="App-header" id="privacy">
        <h3>Privacy</h3>
        <div>
          This is school rules request privacy. In request rules we don't ask for your information <br />
          and or website don't use cookies to track you anyway.
        </div>
        <p>
          <a
            className="App-link"
            href=""
            rel="noopener noreferrer"
         >
            Back
          </a>
          {' | '}
        <a
           className="App-link"
           href="#request"
            
            rel="noopener noreferrer"
          >
            Request rules
          </a>
          {' | '}
          <a
           className="App-link"
           href="#read"
            
            rel="noopener noreferrer"
          >
            Read request
          </a>
        </p>
      </div>
      <footer>
        2021 copyright | <a href="https://github.com/ronnapatp/requestrules" target="_blank" className="App-link">Github</a>
      </footer>
    </div>
  )
}

export default App
