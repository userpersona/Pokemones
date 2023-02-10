import { useEffect, useState } from "react";
// USE STATE

function Counter2() {
    const [counter, setCounter] = useState(1);
    const onIncrement = () => { setCounter(counter + 1) };
    const onDecress = () => {
            setCounter(counter - 1)
    };
useEffect(()=> {
    if(counter<0) {
        setCounter(0) ;
        alert("no podes usar valores negativos")
    }
},[counter])
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



export default Counter2;





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


