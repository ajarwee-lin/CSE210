if (!localStorage.getItem('numDrinks')){
    localStorage.setItem('numDrinks', 0);
  }
  
  
  document.querySelector("#numDrinks").innerHTML = localStorage.getItem('numDrinks');