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

JSX = HTML like or XML like syntax JS Syntex

--JSX (transpiled before it reaches the JS)
Babel which is a node library in JS transpiled the JSX code into JS

1. React.createElement => ReactElement-JS object => HTMLElement (render)
   const heading = React.createElement("h1", { id: "heading" }, "Namaste React ");
2. JSX (Babel Converted / Transpiled)=> React.createElement => ReactElement-JS object => HTMLElement (render)

// React Component
// - Class Base
// - Functional base
// -React functional Component is just a javascript function which returns some JSX
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

inside JSX if we want to write JS then inside {} we write any JS code

_Component Composition _
writing componennts inside another component

calling functional components in react

 <Title />
      {Title()}
      <Title> <Title/>

props are known as passing properties of component , or passing arguments to a function

<ResturantCard
          resName="Meghana Food"
          cuisine="Pizzas, Fast Food"
           add="Shahar Khas Basti Begam"
 />
here resName , cuisine ,add are props of component <ResturantCard/>
-React take this all props and wrap inside an JS object and pass it to the actual component

--Destructring props on the fly
const ResturantCard = ({resName,cuisine,add}) => {
return (
<div className="res-card">
<img
        className="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/t4kk0xeepxcvxnkwa2cm"
        alt="Resturant Logo"
      />
<h3>{resName} </h3>
<h4>{cuisine}</h4>
<h4>{add}</h4>
now we directly use props
</div>
);
};


*ConfigDriven UI*
controling/creating  the UI using data 
Ui is Driven by Config (Data/API)