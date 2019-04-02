## Calculator

Version number: 627d7be039e0085025a51d47e42bdd970409ec1c

This project creates a simple calculator.

## Install

To install the project, follow these steps:

- open a terminal window, and change directory into a suitable directory in which to install the application (e.g. `~/dev`)
- copy the GitHub repo link and clone it. 
```
git clone <GitHub repo>
```
This should copy the application into a directory called `calculator`
- install the packages that are needed to run it:
```
npm install
```

## Run the calculator

In the project directory (e.g. `~/dev/calculator), you can run:

```
npm start
```

This runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Run the tests

The calculator also comes with a full suite of integration tests. To run these, just run
```
npm test
```

Launches the test runner in the interactive watch mode.<br>

## Brief description
Based on my previous work with XState in complex Web apps, I recognised this task as being tailor-made for implementation using a statechart. Accordingly, the code uses React to implement the main UI, and a renderless React component that uses XState and a custom statemachine to maintain the state of the calculator in response to the user's inputs.

The states, transitions and associated actions of the calculator as it responds to the user's inputs are managed by [XState](https://xstate.js.org/), which ensures the calculator does not get into an erroneous state. These states and transitions are defined in `state/calculator/calculator-machine.js` 

## ToDo
The following is a list of features that still need to be done:

- decimal point not yet implemented
- working with floating point numbers not yet controlled, and so still subject to JavaScript's vagaries 
- percentage not yet implemented
- no guards against divide by zero
- no ability to make a number negative
- UI does not display selected operator
- Equal Experts branding not yet used
