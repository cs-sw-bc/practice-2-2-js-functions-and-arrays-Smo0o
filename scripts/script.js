function generateMoodMessage() {
    let bill = document.getElementById("bill").value;
    let people = document.getElementById("people").value;
    let meal = null;
    if (bill < 20) {
        meal = "Budget Friendly Meal";
    } else if (bill > 200 && people > 4) {
        meal = "party vibes";
    } else if (people === 1) {
        meal = "solo dining";
    }
    else {
        meal = "casual dinner night"
    }
    alert(`your meal is a ${meal}`);
}

function calculateTip() {
    let tip = document.getElementById("tip").value;
    let bill = document.getElementById("bill").value
    let tipamount = (bill * tip / 100);
    alert(`your bill is ${bill} and your tip percent is ${tip}%`);
    alert(`your total pay for tipping is ${tipamount}$`);
    return tipamount;
    
}

 


/* 
         - This shows how JavaScript reacts differently based on conditions.

     2️⃣ Create a function named calculateTip() that:
         - Reads the bill amount and tip percentage.
         - Calculates the total tip (bill * tip / 100).
         - Returns the total tip.
         - Shows an alert: "Your tip amount is $10."

     3️⃣ Create a function named splitBill() that:
         - Calls calculateTip() to reuse its return value.
         - Calculates total amount = bill + tip.
         - Divides total by number of people.
         - Shows an alert message:
             - Example: "Each person should pay $55."
         - If the per person amount > 100, show: "Whoa, that’s pricey! 💸"
           Otherwise show: "Nice, that’s affordable! 😄"

     ✅ BONUS TASK:
     - Round all currency values to 2 decimal places using toFixed(2).
     - Use creative alert messages to personalize the experience.

     -------------------------------------------------------------
     💡 Example alert messages:
     - "Solo dining! Self-care mode on 🍲"
     - "Your tip amount is $12.50."
     - "Each person should pay $56.25. Nice, that’s affordable! 😄"
     -------------------------------------------------------------

     🔗 Button connections:
     - Generate Mood button → generateMoodMessage()
     - Calculate Tip button → calculateTip()
     - Split Bill button → splitBill()
  ============================================================= */
 