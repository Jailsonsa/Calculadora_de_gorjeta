function calculateTip(event) {
   event.preventDefault();
   let bill = document.getElementById('bill').value;
   let serviceQual = document.getElementById('serviceQual').value;
   let numOfPeople = document.getElementById('people').value;

   if (bill == '' | serviceQual == 0) {
      alert("Por favor, preencha os valores")
      return;
   }

   if (numOfPeople == "" | numOfPeople <= 1) {
      numOfPeople = 1;
      document.getElementById('each').style.display = "none";
      
   } else {
      document.getElementById('each').style.display ="block";
   }  
   let total = (bill * serviceQual) / numOfPeople;
   total = total.toFixed(2);
   document.getElementById('tip').innerHTML = total;
   document.getElementById('Totaltip').style.display = "block";
}

document.getElementById('Totaltip').style.display = "none";
document.getElementById('each').style.display = "none";
/*Escondendo totaltip e each, para aparecer só dps de calcular*/
document.getElementById('tipsForm').addEventListener('submit', calculateTip);
/*chamando a função*/
   