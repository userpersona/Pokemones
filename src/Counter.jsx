import { useState } from "react";
// USE STATE

function Counter() {
    const [counter, setCounter] = useState(1);
    const onIncrement = () => { setCounter(counter + 1) };
    const onDecress = () => {
        if (counter > 0) {
            setCounter(counter - 1)
        }
    };
    // const onCounterReset = () => { setCounter(0) }

    return (
        <div>
            <h1>Contador : {counter}</h1>
            <button
                onClick={onIncrement}>
                +1
            </button>
            <button
                onClick={onDecress}>
                -1
            </button>
          
        </div>
    );
}



export default Counter;





// var b = 'asd'
// function a(t) {
//     while (true) {
//         comsole.log(t)
//     }
// }

// a(b)
// b = 'xyz'



// var b = ['asd']
// function a(t) {
//     while (true) {
//         comsole.log(t[0])
//     }
// }

// a(b)
// b[0] = 'xyz'


