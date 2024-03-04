import { useState } from "react";

function Counter() {
    let defaultCount = 0;
    const [count, setCount] = useState(defaultCount);
    function incrementCount(count) {
        setCount(count+1);
    }

    function decrementCount(count) {
        // if (count >= 1) {
        //     setCount(count-1);
        // }
        count && setCount(count-1);
    }

    return (
        <>
            <div className="shadow-xl p-3 border border-sky-50 rounded-lg rounded-t-none">
                <h2 className="text-sky-700 text-xl font-semibold my-3">Counter : {count}</h2>
                <button 
                    onClick={ () => decrementCount(count) } 
                    className="bg-sky-500 hover:bg-sky-700 rounded-md px-4 py-2 border-2   border-blue-50  ease-in duration-300 text-white "
                >
                    -
                </button>  
                <button 
                    onClick={ () => incrementCount(count) }
                    className="bg-sky-500 hover:bg-sky-700 rounded-md px-4 py-2 border-2   border-blue-50  ease-in duration-300 text-white "
                >
                    +
                </button>
            </div>
        </>
    );
}

export default Counter;