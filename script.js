$(document).ready(function(){
	console.log('wleonproduction@gmail.com Miami-Florida');

	//START OF CLICK BUTTON SCRIPT
	$('.start').click(function(){

		//START LIST SCRIPT
		for (var i=1;i<101;i++){

			if (i%3==0 && i%5==0) {
				
				$('.list').append("<li class='number'>fizzbuzz</li>");
			}

			else if (i%5==0){
				
				$('.list').append("<li class='number'>buzz</li>");
			}

			else if (i%3==0) {
				
				$('.list').append("<li class='number'>fizz</li>");
			}

			else {
				$('.list').append("<li class='number'>"+i+"</li>");
			};

		}; //END LIST SCRIPT


	}); //END OF CLICK BUTTON SCRIPT

	//START DELETE BUTTON SCRIPT
	$('.delete').click(function(){
		$('.number').remove();
	}); // END DELETE BUTTON SCRIPT


}); //END OF DOCUMENT SCRIPT