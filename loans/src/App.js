import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Message from './components/Message';
import Result from './components/Result';

function App() {

    //Definiendo el state
    const [quantity, saveQuantity] = useState(0);
    const [term, saveTerm] = useState("");
    const [total, saveTotal] = useState(0);

    let component;
    if (total === 0) {
      component = <Message/>
    }else{
      component = <Result/>
    }
    
  return (
    <Fragment>
      <Header
        titulo = "Cotizador de Prestamos"
      />
      <div className="container">
        <Form
          quantity = {quantity}
          saveQuantity = {saveQuantity}
          term = {term}
          saveTerm = {saveTerm}
          total = {total}
          saveTotal = {saveTotal}
        />
        <div className="messages">
          {component}
        </div>
      </div>
    </Fragment>
  );
}

export default App;
