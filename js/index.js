var quote=[
    {'quote':"You miss 100% of the shots you don't take.",
    'Author':"--Wayne Gretzy"
  },
    {'quote':"It's not what happens to you, but how you react to it that matters.",
    'Author':"--Epictetus"
  },
    {'quote':"Do not take life too seriously. You will not get out alive.",
    'Author':"--Elbert Hubbard"
  },
    {'quote':"Resentment is like drinking poison and waiting for your enemies to die.",
    'Author':"--Nelson Mandela"
  },
    {'quote':"The best revenge is massive success.",
    'Author':"--Frank Sinatra"
  },

]
function getQuotes(){

    var num = Math.floor(Math.random()*quote.length)
    console.log("num")

    document.getElementById("quote").innerHTML=quote[num].quote;
    document.getElementById("auther").innerHTML=quote[num].Author;

}
