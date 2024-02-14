const button = document.getElementById('zindexup');
const div = document.getElementById('letter');

button.addEventListener('click', () => {
 
  const currentZIndex = window.getComputedStyle(div).getPropertyValue('z-index');

 
  const currentZIndexNum = parseInt(currentZIndex, 10);

 
  const newZIndex = 98;


  div.style.zIndex = newZIndex;

 
  console.log(`Changed z-index from ${currentZIndexNum} to ${newZIndex}`);
});


