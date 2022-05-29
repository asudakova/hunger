const header = document.querySelector('.header');
window.onscroll = () => {
   if (window.pageYOffset > 0) {
      header.classList.add('header_active');
   } else {
      header.classList.remove('header_active');
   }
};

const anchors = document.querySelectorAll('.anchors-scroll');
const headerHeight = header.clientHeight;
const windowHeight = document.documentElement.clientHeight;
anchors.forEach(anchor => {
   anchor.addEventListener('click', function(e){
      e.preventDefault();
      const block = this.getAttribute('href');
      const blockHeight = document.querySelector(block).clientHeight;
      console.log(blockHeight)
      let target;
      if (blockHeight > (windowHeight)) {
         target = document.querySelector(block).offsetTop - headerHeight;
      } else {
         target = document.querySelector(block).offsetTop - headerHeight- 0.5*(windowHeight - headerHeight - blockHeight);
      }
      window.scrollTo({
         top: target,
         behavior: 'smooth'
      });
      if (burgerIcon.classList.contains('active')) {
         menu.classList.remove('active');
         burgerIcon.classList.remove('active');
         document.body.classList.remove('lock');
      }
   });
});

document.querySelector('.down-scroll').addEventListener('click', function(e) {
   e.preventDefault(); 
   const block = this.getAttribute('href');
   const target = document.querySelector(block).offsetTop - headerHeight;
   window.scrollTo({
      top: target,
      behavior: 'smooth'
   });
});

document.querySelector('.header__logo').addEventListener('click', function(e){
   e.preventDefault();
   document.querySelector(this.getAttribute('href')).scrollIntoView({
      block: 'start',
      behavior: 'smooth'
   });
});

document.querySelector('.buttons__button-booking').addEventListener('click', function(e) {
   e.preventDefault();
   const block = this.getAttribute('href');
   const target = document.querySelector(block).offsetTop - headerHeight;
   window.scrollTo({
      top: target,
      behavior: 'smooth'
   });
});

document.querySelector('.buttons__button-exploring').addEventListener('click', function(e) {
   e.preventDefault();
   const block = this.getAttribute('href');
   const target = document.querySelector(block).offsetTop - headerHeight;
   window.scrollTo({
      top: target,
      behavior: 'smooth'
   });
});

const burgerIcon = document.querySelector('.nav-menu__icon');
const menu = document.querySelector('.nav-menu__body');
burgerIcon.addEventListener('click', function(e) {
   e.preventDefault();
   burgerIcon.classList.toggle('active');
   menu.classList.toggle('active');
   document.body.classList.toggle('lock');
});

const dishCategories = document.querySelectorAll('.categories__link');
dishCategories.forEach(category => {
   category.addEventListener('click', function(e) {
      e.preventDefault();
      let categoryId = category.id;
      let allDishes = document.querySelectorAll('.menu__dishes > div');

      if (category.classList.contains('category_active')) {
         allDishes.forEach(dish => dish.classList.remove('dish_inactive'));
         dishCategories.forEach(category => category.classList.remove('category_active'));
      } else {
         document.querySelectorAll('.dish_inactive').forEach(inactive => inactive.classList.remove('dish_inactive'));
         document.querySelectorAll('.category_active').forEach(inactive => inactive.classList.remove('category_active'));
         allDishes.forEach(dish => {
            if (dish.id != categoryId) {
               dish.classList.toggle('dish_inactive');
            }
         })
         dishCategories.forEach(category => {
            if (category.id == categoryId) {
               category.classList.toggle('category_active');
            }
         })
      }
   })
});


