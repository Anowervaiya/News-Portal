const allButtonContainer = document.getElementById('allButtonContainer');


const cardContainerId = document.getElementById('cardContainer');

const selectedId = '08';

const showButton = async () => {
  const responsive = await fetch(
    'https://openapi.programming-hero.com/api/news/categories'
  );
  const data = await responsive.json();
  data.data.news_category.forEach((item) => {

   console.log(item)
    const btn = document.createElement('button');
    btn.classList.add('text-gray-400');
    btn.innerText = item.category_name;
    allButtonContainer.appendChild(btn);
    btn.addEventListener('click', () => {
      cardShow(item.category_id)
      // console.log('clicked')
    });
    
  })
 
};

const inputId = () => {
  const inputId = document.getElementById('inputId').value;
  console.log(inputId)
  cardShow(inputId);

}


const cardShow = async (id) => {
  // console.log(id)
 
  const responsive = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${id}`
  );
  const data = await responsive.json();
  cardContainerId.innerHTML = '';
  data.data.forEach((item) => {
    // console.log(item);
    
    const newDiv = document.createElement('div');
    newDiv.innerHTML = `
    
      <div class="card card-side p-4 bg-base-100 shadow-xl">
        <img class="rounded-lg w-[280px] lg:w-[420px]" src="${item.image_url}" alt="Movie" />
        <div class=" px-8 py-2">
          <h2 class="card-title">${item.title}</h2>
          <p class="py-3 text-[#949494]">${item.details.slice(0,500)}</p>
          <div class="flex justify-between items-center">
            <!-- profile -->
            <div class="flex justify-center items-center gap-4">
              <div>
                <img class=" w-[50px] h-[50px] rounded-full" src="${item.author?.img}" alt="">
              </div>
              <div>
                <p class="text-xl font-bold">${item.author.name}</p>
                <p class="text-[#718797]">${item.author?.published_date}</p>
              </div>
            </div>
            <!-- eye contact  -->
            <div class="flex gap-2 items-center">
              <div>
                <img src="images/carbon_view.png" alt="">
              </div>
              <div>
                <span>${item.total_view}</span>
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
    cardContainerId.appendChild(newDiv);

  })
}
cardShow(selectedId);

showButton();
