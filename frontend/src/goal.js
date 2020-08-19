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

    static calculateGoals(plan) {
        if (plan === 'weightLoss') {
            return Math.round(total_calories - 500)
        }
        else if (plan === 'maintenance' ) {
            return Math.round(total_calories)
        }

        else if (plan === 'gain') {
            return Math.round(total_calories + 500)
        }
    }
}