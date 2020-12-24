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
        document.getElementById("update").onclick = function() {
            const lists = Array.from(document.getElementsByClassName("goal-list"))
            if (lists.slice(-1)[0]) {
                lists.slice(-2)[0].remove()
            }
            console.log(lists) 
        
        }
    }


   static caloriesGoal(goal_level, bmi) {
        if (goal_level === "fat loss") {
            return (bmi - 500)
        }
        else if (goal_level === "maintenance") {
            return bmi
        }
        else if (goal_level === "gain weight") {
            return (bmi + 500)
        }
    } 

  static updateCalories(goal_level, total_calories) {
      if (goal_level === "fat loss" && total_calories <= 2000) {
          return total_calories - 500
      }
      else if (goal_level === "fat loss" && total_calories >= 2000) {
        return total_calories - 1000
      }
      else if (goal_level === "maintenance" && total_calories <= 2000) {
          return total_calories + 500
      }
      else if (goal_level === "maintenance" && total_calories >= 2000) {
        return total_calories
      }
      else if (goal_level === "gain weight" && total_calories <= 2000) {
        return total_calories + 500
      }
      else if (goal_level === "gain weight" && total_calories >= 2000) {
        return total_calories +  500
      }
    
  }  

}