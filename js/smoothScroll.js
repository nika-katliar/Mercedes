const linksHead = document.querySelectorAll('.menu-list__link')
const mainScroll = document.querySelector('.main__scroll')
const newArray = [...linksHead, mainScroll]

newArray.forEach(link =>{
  link.addEventListener('click', (Event) =>{
    Event.preventDefault()

    const ID = Event.target.getAttribute('href').substr(1)

    document.getElementById(ID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
})
