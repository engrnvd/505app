var SiteGlobals = {
    //serverUrl: "http://505.enaveed.com/web/index.php/",
    serverUrl: "http://localhost/505mess/",
    pages: [
        {
            icon: "user",
            url: "profile"
        },
        {
            icon: "send",
            url: "place-order"
        },
        {
            icon: "list",
            url: "your-orders"
        },
        {
            icon: "list-alt",
            url: "weekly-menu"
        },
        {
            icon: "table",
            url: "billing-details"
        },
        {
            icon: "sign-out",
            url: "logout"
        }
    ]
};
SiteGlobals.apiUrl = SiteGlobals.serverUrl+"api/";
SiteGlobals.checkLoggedIn = function () {
    if(!localStorage.getItem("authToken")) window.location.href = "#/login";
};