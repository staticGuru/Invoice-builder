import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import InvoiceForm from './components/InvoiceForm';
import Logo from './assests/logo.png'
class App extends Component {
  render() {
    return (
      <div className="App d-flex flex-column align-items-center justify-content-center w-100">
        <Container>
          <div className="d-flex flex-row text-center pt-2 pl-2">
          <img src={Logo} alt="logo" style={{width:40,height:40,marginRight:10}} />
            <h2 className="fw-bold" style={{ color: '#0b5ed7' }}>
              InvoiceDesk.in
            </h2>
          </div>
          <InvoiceForm />
        </Container>
      </div>
    );
  }
}

export default App;
