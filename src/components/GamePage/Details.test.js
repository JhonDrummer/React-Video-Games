import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Details from "./Details";
import responseById from './../../mockup-data/response-by-id.json';
import { BrowserRouter } from "react-router-dom";

test("Validate Details for Platforms", async () => {
    const RouterMock = ({ children }) => <BrowserRouter>{children}</BrowserRouter>;
    const { container, getByText } = render(
        <RouterMock>
            <Details title="Platforms" arr={responseById.platforms} path="platform" prop="platform" />
        </RouterMock>)
    expect(container).toHaveTextContent("Xbox 360");
    expect(container).toHaveTextContent("Linux");
    expect(container).toHaveTextContent("Xbox One");
    expect(getByText("PlayStation 3")).toHaveAttribute("href", "/platform/16/PlayStation%203");
    expect(getByText("PC")).toHaveAttribute("href", "/platform/4/PC");
    expect(getByText("macOS")).toHaveAttribute("href", "/platform/5/macOS");
});

test("Validate Details for Genres", async () => {
    const RouterMock = ({ children }) => <BrowserRouter>{children}</BrowserRouter>;
    const { container, getByText } = render(
        <RouterMock>
            <Details title="Genres" arr={responseById.genres} path="genre" />
        </RouterMock>)
    expect(container).toHaveTextContent("Shooter");
    expect(container).toHaveTextContent("Puzzle");
    expect(getByText("Shooter")).toHaveAttribute("href", "/genre/2/Shooter");
    expect(getByText("Puzzle")).toHaveAttribute("href", "/genre/7/Puzzle");
});

test("Validate Details for Tags", async () => {
    const RouterMock = ({ children }) => <BrowserRouter>{children}</BrowserRouter>;
    const { container, getByText } = render(
        <RouterMock>
            <Details title="Tags" arr={responseById.tags} path="tag" />
        </RouterMock>)
    expect(container).toHaveTextContent("Singleplayer");
    expect(container).toHaveTextContent("Multiplayer");
    expect(container).toHaveTextContent("Steam Cloud");
    expect(container).toHaveTextContent("cooperative");
    expect(getByText("Steam Achievements")).toHaveAttribute("href", "/tag/40847/Steam%20Achievements");
    expect(getByText("Atmospheric")).toHaveAttribute("href", "/tag/13/Atmospheric");
    expect(getByText("Co-op")).toHaveAttribute("href", "/tag/18/Co-op");
    expect(getByText("First-Person")).toHaveAttribute("href", "/tag/8/First-Person");
});