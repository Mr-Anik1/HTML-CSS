import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import Body from "../Body";
import MOCK_RESTAURANT_LIST_DATA from "../mocks/mockRestaurantListData.json";

// Define a global variable for fetch
let originalFetch;

// Mock function for fetch
const mockFetch = () => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_RESTAURANT_LIST_DATA);
    },
  });
};

// Setup function to replace fetch with mock
beforeAll(() => {
  originalFetch = global.fetch;
  global.fetch = mockFetch;
});

// Cleanup function to restore original fetch
afterAll(() => {
  global.fetch = originalFetch;
});

describe("Body component test", () => {
  it("should search restaurant list for burger text input", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );

    // How many cards before search
    const cardsBeforeSearch = screen.getAllByTestId("restaurantCard");

    expect(cardsBeforeSearch.length).toBe(20);

    /**
     *
     * @Search_Section
     *
     */
    const searchBtn = screen.getByRole("button", { name: "Search" });

    // select search input with its testid
    const searchInput = screen.getByTestId("searchInput");

    // set search value on the search input field
    fireEvent.change(searchInput, { target: { value: "burger" } });

    fireEvent.click(searchBtn);

    // How many cards after search
    const cardsAfterSearch = screen.getAllByTestId("restaurantCard");

    expect(cardsAfterSearch.length).toBe(5);
  });

  it("should filter top rated(4.5) restaurants by rating", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );

    // How many cards before filter
    const cardsBeforeFilter = screen.getAllByTestId("restaurantCard");

    expect(cardsBeforeFilter.length).toBe(20);

    const filteredCardsWithRating = screen.getByTestId("filterByRating");

    fireEvent.change(filteredCardsWithRating, { target: { value: "4.5" } });

    // How many cards after filter
    const cardsAfterFilter = screen.getAllByTestId("restaurantCard");

    expect(cardsAfterFilter.length).toBe(2);
  });
});
