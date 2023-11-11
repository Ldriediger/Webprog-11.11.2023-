document.addEventListener("DOMContentLoaded", function() {
    function getSearchTermFromURL() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('suchbegriff');
    }

    // Rufe den Suchbegriff aus der URL ab
    const suchbegriff = getSearchTermFromURL();

    // Tabelle im HTML-Dokument finden
    const tableBody = document.getElementById("table-body");
    // Header-Element finden
    const headerElement = document.getElementById("header");

    // Daten von der API abrufen
    fetch('http://ergast.com/api/f1/2023/drivers.json')
        .then(response => response.json())
        .then(data => {
            // Annahme: JSON-Daten aus der API
            const apiData = data.MRData.DriverTable.Drivers;

            // Den Suchbegriff bis zum Leerzeichen in ein Wort zerlegen und formatieren
            const searchTerm = suchbegriff.split(' ')[0].charAt(0).toUpperCase() + suchbegriff.split(' ')[0].slice(1).toLowerCase();

            // Den Datensatz für den ausgewählten Fahrer finden
            const selectedDriver = apiData.find(driver => driver.givenName.toLowerCase() === searchTerm.toLowerCase());
            if (selectedDriver) {
                // Den Header mit givenName und familyName des Fahrers füllen
                headerElement.textContent = `${selectedDriver.givenName} ${selectedDriver.familyName}`;
                document.getElementById("cell-famName").textContent = selectedDriver.familyName;
                document.getElementById("cell-givenName").textContent = selectedDriver.givenName;
                document.getElementById("cell-number").textContent = selectedDriver.permanentNumber;
                document.getElementById("cell-code").textContent = selectedDriver.code;
            
                const driverLink = document.createElement("a");
                driverLink.href = selectedDriver.url;
                driverLink.textContent = selectedDriver.givenName + " " + selectedDriver.familyName;
                document.getElementById("cell-link").appendChild(driverLink);
            
                document.getElementById("cell-dob").textContent = selectedDriver.dateOfBirth;
                document.getElementById("cell-nationality").textContent = selectedDriver.nationality;
            } else {
                console.error(`Datensatz mit givenName "${searchTerm}" wurde nicht gefunden.`);
            }
            

            var bildElement = document.getElementById('ergebnis-bild');
            console.log(selectedDriver);
            if (searchTerm === 'Max') {
                bildElement.src = 'MaxVerstappen.jpg';
            } else if (searchTerm === 'Valtteri') {
                bildElement.src = 'ValtteriBottas.jpg';
            } else if (searchTerm === 'Nyck') {
                bildElement.src = 'NyckdeVries.jpg';
            } else if (searchTerm === 'Pierre') {
                bildElement.src = 'PierreGasly.jpg';
            } else if (searchTerm === 'Lewis') {
                bildElement.src = 'LewisHamilton.jpg';
            } else if (searchTerm === 'Nico') {
                bildElement.src = 'NicoHülkenberg.jpg';
            } else if (searchTerm === 'Liam') {
                bildElement.src = 'LiamLawson.jpg';
            } else if (searchTerm === 'Charles') {
                bildElement.src = 'CharlesLeclerc.jfif';
            } else if (searchTerm === 'Kevin') {
                bildElement.src = 'KevinMagnussen.jpg';
            } else if (searchTerm === 'Lando') {
                bildElement.src = 'LandoNorris.jpg';
            } else if (searchTerm === 'Esteban') {
                bildElement.src = 'EstebanOcon.jpg';
            } else if (searchTerm === 'Sergio') {
                bildElement.src = 'SergioPerez.jpg';
            } else if (searchTerm === 'Oscar') {
                bildElement.src = 'OscarPiastri.jpg';
            } else if (searchTerm === 'Daniel') {
                bildElement.src = 'DanielRicciardo.jpg';
            } else if (searchTerm === 'George') {
                bildElement.src = 'GeorgeRussell.jpg';
            } else if (searchTerm === 'Carlos') {
                bildElement.src = 'CarlosSainz.jpg';
            } else if (searchTerm === 'Logan') {
                bildElement.src = 'LoganSargeant.jpg';
            } else if (searchTerm === 'Lance') {
                bildElement.src = 'LanceStroll.jpg';
            } else if (searchTerm === 'Yuki') {
                bildElement.src = 'YukiTsunoda.jpg';
            } else if (searchTerm === 'Guanyu') {
                bildElement.src = 'GuanyuZhou.jpg';
            } else if (searchTerm === 'Fernando') {
                bildElement.src = 'FernandoAlonso.jpg';
            } else if (searchTerm === 'Alexander') {
                bildElement.src = 'AlexAlbon.jpg';
            }
        })
        .catch(error => {
            console.error('Fehler beim Abrufen der Daten:', error);
        });
});
