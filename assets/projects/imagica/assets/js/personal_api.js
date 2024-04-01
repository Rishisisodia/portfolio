// console.log("script.js loaded");

const accessKey = "YW1DnmLCiL82h8DnOWJ5yDl4BALrWiCfVgwbGCapjaA";

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const ShowMoreBtn = document.getElementById("show-more-btn");

// Key YW1DnmLCiL82h8DnOWJ5yDl4BALrWiCfVgwbGCapjaA

let keyword = "";
let page = 1;

// const url =
//   "https://api.unsplash.com/search/photos?page=1&query=office&client_id=YW1DnmLCiL82h8DnOWJ5yDl4BALrWiCfVgwbGCapjaA";

async function searchImages() {
  keyword = searchBox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12s`;

  const response = await fetch(url);
  const data = await response.json();

  if (page === 1) {
    searchResult.innerHTML = "";
  }

  const result = data.results;

  result.map((result) => {
    const image = document.createElement("img");
    image.src = result.urls.small;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";
    imageLink.appendChild(image);
    searchResult.appendChild(imageLink);
  });

  ShowMoreBtn.style.display = "block";
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchImages();
});

ShowMoreBtn.addEventListener("click", () => {
  page++;
  searchImages();
});
