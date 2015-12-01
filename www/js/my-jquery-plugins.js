/**
 * Created by Engr. Naveed on 15-Nov-15.
 */
(function ( $ ) {
    var loaderMarkup = '<span class="loader"><i class="fa fa-refresh fa-spin spinner"></i></span>';
    $.fn.showLoader = function() {
        return this.each(function () {
            // show loader
            $(this).append(loaderMarkup);

            // vars
            var elem = $(this),
                loaderWrapper = elem.children(".loader"),
                loader = loaderWrapper.children(".spinner"),
                height = elem.outerHeight();
            // height should not be too large
            var winHeight = $(window).height();
            if( height > winHeight ) height = winHeight;
            var marginTop = Math.round(0.1*height),
                loaderSize = height - (marginTop * 2);

            // adjust css
            elem.css({
                position: "relative"
            });
            loaderWrapper.css({
                position: "absolute",
                left: 0,
                top: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0,0,0,0.3)",
                textAlign: "center",
                color: "#fff",
                zIndex: 9999
            });
            loader.css({
                lineHeight: 1,
                fontSize: loaderSize+"px",
                marginTop: marginTop+"px"
            });

            // disable event propagation when loader is present
            loaderWrapper.click(function () {
                return false;
            });

            // for chaining purpose
            return this;
        });

    };

    $.fn.hideLoader = function() {
        $(this).children(".loader").remove();
        return this;
    };

}( jQuery ));

jQuery.showMessage = function (msg,type) {
    type = type || "info";
    var markup =
        "<div id='message-wrapper'>" +
        "<div id='message' " +
        "class='alert alert-"+type+"'>" +
        msg+"<i class='fa fa-remove'></i>" +
        "</div>" +
        "</div>";

    $("body").prepend(markup);

    var wrapper = $("#message-wrapper");
    var msgDiv = $("#message");
    wrapper.css({
        position: 'fixed',
        zIndex: 9999,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)"
    });
    msgDiv.css({
        position: 'absolute',
        width: '60%',
        left: '20%',
        top: '-10%',
        cursor: "pointer"
    });

    msgDiv.find(".fa").css({
        position: 'absolute',
        right: '1em',
        top: '1em'
    });

    msgDiv.animate({
        top: '30%'
    }, 500, 'easeOutExpo', function() {
        msgDiv.click(function () {
            wrapper.remove();
        });
    });

};
