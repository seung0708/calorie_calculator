document.addEventListener("DOMContentLoaded", () => {
    createForm()
    fetchCalories()
    //showCaloriesResultsOnLoad()
    //disableSubmit()
    //goalsForm()
    //showGoalsResultsOnLoad()
   
})

const BASE_URL = "http://localhost:3000/"

// GET request
function fetchCalories() {
    fetch(`${BASE_URL}calories`)
    .then(response => response.json())
    .then(calories => {
        for (const calorie of calories) {
            let c = new Calorie(calorie.age, calorie.gender, calorie.weight, calorie.height, calorie.total_calories)
            c.renderCalorie
        }

    })
};

// Calories Form 
function createForm() {
    let caloriesForm = document.getElementById("caloriesForm")
    
    caloriesForm.insertAdjacentHTML("afterbegin",  
    `
    <form id="myForm">
        <label>Age:</label><br />
        <input type="number" id="age"><br />
        <label>Gender</label><br />
        <input type="text" id="gender"><br />
        <label>Weight</label><br />
        <input type="number" id="weight" placeholder="in Pounds"><br />
        <label>Height</label><br />
        <input type="number" id="height" placeholder="in Inches"><br />
        <select id="activity_level"><br>
            <option value="0">Choose Your Activity level</option>
            <option value="sedentary">Sedentary</option>
            <option value="lightly active">Lightly Active</option>
            <option value="moderately active"">Moderately Active</option>
            <option value="active">Active</option>
        </select><br />
        <input type="submit" value="Calculate Calories" id="totalCalories"><br />
        <input type="button" value="Reset" onclick="window.location.reload()">
    </form>
    `)
    caloriesForm.addEventListener("submit", formSubmit)
}

// POST request
function formSubmit() {
    event.preventDefault();

    let age = document.getElementById("age").value
    let gender = document.getElementById("gender").value
    let weight = document.getElementById("weight").value
    let height = document.getElementById("height").value
    let activity = document.getElementById("activity_level")
    let activity_level = activity.options[activity.selectedIndex].value
    let total_calories = Calorie.calculateCalories(age, gender, weight, height, activity_level)
    
    fetch(`${BASE_URL}calories`, {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            age: age, 
            gender: gender,
            weight: weight,
            height: height,
            total_calories: total_calories,
            activity_level: activity_level
        })
    })
    .then(response => response.json())
    .then(calorie => {
            let c = new Calorie(calorie.age, calorie.gender, calorie.weight, calorie.height, calorie.total_calories, calorie.activity_level)    
            c.renderCalorie
            
    })
    
}

/** 
function showCaloriesResultsOnLoad() {
   let showResults = document.getElementById("results")

   showResults.addEventListener("submit", function() {
    if (showResults.style.display === "none") {
        showResults.style.display = "block";
    } else {
        showResults.style.display = "none"
    } 
   })
}

function disableSubmit() {
    let submitBtn = document.getElementById("totalCalories");
    submitBtn.onsubmit = submit;
    function submit(event) {
        form.setAttribute('hidden', '');
        event.preventDefault();
        }

}
**/


function goalsForm() {
    let goalsForm = document.getElementById("container")

    goalsForm.insertAdjacentHTML("beforeend",
    `
    <form id="myGoals">
        <select id="plan"><br>
            <option value="">Choose Your Activity level</option>
            <option value="weightLoss">Fat Loss</option>
            <option value="maintenance">Maintenance</option>
            <option value="gain">Gain weight</option>
        </select><br />
        <input type="submit" value="Update Calories" id="goalCalories" ><br />
        <input type="button" value="Reset" onclick="window.location.reload()">
    </form>
    `)
    goalsForm.addEventListener("submit", formUpdate)   

}

//PUT Request
function formUpdate() {
    event.preventDefault();

    let goal = document.getElementById("plan")
    let plan = goal.options[goal.selectedIndex].value
    let total_calories = Goal.calculateGoals(plan)
    
    fetch(`${BASE_URL}goals/${id}`, {
        method: "PUT",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            id: id,
            plan: plan,
            total_calories: total_calories
        })
    })
    .then(response => response.json())
    .then(goal => {
            let g = Goal.update(goal.id, goal.plan, goal.total_calories)    
            g.renderCalorie()

    })
    
}

function showGoalsResultsOnLoad() {
    let goalResults = document.getElementById("goals");
    if (goalResults.style.display === "none") {
        goalResults.style.display = "block";
    } else {
        goalResults.style.display = "none"
    }
}
