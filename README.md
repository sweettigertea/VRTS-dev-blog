# DevBlog

DevBlog is a modern blogging platform built with Vite, React, TailwindCSS, and Strapi, designed to provide a seamless experience for both developers and readers.

## Project Structure

This project consists of two main parts:

1. `devblog`: The frontend application built with Vite, React, and TailwindCSS
2. `devblog-cms`: The backend CMS powered by Strapi

## Technologies Used

- **Frontend:**
  - Vite: Next Generation Frontend Tooling
  - React: A JavaScript library for building user interfaces
  - TailwindCSS: A utility-first CSS framework
  - Apollo Client: For GraphQL queries

- **Backend:**
  - Strapi: Headless CMS
  - GraphQL: Query language for APIs

## Getting Started

### Prerequisites

- Node.js (version specified in `devblog-cms/package.json`)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/devblog.git
   cd devblog
   ```

2. Install dependencies for the frontend:
   ```
   cd devblog
   npm install
   ```

3. Install dependencies for the CMS:
   ```
   cd ../devblog-cms
   npm install
   ```

### Running the Application

1. Start the Strapi CMS:
   ```
   cd devblog-cms
   npm run develop
   ```

2. In a new terminal, start the Vite development server for the frontend:
   ```
   cd devblog
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173` to view the application.

## Features

- Modern, responsive design with TailwindCSS
- Fast development and build times with Vite
- GraphQL API powered by Strapi
- React-based frontend for optimal performance

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the [MIT License](LICENSE).
```
