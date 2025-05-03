const allcategory = document.querySelector(".categoryall");
function newsContent(data){
  return `<div class='mcard'>
  <div class='mtitle'>
  <h1>${data.title}</h1>
  </div>
  <div>
  <img src ="${data.image}" alt="Image1">
  </div>
  <div class='mcontent_info'>
  <p class='mcontent'> "${data.content}"</p>
  </div>
  <div>
  <a href= "${data.url}" target="_blank" class="link">Read more</a>
  
  </div>
  <div class='mday'>

    </div>
    <div><p class='mtime'> Time:${data.publishedAt}</p></div>
  </div>
  <br><br>`
}

allcategory.addEventListener("click", async (event) => {
  let API = event.target.value                                
  let apiURL = `https://gnews.io/api/v4/top-headlines?category=${API}&lang=en&country=us&max=10&apikey=5a9ed619da5c7e502f218c45949c0970`                                      
   console.log(API)
   try {
    
      const response = await axios.get(apiURL);  
      console.log(response.data);
      const AO = () => {
        const articles = response.data.articles;  
        articles.forEach((articleData) => {
          const newsTemplate = newsContent(articleData);  
          article.insertAdjacentHTML("afterbegin", newsTemplate);  
        });
      };
      AO();
    } catch (err) {
      console.error(err);
      window.alert("Something went wrong. Please try again!");
    }
  });
  