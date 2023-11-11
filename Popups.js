document.addEventListener("DOMContentLoaded", function() {
    // Event-Listener für den Klick auf den "Impressum"-Link
    document.getElementById("impressum-link").addEventListener("click", function(event) {
        event.preventDefault(); // Verhindert das Navigieren zur Anker-Zielposition
        openPopup("impressum-popup"); // Öffnet das "Impressum"-Popup
    });

    // Event-Listener für den Klick auf den "AGB"-Link
    document.getElementById("AGB-link").addEventListener("click", function(event) {
        event.preventDefault(); // Verhindert das Navigieren zur Anker-Zielposition
        openPopup("agb-popup"); // Öffnet das "AGB"-Popup
    });

    // Event-Listener für das Schließen des Popups durch Klicken auf das "X"-Symbol
    const closeButtons = document.querySelectorAll(".close-popup");
    closeButtons.forEach(function(button) {
        button.addEventListener("click", function(event) {
            event.preventDefault();
            const popupId = button.getAttribute("data-popup-id");
            closePopup(popupId);
        });
    });
});

// Öffnet ein Popup
function openPopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.style.display = "block";
}

// Schließt ein Popup
function closePopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.style.display = "none";
}
closePopup("agb-popup");

