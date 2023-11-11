function sucheUndWechsel() {
    const searchInput = document.getElementById('search-input');
    const suchbegriff = searchInput.value;
    
    // Navigieren zur anderen Seite mit Suchbegriff als Query-Parameter
    window.location.href = 'WebseiteDetails.html?suchbegriff=' + encodeURIComponent(suchbegriff);
}
function suchbegriff_mitgeben(suchbegriff){
    window.location.href = 'WebseiteDetails.html?suchbegriff=' + encodeURIComponent(suchbegriff);
}
