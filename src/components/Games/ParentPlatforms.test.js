import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import responseAll from './../../mockup-data/response.json';
import { BrowserRouter } from "react-router-dom";
import ParentPlatforms from "./ParentPlatforms";

test("Validate ParentPlatforms Content", async () => {
    const parentPlatforms = responseAll.results[0].parent_platforms;
    const RouterMock = ({ children }) => <BrowserRouter>{children}</BrowserRouter>;
    const { getByAltText } = render(
        <RouterMock>
            <ParentPlatforms parentPlatforms={parentPlatforms} />
        </RouterMock>);
    expect(getByAltText("icon-1")).toBeInTheDocument();
    expect(getByAltText("icon-2")).toBeInTheDocument();
    expect(getByAltText("icon-3")).toBeInTheDocument();
});