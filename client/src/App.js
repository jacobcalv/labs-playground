import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { saveAs } from 'file-saver';

class App extends Component {
  state = {
    name: 'Adrian',
    phone: 0,
    email: "abc",
    languages: "none",
  }

  createAndDownloadPdf = () => {
    axios.post('/create-pdf', this.state)
    .then(() => axios.get('/fetch-pdf', { responseType: 'blob' }))
    .then((res) => { 
      const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
      saveAs(pdfBlob, 'generatedDocument.pdf')
    })
  }
  
  handleChange = ({ target: { value, name } }) => this.setState({ [name]: value });
  render() {
    return (
      <div className="App">
        <input type="text" placeholder="Name" name="name" onChange={this.handleChange}/>
        <input type="number" placeholder="Phone Number" name="phone"    onChange={this.handleChange}/>
        <input type="text" placeholder="Email" name="email" onChange={this.handleChange}/>
        <input type="text" placeholder="Coding Languages" name="languages" onChange={this.handleChange}/>
        <button onClick={this.createAndDownloadPdf}>Download PDF</button>
      </div>
    );
  }
}



export default App;
