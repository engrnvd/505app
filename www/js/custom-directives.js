angular.module('CustomDirectives', [])

.directive('navbar', function() {
    return {
        restrict: 'E',
        templateUrl: 'partials/navbar.html',
        controller: ['$scope','$rootScope',function (scope) {
            scope.pages = SiteGlobals.pages;
            scope.user = SiteGlobals.user();
            scope.showSideMenu = function () {
                var sideMenu = $("#side-menu");
                sideMenu.css("transform", "translate3d("+sideMenu.width()+"px, 0, 0px)");
            };
        }],
        link: function (scope, elem, attrs) {
            var sideMenu = elem.find("#side-menu");
            sideMenu.click(function () {
                sideMenu.css("transform", "translate3d(-"+sideMenu.width()+"px, 0, 0px)");
            });
        }
    };
})

.directive('equallySpaced', function() {
    return {
        restrict: 'A',
        link: function(scope, table, attrs){
            var tds = table.find("tr:first").find("th");
            var count = tds.length;
            tds.css("width", (table.width() / count)+"px");
        }
    };
})

.directive('size', function() {
    return {
        restrict: 'A',
        link: function(scope, elem, attrs){
            elem.viewPortWidth(attrs.size);
            elem.viewPortHeight(attrs.size);
        }
    };
})

.directive('width', function() {
    return {
        restrict: 'A',
        link: function(scope, elem, attrs){
            elem.viewPortWidth(attrs.width);
        }
    };
})

.directive('height', function() {
    return {
        restrict: 'A',
        link: function(scope, elem, attrs){
            elem.viewPortHeight(attrs.height);
        }
    };
})

.directive('centerV', function() {
    return {
        restrict: 'A',
        link: function(scope, elem, attrs){
            center(elem);
            $(window).resize( function() {
                center(elem);
            });
            elem.resize( function() {
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
                var px = (scrWidth * scope.vw) / 100;
                elem.css('font-size', px + "px");

                $(window).resize(function() {
                    var scrWidth = $(window).width();
                    var px = (scrWidth * scope.vw) / 100;
                    elem.css('font-size', px + "px");
                });
            }
        }
    };
});
