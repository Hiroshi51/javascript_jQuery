		$(document).ready(function(){
			var currentText = $('#timeDisplay').text();
			var currentScrollText = $('#scrollDisplay').text();
	        $(window).on('scroll', function(event){
	        	getScrollAmount(); 
	        	getCurrentTime();
	        });

            //Display date and time
            function getCurrentTime(){
            	var date = new Date();
			    var fullDate = {
					year    : String(date.getFullYear()),
					month   : String(date.getMonth() + 1),
					day     : String(date.getDate()),
					hour    : String(date.getHours()),
					minute  : String(date.getMinutes()),
					second  : String(date.getSeconds())
		     	}
	            $('#timeDisplay').text(fullDate.year+"/"+fullDate.month+"/"+fullDate.day+"/"+fullDate.hour+":"+fullDate.minute+":"+fullDate.second);
	        }    

	        //Display how much scrolled
	        function getScrollAmount(){
	        	var scrollAmount = $(window).scrollTop();
	        	var $mainPart = $('#header');
	        	$('#scrollDisplay').text(currentScrollText+scrollAmount);
	        	if(scrollAmount >= 300){
	         	    if($mainPart.hasClass("dissapear")){	        		
		        		$mainPart.removeClass("dissapear");
		        		$mainPart.css({
		        			position : "fixed",
		        			top      : -300+"px"
		        		}).animate({top:"0px"},500).addClass("top");
		        	};
	            };

	            if(scrollAmount < 300){
	                if($mainPart.hasClass("top")){
		            	$mainPart.removeClass("top");
		            	$mainPart.addClass("dissapear").hide().css({
		            		position : "relative",
			        	    top      : 0+"px"
		            	}).fadeIn();
			        };
		        };
	        	console.log(scrollAmount);
	        }
		    console.log("the Script has run");
		}); //End of Windows onload
