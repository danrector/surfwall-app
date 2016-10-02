var React = require('react');
import 'whatwg-fetch';

fetch('https://api.getchute.com/v2/albums/aus6kwrg')
  .then(function(response) {
    return response.json();
  }).then(function(json) {
    console.log('parsed json', json);
  }).catch(function(ex) {
    console.log('parsing failed', ex);
  });