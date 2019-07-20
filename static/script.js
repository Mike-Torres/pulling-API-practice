function displayCharacter() {
    fetch('/api/character')
        .then((resp) => resp.json()) // Transform the data into json
        .then(function (data) {
            console.log(data);

            const unorderedList = document.getElementById('skywalker-list');

            const properties = Object.keys(data);

            properties.forEach(function (property) {
                const listItemEl = document.createElement('LI');
                const textNode = document.createTextNode(property + ': ' + data[property])
                listItemEl.appendChild(textNode);
                unorderedList.appendChild(listItemEl);

                console.log(displayCharacter)
            })
        });
}