(function () {
    $.post("http://shenkar.html5-book.co.il/2018-2019/dcs/dev_26/service_calculator/Calculator_Service.php",
    {func:"avg",num1:10,num2:15,num3:20},
    function( data ) {
        $(".resultPost").append(data.retVal);
         console.log( "Return data: " + data.retVal);
    });
})();

(function () {
    var dataObj = {'func':'sum','num1':1,'num2':2,'num3':0};
    $.ajax({
        url: 'http://shenkar.html5-book.co.il/2018-2019/dcs/dev_26/service_calculator/Calculator_Service.php',
        data:dataObj,
        type: 'PUT',
        success: function(data) {
            $(".resultPut").append(data.retVal);
            console.log("Return data: " + data.retVal);
        }
    });
})();

$.get("http://shenkar.html5-book.co.il/2018-2019/dcs/dev_26/service_calculator/Calculator_Service.php?func=mult&num1=10&num2=5&num3=2",
function(data) {
        $(".resultGet").append(data.retVal);
        console.log( "Return data: " + data.retVal);
});
