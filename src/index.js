import React from 'react';
import ReactDOM from 'react-dom';

// These must be defined for code to work in browser
import CoordinatesButton from './components/CoordinatesButton';
import DelayedButton from './components/DelayedButton';

ReactDOM.render(
  <div>
    <CoordinatesButton onReceiveCoordinates={ mouseCoordinates => mouseCoordinates } />
    <DelayedButton onDelayedClick={ event => event } delay={1500} />
  </div>,
  document.getElementById('global'),
);
