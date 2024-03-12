
import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';


function TemperatureConverter() {
    const [degrees, setDegrees] = useState('');
    // const [fahrenheit, setFahrenheit] = useState('');

    useEffect(() => {
        console.log("input celsius", degrees);
    }, [degrees])



    const handleDegrees = (e) => {
        e.preventDefault();
        setDegrees(degrees);
        setDegrees('');
    }

    return (
        <div>
            <form onSubmit={handleDegrees}>
                <input
                    type="number"
                    value={degrees}
                    onChange={(e) => setDegrees(e.target.value)}
                />
                <button type="submit" variant="text">Change</button>

            </form>
        </div>
    )

    // const converted = (e.target.value - 32) * 5 / 9;
    // setCelsius(converted || '');

    // useEffect(() => {
    //     console.log("input fahrenheit", fahrenheit);
    // }, [fahrenheit])

    // const handCelsius = (e) => {
    //     e.preventDefault();
    //     setCelsius(ahrenheit);
    //     setCelsius('');
    // }

    // return (
    //     <div>
    //         <form onSubmit={handleCelsius}>
    //             <input
    //                 type="number"
    //                 value={celsius}
    //                 onChange={(e) => setCelsius(e.target.value)}
    //             />
    //         </form>
    //     </div>
    // )
























    //     const handleCelsiusChange = (value) => {
    //         const converted = (value * 9 / 5) + 32;
    //         setFahrenheit(converted || '');
    //     };

    //     return (
    //         <div>
    //             <label>
    //                 Celsius:
    //                 <input
    //                     type="number"
    //                     value={celsius}
    //                     onChange={(e) => setCelsius(e.target.value)}
    //                     onBlur={(e) => handleCelsiusChange(e.target.value)}
    //                 />
    //             </label>
    //             <label>
    //                 Fahrenheit:
    //                 <input
    //                     type="number"
    //                     value={fahrenheit}
    //                     onChange={(e) => setFahrenheit(e.target.value)}
    //                     onBlur={(e) => {
    //                         const converted = (e.target.value - 32) * 5 / 9;
    //                         setCelsius(converted || '');
    //                     }}
    //                 />
    //             </label>
    //         </div>
    //     );
}

export default TemperatureConverter;