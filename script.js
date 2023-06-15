//your code here
function sortBandNames(bandNames) {
  // Define the list of articles to be excluded
  const articles = ['a', 'an', 'the'];

  // Remove articles from band names and store in a new array
  const sanitizedBandNames = bandNames.map((name) => {
    // Split the name into individual words
    const words = name.split(' ');

    // Filter out articles from the words array
    const filteredWords = words.filter((word) => !articles.includes(word.toLowerCase()));

    // Join the filtered words to form the sanitized name
    const sanitizedName = filteredWords.join(' ');

    return sanitizedName;
  });

  // Sort the sanitized band names in lexicographic order
  const sortedBandNames = sanitizedBandNames.sort((a, b) => a.localeCompare(b));

  // Generate the HTML for displaying the sorted band names
  const html = sortedBandNames.map((name) => `<li>${name}</li>`).join('');

  // Return the HTML string
  return html;
}

// Example usage
const bandNames = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
const sortedBandsHTML = sortBandNames(bandNames);
const ulElement = `<ul id="band">${sortedBandsHTML}</ul>`;
console.log(ulElement);

