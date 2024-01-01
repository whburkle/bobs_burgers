function build() {
  let min = Math.ceil(84); // Season 4
  let max = Math.floor(22); // Season 2
  let url = null;
  let current_episode = null;

  do {
    current_episode = Math.floor(Math.random() * (max - min + 1)) + min;

    if (current_episode !== 81) {
      url = "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/" + current_episode;
      //url = "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/1";
      break;
    }
  }
  while (current_episode === 81); // Except for episode 81

  let burger = document.querySelector("#burger");
  let of_the_day = document.querySelector("#of_the_day");

  let id_container = document.querySelector("#id_container");
  let episode_container = document.querySelector("#episode_container");
  let menu_container = document.querySelector("#menu_container");
  let burger_info_container = document.querySelector("#burger_info_container");
  let price_container = document.querySelector("#price_container");

  let bobs_burgers_logo_container = document.querySelector("#bobs_burgers_logo_container");

  //when the promise from fetch resolves, the first then() executes the
  //callback in its parentheses.
  //The second then() accepts a callback that executes when the
  //response.json() has resolved
  //In the body of the second then(), the data passed in is the json object
  //returned *from* the response.json() method

  fetch (url)
    .then (response => response.json())
    .then (json => {
      id_container.innerHTML = "#" + json.id;
      episode_container.innerHTML = "Season " + json.season + ", Episode " + json.episode;
      burger_info_container.innerHTML = json.name;
      price_container.innerHTML = json.price;

      id_container.style.opacity = 1;
      episode_container.style.opacity = 1;
      menu_container.style.opacity = 1;

      bobs_burgers_logo_container.style.transform = "scale(1) rotate(0deg)";
      bobs_burgers_logo_container.style.filter = "blur(0px)";

      burger.style.marginLeft = "0px";
      burger.style.opacity = "1";

      of_the_day.style.marginLeft = "0px";
      of_the_day.style.opacity = "1";

      menu_container.addEventListener('click', () => {
        window.open('https://www.barnesandnoble.com/w/the-bobs-burgers-burger-book-loren-bouchard/1122416535', '_blank')
      })
    })
    .catch (e => e.id_container.innerHTML);
    /*.catch (e => console.log(e.id_container.innerHTML));*/

}//end build


window.addEventListener('load', build);
