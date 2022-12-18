import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import InvoiceForm from './components/InvoiceForm';

class App extends Component {
  render() {
    return (
      <div className="App d-flex flex-column align-items-center justify-content-center w-100">
        <Container>
          <div className="d-flex text-center pt-2 pl-2">
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
