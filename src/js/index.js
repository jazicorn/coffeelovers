const recipes = async (category) => {

    let headers = new Headers([
        ['Content-Type', 'application/json'],
        ['Accept', 'application/json']
    ]);

    let request = new Request(`https://api.sampleapis.com/coffee/${category}`, {
        method: 'GET',
        headers: headers
    });

    const response = await fetch(request);
    const json = await response.json();

    let recipes = ``;
    json.forEach((recipe) => {
        recipes += `
            <ul>
                <li>${recipe.id}</li>
                <li>${recipe.title}</li>
                <li>${recipe.description}</li>
                <li>${recipe.ingredients}</li>
                <li>${recipe.image}</li>
            </ul>
        `
    });

    document.querySelector("p").innerHTML = recipes;
}
