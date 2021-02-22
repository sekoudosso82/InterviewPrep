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


// WEBPACK CONFIGURATION FOR REACT  
    webpack is a tool that lets you bundle your JavaScript 
    applications (supporting both ESM and CommonJS), and it 
    can be extended to support many different assets such as 
    images, fonts, and stylesheets.

    Webpack is a static module bundler for modern JavaScript 
    applications. When webpack processes your application, 
    it internally builds a dependency graph that maps every 
    module your project needs and generates one or more bundles.  
