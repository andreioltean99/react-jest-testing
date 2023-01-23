import {render, screen, within} from "@testing-library/react";

function FormData(){
    return (
        <div>
            <button>Go Back</button>
        <form aria-label="form">
            <button>Save</button>
            <button>Cancel</button>
        </form>
        </div>
    )
}

function toContainRole(container, role, quantity = 1){
    const elements = within(container).queryAllByRole(role);
    if(elements.length === quantity){
        return {
            pass: true
        }
    }

    return {
        pass:false,
        message: () => `Expected to find ${quantity} ${role} elements and found ${elements.length} instead.`
    }
}

expect.extend({ toContainRole })

test('the form displays 2 buttons', () => {
    render(<FormData />);

    const form = screen.getByRole('form');
    // const btns = within(form).getAllByRole('button');
    //
    // expect(btns).toHaveLength(2);
    expect(form).toContainRole('button', 2);

})