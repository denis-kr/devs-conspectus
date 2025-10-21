import Blog from "./index";
import type { BlogProps } from "./index";

const mockData: BlogProps = {
  description: "descrrr",
  title: "lorem",
  href: "lorem",
  date: "lorem",
  category: { title: "lorem", href: "fdfd" },
  datetime: "lorem",
};

describe("<Blog />", () => {
  it("should render and display expected content", () => {
    cy.mount(<Blog {...mockData} />);

    cy.findByText(mockData.description).should("be.visible");
  });
});
