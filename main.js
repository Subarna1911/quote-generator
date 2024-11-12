// Select DOM elements
const para   = document.querySelector(".quote");  // Select the first element with class "para"
const author = document.querySelector(".person-name");  // Select the first element with class "author"
const btn    = document.getElementById("btn");  // Select the button element

// API URL for fetching the random quote
const url = "https://quotes15.p.rapidapi.com/quotes/random/";

// Function to fetch and display the quote
const getQuote = async () => {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'quotes15.p.rapidapi.com',
        'x-rapidapi-key': '1ab2a061c6msh28bab6680d0f6dbp1df1b9jsndb2f73fb9922',
      },
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch quote');
    }

    const item = await response.json();
    
    // Ensure that the para and author elements exist before updating them
    if (para && author) {
      para.innerText = `"${item.content}"`;  // Set the quote text
      author.innerText = `- ${item.originator.name}`;  // Set the author text
    }
  } catch (error) {
    console.error("Error fetching the quote:", error);  // Log any error that occurs
  }
};

// Run getQuote when the page loads
window.addEventListener("load", getQuote);

// Run getQuote when the button is clicked
btn.addEventListener("click", getQuote);
