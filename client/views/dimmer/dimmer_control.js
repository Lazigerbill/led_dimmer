Template.dimmerControl.rendered = function(){
	$("#slider").roundSlider({
		radius: 110,
		handleShape: "dot",
		width: 12,
		handleSize: "+10",
		sliderType: "min-range",
		value: 50,
		step: 10,
		startAngle: 90,
		change: function (arg) {
	      if (arg.value == 0){
	      	$('#onButton').prop('disabled', false);
	      	$('#offButton').prop('disabled', true);
	      	$("#slider").roundSlider({
	      		Meteor.call('sub', 0);
	      		value: "0",
	      		disabled: true
	      	});
	      } else {
	      	Meteor.call('sub', arg.value);
	      	console.log(arg.value);
	      }
	  }
	});

	$('#onButton').on('click', function () {
		Meteor.call('sub', 100);
		$('#onButton').prop('disabled', true);
	  var $btn = $(this).button('turningon');
	  setTimeout(function(){
	  	$btn.button('on')
	  	$('#offButton').prop('disabled', false);
	  	$("#slider").roundSlider({
	  		value: "100",
	  		disabled: false
	  	});
	  },1600);
	    // $('#onButton').prop('disabled', true);
	});
	$('#offButton').on('click', function () {
		Meteor.call('sub', 0);
		$('#offButton').prop('disabled', true);
	  var $btn = $(this).button('turningoff');
	  setTimeout(function(){
	  	$btn.button('off')
			$('#onButton').prop('disabled', false);
			$("#slider").roundSlider({
				value: "0",
				disabled: true
			});
	  },800);
	})
	
};