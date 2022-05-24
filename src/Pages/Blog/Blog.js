import React from 'react';

const Blog = () => {
    return (
        <div className='mt-20 grid grid-rows-2 grid-flow-col gap-4 p-20 text-xl'>


            <div>
                <h1 className='text-primary'>How will you improve the performance of a React Application?</h1>

                <h1>
                    <p>1.Keeping component state local where necessary.</p>
                    <p>2.Memoizing React components to prevent unnecessary re-renders.</p>
                    <p>3.Code-splitting in React using dynamic import() </p>
                    <p>4.Windowing or list virtualization in React.</p>
                    <p> 5.Lazy loading images in React.</p>

                </h1>
            </div>



            <div>
                <h1 className='text-primary'>What are the different ways to manage a state in a React application?</h1>
                <h1>There are four main types of state you need to properly manage in your React apps:</h1>

                <p>
                    1.Local state.
                    2.Global state.
                    3.Server state.
                    4.URL state.
                </p>
            </div>

            
            
            <div>
                <h1 className='text-primary'>How does prototypical inheritance work</h1>

                <p>
                The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.

                </p>
            </div>

            <div>
                <h1 className='text-primary'>What is a unit test? Why should write unit tests</h1>

                <p>
                Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure.

                </p>
            </div>






        </div>
    );
};

export default Blog;