class Calorie {
    constructor(age, gender, weight, height, total_calories, activity_level) {
  
        this.age = age;
        this.gender = gender;
        this.weight = weight;
        this.height = height;
        this.total_calories = total_calories
        this.activity_level = activity_level
    }

    renderCalorie() {
      console.log(this)
        let caloriesResults = document.getElementById("results")
        console.log(caloriesResults)
        caloriesResults.innerHTML += 
        `
            <p>${this.total_calories} calories</p>

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