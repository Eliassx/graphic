const data = [
    {
      class: "monday", 
      day: "mon",
      amount: 17.45
    },
    {
      class: "tuesday", 
      day: "tue",
      amount: 34.91
    },
    {
      class: "wednesday", 
      day: "wed",
      amount: 52.36
    },
    {
      class: "thursday",
      day: "thu",
      amount: 31.07
    },
    {
      class: "friday",
      day: "fri",
      amount: 23.39
    },
    {
      class: "saturday",
      day: "sat",
      amount: 43.28
    },
    {
      class: "sunday",
      day: "sun",
      amount: 25.48
    }
];

const content = document.getElementById('content');
let i = 0

for(i = 0; i < 7; i++) {
  content.innerHTML += `
    <div class="${data[i].class}">
      <div class="amount">${data[i].amount}</div>
      <div class="${data[i].class}-result"></div>
      <p class="day">${data[i].day}</p>
    </div>  
  `
};