document.addEventListener('DOMContentLoaded', function() {
    const convertBtn = document.getElementById('convertBtn');
    const gpsInput = document.getElementById('gpsInput');
    const resultText = document.getElementById('resultText');
    const mapLinkContainer = document.getElementById('mapLinkContainer');

    convertBtn.addEventListener('click', function() {
        const inputText = gpsInput.value.trim();
        
        if (!inputText) {
            resultText.textContent = 'Please enter GPS data.';
            mapLinkContainer.innerHTML = '';
            return;
        }
        
        try {
            const result = parseGPSData(inputText);
            displayResult(result);
        } catch (error) {
            resultText.textContent = `Error: ${error.message}`;
            mapLinkContainer.innerHTML = '';
        }
    });

    function parseGPSData(text) {
        // Extract latitude
        const latMatch = text.match(/Lat:([NS])(\d+\.\d+)/);
        if (!latMatch) throw new Error('Could not parse latitude');
        
        let latitude = parseFloat(latMatch[2]);
        if (latMatch[1] === 'S') latitude = -latitude;
        
        // Extract longitude
        const lonMatch = text.match(/Lon:([EW])(\d+\.\d+)/);
        if (!lonMatch) throw new Error('Could not parse longitude');
        
        let longitude = parseFloat(lonMatch[2]);
        if (lonMatch[1] === 'W') longitude = -longitude;
        
        // Extract speed
        const speedMatch = text.match(/Speed:(\d+\.\d+)Km\/h/);
        const speed = speedMatch ? parseFloat(speedMatch[1]) : null;
        
        return {
            latitude,
            longitude,
            speed
        };
    }

    function displayResult(data) {
        // Create Google Maps URL
        const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${data.latitude},${data.longitude}`;
        
        // Format the result text with HTML
        const resultHTML = `Latitude: ${data.latitude}
Longitude: ${data.longitude}
${data.speed !== null ? `Speed: ${data.speed} km/h` : ''}
lat, long: ${data.latitude}, ${data.longitude}
Google Maps URL: <a href="${mapsUrl}" target="_blank">${mapsUrl}</a>`;
        
        // Use innerHTML instead of textContent to render the HTML
        resultText.innerHTML = resultHTML;
        
        // Create a clickable button
        mapLinkContainer.innerHTML = `<a href="${mapsUrl}" target="_blank">Open in Google Maps</a>`;
    }
}); 
