function addMessage(){
    var message = {
          author: $("#author").val(),
          text: $("#text").val()
    };

    $.post(
        "/add-message",
        JSON.stringify(message),    /* explicitly convert the object to JSON */
        function(data) {            /* Call back function required for a post route in J.S.   */
            alert("success");
        }

    );
}