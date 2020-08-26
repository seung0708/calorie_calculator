class Calorie {
    constructor(id,age, gender, weight, height, total_calories, activity_level) {
        this.id = id;
        this.age = age;
        this.gender = gender;
        this.weight = weight;
        this.height = height;
        this.total_calories = total_calories
        this.activity_level = activity_level
    }

    renderCalorie() {
        let caloriesResults = document.getElementById("results")

        caloriesResults.innerHTML += 
        `
            <p id="totalResults">${this.total_calories} calories</p>

        `
    }

    viewCalorie() {
        const viewCalories = document.getElementById("calorieValues")
      
        viewCalories.innerHTML +=
        `
        <p style="text-align:center;"><strong>Previously calculated Calories</strong></p>
         <ul id="allValues" class="list">
            <li>Age:    ${this.age}</li>
            <li>Gender:   ${this.gender}</li>
            <li>Weight(lbs):  ${this.weight}</li>
            <li>Height(inches)  ${this.height}</li>
            <li>Calories:   ${this.total_calories}</li>
            <li>Activity Level:   ${this.activity_level}</li>
         </ul>  
        `

    }

    static calculateCalories(age, gender, weight, height, activity_level) {

        if (gender === "male" && activity_level === "sedentary") {
          return Math.round((66.47 + (6.3 * weight) + (12.9 * height - (6.8 * age))) * 1.2)
        }
        else  if (gender === "male" && activity_level === "lightly active") {
          return Math.round((66.47 + (6.3 * weight) + (12.9 * height - (6.8 * age))) * 1.375)
        }
        else if (gender === "male" && activity_level === "moderately active") {
          return Math.round((66.47 + (6.3 * weight) + (12.9 * height - (6.8 * age))) * 1.55)
        }
        else if (gender === "male" && activity_level === "active") {
          return Math.round((66.47 + (6.3 * weight) + (12.9 * height - (6.8 * age))) * 1.9)
        }
        else if (gender === "male" & activity_level === "0"){
          return Math.round((66.47 + (6.3 * weight) + (12.9 * height - (6.8 * age))))
        }
        else if (gender === "female" && activity_level === "sedentary") {
            return Math.round((665 + (4.3 * weight) + (4.7 * height - (4.7 * age))) * 1.2)
        }
        else if (gender === "female" && activity_level === "lightly active") {
            return Math.round((665 + (4.3 * weight) + (4.7 * height - (4.7 * age))) * 1.375)
        }
        else if (gender === "female" && activity_level === "moderately active") {
            return Math.round((665 + (4.3 * weight) + (4.7 * height - (4.7 * age))) * 1.55)
        }
        else if (gender === "female" && activity_level === "active") {
            return Math.round((665 + (4.3 * weight) + (4.7 * height - (4.7 * age))) * 1.9)
        }
        else if (gender === "male" & activity_level === "0"){
            return Math.round((665 + (4.3 * weight) + (4.7 * height - (4.7 * age))))
            }
        }
}