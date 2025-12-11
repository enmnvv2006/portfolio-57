# Vue Shopping Cart

This project is a simple shopping cart application built with Vue 3 and Vite. It allows users to view products, add them to a shopping cart, and manage their cart items.

## Project Structure

```
vue-shopping-cart
├── src
│   ├── App.vue               # Root component that sets up the main layout and routing
│   ├── main.ts               # Entry point of the application
│   ├── components
│   │   ├── ProductCard.vue    # Component for displaying individual product details
│   │   └── ShoppingCart.vue    # Component for displaying items in the shopping cart
│   ├── pages
│   │   ├── Home.vue           # Home page displaying a list of products
│   │   └── Cart.vue           # Cart page displaying items in the cart
│   ├── stores
│   │   └── cartStore.ts       # Store for managing shopping cart state
│   ├── types
│   │   └── product.ts         # TypeScript interface for product structure
│   └── assets
│       └── styles.css         # Global styles for the application
├── public                     # Public assets
├── index.html                # Main HTML file serving the application
├── package.json              # npm configuration file
├── tsconfig.json             # TypeScript configuration file
├── vite.config.ts            # Vite configuration file
└── README.md                 # Project documentation
```

## Features

- View a list of products with details
- Add products to the shopping cart
- View and manage items in the shopping cart

## Getting Started

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd vue-shopping-cart
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Run the development server:
   ```
   npm run dev
   ```

5. Open your browser and go to `http://localhost:3000` to see the application in action.

## License

This project is licensed under the MIT License.