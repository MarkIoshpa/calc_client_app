$( "#postBtn" ).click(function() {
    $.post("http://shenkar.html5-book.co.il/2018-2019/dcs/dev_26/service_calculator/Calculator_Service.php",
    {func:$("#func").val(),num1:$("#num1").val(),num2:$("#num2").val(),num3:$("#num3").val()},
    function( data ) {
        $(".result").text("Result (Post): "+data.retVal);
         console.log( "Return data: " + data.retVal);
    });
});

$( "#putBtn" ).click(function() {
    var dataObj = {'func':$("#func").val(),'num1':$("#num1").val(),'num2':$("#num2").val(),'num3':$("#num3").val()};
    $.ajax({
        url: 'http://shenkar.html5-book.co.il/2018-2019/dcs/dev_26/service_calculator/Calculator_Service.php',
        data:dataObj,
        type: 'PUT',
        success: function(data) {
            $(".result").text("Result (Put): "+data.retVal);
            console.log("Return data: " + data.retVal);
        }
    });
});

$( "#getBtn" ).click(function() {
    $.get("http://shenkar.html5-book.co.il/2018-2019/dcs/dev_26/service_calculator/Calculator_Service.php?func="+$("#func").val()+"&num1="+$("#num1").val()+"&num2="+$("#num2").val()+"&num3="+$("#num3").val()+"",
    function(data) {
            $(".result").text("Result (Get): "+data.retVal);
            console.log( "Return data: " + data.retVal);
    });
});