const latestPosts =
  "https://openapi.programming-hero.com/api/retro-forum/latest-posts";
const discussPost =
  "https://openapi.programming-hero.com/api/retro-forum/posts";

const id = (id) => document.getElementById(id);

const searchInput = id("searchInput");
const discussSection = id("discussSection");

const searchBtn = id("searchBtn");
const discussCardSection = id("discussCardSection");

const cardCount = id("cardCount");
const countCardSection = id("countCardSection");
const postsCardSection = id("postsCardSection");

const searchDiscussSection = id("searchDiscussSection");

const spinnerDiscuss = id("spinnerDiscuss");
const spinnerPosts = id("spinnerPosts");

async function discuss() {
  const response = await fetch(discussPost);
  const posts = await response.json();
  for (let post of posts.posts) {
    discussCardSection.innerHTML += /*html*/ `
        <div class="lg:w-[950px] md:w-[680px]">
              <div class="flex bg-[#F3F3F5] justify- p-10 gap-5 rounded-3xl ">
                <div class="avatar indicator">
                  <div class="w-20 h-20 rounded-xl">
                    ${
                      post.isActive
                        ? '<span class="indicator-item badge bg-green-500"></span>'
                        : ' <span class="indicator-item badge bg-red-500"></span>'
                    }
                    <img src=${post.image} class="object-cover" />
                  </div>
                </div>
                <div class="space-y-3 flex-col">
                  <div class="font-semibold lg:space-x-3 lg:text-base text-sm">
                  <span># ${post.category}</span>
                    <span>Author : ${post.author.name}</span>
                  </div>
                  <h3 class="font-extrabold lg:text-xl">
                  ${post.title}
                  </h3>
                  <p class=" font-semibold text-gray-500 w-full">
                  ${post.description}
                  </p>
                  <div class="border border-dashed mb-2"></div>
                  <div
                    class="lg:space-x-6 space-x-4 relative text-gray-500 lg:text-lg text-sm flex justify- gap-x-96 "
                  >
                    <div class="space-x-3">
                    <span><i class="fa-solid fa-envelope mr-1"></i>${
                      post.comment_count
                    }</span>
                      <span> <i class="fa-solid fa-eye mr-1"></i>${
                        post.view_count
                      }</span>
                      <span><i class="fa-solid fa-clock mr-1"></i>${
                        post.posted_time
                      } min</span>
                    </div>
                      <button
                        class="p-1 pb-8 bg-green-500 rounded-full h-8 w-9 text-center "
                        onclick="count('${post.title}','${post.view_count}')"
                      >
                        <i class="fa-solid fa-envelope-open text-white"></i>
                      </button>
                  </div>
                </div>
              </div>
            </div>
        `;
  }
}

async function posts() {
  discuss();
  spinnerDiscuss.classList.remove("hidden");
  spinnerPosts.classList.remove("hidden");
  discussSection.classList.add("hidden");
  postsCardSection.classList.add("hidden");

  try {
    const response = await fetch(latestPosts);
    const posts = await response.json();

    for (let post of posts) {
      postsCardSection.innerHTML += /*html*/ `
        <div class="border rounded-2xl">
                 <figure class="p-5">
                   <img src=${
                     post.cover_image
                   } class="rounded-2xl" alt="Shoes"/>
                 </figure>
                 <div class="px-6 space-y-3">
                   <span class="text-gray-500"
                     ><i class="fa-regular fa-calendar-days mr-1"></i> ${
                       post.author.posted_date
                         ? post.author.posted_date
                         : "No publish date"
                     }</span
                   >
                   <h2 class="text-xl font-extrabold">
                    ${post.title}
                   </h2>
                   <p>
                    ${post.description}
                   </p>
                   <div class="flex gap-4 pb-5">
                     <img
                       src=${post.profile_image}
                       class="object-cover w-10 h-10 rounded-full" 
                       alt=""
                     />
                     <div>
                       <h4 class="font-extrabold">${post.author.name}</h4>
                       <span class="text-gray-500">${
                         post.author.designation
                           ? post.author.designation
                           : "Unknown"
                       }</span>
                     </div>
                   </div>
                 </div>
               </div>    
       `;
    }
  } catch (error) {
    console.log(error);
  } finally {
    // Hide the spinner after 2 seconds
    setTimeout(() => {
      spinnerDiscuss.classList.add("hidden");
      spinnerPosts.classList.add("hidden");
      discussSection.classList.remove("hidden");
      postsCardSection.classList.remove("hidden");
    }, 1500);
  }
}

searchBtn.addEventListener("click", async () => {
  //   searchDiscussSection.classList.remove("hidden");

  try {
    if (searchInput.value.length > 0) {
      discussCardSection.classList.add("hidden");
      searchDiscussSection.innerHTML = "";

      spinnerDiscuss.classList.remove("hidden");
      discussSection.classList.add("hidden");
      searchDiscussSection.classList.add("hidden");

      const response = await fetch(
        `${discussPost}?category=${searchInput.value}`
      );
      const posts = await response.json();
      for (let post of posts.posts) {
        //   console.log(post);

        searchDiscussSection.innerHTML += /*html*/ `
              <div class="lg:w-full">
                    <div class="flex bg-[#F3F3F5] justify- p-10 gap-5 rounded-3xl">
                      <div class="avatar indicator">
                        <div class="w-20 h-20 rounded-xl">
                          ${
                            post.isActive
                              ? '<span class="indicator-item badge bg-green-500"></span>'
                              : ' <span class="indicator-item badge bg-red-500"></span>'
                          }
                          <img src=${post.image} class="object-cover" />
                        </div>
                      </div>
                      <div class="space-y-3 flex-col">
                        <div class="font-semibold lg:space-x-3 lg:text-base text-sm">
                        <span># ${post.category}</span>
                          <span>Author : ${post.author.name}</span>
                        </div>
                        <h3 class="font-extrabold lg:text-xl">
                        ${post.title}
                        </h3>
                        <p class=" font-semibold text-gray-500">
                        ${post.description}
                        </p>
                        <div class="border border-dashed mb-2"></div>
                        <div
                          class="lg:space-x-6 space-x-4 text-gray-500 lg:text-lg text-sm flex justify-between lg:w-full"
                        >
                          <div class="space-x-3">
                          <span><i class="fa-solid fa-envelope mr-1"></i>${
                            post.comment_count
                          }</span>
                            <span> <i class="fa-solid fa-eye mr-1"></i>${
                              post.view_count
                            }</span>
                            <span><i class="fa-solid fa-clock mr-1"></i>${
                              post.posted_time
                            } min</span>
                          </div>
      
                          <button
                            class="p-1 pb-8 bg-green-500 rounded-full h-8 w-9 text-center"
                            onclick="count('${post.title}','${
          post.view_count
        }')"                          >
                            <i class="fa-solid fa-envelope-open text-white"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
              `;
      }

      searchInput.value = "";
    }
  } catch (error) {
    // console.log(error);
  } finally {
    // Hide the spinner after 2 seconds
    setTimeout(() => {
      spinnerDiscuss.classList.add("hidden");
      discussSection.classList.remove("hidden");
      searchDiscussSection.classList.remove("hidden");
    }, 400);
  }
});

function count(title, views) {
  const currentCount = parseFloat(cardCount.innerText);
  const newCount = currentCount + 1;
  cardCount.innerText = newCount;

  countCardSection.innerHTML += /*html*/ `
             <div class="bg-white rounded-3xl p-3 px-5 flex justify-between items-center">
                  <h1 class="lg:w-72 w-64 lg:text-xl font-bold">
                   ${title}
                  </h1>
                  <span class="lg:text-lg text-gray-500">
                    <i class="fa-regular fa-eye mr-1"></i>${views}</span>
                </div>
    `;
}

posts();
