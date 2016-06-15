function addMessage(){
    var message = {
          author: $("#author").val(),
          text: $("#text").val()
    };

    $.post(
        "/add-message",
        JSON.stringify(message),    /* explicitly convert the object to JSON */
        function(data) {            /* Call back function required for a post route in J.S.   */
            $("#text").val("");
            $("#author").val("");
        }

    );
}

function getMessages(){
    $.get(
        "/get-messages",
        function(data){         /* Retrieves json information from the server */
            $("#messages").empty();   /* clears out the messages div so that the information doesn't multiply on every request */
            var messages = JSON.parse(data);        /* parse the info into a variable */
            for(var i in messages){             /* create a loop to grab author and text out */
                var author = messages[i].author;
                var text = messages[i].text;

                var elem = $("<div>")           /* create a div dynamically for setting test and displaying shit */
                elem.text(author + ": " + text) /* within the div tag we are adding the information grabbed above */
                $("#messages").append(elem);    /* appending the div to Messages which we created in the HTML file */
            }
        }
    )
}
setInterval(getMessages, 100);

getMessages();