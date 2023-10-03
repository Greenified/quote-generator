// Create an array of modern quotes and old quotes
const modernQuotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "In the end, we will remember not the words of our enemies, but the silence of our friends. - Martin Luther King Jr.",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. - Albert Einstein",
    "The only thing necessary for the triumph of evil is for good men to do nothing. - Edmund Burke",
    "Life is really simple, but we insist on making it complicated. - Confucius",
    "You miss 100% of the shots you don't take. - Wayne Gretzky",
    "To live is the rarest thing in the world. Most people exist, that is all. - Oscar Wilde",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The only true wisdom is in knowing you know nothing. - Socrates",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "I have not failed. I've just found 10,000 ways that won't work. - Thomas A. Edison",
    "The best way to predict the future is to create it. - Peter Drucker",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
    "I can't change the direction of the wind, but I can adjust my sails to always reach my destination. - Jimmy Dean",
    "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it. - Jordan Belfort",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
    "The best revenge is massive success. - Frank Sinatra",
    "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "I find that the harder I work, the more luck I seem to have. - Thomas Jefferson",
    "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time. - Thomas A. Edison",
    "Success is walking from failure to failure with no loss of enthusiasm. - Winston S. Churchill",
];

const oldQuotes = [
    "Know thyself. - Socrates",
    "The only true wisdom is in knowing you know nothing. - Socrates",
    "Virtue is nothing else than right reason. - Seneca",
    "The key is to keep company only with people who uplift you, whose presence calls forth your best. - Epictetus",
    "Luck is what happens when preparation meets opportunity. - Seneca",
    "The unexamined life is not worth living. - Socrates",
    "He who is not a good servant will not be a good master. - Plato",
    "True happiness is... to enjoy the present, without anxious dependence upon the future. - Seneca",
    "Time heals what reason cannot. - Seneca",
    "Life is long, if you know how to use it. - Seneca",
    "It is not because things are difficult that we do not dare; it is because we do not dare that they are difficult. - Seneca",
    "He who is brave is free. - Seneca",
    "First say to yourself what you would be; and then do what you have to do. - Epictetus",
    "The greatest wealth is to live content with little. - Plato",
    "Waste no more time arguing about what a good man should be. Be one. - Marcus Aurelius",
    "The key is to keep company only with people who uplift you, whose presence calls forth your best. - Epictetus",
    "The only wealth which you will keep forever is the wealth you have given away. - Marcus Aurelius",
    "The soul becomes dyed with the color of its thoughts. - Marcus Aurelius",
    "The happiness of your life depends upon the quality of your thoughts. - Marcus Aurelius",
    "Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth. - Marcus Aurelius",
    "Very little is needed to make a happy life; it is all within yourself, in your way of thinking. - Marcus Aurelius",
    "Circumstances don't make the man, they only reveal him to himself. - Epictetus",
    "The greatest blessings of mankind are within us and within our reach. - Seneca",
    "There is no easy way from the earth to the stars. - Seneca",
    "The whole future lies in uncertainty: live immediately. - Seneca",
    "While we wait for life, life passes. - Seneca",
    "Life is long, if you know how to use it. - Seneca",
    "It is not because things are difficult that we do not dare; it is because we do not dare that they are difficult. - Seneca",
    "He who is brave is free. - Seneca",
    "First say to yourself what you would be; and then do what you have to do. - Epictetus",
];

// Function to generate a random quote
function generateRandomQuote(quoteArray) {
    const randomIndex = Math.floor(Math.random() * quoteArray.length);
    return quoteArray[randomIndex];
}

document.getElementById("generateBtn").addEventListener("click", function () {
    // Get the selected option
    const selectedOption = document.getElementById("quoteType").value;

    // Generate a random quote based on the selected option
    const quoteArray = selectedOption === "modernQuotes" ? modernQuotes : oldQuotes;
    const quote = generateRandomQuote(quoteArray);
    document.getElementById("quoteText").textContent = quote;
});

// Initialize with Modern Quotes selected
document.getElementById("quoteType").value = "modernQuotes";
