


//3.	Reference the “bubble capture” code from assignment 6. Rewrite 
//this code so that it uses jQuery events and makes use of jQuery DOM 
//manipulation techniques to set the display based on button selections made.

$(document).ready(function(){

	//calculator styles

	$('#container>input').css({'background-color': '#ff9900', 
								'font-size': '2.5em',
								'border': '1px solid #995c00',
								'height': '1.5em',
								'width': '2.5em',
								'color':'#fff'});
	$('#result, #clear').css({'background-color': '#ffd699', 
								'font-size': '2.5em',
								'border': '1px solid #995c00',
								'height': '1.5em',
								'width': '10.26em',
								'color':'#663d00',});

	$('#equal').css('color','#663d00');

	//calculator function

	$("input[type='button']").click(function() {
			// if it is the clear button
            if ($(this).val() === "CLEAR") {
            	$('#result').val('');
            }
            //if it is not the equal button, result=val + clicked val
            else if	($(this).val() !== "=") {
                $('#result').val($('#result').val()+$(this).val());
            } 
            //if it is the equal button, calculate result
            $('#equal').click(function() {
				$('#result').val(eval($('#result').val()));
        	});
    });

}); //end document.ready function   
    