$(function(){

    $( ".anchor-test" ).on("click", function(e){
        var mytest = $('#myh1');
        var endpoint = $(this).data("endpoint");
        var verb = $(this).data("verb");

        $.ajax({
            url: endpoint,
            type: verb,
        })
        .fail(function(jqXHR, textStatus) {
            var payload = jqXHR.responseJSON;
            console.log(payload);
        })
        .done(function(payload) {
            var value = payload.mykey;
            console.log(value);
            mytest.append(value);
        });
    });

});