// data type in javaScript
numbers, strings, objects , boolean, undefined, null, 

// what is a promise 
A promise is an object that may produce a single 
value some time in the future

// difference btw undefined and null 
undefined and null are equal in value but different in type:
typeof undefined           // undefined
typeof null                // object

null === undefined         // false
null == undefined          // true 

// how you deal with slow data load 

// what is a scope 
Scope in JavaScript refers to the current context of code, 
which determines the accessibility of variables to JavaScript. 
The two types of scope are local and globa.

// scope variables 
Variable Scope. Scope in JavaScript refers to the current context 
of code, which determines the accessibility of variables to JavaScript. 
The two types of scope are local and global: Global variables are 
those declared outside of a block. Local variables are those declared 
inside of a block. 
var, let, const

// some ES6 features 

The let keyword
The const keyword
JavaScript Arrow Functions
JavaScript Class
JavaScript Promise
JavaScript Symbol
Default Parameter Values
Function Rest Parameter
Array.find()
Array.findIndex()
New Number Properties
New Number Methods
New Global Methods


// What is the main goal of React Fiber?
The goal of React Fiber is to increase its suitability forareas 
like animation, layout, and gestures. Its headline feature is 
incremental rendering: the ability to split rendering work into 
chunks and spread it out over multiple frames 

. With Fiber, React can pause and resume work at will to get working 
on what matters as soon as possible! ? 


// What are controlled components?
In a controlled component, form data is handled by a React component.

// What are uncontrolled components? 
uncontrolled components, where form data is handled by the DOM itself.

// Controlled component vs uncontrolled component  
    In a controlled component, form data is handled by a React component. 
    The alternative is uncontrolled components, where form data is handled 
    by the DOM itself. To write an uncontrolled component, instead of 
    writing an event handler for every state update, you can use a ref 
    to get form values from the DOM.  
    most cases, we recommend using controlled components to implement 
    forms. In a controlled component, form data is handled by a React  


// What is Lifting State Up in React?
In React, sharing state is accomplished by moving it up to the closest 
common ancestor of the components that need it. This is called “lifting 
state up”. We will remove the local state from the TemperatureInput and 
move it into the Calculator instead.  

// What are the lifecycle methods of React? 
Each component in React has a lifecycle which you can monitor 
and manipulate during its three main phases.
The three phases are: Mounting, Updating, and Unmounting.

// What are portals in React?  
Portals provide a first-class way to render children into a DOM 
node that exists outside the DOM hierarchy of the parent component  

// What are the advantages of React?  **********
    Easy to Learn 
    Reusable Components
    The Virtual DOM. 
    Great Developer Tools
    It''s Easier to Write with JSX. 
    The Ecosystem.

// What are the limitations of React? **********
    The high pace of development. The high pace of development has an 
        advantage and disadvantage both. ...
    Poor Documentation. It is another cons which are common for 
        constantly updating technologies. ...
    View Part. ReactJS Covers only the UI Layers of the app and nothing else.

// What is the use of react-dom package?
Overview. The react-dom package provides DOM-specific methods that 
can be used at the top level of your app and as an escape hatch to 
get outside of the React model if you need to. Most of your components 
should not need to use this module.  

// How to use InnerHtml in React?

dangerouslySetInnerHTML is React’s replacement for using innerHTML 
in the browser DOM. In general, setting HTML from code is risky because 
it’s easy to inadvertently expose your users to a cross-site 
scripting (XSS) attack. So, you can set HTML directly from React, 
but you have to type out dangerouslySetInnerHTML and pass an object 
with a __html key, to remind yourself that it’s dangerous. 


// How to use styles in React?
To style an element with the inline style attribute, 
the value must be a JavaScript object:
    <div>
      <h1 style={{color: "red"}}>Hello Style!</h1>
      <p>Add a little style!</p>
    </div>

CSS Stylesheet
    You can write your CSS styling in a separate file, just save 
    the file with the .css file extension, and import it in your 
    application. 

    Pass a string as the className prop:
    <span className="menu navigation-menu">Menu</span>
    CSS classes are generally better for performance than inline styles. 
    “CSS-in-JS” refers to a pattern where CSS is composed using JavaScript 
    instead of defined in external files.


// How events are different in React?
=> React events are named using camelCase, rather than lowercase.
=> to prevent default behavior in React. 
   You must call preventDefault explicitly.
=> When using React, you generally don’t need to call addEventListener 
   to add listeners to a DOM element after it is created. Instead, 
   just provide a listener when the element is initially rendered. 

   class LoggingButton extends React.Component {
    // This syntax ensures `this` is bound within handleClick.  
    // Warning: this is *experimental* syntax.  
    handleClick = (event) => { 
        event.preventDefault()   
        console.log('this is:', this);  
    }
    render() {
      return (
        <button onClick={this.handleClick}>
          Click me
        </button>
      );
    }
  }
// How you use decorators in React?
    In simpler words, decorators are syntactic sugar, helping you to 
    keep your code readable, and maintainable, by wrapping the extra, 
    or common functionalities in a separate file altogether, which can 
    be shared across different components/classes.  
    
    Decorators can be a powerful code design pattern, enabling you to 
    write cleaner and maintainable React Components, however, I’d 
    still recommend HOCs over class decorators. Since, decorators 
    are still in stage 2 proposal of ECMA, they may change over time, 
    hence, use them wisely.  



// How to enable production mode in React?
    The best option is probably to do a normal production build 
    and then run it locally.
    First install an HTTP server:

        npm install serve -g
    Then:
        npm run build
        serve -s build
By default, it will run on port 5000
    
    . create a production build
        npm run build
    . install npm serve globally
        npm i -g serve
    . You may serve it with a static server now
        serve -s build


// What is strict mode in React?
    // => StrictMode is a tool for highlighting potential problems in an 
    // application. Like Fragment, StrictMode does not render any 
    // visible UI. It activates additional checks and warnings for 
    // its descendants.

    // => Note:
    //     Strict mode checks are run in development mode only; 
    //     they do not impact the production build.

    // => You can enable strict mode for any part of your application. 
    For example: 
        <div>
          <Header />
          <React.StrictMode>        
            <div>
              <ComponentOne />
              <ComponentTwo />
            </div>
          </React.StrictMode>      
          <Footer />
        </div>


// What are React Mixins? 
They allow you to mix some additional functionality into your 
React components. 

    PureRenderMixin 
    shallowCompare 
    mixins that subscribe a React component to a third-party data sourc
    Rendering Logic  
    Context is an experimental unstable feature

    The mixin goal was to give you a way to reuse code between 
    components when you aren’t sure how to solve the same problem 
    with composition.  

    mixins are unnecessary and problematic in React codebase


// How to use React label element? 

// higher-order function, that is, a function that takes a function 
    // as an argument and returns a function.  
    // React.Component vs React.PureComponent
        React.PureComponent is similar to React.Component. The 
        difference between them is that React.Component doesn’t 
        implement shouldComponentUpdate(), but React.PureComponent 
        implements it with a shallow prop and state comparison.


        The major difference between React.PureComponent and 
        React.Component is PureComponent does a shallow comparison 
        on state change. It means that when comparing scalar values 
        it compares their values, but when comparing objects it 
        compares only references. It helps to improve the performance 
        of the app. 
        You should go for React.PureComponent when you can satisfy any 
        of the below conditions.
            . State/Props should be an immutable object
            . State/Props should not have a hierarchy
            . You should call forceUpdate when data changes

        If you are using React.PureComponent you should make sure all 
        child components are also pure.

// what is functional components?
    . A component is an independent, reusable code block which divides 
    the UI into smaller pieces. 

    . The first and recommended component type in React is functional 
    components. A functional component is basically a JavaScript/ES6 
    function that returns a React element (JSX).
        So a Functional Component in React:
            is a JavaScript/ES6 function
            must return a React element (JSX)
            always starts with a capital letter (naming convention)
            takes props as a parameter if necessary

    . Class components are ES6 classes that return JSX. 
      Different from functional components, class components must 
         have an additional render( ) method for returning JSX.
      we use class components for data management and some additional 
         operations (like life-cycle methods).  
         
// what are pure components?
  . Pure Components in React are the components which do not re-renders 
  when the value of state and props has been updated with the same values. 
  If the value of the previous state or props and the new state or props 
  is the same, the component is not re-rendered. 

// What is the difference between a pure component and a regular component?
    . PureComponent is exactly the same as Component except that it handles 
    the shouldComponentUpdate method for you . When props or state changes, 
    PureComponent will do a shallow comparison on both props and state. 
    . Component on the other hand won''t compare current props and state 
    to next out of the box.  

// difference between state and props in react js  
    "props" (short for "properties") is an object of arbitrary 
    inputs a React function component accepts as the first argument. 
    "state" is data that changes over the lifetime of a specific 
    instance of a React component. 

// WEBPACK CONFIGURATION FOR REACT  
    webpack is a tool that lets you bundle your JavaScript 
    applications (supporting both ESM and CommonJS), and it 
    can be extended to support many different assets such as 
    images, fonts, and stylesheets.

    Webpack is a static module bundler for modern JavaScript 
    applications. When webpack processes your application, 
    it internally builds a dependency graph that maps every 
    module your project needs and generates one or more bundles.  

// stateless component 

// KEYS within object collection of react.js component?  
    A “key” is a special string attribute you need to include when 
    creating lists of elements in React. Keys are used to React to 
    identify which items in the list are changed, updated, or deleted.  
    Keys should be given to the elements inside the array to give the 
    elements a stable identity. When the state of your component changes, 
    the render function will return a new tree of React elements, 
    different to the previous/current one.  

// What Are PropTypes In React
     PropTypes are a mechanism to ensure 
    that components use the correct data type and pass the right 
    data, and that components use the right type of props, and 
    that receiving components receive the right type of props. 
    // Validating prop types
        ComponentExample.propTypes = {
            arrayProp: PropTypes.array,
            stringProp: PropTypes.string,
            numberProp: PropTypes.number,
            boolProp: PropTypes.bool,
        }

// when to call hooks in React?
    Don''t call Hooks inside loops, conditions, or nested functions. 
    Instead, always use Hooks at the top level of your React function. 
    By following this rule, you ensure that Hooks are called in the 
    same order each time a component renders. 

// what are different categorie of XSS attack? 
    XSS attacks can be put into three categories: 
        stored (also called persistent), 
        reflected (also called non-persistent), or 
        DOM-based. 
    The injected script is stored permanently on the target servers. 
    The victim then retrieves this malicious script from the server 
    // when the browser sends a request for data 

// How to Use Object Destructuring in JavaScript
    The object destructuring is a useful JavaScript feature to extract 
    properties from objects and bind them to variables.  
    // Syntax 
        const { identifier } = expression;
    const hero = {
        name: 'Batman',
        realName: 'Bruce Wayne'
      };
      
      const { name, realName } = hero;
      name;     // => 'Batman',
      realName; // => 'Bruce Wayne'  

//   what are valid use of react ref?  
    Refs are a function provided by React to access the DOM element 
    and the React element that you might have created on your own. 
    They are used in cases where we want to change the value of a 
    child component, without making use of props and all. 

    // Following are the cases when refs should be used:
        When you need to manage focus, select text or media playback
        To trigger imperative animations
        Integrate with third-party DOM libraries 

// when to use webpack-watch?  
    Usually when you run Webpack in development, you want to run it 
    in watch mode. This configures Webpack to watch files in your 
    project forchanges, and recompile whenever a file changes. 
    In other words, you don''t have to manually re-run Webpack 
    every time. 

// what is render props in react?
    The term “render prop” refers to a technique forsharing code 
    between React components using a prop whose value is a function. 
    A component with a render prop takes a function that returns a 
    React element and calls it instead of implementing its own 
    render logic. 

// Arrow function 
    Arrow functions allow to bind the context of the components 
    properly since in ES6 auto binding is not available by default.

    Arrow functions are mostly useful while working with the 
    higher order functions.  

    These are anonymous functions with their own special syntax that 
    accept a fixed number of arguments, and operate in the context 
    of their enclosing scope - ie the function or other code where 
    they are defined. 
    An arrow function expression is a compact alternative to a 
    traditional function expression, but is limited and can''t 
    be used in all situations. 

// React, writing UI test cases
    Stateful                                Component 
    Stateless                               Component 
    Controlled                              Component 
    UnControlled                            component 
    Higher Order (pure component)           Component 
    pure component                          Component 
    React                                   Component

// 3 phases of component lifecycle 
    initial rendering --- updating  --- unmounting  

// lifecycle methods of React component 

componentWillMountg() componentDidMount() componentWillReceiveProps() 

ShouldComponentUpdate() componentWillUpdate() componentDidUpdate()  

componentWillUnmountg()

// REDUX 
// What are the three principles that Redux follows? 
    Single source of truth
    tate is read-only
    Changes are made with pure functions

// List down the components of Redux.  
    Action – It’s an object that describes what happened.
    Reducer –  It is a place to determine how the state will change.
    Store – State/ Object tree of the entire application is saved in the Store.
    View – Simply displays the data provided by the Store.  

// What are the advantages of Redux?  
    Predictability of outcome
    Maintainability – The code becomes easier to maintain with a predictable outcome and strict structure.
    Server-side rendering 
    Developer tools 
    Community and ecosystem 
    Ease of testing 
    Organization 

// React Router

// What is React Router? 
    React Router is the standard routing library forReact 
    React Router keeps your UI in sync with the URL. 
    It has a simple API with powerful features like lazy code loading, 
    dynamic route matching, and location transition handling built right in

// Why is switch keyword used in React Router v4? 
    The "switch" keyword is used when you want to display only a single 
    route to be rendered amongst the several defined routes. 
    The "<switch> </switch>" tag when in use matches the typed URL with 
    the defined routes in sequential order. When the first match is found, 
    it renders the specified route. Thereby bypassing the remaining routes. 

// Why do we need a Router in React?
    A Router is used to define multiple routes and when a user types a 
    specific URL, if this URL matches the path of any ‘route’ defined 
    inside the router, then the user is redirected to that particular 
    route. So basically, we need to add a Router library to our app 
    that allows creating multiple routes with each leading to us a 
    unique view.  

// latest version of react 
    17.0.1 / 22 October 2020
