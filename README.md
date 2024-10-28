# Nxt Trendz 

Nxt Trendz is a feature-rich e-commerce web application that simulates an online shopping experience. This project demonstrates key e-commerce functionalities such as user authentication, product filtering, and cart management, all developed with React and Context API for an interactive user experience.

## Live Demo
[Access Nxt Trendz](https://nxttrends12.ccbp.tech/login)

- **Username**: `rahul`
- **Password**: `rahul@2021`

## Key Features and Functionalities

### 1. Authentication and Navigation

- **Login & Error Handling**: Provides error messages for incorrect login credentials. On successful login, the user is redirected to the Home page.

  ![Login Page](https://res.cloudinary.com/doov17zaw/image/upload/v1730109320/nxt%20Trends/Web_capture_28-10-2024_151852_nxttrends12.ccbp.tech_siqloh.jpg)

- **Protected Routes**:
  - Redirects unauthenticated users attempting to access the Home, Products, or Cart routes to the Login page.
  - Authenticated users have access to Home, Products, Cart, and Product Item Details routes. Attempts to access the Login page while authenticated redirect users to the Home route.
- **Logout Functionality**: Logs users out and redirects them to the Login page.

### 2. Products Page

- **Data Fetching**:
  - Sends a GET request to `productsApiUrl` with `jwt_token` for authentication, displaying a loader while data is retrieved.
  - Shows an error view if the data request fails.
- **Filters & Search**:
  - Supports product filtering by search query, category, and rating.
  - Multiple filters can be applied, and a "Clear Filters" button resets all filters to refresh the product list.
  - Displays a loader during each filter operation.

  ![Products Page](https://res.cloudinary.com/doov17zaw/image/upload/v1730109348/nxt%20Trends/Web_capture_28-10-2024_152037_nxttrends12.ccbp.tech_cmp6lr.jpg)

### 3. Product Item Details Page

- **Product Details**:
  - Fetches and displays product details along with similar items for a selected product.
  - Shows a loader while fetching data and an error view if the request fails.

  ![Product Item Details Page](https://res.cloudinary.com/doov17zaw/image/upload/v1730109618/nxt%20Trends/Web_capture_28-10-2024_152958_nxttrends12.ccbp.tech_g4nakd.jpg)

- **Quantity Controls**:
  - Allows users to adjust product quantity with increment and decrement controls. Reducing quantity to zero removes the item from the cart.
  - "Continue Shopping" in the error view redirects users to the Products page.

### 4. Cart Management

- **Adding Items**: 
  - Users can add items to the cart, updating quantities for existing items.
  
- **Cart Summary**:
  - Displays total cost and item count in the cart.

  ![Cart Management](https://res.cloudinary.com/doov17zaw/image/upload/v1730109795/nxt%20Trends/Web_capture_28-10-2024_153242_nxttrends12.ccbp.tech_fkucvy.jpg)

- **Cart Item Controls**:
  - Supports item quantity adjustments and removal of individual items.
  - "Remove All" button clears all items, showing an Empty Cart view when no items remain.

### Cart Context API

The Cart Context API manages cart state with the following methods:

- **cartList**: Holds the current list of items in the cart.
- **removeAllCartItems()**: Clears all items from the cart.
- **addCartItem()**: Adds a new item to the cart.
- **removeCartItem()**: Removes an individual item from the cart.
- **incrementCartItemQuantity()**: Increases item quantity.
- **decrementCartItemQuantity()**: Decreases item quantity.

## Technologies Used

- **React** for building UI components and managing state.
- **Context API** for managing cart and authentication state.
- **React Router** for client-side protected routing.
- **API Integration** for managing product and authentication data.

## Future Enhancements

Future improvements could include wishlist management, enhanced error handling, and personalized product recommendations for an even more robust shopping experience.

---
