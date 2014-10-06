'use strict';

/**
 * @ngdoc directive
 * @name demoApp.directive:salesBubble
 * @description
 * # salesBubble
 */
angular.module('demoApp')
  .directive('salesBubble', function (Highcharts, $http,$, _) {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
  		$http.get(scope.url).success(function(response){
          var pluck = function (array, key) {
	           return $.map( array, function (obj) {
	                return obj[key];
	            } );
	        };
	       
	        var names = pluck(response, 'salesperson');
	        var totalsales = pluck(response, 'total');
	        var conversions = pluck(response, 'conversion');
	        var transactions = pluck(response, 'transactions');
	        conversions = $.map(conversions, function(ele){
	        	return Number(ele);
	        });

	        var bubbledata = _.zip(transactions, conversions, totalsales, names);

	        bubbledata = $.map(bubbledata, function(ele){
	        	return {name:ele[3], data:[ele.splice(0,3)]};
	        });

	        var container = element.parent();
	      	var width = container.css('width').substring(0, (element.css('width').length)+1)-20;
	        element.highcharts({
	        	chart: {
	                type: 'bubble',
	        		zoomType: 'xy',
	                backgroundColor:'#fff',
	                width: width
	            },
	            credits: {
	        		enabled:false
	        	},
	        	colors: ['#e91a61'],
	            title: {
	                text: 'Demo Bubble Chart',
	                useHTML: true,
	                style: {

	            	}
	            },
	            subtitle: {
	            	text: 'hover to see details, drag out a rectangle to zoom in'
	            },
	             tooltip: {
		            valueDecimals: 2
		        },
	            xAxis: {
	                title: {
	                	enabled: true,
	                    text: 'Transactions'
	                },
	                labels: {
                    rotation: -25,
                    style: {
                        fontSize: '13px',
                        fontFamily: 'Verdana, sans-serif'
                    	}
               		}
	            },
	            yAxis: {
	                title: {
	                    text: 'Conversion (%)'
	                }
	            },
	            plotOptions: {
	              bubble: {
                    tooltip: {
                    headerFormat: '<b>{series.name}</b><br>',
                    pointFormat: 'Transactions: {point.x}<br>Conversions: {point.y}%<br>Salestotal: £{point.z}'
                    }
                  }
	            },
	            //aka series overview
	           legend: {
	                layout: 'vertical',
	                align: 'right',
	                verticalAlign: 'top',
	                x: 150,
	                y: 100,
	                floating: true,
	                borderWidth: 1,
	                backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor || '#FFFFFF'),
	                shadow: true,
	                enabled: false
	            },
	            series: bubbledata

	        });
      	});
      }
    };
  });
