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

map function 
{
      resList.map((restaurant) => (
          <ResturantCard key={restaurant.info.id} resData={restaurant} />
        ))
}
--key is always required when we use map function 
--react dont prefer to use indexes as a key like below ex.

{
      resList.map((restaurant,index) => (
          <ResturantCard key={index} resData={restaurant} />
        ))
}

React is fast bcz it doing efficient DOM Manipulation(react-fiber) , bcz it has a virtual dom (virtual represntation of all tags , virtual dom is a js object )

*Hooks*
whenever a state variable changes /updted react rerender the component 

EP-6 
Monolith architecture: A monolithic architecture is a traditional model of a software program, which is built as a unified unit that is self-contained and independent from other applications

microservices architecture : A microservices architecture, also simply known as microservices, is an architectural method that relies on a series of independently deployable services. These services have their own business logic and database with a specific goal. Updating, testing, deployment, and scaling occur within each service. 

*Shimmer UI* 
A shimmer UI is a version of the UI that doesn't contain actual content, but instead mimics the layout and shapes of the content that will eventually appear. It uses a gradient animation that creates a shimmering effect over the placeholders, giving the user a sense of motion and progress.

Conditional rendering : A rendering on the basis of some conditions 

useState() function when called , it render the whole body and update the value of the variable 

useEffect() : If we have to do something after rendering a component then we use useeffect hook 
first body component render after that useeffect called

-- WhenEver a local state variable updates , react triggers a reconciliation cycle ( re-renders the component )

-- Reconciliation Algorithm (React Fiber )