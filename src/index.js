import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';

//import Marvelservice from './services/MarvelServise';

import './style/style.scss';

/* const marvelService = new Marvelservice();

marvelService.getAllCharacters().then(res => res.data.results.forEach(element => {
  console.log(element.name)
})
); */

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

