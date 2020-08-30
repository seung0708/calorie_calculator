class Goal {
    constructor(id, goal_level, total_calories  ) {
        this.id = id
        this.goal_level = goal_level,
        this.total_calories = total_calories
    }

    viewGoals() {
        const goalsView = document.getElementById("results")

        goalsView.innerHTML += 

        `
        <ul class="goal-list" data-set-id="${this.id}">
            <li id="total-calories" data-set-goals="${this.total_calories}"> ${this.total_calories} calories </li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        `
    }


   static caloriesGoal(goal_level, bmi) {
        if (goal_level === "fat loss") {
            return (parseInt(bmi) - 500)
        }
        else if (goal_level === "maintenance") {
            return parseInt(bmi)
        }
        else if (goal_level === "gain weight") {
            return (parseInt(bmi) + 500)
        }
    } 

  static updateCalories(goal_level, total_calories) {
      if (goal_level === "maintenance" && total_calories === 1102) {
        return total_calories + 500
      }
      else if (goal_level === "gain weight" && total_calories === 1102) {
          return total_calories + 1000
      }
      else if (goal_level === "fat loss" && total_calories === 1602) {
          return total_calories - 500
      }
      else if (goal_level === "gain weight" && total_calories === 1602) {
          return total_calories + 500
      }
      else if (goal_level === "fat loss" && total_calories === 2102) {
          return total_calories - 1000
      }
      else if (goal_level === "maintence" && total_calories === 2102) {
          return total_calories - 500
      }
  }

}