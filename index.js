///SELECTOR //////

const openButton = document.querySelector ('.open') ;

const closeButton = document.querySelector ('.close') ;

const navPage = document.querySelector ('.nav-page') ;

const headArea = document.querySelector ('.head') ;

const heading = document.querySelector ('.heading') ;

const headingTxt = document.querySelector ('.heading-txt') ;

const links = document.querySelectorAll ('.links') ;

const goUp = document.querySelector ('.up-down') ;

////event///

openButton.addEventListener ('click' , openFunction) ;

closeButton.addEventListener ('click' , closeFunction) ;

links.forEach((link)=>{
    link.addEventListener ('click' , linkFunction)
})

goUp.addEventListener ('click' , topFunction)

/////functions ///////

function openFunction() {
    openButton.style.display = 'none'

    closeButton.style.display = 'block'

    navPage.style.display = 'block'

    headArea.style.backgroundColor = 'hsl(233, 8%, 62%)'

    heading.style.backgroundColor = 'hsl(233, 8%, 62%)'

    headingTxt.style.color = '#fff' 

    headingTxt.style.marginTop = '0'
}


function closeFunction() {
    openButton.style.display = 'block'

    closeButton.style.display = 'none'

    navPage.style.display = 'none'

    headArea.style.backgroundColor = 'hsl(0, 0%, 98%)'

    heading.style.backgroundColor = 'hsl(0, 0%, 98%)'

    headingTxt.style.color = 'hsl(233, 8%, 62%)'
}



function linkFunction() {

    openButton.style.display = 'block'

    closeButton.style.display = 'none'

    navPage.style.display = 'none'

    headArea.style.backgroundColor = 'hsl(0, 0%, 98%)'

    heading.style.backgroundColor = 'hsl(0, 0%, 98%)'

    headingTxt.style.color = 'hsl(233, 8%, 62%)'
}


window.onscroll = function() {
    scrollFunction()
}

function scrollFunction() {
  if ( document.body.scrollTop > 40  ||  document.documentElement.scrollTop > 40) {
    goUp.style.display = 'block'
  } else {
    goUp.style.display = 'none'
  }
    
}

function topFunction () {
    document.body.scrollTop = 0 ;
    document.documentElement.scrollTop = 0 ;
}