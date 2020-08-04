class Calorie {
    constructor(age, gender, weight, height, total_calories) {
        this.age = age;
        this.gender = gender;
        this.weight = weight;
        this.height = height;
        this.total_calories = total_calories
    }

    renderCalorie() {
        let caloriesResults = document.getElementById("results")

        caloriesResults.innerHTML += 
        `
         <ul>
            <li>${this.total_calories}</li>

         </ul>
        `
    }
    calculateCalories() {
        if (this.gender === "male") 
          this.total_calories = 66.47 + (6.3 * this.weight) + (12.9 * this.height - (6.8 * this.age))
        else if (this.gender === "female")
            this.total_calories = 665 + (4.3 * this.weight) + (4.7 * this.height - (4.7 * this.age))
         
        }    
}