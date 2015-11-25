angular.module('ngStepwise',[]).directive('ngStepwise', ['$sce', '$document','$timeout', function($sce, $document, $timeout) {
    console.log("[module.directive.ngStepwise]");
    return {
        link: function(scope, element, attrs) {
            /** Wire in methods to the host scope to make available to the directive template **/
            scope.getItemClass = function(thisStep, index) {
                var classes=[];
                if(angular.isObject(thisStep)) {
                    if(thisStep.complete) 
                        classes.push('complete');
                    else if(thisStep.active) {
                        scope.activeStepIndex = index;
                        classes.push('active-step');
                    } else if(index > scope.activeStepIndex) {
                        classes.push('after-active-step');
                    };
                }
                return classes.join(' ');
            };
            scope.getItemCss=function(step, index) {
                if(angular.isObject(step)) {
                    return {
                        backgroundColor: step.hasOwnProperty('incompleteBgColor')?step.incompleteBgColor:'#ccc',
                        borderColor: step.hasOwnProperty('incompleteBorderColor')?step.incompleteBorderColor:'#e8e8e8'
                    };
                }
            };
            element.on('mouseover', function() {
                if(attrs.url) {
                    // do something if there is a url for the task
                }
            });
            // apply tooltips
            $timeout(function() {
                $("[title]").tooltip({
                    placement: 'bottom'
                });
            }, 100);
        },
        restrict: 'AE',
        scope: {
            globalOptions: '=ngDefaultOptions', /** Still working on these **/
            steps: '=ngSteps' /** Channel in the steps attribute of the element to map to the scope array of steps **/
        },
        template: "\
            <div class='stepwise-frame'><ul class='stepwise'>\
                <li ng-repeat='step in steps' ng-attr-class='{{getItemClass(step, $index)}}'>\
                    <label>{{step.title}}</label>\
                    <!-- Allow return to completed steps -->\
                    <a ng-show='step.complete' ng-href='{{step.url}}' target=\"{{step.newWindow ? '_blank': (step.windowTarget ? step.windowTarget : '_self')}}\" ng-attr-title='{{step.tooltip}}' ng-style='getItemCss(step, $index)'>&nbsp;</a>\
                    <!-- Otherwise, disable link if step is not complete -->\
                    <a ng-show='!step.complete' href='#' ng-attr-title='{{step.tooltip}}' ng-style='getItemCss(step, $index)'>&nbsp;</a>\
                    <hr class='divider' />\
                </li>\
            </ul></div>\
            ",
    };
    
}]);