//your code here
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

// Remove any articles from the band names.
const bandNamesWithoutArticles = bandNames.map(bandName => {
  if (bandName.startsWith("The ")) {
    return bandName.slice(4);
  } else if (bandName.startsWith("A ")) {
    return bandName.slice(2);
  } else if (bandName.startsWith("An ")) {
    return bandName.slice(3);
  } else {
    return bandName;
  }
});

// Sort the band names in lexicographical order.
bandNamesWithoutArticles.sort();

// Create an `ul` element with the id `band`.
const bandList = document.createElement("ul");
bandList.setAttribute("id", "band");

// Add the band names to the `ul` element.
bandNamesWithoutArticles.forEach(bandName => {
  const liElement = document.createElement("li");
  liElement.textContent = bandName;
  bandList.appendChild(liElement);
});

// Append the `ul` element to the document body.
document.body.appendChild(bandList);

