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
                <li><span>Name:</span> ${recipe.title}</li>
                <li><span>Description:</span> ${recipe.description}</li>
                <li><span>Ingredients:</span> ${recipe.ingredients}</li>
                <li><img src="${recipe.image}" alt="${recipe.title}" style="width:184px; height:184px;"></li>
            </ul>
        `
    });

    document.querySelector("p").innerHTML = recipes;
}
