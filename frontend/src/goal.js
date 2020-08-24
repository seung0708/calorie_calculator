class Goal {
    constructor(id, plan, activity_level, total_calories) {
        this.id = id
        this.plan = plan
        this.activity_level = activity_level
        this.total_calories = total_calories
    }

    renderGoal() {
        let goalsResults = document.getElementById("goal")

        goalsResults.innerHTML += 
        `
            <p id="total">${this.total_calories} calories</p>

        `
    }

   
}