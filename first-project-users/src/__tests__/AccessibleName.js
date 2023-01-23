import {render, screen} from "@testing-library/react";

function AccessibleName(){
    return (
        <div>
            <label htmlFor="email">Email</label>
            <input id="email" />
            <label htmlFor="name">Name</label>
            <input id="name" />
            <button>Submit</button>
            <button>Cancel</button>
        </div>
    )
}

test('can select by accessible name' ,() => {
    render(<AccessibleName />);

    const submitBtn = screen.getByRole('button', {
        name: /submit/i
    });

    const cancelBtn = screen.getByRole('button', {
        name: /cancel/i
    });

    expect(submitBtn).toBeInTheDocument();
    expect(cancelBtn).toBeInTheDocument();
});


test('make sure 2 inputs rendered', () => {
    render(<AccessibleName />);

    const emailInput = screen.getByRole('textbox', {
        name: /email/i
    });

    const nameInput = screen.getByRole('textbox', {
        name: /name/i
    });

    expect(emailInput).toBeInTheDocument();
    expect(nameInput).toBeInTheDocument();

})