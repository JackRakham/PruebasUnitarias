import { render, screen, fireEvent } from "@testing-library/react"
import Like from "../Likes";

test("Like inicia en 0", () => {
    render(<Like/>);
    const textodelikes = screen.getByTestId("likes-texto")

    expect(textodelikes).toHaveTextContent("Likes: 0")

});


test("Incremento de likes con boton de incremento", ()=> {
    render(<Like></Like>)
    const textodelikes = screen.getByTestId("likes-texto")
    

    const incrementButton = screen.getByText("Like");
    fireEvent.click(incrementButton);
    expect(textodelikes).toHaveTextContent("Likes: 1");
})



test("Decremento de likes con boton de decremencremento", ()=> {
    render(<Like></Like>)
    const textodelikes = screen.getByTestId("likes-texto")

    const decrementButton = screen.getByText("Dislike");
    fireEvent.click(decrementButton);
    expect(textodelikes).toHaveTextContent("Likes: -1");
})