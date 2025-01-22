# URL Shortener

A simple URL shortening service built with Node.js, Express, and MongoDB.

## Features

- Shorten long URLs into short, easy-to-share links.
- Track the number of clicks on shortened URLs.
- Redirect users to the original URL.
- Simple analytics for URL usage.

## Technologies Used

- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Unique ID Generation:** nanoid

## Installation

1. **Clone the repository:**
    ```sh
    git clone https://github.com/Haru65/URLshortner-.git
    cd URLshortner-
    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```

3. **Set up environment variables:**
    Create a `.env` file in the project root and add the following:
    ```env
    MONGODB_URI=your_mongodb_connection_string
    PORT=8000
    ```

4. **Start the server:**
    ```sh
    npm start
    ```

## Usage

1. **Shorten a URL:**
   - Send a `POST` request to `http://localhost:8000/url` with JSON body:
     ```json
     {
       "url": "https://example.com"
     }
     ```
   - Response:
     ```json
     {
       "id": "shortUrlId"
     }
     ```

2. **Access a shortened URL:**
   - Visit `http://localhost:8000/shortUrlId` to be redirected to the original URL.

3. **Get analytics:**
   - Send a `GET` request to `http://localhost:8000/analytics/shortUrlId` to view click counts.

## Project Structure
```
URLshortner-
│-- controller
│   └── url.js            # Handles URL shortening and redirection logic
│-- models
│   └── url.js            # Mongoose schema definition
│-- routes
│   └── url.js            # Express routing
│-- index.js              # Main application entry point
│-- package.json          # Dependencies and scripts
│-- .env.example          # Example environment variables
│-- README.md             # Project documentation
```

## API Endpoints

| Method | Endpoint                   | Description              |
|--------|----------------------------|--------------------------|
| POST   | `/url`                      | Shorten a URL             |
| GET    | `/:shortUrl`                 | Redirect to original URL  |
| GET    | `/analytics/:shortUrl`        | Get URL analytics         |

## Troubleshooting

- **Issue:** `Cannot POST /url`
  - Solution: Ensure the route is defined correctly and `express.json()` middleware is used.

- **Issue:** `Short URL not found`
  - Solution: Verify the URL exists in the database.

- **Issue:** `Exceeded maxRedirects`
  - Solution: Ensure the redirect logic is correct and no loops exist.

## Contribution

Contributions are welcome! Feel free to submit a pull request or open an issue.

## License

This project is licensed under the MIT License.

## Contact

For any questions or issues, reach out via GitHub: [Haru65](https://github.com/Haru65)



