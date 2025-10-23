# Express Supabase MVC

This project is a backend application built with Node.js, Express, and Supabase, following the MVC (Model-View-Controller) architecture. It provides a simple API for managing users.

## Project Structure

- **src/**: Contains the source code for the application.
  - **config/**: Configuration files, including the Supabase connection.
  - **controllers/**: Contains the controllers that handle requests and responses.
  - **models/**: Contains the data models and database queries.
  - **routes/**: Defines the API routes for the application.
  - **middleware/**: Contains middleware functions for authentication and other purposes.
  - **utils/**: Utility functions that can be used throughout the application.
  - **app.js**: The entry point of the application.

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd express-supabase-mvc
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add your Supabase URL and key:
   ```
   SUPABASE_URL=<your-supabase-url>
   SUPABASE_KEY=<your-supabase-key>
   ```

## Usage

To start the application, run:
```
npm start
```

The server will start on the specified port, and you can access the API at `http://localhost:<port>/api/users`.

## API Endpoints

- `GET /api/users`: Retrieves a list of users from the Supabase database.

## License

This project is licensed under the MIT License.