import { fireEvent, render, act, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import responseAll from './../../mockup-data/response.json';
import { BrowserRouter } from "react-router-dom";
import CardFooter from "./CardFooter";

test("Validate CardFooter Content", async () => {
    const add = () => {
    }
    const remove = () => {
    }
    const validateFavourite = () => {
        return false;
    }
    const game = responseAll.results[0];
    const RouterMock = ({ children }) => <BrowserRouter>{children}</BrowserRouter>;
    const { container, getByText } = render(
        <RouterMock>
            <CardFooter add={add} remove={remove} validateFavourite={validateFavourite} game={game} />
        </RouterMock>)
    expect(container).toHaveTextContent("Action");
    expect(container).toHaveTextContent("Adventure");
    expect(getByText("Action")).toHaveAttribute("href", "/genre/4/Action");
    expect(getByText("Adventure")).toHaveAttribute("href", "/genre/3/Adventure");
});

test("Validate CardFooter fav button doesn't appear", async () => {
    const add = () => {
    }
    const remove = () => {
    }
    const validateFavourite = () => {
        return false;
    }
    const game = responseAll.results[0];
    const RouterMock = ({ children }) => <BrowserRouter>{children}</BrowserRouter>;
    const { getByTestId } = render(
        <RouterMock>
            <CardFooter add={add} remove={remove} validateFavourite={validateFavourite} game={game} />
        </RouterMock>);
    expect(screen.getByTestId("not-fav")).toBeInTheDocument();
});

test("Validate CardFooter fav button appears", async () => {
    const add = () => {
    }
    const remove = () => {
    }
    const validateFavourite = () => {
        return true;
    }
    const game = responseAll.results[0];
    const RouterMock = ({ children }) => <BrowserRouter>{children}</BrowserRouter>;
    const { getByTestId, getByRole } = render(
        <RouterMock>
            <CardFooter add={add} remove={remove} validateFavourite={validateFavourite} game={game} />
        </RouterMock>);
    
    act(() => {
        fireEvent.click(getByRole("button"));
    });
    expect(getByTestId("fav")).toBeInTheDocument();
});