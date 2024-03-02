const allButtonContainer = document.getElementById('allButtonContainer');

const cardContainer = document.getElementById('cardContainer');

const showButton = async () => {
  const responsive = await fetch(
    'https://openapi.programming-hero.com/api/news/categories'
  );
  const data = await responsive.json();
  data.data.news_category.forEach((item) => {
    // console.log(item);
    const btn = document.createElement('button');
    btn.classList.add('text-gray-400');
    btn.innerText = item.category_name;
    allButtonContainer.appendChild(btn);
  })
};

const cardShow = async() => {
  const responsive = await fetch(
    'https://openapi.programming-hero.com/api/news/category/01'
  );
  const data = await responsive.json();
  data.data.forEach((item) => {
    const newDiv = document.createElement('div');
    newDiv.innerHTML = `
    
      <div class="card card-side p-4 bg-base-100 shadow-xl">
        <figure><img class="rounded-lg" src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie" /></figure>
        <div class="card-body">
          <h2 class="card-title">New movie is released!</h2>
          <p>Click the button to watch on Jetflix app.</p>
          <div class="flex justify-between items-center">
            <!-- profile -->
            <div class="flex justify-center items-center gap-4">
              <div>
                <img class="w-[50px] h-[50px] rounded-full" src="images/carbon_view.png" alt="">
              </div>
              <div>
                <p class="text-xl font-bold">Jane coper</p>
                <p class="text-[#718797]">jan 10,2022</p>
              </div>
            </div>
            <!-- eye contact  -->
            <div>
              <div>
                <img src="images/carbon_view.png" alt="">
              </div>
              <div>
                <span>1.5M</span>
              </div>
            </div>
            <!-- start conatact  -->
            <div>
              <img src="images/Group 116134.png" alt="">
            </div>
            <!-- arrow  -->
            <div>
              <img src="images/Vector.png" alt="">
            </div>
          </div>
        </div>
      </div>
    `;
    cardContainer.appendChild(newDiv);

  })
}
cardShow();

showButton();
