UnicodeIsoAlpha2CountyFlag  = function (iso) {
    iso = iso.toUpperCase();
    return String.fromCharCode(55356, 56741 + iso.charCodeAt(0), 55356, 56741 + iso.charCodeAt(1));
}
