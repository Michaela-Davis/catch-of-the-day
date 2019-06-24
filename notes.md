"Everything in React is a component"
components: reusable pieces

Syntax for putting a method inside a component - every Class must have at least one method
  render() {
  }

Cherry pick a single method from a package:
import { render } from 'react-dom';

Import the entire package (note 'react' will throw errors if you do 'React' instead):
import React from 'react';

render();
takes 2 things
1) JSX(html)
2) mounting point - DOM element to use to mount to page
like
render(<p>HEllow</p>, document.querySelector('#main'));
OR
render(<StorePicker/>, document.querySelector('#main'));
^This is rendering the component StorePicker using a self-closing tag

React INSPECTOR/DEV TOOLS will show REACT custom components in PURPLE and other DOM elements in grey