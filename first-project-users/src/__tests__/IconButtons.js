import {render, screen} from "@testing-library/react";

function IconButtons(){
    return (
        <div>
            <button aria-label="sign in">
                <svg />
            </button>
            <button aria-label="sign out">
                <svg />
            </button>
        </div>
    )
}

test('find elements base on label', () => {
    render(<IconButtons />);

    const signInBtn = screen.getByRole('button', {
        name: /sign in/i
    });

    const signOutBtn = screen.getByRole('button', {
        name: /sign out/i
    });

    expect(signInBtn).toBeInTheDocument();
    expect(signOutBtn).toBeInTheDocument();

})