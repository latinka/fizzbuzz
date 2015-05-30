$("document").ready(function(){

/*--- Prevent consecutive FizzBuzzes from chaining ---*/
var clearList = function(){
	$(".list > li").remove();
};

/*--- Clear FizzBuzz with Restart button ---*/
$(".restart").click(function(){
	$(".list").empty();
});

/*--- Where the magic happens ---*/
$("#fizzbuzz").submit(function(event){
		event.preventDefault();
		clearList();
		/*--- Convert strings into integers ---*/
		var start = parseInt($("#start").val());
		var finish = parseInt($("#finish").val());
		/*--- Ensure input is a legal number ---*/
		if (!isNaN(start) && !isNaN(finish) && start <finish) {
			var i;
			/*--- Check numbers from start to finish ---*/
			for (i = start; i <= finish; i++) {
				/*--- Print FizzBuzz for numbers divisible by both 3 and 5 ---*/
				if (i % 15 === 0) {
					$(".list").append("<li>FizzBuzz</li>");
				}
				/*--- Print Fizz for numbers divisible by 3 ---*/
				else if (i % 3 === 0) {
					$(".list").append("<li>Fizz</li>");
				}
				/*--- Print Buzz for numbers divisible by 5 ---*/
				else if (i % 5 === 0) {
					$(".list").append("<li>Buzz</li>");
				}
				/*--- Print actual integer for all other numbers ---*/
				else {
					$(".list").append("<li>" + i + "</li>");
				}
			}
		}
		/*--- Prevent invalid number input ---*/	
		else {
			alert("Please enter valid numbers! Start number must be lower than end number!");
		}
		/*--- Clear input fields after "Submit" ---*/
		$("input").val(" ");	
});
		

});