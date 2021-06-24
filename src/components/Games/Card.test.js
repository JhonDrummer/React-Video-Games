import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import responseAll from './../../mockup-data/response.json';
import { BrowserRouter } from "react-router-dom";
import Card from "./Card";

test("Validate Card Content", async () => {
    const game = responseAll.results[0];
    const add = () => {
    }
    const remove = () => {
    }
    const validateFavourite = () => {
        return true;
    }
    const RouterMock = ({ children }) => <BrowserRouter>{children}</BrowserRouter>;
    const { getByAltText, getByRole } = render(
        <RouterMock>
            <Card add={add} remove={remove} validateFavourite={validateFavourite} game={game} />
        </RouterMock>);
    expect(getByAltText("Grand Theft Auto V")).toBeInTheDocument();
    expect(getByRole("heading")).toBeInTheDocument();
});