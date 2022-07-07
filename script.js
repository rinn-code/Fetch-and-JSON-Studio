window.addEventListener("load", function () {

    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function (response) {
        return response.json();
    }).then(function (json) {
        const container = document.querySelector('#container');
        let astronauts = '';
        for (astronaut in json) {
            <div>
                <h3>Astronaut ${json[index].firstName} ${json[index].lastName}</h3>

            </div>
        }

        container.innerHTML.astronauts;

        <h3>${astronaut.firstName} ${astronaut.lastName}</h3>

        //console.log(response);
        // return response;

    });

});
