import Menu from ".";
import { fireEvent, render, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";

test("Validate link routes exist", async () => {
    const RouterMock = ({ children }) => <BrowserRouter>{children}</BrowserRouter>;
    const { getByText } = render(
        <RouterMock>
            <Menu />
        </RouterMock>
    );
    expect(getByText("games")).toHaveAttribute("href", "/");
    expect(getByText("my games")).toHaveAttribute("href", "/my-games/games");
});

test("when user clicks on 'My Games link' it should be redirected to 'my-games' route/component", async () => {
    const RouterMock = ({ children }) => <BrowserRouter>{children}</BrowserRouter>;
    const { container, getByText } = render(
        <RouterMock>
            <Menu />
        </RouterMock>
    );
    act(() => {
        fireEvent.click(getByText("games"));
    });
    expect(container).toHaveTextContent(/games/);
});

test("when user clicks on 'My Games link' it should be redirected to 'my-games' route/component", async () => {
    const RouterMock = ({ children }) => <BrowserRouter>{children}</BrowserRouter>;
    const { container, getByText } = render(
        <RouterMock>
            <Menu />
        </RouterMock>
    );
    act(() => {
        fireEvent.click(getByText("my games"));
    });
    expect(container).toHaveTextContent(/my games/);
});

test("when user clicks on 'Genres' it should appear submenu with Genres", async () => {
    const RouterMock = ({ children }) => <BrowserRouter>{children}</BrowserRouter>;
    const { container, getByText } = render(
        <RouterMock>
            <Menu />
        </RouterMock>
    );
    act(() => {
        fireEvent.click(getByText("genres"));
    });
    
    expect(container).toHaveTextContent(/genres/);
    expect(getByText("Action")).toHaveAttribute("href", "/genre/4/Action");
    expect(getByText("Casual")).toHaveAttribute("href", "/genre/40/Casual");
    expect(getByText("Educational")).toHaveAttribute("href", "/genre/34/Educational");
    expect(getByText("Sports")).toHaveAttribute("href", "/genre/15/Sports");
});

test("when user clicks on 'Platforms' it should appear submenu with Platforms", async () => {
    const RouterMock = ({ children }) => <BrowserRouter>{children}</BrowserRouter>;
    const { container, getByText } = render(
        <RouterMock>
            <Menu />
        </RouterMock>
    );
    act(() => {
        fireEvent.click(getByText("platforms"));
    });
    
    expect(container).toHaveTextContent(/platforms/);
    expect(getByText("PlayStation 5")).toHaveAttribute("href", "/platform/187/PlayStation%205");
    expect(getByText("PSP")).toHaveAttribute("href", "/platform/17/PSP");
    expect(getByText("Linux")).toHaveAttribute("href", "/platform/6/Linux");
    expect(getByText("Xbox Series S/X")).toHaveAttribute("href", "/platform/186/Xbox%20Series%20S%2FX");
});