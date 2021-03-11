const changeImage = () => {
  const commandImages = document.querySelectorAll('.command__photo');
  commandImages.forEach(item => {item.addEventListener('mouseover', (e) => { imageHandler(e) }) })
  commandImages.forEach(item => {item.addEventListener('mouseout', (e) => { imageHandler(e) }) })
  
  const imageHandler = (e) => {
    const dataImg = e.target.src;
    e.target.src = e.target.dataset.img;
    e.target.dataset.img = dataImg;
  }
};

export default changeImage;