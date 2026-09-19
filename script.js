const data = document.createElement('ul');
for(i=0; i<10; i++){
    const lint = document.createElement("li");
    data.append(lint);
    lint.textContent = Math.floor(Math.random()*9+1);
}
const newElement = (dataInfo) => {
   const element = document.createElement('li');
   element.textContent = dataInfo;
   data.append(element); 
}
document.body.append(data);
const clicker = document.querySelector('.clicker');
const clickerInput = document.querySelector('.clickerInput');
clicker.addEventListener("click", () => {
    newElement(clickerInput.value);
    console.log(clickerInput.value);
});