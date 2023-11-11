// Daten von API abrufen
fetch('http://ergast.com/api/f1/2023/drivers.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // Extrahiere die Fahrerdaten aus der API
        const drivers = data.MRData.DriverTable.Drivers;

        // HTML-Elemente abrufen
        const searchInput = document.getElementById("search-input");
        const suggestionsList = document.getElementById("suggestions");
        const searchButton = document.getElementById("search-button");
        
        
        // Funktion, um ähnliche Fahrer anhand der Nationalität zu finden
        function findSimilarDrivers(searchString) {
            const selectedDriver = drivers.find(driver => {
                const driverName = `${driver.givenName} ${driver.familyName}`;
                return driverName.toLowerCase() === searchString;
            });

            if (selectedDriver) {
                const similarDrivers = drivers.filter(driver => {
                    return driver.nationality === selectedDriver.nationality && driver !== selectedDriver;
                });
                return similarDrivers;
            }

            return [];
        }

        // Funktion, um Suchvorschläge anzuzeigen
        function displaySuggestions(searchString) {
            const matchingDrivers = drivers.filter(driver => {
                const driverName = `${driver.givenName} ${driver.familyName}`;
                return driverName.toLowerCase().includes(searchString);
            });

            const suggestionsList = document.getElementById("suggestions");
            suggestionsList.innerHTML = ""; // Leere die Vorschläge

            if (searchString.length > 0) {
                const similarDrivers = findSimilarDrivers(searchString);

                if (matchingDrivers.length > 0 || similarDrivers.length > 0) {
                    if (matchingDrivers.length > 0) {
                        matchingDrivers.forEach(driver => {
                            const driverName = `${driver.givenName} ${driver.familyName}`;
                            const suggestionItem = document.createElement("li");
                            suggestionItem.textContent = driverName;
                            suggestionsList.appendChild(suggestionItem);
                        });
                    }

                    if (similarDrivers.length > 0) {
                        const similarDriversHeader = document.createElement("li");
                        similarDriversHeader.textContent = "Ähnliche Fahrer (Nationalität)";
                        similarDriversHeader.classList.add("similar-drivers"); // Füge die Klasse hinzu
                        suggestionsList.appendChild(similarDriversHeader);
                    
                        similarDrivers.forEach(driver => {
                            const driverName = `${driver.givenName} ${driver.familyName}`;
                            const suggestionItem = document.createElement("li");
                            suggestionItem.textContent = driverName;
                            suggestionsList.appendChild(suggestionItem);
                        });
                    
                    }
                } else {
                    const noResultsItem = document.createElement("li");
                    noResultsItem.textContent = "Keine Treffer";
                    suggestionsList.appendChild(noResultsItem);
                }

                suggestionsList.style.display = "block";
            } else {
                const noResultsItem = document.createElement("li");
                noResultsItem.textContent = "Keine Treffer";
                suggestionsList.appendChild(noResultsItem);
                suggestionsList.style.display = "block";
            }
        }

        // Event-Listener für die Eingabe im Suchfeld
        searchInput.addEventListener("input", () => {
            const searchString = searchInput.value.toLowerCase();
            displaySuggestions(searchString);
        });

        // Event-Listener für das Klicken auf einen Vorschlag
        suggestionsList.addEventListener("click", (e) => {
            if (e.target.tagName === "LI") {
                searchInput.value = e.target.textContent;
                suggestionsList.style.display = "none";
            }
        });
    })
    .catch(error => {
        console.error('Fehler beim Abrufen der Daten:', error);
    });
