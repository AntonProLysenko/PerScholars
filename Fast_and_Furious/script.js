let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];



//                                    Part 1

const mainTitle = document.getElementById('main-title')
mainTitle.textContent = "I'm DOM! I don't have friends, I have Family!"

//                                    Part 2

const body = document.querySelector("body")
body.style.backgroundColor = "rgb(131 59 36)"



//                                    Part 3

const favoriteThings = document.querySelector('#favorite-things').lastElementChild.remove()


//                                    Part 4
const specTitle= document.querySelector('.special-title')
specTitle.style.fontSize = '2rem'



//                                    Part 5
const domRaces = document.querySelector('#past-races')
const childs = domRaces.querySelectorAll('li')

childs.forEach((elm)=>{
  if(elm.textContent === "Chicago"){
    elm.remove()
  }
})






//                                    Part 6
const newLi = document.createElement('li')
newLi.textContent="Cincinnati"
domRaces.append(newLi)







//                                    Part 7

const blogPost = document.createElement("div")
const main = document.querySelector('.main')

blogPost.classList.add("blog-post")
blogPost.innerHTML=`<h2>${newLi.textContent}</h2> <p>I've never been in Cincinnati</p>`


//I think by adding these two below lanes of code  our page will look more to our design code
blogPost.classList.add("purple")              
blogPost.innerHTML=`<h1>${newLi.textContent}</h1> <p>I've never been in Cincinnati</p>`

main.append(blogPost)



//                                    Part 8



const randomQuote = function() {
  document.querySelector('#quote-of-the-day').innerText = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
};


const quoteGenerator = document.getElementById('quote-title')

quoteGenerator.addEventListener("click", randomQuote)






//                                    Part 9

const posts = document.querySelectorAll('.blog-post')


console.log(posts);




//                                    Solution recomended by instructions

// function setRed(evt){
//     evt.target.classList.toggle('red')
// }


// function setPurple(evt){
//   evt.target.classList.toggle('purple')
// }



// posts.forEach((post)=>{
//    post.addEventListener('mouseout', setPurple)
//    post.addEventListener('mouseenter', setRed)

//   //I think with adding 2 bottom lines our boxes change color more correctly

//   post.addEventListener('mouseout', setRed)
//   post.addEventListener('mouseenter', setPurple)
// })




//                                                                            My solution 
//(I think in this case out event looks cleaner)
// and doesn't add a class to child elements

function setRed(evt){
  evt.target.classList.replace('purple', 'red')
}

function setPurple(evt){
evt.target.classList.replace('red', 'purple')
}




posts.forEach((post)=>{
 post.addEventListener('mouseout', setPurple)
 post.addEventListener('mouseenter', setRed)
})


