class Goal {
    constructor(age, gender, weight, height, goal_level, total_calories) {
        this.age = age;
        this.gender = gender;
        this.weight = weight;
        this.height = height;
        this.goal_level = goal_level,
        this.total_calories = total_calories
    }

    static caloriesGoal(age, gender, weight, height, goal_level) {
       
        if (gender === "male" && goal_level === "fat loss") {
          return Math.round((66.47 + (6.3 * weight) + (12.9 * height - (6.8 * age))) - 500)
        }
        else if (gender === "male" && goal_level === "maintenance") {
          return Math.round((66.47 + (6.3 * weight) + (12.9 * height - (6.8 * age))) )
        }
        else if (gender === "male" && goal_level === "gain weight") {
          return Math.round((66.47 + (6.3 * weight) + (12.9 * height - (6.8 * age))) + 500)
        }
        else if (gender === "female" && goal_level === "fat loss") {
            return Math.round((665 + (4.3 * weight) + (4.7 * height - (4.7 * age))) -500)
        }
        else if (gender === "female" && goal_level === "maintenance") {
            return Math.round((665 + (4.3 * weight) + (4.7 * height - (4.7 * age))))
        }
        else if (gender === "female" && goal_level === "gain weight") {
            return Math.round((665 + (4.3 * weight) + (4.7 * height - (4.7 * age))) + 500)
        }
    
        }

}