import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Ingredient } from "./Ingredient";

describe("Ingredient component", () => {
    it("Should render a title", () => {
        render(<Ingredient name="cebolla" />);
        const text = screen.getByText("cebolla");
        expect(text).toBeInTheDocument();
    });
});
