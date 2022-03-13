var searchBar=document.getElementById("search-input");
searchBar.addEventListener("focus",search);
var $input = $(".typeahead");
        $input.typeahead({
            source: [
                "Alus1",
                "Alus2",
                "Alus3",
            ],
            autoSelect: true,
        });

        function search() {       
        $input.change(function () {
            current = $input.typeahead("getActive");
            matches = [];
            console.log(matches);
            if (current) {
                if (current.name == $input.val()) {
                    matches.push(current.name);
                }
              }
          });
          const searchInput = document.getElementById('search-input');
          search = document.getElementById("search");
          search.addEventListener('click', () => {
            var inputValue = searchInput.value;
            inputValue = inputValue.toLowerCase();
            console.log(inputValue);
            window.location.href ="produktu.html#"+inputValue;
          });      
}
