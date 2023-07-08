javascript: ( (h, url, mud) => {
    mud.forEach(each => {
        url.searchParams.delete(each);
    });
    h.replaceState(h.state, null, url.toString());
})(window.history, new URL(window.location.href), [
    /* facebook */
    "fbclid",
]);