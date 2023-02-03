import React, { useState } from "react";

function App() {
  const [locationSearch, setLocationSearch] = useState("Sopot");
  const [locations, setLocations] = useState<string[]>([]);

  return (
    <div>
      <h1>Weather App</h1>
      <div>
        <label>
          Add Location{" "}
          <input
            type="text"
            value={locationSearch}
            onChange={(e) => setLocationSearch(e.target.value)}
          />
        </label>
        <button>Search</button>
      </div>

      <div>
        <h2>Locations</h2>
        <table>
          <thead>
            <tr>
              <th>City:</th>
            </tr>
          </thead>
          <tbody>
            {locations.map((location, index) => (
              <tr key={index}>
                <td>{location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
