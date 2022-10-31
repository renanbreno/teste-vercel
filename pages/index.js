import { useState } from 'react';
function Home() {
    return <Counter />
}

function Counter() {
    const [counter, setCounter] = useState(0);

    const handleIncrementCounter = () => {
        setCounter(counter + 1);
    }

    return (
        <div>
            <div>{counter}</div>
            <button onClick={handleIncrementCounter}>Incrementar</button>
        </div>
    )
}

export default Home;