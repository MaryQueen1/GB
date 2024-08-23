const accessKey = 646532; 

const imageElement = document.getElementById("image");
const photographerElement = document.getElementById("photographer");
const likeButton = document.getElementById("likeButton");
const likeCountElement = document.getElementById("likeCount");

let likeCount = localStorage.getItem("likeCount")
  ? parseInt(localStorage.getItem("likeCount"))
  : 0;
likeCountElement.textContent = likeCount;

async function fetchRandomImage() {
  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/random?client_id=${accessKey}`
    );
    const data = await response.json();

    imageElement.src = data.urls.regular;
    photographerElement.textContent = data.user.name;
  } catch (error) {
    console.error("Ошибка получения изображения:", error);
  }
}

likeButton.addEventListener("click", () => {
  likeCount++;
  likeCountElement.textContent = likeCount;
  localStorage.setItem("likeCount", likeCount);
});

// Загружаем случайное изображение при загрузке страницы
window.onload = fetchRandomImage;
