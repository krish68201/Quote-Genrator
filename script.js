const textcontainer = document.getElementById('quote-container');
const quotetext = document.getElementById('quotetext');
const quoteauthor = document.getElementById('quoteauthor');
const twitter = document.getElementById('twitter');
const newquote = document.getElementById('newquote');
const loader= document.getElementById('loader');


let apiQuotes = [];

function newQuote() {
    loading();
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
    if(!quoteauthor){
        quoteauthor.textContent="Unknown";
    }else{
        quoteauthor.textContent=quote.author
    }
    if(quotetext.length>50){
       quotetext.classList.add('long-quote')
    }else{
        quotetext.classList.remove('long-quote')
    }
   
    quotetext.textContent=quote.text
    complete();
}
async function getquotes() {
    loading();
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();

    }
    catch (error) {

    }
}
function tweetCode(){
    const twitterurl=`https://twitter.com/intent/tweet?text=${quotetext.textContent}-${quoteauthor.textContent}`;
    window.open(twitterurl,"_blank");
}
function loading(){
    loader.hidden=false;
    textcontainer.hidden=true;
    }
    function complete(){
        loader.hidden=true;
        textcontainer.hidden=false;
        }
newquote.addEventListener('click',getquotes);
twitter.addEventListener('click',tweetCode);
getquotes();

