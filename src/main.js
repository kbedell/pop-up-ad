import './app.scss';
import React from 'react';
import ReactDOM from 'react-dom';

let closeButton = React.createElement(
  'div',
  {id: 'close_button', onClick: event => confirm('Are you sure?') },
  'X'
);

let adHeader = React.createElement(
  'H1',
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
  { type: 'submit', value: 'CLAIM YOUR PRIZE'  }
);

let adForm = React.createElement(
  'form',
  null,
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
