import './app.scss';
import React from 'react';
import ReactDOM from 'react-dom';

let submitToConsole = event => {
    event.preventDefault();
    console.log('Form Submitted');
};

let closeButton = React.createElement(
  'input',
  {id: 'close_button', type: 'submit', value: 'X', onClick: event => confirm('Are you sure?') }
);

let adHeader = React.createElement(
  'h3',
  null,
  'You have won tickets to see Taylor Swift!!'
);

let adBody = React.createElement(
  'p',
  null,
  'Please enter your email so we can send you the tickets'
);

let adInput = React.createElement(
  'input',
  { type: 'text', defaultValue: 'Your email here', id:'email_input'  }
);

let adSubmit = React.createElement(
  'input',
  { type: 'submit', id: 'submit_button', value: 'CLAIM YOUR PRIZE', onClick: event => {
      event.preventDefault();
      console.log('Form Submitted');
  }
});

let adForm = React.createElement(
  'form',
  { id: 'submit_form'},
  adInput,
  adSubmit
);

let popupAd = React.createElement(
  'div',
  null,
  closeButton,
  adHeader,
  adBody,
  adForm
);

ReactDOM.render(
  popupAd,
  document.getElementById('ad')
);
