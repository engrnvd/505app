var SiteGlobals = {
    serverUrl: "http://505.enaveed.com/web/index.php/",
    // serverUrl: "http://localhost/505mess/",
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
            url: "orders-history"
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
    if( !localStorage.getItem("authToken") || !localStorage.getItem("user") )
    {
        $.showMessage("You are not logged in.","danger");
        window.location.href = "#/login";
    }
};

SiteGlobals.user = function () {
    return JSON.parse(localStorage.getItem("user"));
};


SiteGlobals.authToken = function () {
    return localStorage.getItem("authToken");
};

//SiteGlobals.login = function (res) {
//
//};
