document.addEventListener( 'DOMContentLoaded', () => {

    let mainDeck = [
        {name: "fool", isReversed: "false", imgUrl: "https://openclipart.org/image/800px/309570"},
        {name: "magician", isReversed: "false", imgUrl: "https://openclipart.org/image/800px/309578"},
        {name: "high priestess", isReversed: "false", imgUrl: "https://openclipart.org/image/800px/309580"},
        {name: "empress", isReversed: "false", imgUrl: "https://openclipart.org/image/800px/309580"},
        {name: "emperor", isReversed: "false", imgUrl: "https://openclipart.org/image/800px/309569"},
        {name: "hierophant", isReversed: "false", imgUrl: "https://openclipart.org/image/800px/309574"},
        {name: "lovers", isReversed: "false", imgUrl: "https://openclipart.org/image/800px/309577"},
        {name: "chariot", isReversed: "false", imgUrl: "https://openclipart.org/image/800px/309566"},
        {name: "strength", isReversed: "false", imgUrl: "https://openclipart.org/image/800px/309582"},
        {name: "hermit", isReversed: "false", imgUrl: "https://openclipart.org/image/800px/309573"},
        {name: "wheel of fortune", isReversed: "false", imgUrl: "https://openclipart.org/image/800px/309571"},
        {name: "justice", isReversed: "false", imgUrl: "https://openclipart.org/image/800px/309576"},
        {name: "hanged man", isReversed: "false", imgUrl: "https://openclipart.org/image/800px/309572"},
        {name: "death", isReversed: "false", imgUrl: "https://openclipart.org/image/800px/309567"},
        {name: "temperance", isReversed: "false", imgUrl: "https://openclipart.org/image/800px/309584"},
        {name: "devil", isReversed: "false", imgUrl: "https://openclipart.org/image/800px/309568"},
        {name: "tower", isReversed: "false", imgUrl: "https://openclipart.org/image/800px/309585"},
        {name: "star", isReversed: "false", imgUrl: "https://openclipart.org/image/800px/309581"},
        {name: "moon", isReversed: "false", imgUrl: "https://openclipart.org/image/800px/309579"},
        {name: "sun", isReversed: "false", imgUrl: "https://openclipart.org/image/800px/309583"},
        {name: "judgment", isReversed: "false", imgUrl: "https://openclipart.org/image/800px/309575"},
        {name: "world", isReversed: "false", imgUrl: "https://openclipart.org/image/800px/309586"},
        {name: "ace of wands", isReversed: "false", imgUrl: "https://openclipart.org/image/800px/309587"},
        {name: "two of wands", isReversed: "false", imgUrl: "https://openclipart.org/image/800px/309600"},
        {name: "three of wands", isReversed: "false", imgUrl: "https://openclipart.org/image/800px/309599"},
        {name: "four of wands", isReversed: "false", imgUrl: "https://openclipart.org/image/800px/309590"},
        {name: "five of wands", isReversed: "false", imgUrl: "https://openclipart.org/image/800px/309589"},
        {name: "six of wands", isReversed: "false", imgUrl: "https://openclipart.org/image/800px/309597"},
        {name: "seven of wands", isReversed: "false", imgUrl: "https://openclipart.org/image/800px/309596"},
        {name: "eight of wands", isReversed: "false", imgUrl: "https://openclipart.org/image/800px/309588"},
        {name: "nine of wands", isReversed: "false", imgUrl: "https://openclipart.org/image/800px/309593"},
        {name: "ten of wands", isReversed: "false", imgUrl: "https://openclipart.org/image/800px/309598"},
        {name: "page of wands", isReversed: "false", imgUrl: "https://openclipart.org/image/800px/309594"},
        {name: "knight of wands", isReversed: "false", imgUrl: "https://openclipart.org/image/800px/309592"},
        {name: "queen of wands", isReversed: "false", imgUrl: "https://openclipart.org/image/800px/309595"},
        {name: "king of wands", isReversed: "false", imgUrl: "https://openclipart.org/image/800px/309591"},
        {name: "ace of cups", isReversed: "false", imgUrl: "https://openclipart.org/image/800px/309604"},
        {name: "two of cups", isReversed: "false", imgUrl: "https://openclipart.org/image/800px/309617"},
        {name: "three of cups", isReversed: "false", imgUrl: "https://openclipart.org/image/800px/309616"},
        {name: "four of cups", isReversed: "false", imgUrl: "https://openclipart.org/image/800px/309607"},
        {name: "five of cups", isReversed: "false", imgUrl: "https://openclipart.org/image/800px/309606"},
        {name: "six of cups", isReversed: "false", imgUrl: "https://openclipart.org/image/800px/309614"},
        {name: "seven of cups", isReversed: "false", imgUrl: "https://openclipart.org/image/800px/309613"},
        {name: "eight of cups", isReversed: "false", imgUrl: "https://openclipart.org/image/800px/309605"},
        {name: "nine of cups", isReversed: "false", imgUrl: "https://openclipart.org/image/800px/309610"},
        {name: "ten of cups", isReversed: "false", imgUrl: "https://openclipart.org/image/800px/309615"},
        {name: "page of cups", isReversed: "false", imgUrl: "https://openclipart.org/image/800px/309611"},
        {name: "knight of cups", isReversed: "false", imgUrl: "https://openclipart.org/image/800px/309609"},
        {name: "queen of cups", isReversed: "false", imgUrl: "https://openclipart.org/image/800px/309612"},
        {name: "king of cups", isReversed: "false", imgUrl: "https://openclipart.org/image/800px/309608"},
        {name: "ace of swords", isReversed: "false", imgUrl: "https://openclipart.org/image/800px/309632"},
        {name: "two of swords", isReversed: "false", imgUrl: "https://openclipart.org/image/800px/309645"},
        {name: "three of swords", isReversed: "false", imgUrl: "https://openclipart.org/image/800px/309644"},
        {name: "four of swords", isReversed: "false", imgUrl: "https://openclipart.org/image/800px/309635"},
        {name: "five of swords", isReversed: "false", imgUrl: "https://openclipart.org/image/800px/309634"},
        {name: "six of swords", isReversed: "false", imgUrl: "https://openclipart.org/image/800px/309642"},
        {name: "seven of swords", isReversed: "false", imgUrl: "https://openclipart.org/image/800px/309641"},
        {name: "eight of swords", isReversed: "false", imgUrl: "https://openclipart.org/image/800px/309633"},
        {name: "nine of swords", isReversed: "false", imgUrl: "https://openclipart.org/image/800px/309638"},
        {name: "ten of swords", isReversed: "false", imgUrl: "https://openclipart.org/image/800px/309643"},
        {name: "page of swords", isReversed: "false", imgUrl: "https://openclipart.org/image/800px/309639"},
        {name: "knight of swords", isReversed: "false", imgUrl: "https://openclipart.org/image/800px/309637"},
        {name: "queen of swords", isReversed: "false", imgUrl: "https://openclipart.org/image/800px/309640"},
        {name: "king of swords", isReversed: "false", imgUrl: "https://openclipart.org/image/800px/309636"},
        {name: "ace of pentacles", isReversed: "false", imgUrl: "https://openclipart.org/image/800px/309618"},
        {name: "two of pentacles", isReversed: "false", imgUrl: "https://openclipart.org/image/800px/309631"},
        {name: "three of pentacles", isReversed: "false", imgUrl: "https://openclipart.org/image/800px/309630"},
        {name: "four of pentacles", isReversed: "false", imgUrl: "https://openclipart.org/image/800px/309621"},
        {name: "five of pentacles", isReversed: "false", imgUrl: "https://openclipart.org/image/800px/309620"},
        {name: "six of pentacles", isReversed: "false", imgUrl: "https://openclipart.org/image/800px/309628"},
        {name: "seven of pentacles", isReversed: "false", imgUrl: "https://openclipart.org/image/800px/309627"},
        {name: "eight of pentacles", isReversed: "false", imgUrl: "https://openclipart.org/image/800px/309619"},
        {name: "nine of pentacles", isReversed: "false", imgUrl: "https://openclipart.org/image/800px/309624"},
        {name: "ten of pentacles", isReversed: "false", imgUrl: "https://openclipart.org/image/800px/309629"},
        {name: "page of pentacles", isReversed: "false", imgUrl: "https://openclipart.org/image/800px/309625"},
        {name: "knight of pentacles", isReversed: "false", imgUrl: "https://openclipart.org/image/800px/309623"},
        {name: "queen of pentacles", isReversed: "false", imgUrl: "https://openclipart.org/image/800px/309626"},
        {name: "king of pentacles", isReversed: "false", imgUrl: "https://openclipart.org/image/800px/309622"}
    ];

    const leftDiv = document.getElementById("left");
    const oneDiv = document.getElementById("one");
    const twoDiv = document.getElementById("two");
    const threeDiv = document.getElementById("three");
    const shuffleButton = document.getElementById("shuffle");
    const getReadingButton = document.getElementById("getReading");
    const responseBox = document.getElementById("response-para");
    const readingLoader = document.getElementById("loadingReading");

    let cardsPulled = 0;
    let shuffles = 0;

    function generateCards(deck) {
        while(leftDiv.firstChild) {
            leftDiv.removeChild(leftDiv.firstChild);
        }
        deck.forEach((card) => {
            const cardDiv = document.createElement("div");
            cardDiv.classList.add("card");
            cardDiv.innerHTML = card.name;
            leftDiv.appendChild(cardDiv);
            cardDiv.addEventListener("click", (event) => {
                moveCard(event);
            });
        });
    }
 
    function removeCardFromMainDeck(cardName) {
        const newDeck = mainDeck.filter(object => {
            return object.name !== cardName;
        });
        mainDeck = newDeck;
    }

    function findImgUrl(cardName){
        let Url = "";
        mainDeck.forEach((cardObject) => {
            if(cardObject.name === cardName) {
                Url = cardObject.imgUrl; 
            }
        })
        console.log(Url);
        return Url;
    }

    function moveCard(event) {   
        if (cardsPulled <= 2) {
            const cardDiv = event.target;
            if(leftDiv.contains(cardDiv)) {
                leftDiv.removeChild(cardDiv);
                if(!oneDiv.hasChildNodes()) {
                    oneDiv.classList.remove("noDisplay");
                    oneDiv.appendChild(cardDiv);
                    cardDiv.classList.add("revealed");
                    const cardImage = document.createElement("img");
                    cardImage.src = findImgUrl(cardDiv.innerHTML);
                    oneDiv.appendChild(cardImage);
                } else if(!twoDiv.hasChildNodes()) {
                    twoDiv.classList.remove("noDisplay");
                    twoDiv.appendChild(cardDiv);
                    cardDiv.classList.add("revealed");
                    const cardImage = document.createElement("img");
                    cardImage.src = findImgUrl(cardDiv.innerHTML);
                    twoDiv.appendChild(cardImage);
                } else if(!threeDiv.hasChildNodes()) {
                    threeDiv.classList.remove("noDisplay");
                    threeDiv.appendChild(cardDiv);
                    cardDiv.classList.add("revealed");
                    const cardImage = document.createElement("img");
                    cardImage.src = findImgUrl(cardDiv.innerHTML);
                    threeDiv.appendChild(cardImage);

                    leftDiv.classList.add("noDisplay");
                    shuffleButton.classList.add("noDisplay");
                }
            }
            const cardName = cardDiv.innerHTML;
            removeCardFromMainDeck(cardName);
            cardsPulled += 1;
        }
    }

    function displayReadingLoading() {
        readingLoader.classList.add("display");
        setTimeout(() => {
            readingLoader.classList.remove("display");
        }, 30000);
    }

    function displayShuffleLoading() {
        leftDiv.classList.add("opaqueDisplay");
        document.getElementById("loadingShuffle").classList.add("display");
        setTimeout(() => {
            document.getElementById("loadingShuffle").classList.remove("display");
            leftDiv.classList.remove("opaqueDisplay");
        }, 2000);
    }

    function hideLoading() {
        readingLoader.classList.remove("display");
    }

    function shuffleDeck() {

        for (let i = mainDeck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [mainDeck[i], mainDeck[j]] = [mainDeck[j], mainDeck[i]];
        }
        mainDeck.forEach((card) => {
            reversal = (Math.floor(Math.random() * 2) == 0);
            if(reversal) {
                card.isReversed = "true";
            } else {
                card.isReversed = "false";
            }
        });
        
        leftDiv.innerHTML = "";
        generateCards(mainDeck);
        console.log(mainDeck);

        if(shuffles > 0) {
            displayShuffleLoading();
        }

        shuffles += 1;
        
    }
    
    async function sendUserRequest(message) {

        document.getElementById("userInput").classList.add("noDisplay");
        displayReadingLoading();

        // "Authorization": `Bearer ${apiKey}`,
        // const apiKey = ${TAROT_3};
        const endPoint = `https://api.openai.com/v1/completions`;

        const response = await fetch(endPoint, {
            method: "POST",
            headers: {
                "Content-Type": `application/json`,
                "Authorization": `Bearer ${TAROT_3}`,
            },
            body: JSON.stringify({
                model: "text-davinci-003",
                prompt: message,
                temperature: 0.7,
                max_tokens: 2000,
            })
        });

        const data = await response.json();

        console.log(data.choices[0].text);

        hideLoading();
        document.getElementById("response").classList.add("display");

        return responseBox.innerHTML = data.choices[0].text;
    }
 
    function composeMessage(){

        const cardOne = document.querySelector('#one div').innerText;
        const cardTwo = document.querySelector('#two div').innerText;
        const cardThree = document.querySelector('#three div').innerText;
        const userQuery = document.querySelector('#query').value;

        let message = "You will act like a master tarot reader and only respond with things a real tarot reader would say. I will list 3 cards that I've pulled from a shuffled deck " +
                      "and placed in front of me from left to right. I will also provide you with a query, descibing the situation " +
                      "or question for which you will provide insight. You will use all available sources to provide clear and direct advice, " +
                      "paying special attention to how the card meanings might change based on their relative positions. " +
                      
                      "The cards I pulled are as follows: " + `${cardOne}` + ", " + `${cardTwo}` + ", " + `${cardThree}` + ". " +

                      "My query/situation is as follows: " + `${userQuery}`;

        sendUserRequest(message);
    }

    getReadingButton.addEventListener('click', composeMessage);

    shuffleButton.addEventListener('click', shuffleDeck);

    shuffleDeck(); 
      
}); 