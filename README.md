# GPS Coordinate Converter

A simple web application that converts GPS coordinates from a specific format to a more readable format and provides a Google Maps link.

## Features

- Parse GPS data in the format: `Current position! Lat:S0.958017,Lon:E100.398209,Course:126.34,Speed:5.67Km/h,DateTime:2025-03-01 23:26:06`
- Extract latitude and longitude information
- Convert coordinates to the correct format (handling N/S and E/W directions)
- Display formatted coordinates and speed
- Generate a Google Maps URL for the location
- Provide a direct link to open the location in Google Maps

## How to Use

1. Enter your GPS data in the text area
2. Click the "Convert" button
3. View the parsed results and click the "Open in Google Maps" link to see the location

## Deployment on GitHub Pages

To deploy this website on GitHub Pages:

1. Push this code to a GitHub repository
2. Go to the repository settings
3. Scroll down to the "GitHub Pages" section
4. Select the branch you want to deploy (usually `main` or `master`)
5. Click "Save"
6. Your site will be published at `https://[your-username].github.io/[repository-name]/`

## Local Development

To run this website locally:

1. Clone the repository
2. Open the `index.html` file in your web browser

## Technologies Used

- HTML
- CSS
- JavaScript (Vanilla JS, no frameworks)

## License

MIT 