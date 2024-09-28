# Community Mapping Project - Dharavi

This repository contains the code for a **Community Mapping Project** built using **React** and **Vite**, focusing on the Dharavi area, one of the largest informal settlements in Mumbai, India. The project visualizes various aspects of the community, such as infrastructure, services, and socio-economic data, using interactive maps and data visualization.

## Table of Contents
- [Overview](#overview)
- [Objectives](#objectives)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Overview
Dharavi is known for its dense population and thriving local economy. This project uses community mapping to visualize various socio-economic factors, infrastructure, and services, enabling a better understanding of the settlement. The interactive maps highlight points of interest, social services, transportation, and other aspects of Dharavi.

## Objectives
- Map **key locations and services** such as healthcare centers, schools, markets, and local businesses.
- Identify **infrastructure challenges** like overcrowding, sanitation, and limited resources.
- Present **demographic and economic insights** of Dharavi.
- Provide useful data for **urban planners** and **policy makers** for future development.

## Features
- **Interactive Map**: Use Leaflet.js to display dynamic, zoomable maps of Dharavi.
- **Multiple Data Layers**: Display layers for population density, services, economic zones, and more.
- **Custom Markers**: Highlight key community locations such as hospitals, markets, etc.
- **Responsive Design**: Optimized for mobile, tablet, and desktop views.

## Technologies Used
- **React.js**: For building the user interface.
- **Vite**: For fast and optimized development with React.
- **Leaflet.js**: For mapping and geospatial visualization.
- **OpenStreetMap**: To provide map tiles and geospatial data.
- **GeoJSON**: For geospatial data handling.
- **CSS3**: For responsive design and styling.
- **Axios** (optional): For data fetching (if needed).

## Setup and Installation

###
1. Clone the repository:
   ```bash
    git clone https://github.com/yourusername/dharavi-community-mapping.git
2. Navigate to the project directory:
    ```bash
    cd dharavi-community-mapping
3. Open the index.html file in your web browser to view the map locally.
   ```bash
   cd dharavi-community-mapping
4. If you are using Python for data preprocessing, set up a virtual environment and install required packages:
   ```bash
   pip install -r requirements.txt
5. Build for production:
   ```bash
   npm run build

## Usage

Once the development server is running, open the app in your browser to interact with the community mapping interface. You can:

    Explore different map layers to view infrastructure, services, and demographic data.
    Click on markers to view detailed information about each location, such as healthcare centers, markets, or schools.

## Project Structure

```
dharavi-community-mapping/
├── public/
│   └── assets/            # Static files like images
├── src/
│   ├── components/        # React components (Map, Header, Footer, etc.)
│   ├── data/              # GeoJSON files for mapping
│   ├── pages/             # Pages for different sections of the app
│   ├── App.jsx            # Main React component
│   └── main.jsx           # Entry point for Vite
├── index.html             # Main HTML file
├── package.json           # Project metadata and dependencies
└── vite.config.js         # Vite configuration
```
## Example React Component - Map:
  ```
``  import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const DharaviMap = () => {
  useEffect(() => {
    const map = L.map('map').setView([19.0402, 72.8530], 15); // Coordinates for Dharavi

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    // Sample GeoJSON data for mapping community services
    const servicesData = {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          properties: { name: 'Healthcare Center', description: 'A local healthcare center' },
          geometry: { type: 'Point', coordinates: [72.8530, 19.0402] },
        },
      ],
    };

    L.geoJSON(servicesData, {
      onEachFeature: (feature, layer) => {
        layer.bindPopup(`<h3>${feature.properties.name}</h3><p>${feature.properties.description}</p>`);
      },
    }).addTo(map);
  }, []);

  return <div id="map" style={{ height: '500px' }}></div>;
};

export default DharaviMap;
```
## Contributing

### Contributions are welcome! Here’s how you can contribute:
1. Fork the repository.
2. Create a new branch (git checkout -b feature-branch).
3. Make your changes and commit them (git commit -m "Add new feature").
4. Push to the branch (git push origin feature-branch).
5. Open a pull request.

## License

- This project is licensed under the MIT License. See the LICENSE file for more details.
