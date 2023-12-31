javascript: ( (h, url, mud) => {
    mud.forEach(each => {
        url.searchParams.delete(each);
    });
    h.replaceState(h.state, null, url.toString());
})(window.history, new URL(window.location.href), [
    /* Facebook */
    "fbclid",

    /* UTM parameters */
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content",
]);