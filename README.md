# The Spice Is Right

The Spice Is Right is a React-based web application that allows users to explore, search, and manage a collection of recipes.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Components Overview](#components-overview)
- [Pages Overview](#pages-overview)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Browse Recipes**: View a comprehensive list of recipes with detailed information.
- **Search Functionality**: Search for recipes by name or category.
- **Add New Recipes**: Add new recipes to the collection with relevant details.
- **Edit Recipes**: Update information of existing recipes.
- **Delete Recipes**: Remove recipes from the collection.

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/JAFanton/ironhack-react-app.git
   cd ironhack-react-app
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm start
   ```

   The application will run at `http://localhost:3000`.

## Usage

- **Viewing Recipes**: Navigate to the homepage to see the list of available recipes.
- **Searching Recipes**: Use the search bar to find recipes by name or category.
- **Adding a New Recipe**: Click on the "Add recipe" button, fill out the form, and submit.
- **Editing a Recipe**: Click on the "Edit" button next to a recipe, update the information, and save.
- **Deleting a Recipe**: Click on the "Delete" button next to a recipe to remove it from the collection.

## Components Overview

The `src` folder contains the following key components:

- **App.js**: The root component that sets up routing and renders the main layout.
- **Navbar.js**: Contains the navigation bar with links to different pages.
- **Footer.js**: Contains a link to the Github repository.
- **Sidebar.js**: Contains links to the home page, about us page, and has the add recipe function.

## Pages Overview

The application includes the following pages:

- **Home.js**: The homepage displaying the list of recipe.
- **CreateItem.js**: Page with a form to add a new recipe.
- **EditItem.js**: Page with a form to edit an existing recipe.
- **ItemDetail.js**: Displays detailed information about a specific recipe.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

---

This README provides an overview of the project's features, setup instructions, and component structure, making it easier for new users to understand and use the application effectively.
