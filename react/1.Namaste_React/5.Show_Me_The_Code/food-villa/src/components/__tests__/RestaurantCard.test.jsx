import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { RestaurantCard, withPromotedLabel } from "../RestaurantCard";
import MockRestaurantData from "../mocks/restaurantCardMock.json";
import MockPromotedRestaurantData from "../mocks/restaurantCardPromotedMock.json";

describe("RestaurantCard test", () => {
  it("should rendered RestaurantCard component with props data", () => {
    render(<RestaurantCard resData={MockRestaurantData} />);

    const restaurantName = screen.getByText("Pizza Hut");

    expect(restaurantName).toBeInTheDocument();
  });

  it("should rendered RestaurantCardPromoted component with props data and promoted text label", () => {
    // withPromotedLabel is a Higher Order Component
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    render(<RestaurantCardPromoted resData={MockPromotedRestaurantData} />);

    const promotedRestaurant = screen.getByText("Promoted");

    expect(promotedRestaurant).toBeInTheDocument();
  });
});
