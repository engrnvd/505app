angular.module('CustomDirectives', [])

.directive('centerV', function() {
    return {
        restrict: 'A',
        link: function(scope, elem, attrs){
            center(elem);
            $(window).resize( function() {
                center(elem);
            });
            function center(elem){
                var elemHeight = elem.height(),
                    parent = $(window),
                    parentHeight = parent.height(),
                    marginTop = (parentHeight - elemHeight) / 2;
                elem.css("margin-top",marginTop+"px");
            }
        }
    };
})
/*
* View-port font
* Set the size in vh and vw units in browsers that don't support vh and vw units
* */
.directive('vFont', function() {
    return {
        restrict: 'A',
        scope: {
            vh: '=vh',
            vw: '=vw'
        },
        link: function(scope, elem, attrs){
            if(scope.vh){
                var scrHeight = $(window).height();
                var px = (scrHeight * scope.vh) / 100;
                elem.css("font-size", px + "px");


                $(window).resize(function() {
                    var scrHeight = $(window).height();
                    var px = (scrHeight * scope.vh) / 100;
                    elem.css("font-size", px + "px");
                });
            }
            else if(scope.vw){
                var scrWidth = $(window).width();
                var px = (scrWidth * vw) / 100;
                elem.css('font-size', px + "px");

                $(window).resize(function() {
                    var scrWidth = $(window).width();
                    var px = (scrWidth * vw) / 100;
                    elem.css('font-size', px + "px");
                });
            }
        }
    };
});
