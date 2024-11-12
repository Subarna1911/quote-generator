
const para   = document.querySelector(".quote");  
const author = document.querySelector(".person-name"); 
const btn    = document.getElementById("btn");  

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
    

    if (para && author) {
      para.innerText = `"${item.content}"`; 
      author.innerText = `- ${item.originator.name}`;  
    }
  } catch (error) {
    console.error("Error fetching the quote:", error);
  }
};

window.addEventListener("load", getQuote);


btn.addEventListener("click", getQuote);
