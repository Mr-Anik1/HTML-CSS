import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { appStore } from "../../utils/appStore";
import { Cart } from "../Cart";
import Header from "../Header";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_RESTAURANT_MENU from "../mocks/mockRestaurnatMenu.json";

let orginalFetch;

const resMenuFetchData = () => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_RESTAURANT_MENU);
    },
  });
};

beforeAll(() => {
  orginalFetch = global.fetch;
  global.fetch = resMenuFetchData;
});

afterAll(() => {
  global.fetch = orginalFetch;
});

describe("cart test", () => {
  it("should add product to the cart", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
            <RestaurantMenu />
          </Provider>
        </BrowserRouter>
      )
    );

    const BiryanisAccordionHeader = screen.getByText(
      "Biryanis, Curries and Roti (17)"
    );

    fireEvent.click(BiryanisAccordionHeader);

    expect(screen.getAllByTestId("menuItemCard").length).toBe(17);

    // Before click Add+ button, the cart was empty
    expect(screen.getByTestId("cartCount")).toHaveTextContent("0");

    const addBtns = screen.getAllByRole("button", { name: "Add +" });

    // click Add+ button, item will be added to the cart. Now cart has 1 items
    fireEvent.click(addBtns[0]);

    expect(screen.getByTestId("cartCount")).toHaveTextContent("1");

    // click Add+ button, item will be added to the cart. Now cart has 2 items
    fireEvent.click(addBtns[1]);

    expect(screen.getByTestId("cartCount")).toHaveTextContent("2");

    // click Add+ button, item will be added to the cart. Now cart has 3 items
    fireEvent.click(addBtns[2]);

    expect(screen.getByTestId("cartCount")).toHaveTextContent("3");

    // click Add+ button, item will be added to the cart. Now cart has 4 items
    fireEvent.click(addBtns[3]);

    expect(screen.getByTestId("cartCount")).toHaveTextContent("4");
  });

  it("should remove product from the card", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
            <Cart />
          </Provider>
        </BrowserRouter>
      )
    );

    // Before click Remove- button cart has 4 items
    expect(screen.getByTestId("cartCount")).toHaveTextContent("4");

    const removeBtns = screen.getAllByRole("button", {
      name: "Remove -",
    });

    // Click Remove- button one item has been removed from the cart. Now cart has 4-1=3 items.
    fireEvent.click(removeBtns[0]);

    expect(screen.getByTestId("cartCount")).toHaveTextContent("3");

    // Click Remove- button one item has been removed from the cart. Now cart has 3-1=2 items.
    fireEvent.click(removeBtns[1]);

    expect(screen.getByTestId("cartCount")).toHaveTextContent("2");
  });

  it("should clear the cart", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
            <Cart />
          </Provider>
        </BrowserRouter>
      )
    );

    // Before click "Clear Cart" button, cart has 2 items
    expect(screen.getByTestId("cartCount")).toHaveTextContent("2");

    const clearCartBtn = screen.getByRole("button", { name: "Clear Cart" });

    // Click the "Clear Cart" button
    fireEvent.click(clearCartBtn);

    // After click "Clear Cart" button, all items has been removed form the cart, now cart is empty.
    expect(screen.getByTestId("cartCount")).toHaveTextContent("0");
  });
});
