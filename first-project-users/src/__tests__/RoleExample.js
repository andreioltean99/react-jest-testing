import {render, screen } from '@testing-library/react';

function RoleExample(){
    return (
        <div>
            <a href="/">Link</a>
            <button>Button</button>
            <footer>Content Info</footer>
            <h1>Heading</h1>
            <header>Banner</header>
            <img alt="description" /> IMG
            <input type="checkbox" /> Checkbox
            <input type="number" /> Spinbutton
            <input type="radio" /> Radio
            <input type="text" /> Textbox
            <li>List item</li>
            <ul>List Group</ul>
        </div>
    )
}

test('can find elements by role', () => {
    render(<RoleExample />);
    const roles = [
        'link',
        'button',
        'contentinfo',
        'heading',
        'banner',
        'img',
        'checkbox',
        'spinbutton',
        'radio',
        'textbox',
        'listitem',
        'list'
    ];

    for(let role of roles){
        const el = screen.getByRole(role);

        expect(el).toBeInTheDocument();
    }
})
