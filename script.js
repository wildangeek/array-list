const itArea =['Front End Developer','Back End Developer','DevOps','Product Manager','Solution Architect']

document.write(`Panjang arraynya ${itArea.length} ini listnya:</br>`);
itArea.forEach((element)=>{
    console.log(element);
    document.write(`<li> ${element}</li>`);
});
console.log(itArea.length);
