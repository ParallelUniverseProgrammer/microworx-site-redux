# Microworx Website Redesign

A modern, responsive redesign of the Microworx website, a local technology partner serving Rochester since 1994. This project aims to provide a refreshed online presence for their computer sales, repair services, and business support offerings.

## Tech Stack

-   **Framework:** [React](https://react.dev/) (v19)
-   **Build Tool:** [Vite](https://vitejs.dev/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/) (v4)
-   **Routing:** [React Router](https://reactrouter.com/)
-   **Icons:** [Lucide React](https://lucide.dev/)

## Project Structure

-   `src/pages`: Main page components (Home, Services, Products, About, Contact).
-   `src/components`: Reusable UI components (Navbar, Footer).
-   `src/layouts`: Layout wrappers.
-   `src/assets`: Static assets like images and logos.

## Getting Started

### Prerequisites

Ensure you have Node.js installed on your machine.

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    cd microworx-redesign
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

### Development

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

### Building for Production

Build the application for production deployment:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Deployment

This project is configured to be deployed to GitHub Pages.

### Steps to Deploy

1.  **Configure Base URL**: Ensure `vite.config.js` has the correct `base` path matching your repository name (e.g., `/microworx-site-redux/`).
2.  **Run Deploy Script**:
    ```bash
    npm run deploy
    ```
    This script will:
    -   Build the project for production.
    -   Copy `index.html` to `404.html` to handle client-side routing on GitHub Pages.
    -   Push the `dist` folder to the `gh-pages` branch of your repository.

3.  **GitHub Settings**: Go to your repository settings on GitHub -> **Pages** and ensure the source is set to the `gh-pages` branch.

## License

[Add License Information Here]
