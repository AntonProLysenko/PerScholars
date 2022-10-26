// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];

//                                          Task 1
//1.0

const mainEl = document.querySelector("main")

console.log(mainEl);
mainEl.style.backgroundColor = "var(--main-bg)"
mainEl.innerHTML = "<h1>SEI Rocks!</h1>"
mainEl.classList.add(`flex-ctr`)



//                                      Task2

//2.0
const topMenuEl = document.querySelector(`#top-menu`)

topMenuEl.style.height = `100%`

topMenuEl.style.backgroundColor = `var(--top-menu-bg)`

topMenuEl.classList.add(`flex-around`)

//                                        Task 3

//3.1  
let g = 0
for (let link of menuLinks){

link = document.createElement(`a`)
link.setAttribute(`href`, menuLinks[g].href)
link.textContent = menuLinks[g].text

topMenuEl.append(link)


g++

}

// console.log(menuLinks)



// console.log(topMenuEl)

// console.log(mainEl)


//                                      =================
//                                           PART 2
//                                      =================



//                                    Task4
//4.0

const subMenuEl = document.querySelector("#sub-menu")

subMenuEl.style.height="100%";

subMenuEl.style.backgroundColor = "var(--sub-menu-bg)" ;

subMenuEl.classList.add("flex-around")

subMenuEl.style.position = "absolute" ;
subMenuEl.style.top = "0" ;


//                                    Task5

//5.1
const topMenuLinks = topMenuEl.querySelectorAll("a")

// console.log(topMenuLinks);
let showingSubMenu = true;


//5.2
topMenuEl.addEventListener("click", (evt)=>{
  
    evt.preventDefault()
   
   if(evt.target.tagName !== 'A'){
       return
   }else{
   //console.log(evt);
   }

   //5.3
   if (evt.target.classList.contains('active')){
    evt.classList.remove('active')
    showingSubMenu=false
    subMenuEl.style.top = "0"
    return
    }

    //5.4
    topMenuLinks.forEach((arg) => {
      arg.classList.remove('active');
      
    })

    
    //5.5
    evt.target.classList.add('active')


    //5.6
    let linkObj
    for (let i=0;i<menuLinks.length; i++){
      if(evt.target.textContent === menuLinks[i].text){//here we are checking if we clicked on the element that are maching with our objects from the array
         linkObj= menuLinks[i]      //grabing the object (from the array) on which we clicked
        showingSubMenu = menuLinks[i].hasOwnProperty('subLinks')//here we can simply put true(made it like this to be more fancy) setting it to true here (we'll use it in 5.7)
      } 
      }
      


    //5.7
    if (showingSubMenu){//if showingSubMenu === true(for false we can use !showingSubMenu) 
         buildSubMenu(evt.target)
        subMenuEl.style.top='100%'


     }else{
      subMenuEl.style.top=0
   }

   //5.8
   console.log(linkObj);
    function buildSubMenu(){
          subMenuEl.innerHTML=""
            linkObj.subLinks.forEach(function(clicked){
             let link = document.createElement('a')
             link.setAttribute('href', clicked.href)
             link.textContent = clicked.text
             subMenuEl.append(link)
      })
     }

      //                                    Task6

  //6.0
  subMenuEl.addEventListener('click', (subEvt)=>{
    subEvt.preventDefault()
    if(subEvt.target.tagName !== 'A'){
      return
    }else{
    
      console.log(subEvt);
    }

    //6.1
    showingSubMenu=false;
    subMenuEl.style.top=0

    //6.2
    topMenuLinks.forEach((arg) => {
      arg.classList.remove('active');  
    })

    //6.3
    mainEl.innerHTML = `<h1>${subEvt.target.text}</h1>`



  })
      if(linkObj.text === menuLinks[0].text){
     mainEl.innerHTML = `<h1>${evt.target.text}</h1>`
      }else{
        mainEl.innerHTML = '<h1>SEI Rocks!</h1>'
      }
  
 })




