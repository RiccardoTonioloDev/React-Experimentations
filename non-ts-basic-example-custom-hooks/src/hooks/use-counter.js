import { useEffect, useState } from 'react';

//Deve esserci scritto use all'inizio del nome della funzione che andremo a esportare
const useCounter = (forwards = true) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prevCounter) =>
                forwards ? prevCounter + 1 : prevCounter - 1
            );
        }, 1000);

        return () => clearInterval(interval);
    }, [forwards]);

    return counter;
};

export default useCounter;
