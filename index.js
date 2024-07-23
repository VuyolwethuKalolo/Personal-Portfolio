// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}
document.addEventListener('DOMContentLoaded', () => {
  const mouseElement = document.querySelector('.mouse');

  function startScrollingAnimation() {
      // Apply keyframes for scrolling effect
      mouseElement.style.animation = 'scrollUpDown 2s infinite';
  }

  function stopScrollingAnimation() {
      // Remove keyframes to stop scrolling effect
      mouseElement.style.animation = 'none';
  }

  // Start the scrolling animation when the page loads
  startScrollingAnimation();
  
  // Optional: Stop animation on user scroll
  window.addEventListener('scroll', stopScrollingAnimation);
});
// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})

/*-- Download Button --*/
document.getElementById('downloadBtn').addEventListener('click', function() {
  // Create a temporary link element
  var downloadLink = document.createElement('a');
  // Set the href to the path of the file
  downloadLink.href = "VUYOLWETHU KALOLO Resume.pdf";
  // Set the target to _blank to open in a new tab
  downloadLink.target = "_blank";
  // Append the link to the body
  document.body.appendChild(downloadLink);
  // Trigger a click event on the link
  downloadLink.click();
  // Remove the link from the body
  document.body.removeChild(downloadLink);
});

