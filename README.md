
# React Unsplash Image Search with Theme Toggle

## 📝 Description

This is a web application built with React that allows users to search for high-quality images using the official Unsplash API. Users can enter keywords to find relevant images, which are then displayed in a responsive gallery. The project also features a dark/light theme toggle that persists the user's preference in local storage and respects their operating system's color scheme preference. It demonstrates best practices for API integration, client-side state management with React Context, and server state management with TanStack Query (React Query).

## ✨ Features

* **Keyword Image Search:** Enter search terms to find images from the Unsplash library.
* **Dynamic Image Gallery:** Displays search results in a clean, responsive grid.
* **Dark/Light Theme Toggle:** Switch between dark and light themes with a dedicated button.
* **Persistent Theme Preference:** Remembers the user's theme choice using `localStorage`.
* **OS Theme Detection:** Initially sets the theme based on the user's operating system preference (`prefers-color-scheme`).
* **API Integration:** Securely fetches data from the Unsplash API using an API key stored in environment variables.
* **Efficient Data Fetching:** Utilizes TanStack Query (React Query) for robust data fetching, caching, and server state synchronization for image searches.
* **Global State Management:** Uses React Context API (`AppContext`) to manage the theme state and search term globally.
* **Loading & Error States:** Provides user feedback during image loading and in case of API errors or no results.
* **React Query Devtools:** Integrated for easier debugging and inspection of query states.

## 🚀 Live Demo

[Link to Live Demo](https://imagesearchnoto.netlify.app/) 

## 🛠️ Technologies Used

* **Frontend:** React.js (Vite)
* **Server State Management:** TanStack Query (React Query)
* **Client State Management:** React Context API (for theme and search term)
* **API:** Unsplash API
* **HTTP Client:** Axios
* **Icons:** `react-icons` (for theme toggle)
* **Styling:** CSS 

## ⚙️ Setup and Installation

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/VidyasagarAkhumukhi/Image_Search
    cd <your-repository-directory-name>
    ```

2.  **Install dependencies:**
    Make sure you have Node.js and npm (or yarn) installed.
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Set up Environment Variables (Unsplash API Key):**
    * You'll need an Access Key from Unsplash. Register as a developer at [https://unsplash.com/developers](https://unsplash.com/developers) and create an app to get your key.
    * Create a `.env` file in the root of your project.
    * Add your Unsplash Access Key to the `.env` file. Since this project uses Vite, environment variables must be prefixed with `VITE_`:
        ```env
        VITE_API_KEY=your_unsplash_access_key_here
        ```
    * **Important:** Add `.env` to your `.gitignore` file to prevent your API key from being committed to version control.

4.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    This will typically open the application in your default browser (e.g., `http://localhost:5173` for Vite).

## 📖 Usage

1.  Open the application in your browser.
2.  **Toggle Theme:** Use the sun/moon icon button (usually at the top) to switch between light and dark themes. Your preference will be saved.
3.  **Search for Images:**
    * Locate the search bar (default placeholder "SF90").
    * Enter a keyword or phrase for the type of images you want to find (e.g., "nature", "ferrari", "code").
    * Click the "Search" button or press Enter.
4.  The application will fetch and display a gallery of images from Unsplash related to your search query.
5.  Loading messages, error messages, or "no results found" messages will appear as appropriate.

## 🏗️ Project Structure

* `src/`: Contains the main source code.
    * `App.jsx`: Main application component, renders `ThemeToggle`, `SearchForm`, and `Gallery`.
    * `context.jsx`: Defines `AppContext`, `AppProvider` (manages `isDarkTheme` and `searchTerm` state), and `useGlobalContext` hook.
    * `Gallery.jsx`: Fetches images from Unsplash API based on `searchTerm` using TanStack Query (`useQuery`) and displays them. Handles loading, error, and no-results states.
    * `SearchForm.jsx`: Component for the image search input form. Updates `searchTerm` in the global context on submit.
    * `ThemeToggle.jsx`: Component with a button to toggle the dark/light theme using the global context.
    * `main.jsx`: Application entry point. Wraps `App` with `AppProvider` (for context) and `QueryClientProvider` (for React Query). Includes `ReactQueryDevtools`.
    * `index.css`: Global CSS styles, including styles for dark/light themes.
* `public/`: Static assets.
* `.env`: Environment variables (contains `VITE_API_KEY` - **DO NOT COMMIT THIS FILE**).
* `.gitignore`: Specifies intentionally untracked files.
* `package.json`: Lists project dependencies and scripts.
* `vite.config.js` (if using Vite): Vite configuration file.

## 🔑 API Key Management

The Unsplash API requires an access key (`client_id`) for requests. This key is sensitive and should **not** be hardcoded directly into your client-side JavaScript code or committed to your public repository.

* **Client-Side (Development & Production with Vite):** Use environment variables prefixed with `VITE_` (e.g., `.env` file with `VITE_API_KEY=your_key`) as described in the Setup section. Vite makes these available in your application via `import.meta.env.VITE_API_KEY`. While the key will be bundled with your client-side JavaScript, this is a common practice for public APIs like Unsplash that use client-side keys for rate limiting and identification.
* **Server-Side Proxy (More Secure):** For enhanced security, especially if you need to keep your API key completely private or handle rate limiting more robustly, consider setting up a simple server-side proxy. Your React application would make requests to your proxy, and your proxy would then make requests to the Unsplash API with the key, forwarding the response back to your client. This is generally overkill for simple Unsplash integrations but is an option for more complex scenarios.

## 🤝 Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-amazing-feature`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'Add some amazing feature'`).
5.  Push to the branch (`git push origin feature/your-amazing-feature`).
6.  Open a Pull Request.
