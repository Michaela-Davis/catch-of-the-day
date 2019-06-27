"Everything in React is a component"
* components: reusable pieces

Syntax for putting a method inside a component
*  `render() {
}`
* every Class must have at least one method

Cherry pick a single method from a package:
`import { render } from 'react-dom';`

Import the entire package (note 'react' will throw errors if you do 'React' instead):
`import React from 'react';`

render();
takes 2 things
1) JSX(html)
2) mounting point - DOM element to use to mount to page
like
`render(<p>HEllow</p>, document.querySelector('#main'));`
OR
`render(<StorePicker/>, document.querySelector('#main'));`
^This is rendering the component StorePicker using a self-closing tag

* React INSPECTOR/DEV TOOLS will show REACT custom components in PURPLE and other DOM elements in grey
* React will need to be imported into each component individually

## Writing HTML with JSX 4 / 29
* to add a class in JSX you need to use `className` instead of `class`. Using `class` will throw this error: `index.js:1437 Warning: Invalid DOM property `class`. Did you mean `className`?`

 ```
  render() {
  return 
  <form className="something">
  <h2>Stupid StorePicker</h2>  
  </form>}
```
will break because ASI (automatic semi-colon insertition), a part of JavaScript, will think you forgot a semi-colon after `return` and insert one which will return nothing

*  
`return` a pair of () and put HTMl inside that instead like this:
```
  render() {
  (
      return 
      <form className="something">
          <h2>Stupid StorePicker</h2>  
      </form>
  )}
```
which will run the code in the parentheses first then return the parentheses and a form tag

* JSX cannot return sibling elements UNLESS you wrap them (for instance in flexbox you need sibling elements) in `<React.Fragment> stuff </React.Fragment>` (new in React 16.2) but will be removed in the DOM (as opposed to the previous method of wrapping things in an empty <div> which results in many unneccessary divs). 
* if `import React, { Fragment } from 'react';` is added to the top then `<Fragment> stuff </Fragment>` can be used instead of `<React.Fragment> stuff </React.Fragment>`
* In the future we should be able to put blank tags <>on either side instead</>
* Commenting in JSX: use `{ /* comment */ }` must use JavaScript block comment not HTML comments
  * in JSX {} mean we're jumping back into JavaScript
  * Comments need to be nested within component or they will throw errors- cannot be siblings above component 