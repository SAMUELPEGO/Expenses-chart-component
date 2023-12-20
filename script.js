
data = [
    {
      "day": "mon",
      "amount": 17.45
    },
    {
      "day": "tue",
      "amount": 34.91
    },
    {
      "day": "wed",
      "amount": 52.36
    },
    {
      "day": "thu",
      "amount": 31.07
    },
    {
      "day": "fri",
      "amount": 23.39
    },
    {
      "day": "sat",
      "amount": 43.28
    },
    {
      "day": "sun",
      "amount": 25.48
    }
  ]
  ;

  let bars = document.getElementsByClassName("bar");
  let list_amount = [];
  for (let i = 0; i < bars.length; i++) {
  let container_amount = bars[i].firstChild;
  let amount = data[i]["amount"];
  list_amount.push(amount);
  let amount_porcent = data[i]["amount"] * 1.1;
  container_amount.textContent += amount;
  bars[i].style.height = `${amount + amount_porcent}px`;
  container_amount.setAttribute("hidden",true);  

  bars[i].addEventListener("mouseover", () => {
      container_amount.removeAttribute("hidden")
      bars[i].style.opacity = .8;
      bars[i].style.cursor = "pointer"
  })
  bars[i].addEventListener("mouseout", () => {
    container_amount.setAttribute("hidden",true)
    bars[i].style.opacity = 2;
})

}
;
max_amount = Math.max(...list_amount);
for (let i of bars) {
  if ( i.firstChild.textContent == `$${max_amount}`) {
     i.style.backgroundColor = "hsl(186, 34%, 60%)";
    
  }
}






  