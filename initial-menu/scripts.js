function toggleMenu(el) {
  if (el.classList.contains('open')) {
    return el.classList.remove('open');
  }

  document.getElementById('menu__search-input').focus();
  return el.classList.add('open');
}

(() => {
  const menuButton = document.getElementById('menu-button');
  const menu = document.getElementById('menu');
  
  menuButton.addEventListener('click', () => toggleMenu(menu));

  document.addEventListener('keyup', (event)=> {
    if(event.ctrlKey && event.key === 'Meta') {
      menuButton.click();
    }
  });
})()