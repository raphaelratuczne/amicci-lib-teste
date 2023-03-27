import React from "react";
import { render } from "@testing-library/react";

import AButton from "./AButton";

describe("Button", () => {
  test("renders the Button component", () => {
    render(<AButton label="Hello world!" />);
  });
});
