$(document).ready(function () {
    var moreNumbers = ["(867) 777-6813", "312-971-2222", "312-436-3333"];

    var clicked = false;
    console.log('var clicked: ' + clicked);


    // What to Do When Submit is Clicked
    $('#submit').on('click', function (event) {
        event.preventDefault();
        console.log('var clicked: ' + clicked);

        // Looping through the array of more numbers
        for (var i = 0; i < moreNumbers.length; i++) {

            // Then dynamicaly generating buttons for each movie in the array.
            var element = $('<td>');

            // Providing the button's text with a value of the movie at index i
            element.html(moreNumbers[i]);
            console.log(moreNumbers);
            $('#numbers-appear-here').append(element);
        }
        _st.render();
        var clicked = true;
    });
});