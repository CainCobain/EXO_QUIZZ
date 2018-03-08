import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
import styled from 'styled-components';
import swal from 'sweetalert';
import logo from './logo.svg';
import './App.css';

// Styled Components for button
const Button = styled.button`
border-radius: 3px;
padding: 1.25em 2em;
margin: 0 1em;
background: transparent;
color: palevioletred;
border: 2px solid palevioletred;
cursor:pointer;
margin-top:2%;
font-size:12px;
`;

class App extends Component {

  constructor(){
    super();
    //Initializing States
    this.state = {
      question : '',
      answser : [],
      goodanswer : '',
      checkedValue : null
    }
    //Binding methods with this
    this.yourAnswer = this.yourAnswer.bind(this);
    this.handleChecked = this.handleChecked.bind(this);
  }
  
  componentDidMount(){
    let self = this;
    //Get data from express API and setting states from response 
    axios.get('/api/quizz')
    .then(function (response) {
      self.setState({
        question :response.data.Question,
        answser:response.data.Answers,
        goodanswer:response.data.GoodA
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  handleChecked(e){
    //Handle input:check changes and set value in checkedValue state
    this.setState({ checkedValue : e.target.value});
  }

  yourAnswer(e){
    //Prevent submit form event and test checkedValue state to show the resp
    e.preventDefault();
    const checkedV = this.state.checkedValue;
    switch (checkedV){
       case this.state.goodanswer:
       return swal("Félicitation !", "Vous venez de choisir le bon choix !", "success");
       case null:
       return swal("Erreur !", "Veuillez sélectionner une reponse !", "error");
       default:
       return swal("Zut !", "Malheureusement c'est pas la bonne reponse !", "warning");
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Bienvenu dans le Quizz React/Node </h1>
        </header>
        <div className="App-intro">
        <form onSubmit={this.yourAnswer} >
         <h4>{this.state.question}</h4>
         {/*Maping on answer state to get all answers using lodash lib */}
            {_.map(this.state.answser, 
              ans => {
               return ( <span key={ans}>
                <input type="radio" name="answer"  value={ans} onChange={this.handleChecked} /> 
                {ans}
                <br/>
              </span>)
              })}
           <Button type="submit" >Envoyer ma reponse</Button>
        </form>
        </div>
      </div>
    );
  }
}

export default App;
