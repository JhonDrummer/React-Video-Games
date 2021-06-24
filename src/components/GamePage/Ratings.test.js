import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Ratings from "./Ratings";

test("Validate Ratings content", async () => {
    const ratings = [
        { id: 4, title: "recommended", count: 1154, percent: 55.27 },
        { id: 5, title: "exceptional", count: 558, percent: 26.72 },
        { id: 3, title: "meh", count: 287, percent: 13.75 },
        { id: 1, title: "skip", count: 89, percent: 4.26 }
    ]
    const { container } = render(<Ratings ratings={ratings} />)
    expect(container).toHaveTextContent("recommended");
    expect(container).toHaveTextContent("exceptional");
    expect(container).toHaveTextContent("meh");
    expect(container).toHaveTextContent("skip");
});