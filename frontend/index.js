document.addEventListener("DOMContentLoaded", () => {
    createForm()
    fetchCalories()
})

const BASE_URL = "http://localhost:3000/"

function fetchCalories() {
    fetch(`${BASE_URL}calories`)
    .then(response => response.json())
    .then(calories => {
        for (const calorie of calories) {
            let c = new Calorie(calorie.age, calorie.gender, calorie.weight, calorie.height, calorie.total_calories)
            c.renderCalorie();
        }

    })
};

function createForm() {
    let caloriesForm = document.getElementById("calories-form")
    
    caloriesForm.innerHTML += 
    `
    <form>
        <label>Age:</label><br />
        <input type="number" id="age"><br />
        <label>Gender</label><br />
        <input type="text" id="gender"><br />
        <label>Weight</label><br />
        <input type="number" id="weight"><br />
        <label>Height</label><br />
        <input type="number" id="height"><br />
        <select id="activity_level"><br>
            <option value="sedentary">Sedentary</option>
            <option value="lightly active">Lightly Active</option>
            <option value="moderately active"">Moderately Active</option>
            <option value="active">Active</option>
        </select><br />
        <input type="submit" value="Calculate Calories" id="total_calories"><br />
    </form>
    `
    caloriesForm.addEventListener("submit", formSubmit)
}




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
            console.log(c)
            
    })

 
}