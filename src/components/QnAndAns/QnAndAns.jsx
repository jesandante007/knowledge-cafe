import React from 'react';

const QnAndAns = () => {
    return (
        <div>
            <h3 className='text-2xl font-bold'>props vs state</h3>
            <p><strong>props</strong> is the short form of properties and we can say attributes of component. It is readonly or immutable and unidirectional(parent to child). Data, function, object can be pass through props.</p>
            <strong>state</strong> is a react's built-in object. By using state components can create and manage their own data. Components behavior and rendering are changed depending on state. State shouldn't be modified directly the setState() should be used.

            <h3 className='text-2xl font-bold mt-10'>How does useState work</h3>
            <p><strong>useState()</strong> is a hook in react. It allows us to add a state to a functional component. useState return an array with two values(current value, a function to update the current value). It takes a initial value as a parameter and set the value to current value.</p>

            <h3 className='text-2xl font-bold mt-10'>Purpose of useEffect other than fetching data</h3>
            <p><strong>useEffect()</strong> is a hook in react. It allows us to perform side effects in our components. useEffect run after every completed render. This hook uses an array of dependencies & always keeps an eye on these. Whenever any of dependencies changes useEffect run again. Some usages of useEffect other than fetching data are: 1.Reading from local storage 2.On every component rerender 3.Validating an input while it's receiving characters</p>

            <h3 className='text-2xl font-bold mt-10'>How does React work</h3>
            <p><strong>React</strong> is one of the most popular JavaScript libraries for web application development. Mainly used to build user interface. React is used to create modular user interfaces. It promotes the development of reusable UI components that display dynamic data. React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser's DOM</p>
        </div>
    );
};

export default QnAndAns;