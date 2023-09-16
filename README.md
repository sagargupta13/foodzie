// 
"devDependencies": {
    "parcel": "^2.9.3" 
    
  }
^caret for minor update in package
    // ~tilde for major update in package

#parcel job
Dev Build
creates Local server
HMR- Hot Module Replacement
File watching algorithm written in C++
Faster Builds becuse of caching 
image Optimization
Compressing Files
Bundling
consistant Hashing 
Code Splitting
Differential Bundling -support all browesers and their versions
Diagnostic
good error handling
also host on HTTPs
Tree shaking -remove unuse code
different dev and production build


JSX = HTML like or XML like syntax 
in JSX we can write HTML inside javascript , CSS inside javascript 
--JSX (transpiled before it reaches the JS) 
Babel which is a node library in JS transpiled the JSX code into JS

1. React.createElement => ReactElement-JS object => HTMLElement (render)
2. JSX (Babel Converted / Transpiled)=> React.createElement => ReactElement-JS object => HTMLElement (render)


// React Component 
//  - Class Base 
//  - Functional base 
//  -React functional Component is just a javascript function which returns some JSX 
    -React Component named in camel case 
    -We render react components by <HeadingComponent/>
const HeadingComponent =()=>{
    return (
        <>
    <h1> React Functional Component </h1>
    <h2> MultiLine react component</h2>
    </>
    )
}