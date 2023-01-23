import {render, screen } from '@testing-library/react';
import {useEffect, useState} from "react";

function fakeFetchColors(){
   return Promise.resolve(
       ['red', 'green', 'blue']
   )
}

function LoadableColorList(){
    const [colors, setColors] = useState([]);

    useEffect(() => {
        fakeFetchColors()
            .then(c => setColors(c))
    }, []);

    const renderedColors = colors.map((color) => {
        return <li key={color}>{color}</li>
    })

    return <ul>{renderedColors}</ul>
};

test('favor findBy or findAllBy when data fetching', async () => {
    render(<LoadableColorList />);

    const els = await screen.findAllByRole('listitem');

    expect(els).toHaveLength(3);
})

