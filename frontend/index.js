const BASE_URL = "http://localhost:3000/"

document.addEventListener("DOMContentLoaded", () => {
    createForm()
    fetchCalories()
    addURLbutton()
   
})

// GET request
const fetchCalories = () => {
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
const createForm = () => {
    let caloriesForm = document.getElementById("caloriesForm")
    
    caloriesForm.innerHTML +=  
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
    `
    caloriesForm.addEventListener("submit", formSubmit)
}

// POST request
const formSubmit = (event) => {
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
            goals_attributes: [{
            activity_level: activity_level
            }]
        })
    })
    .then(response => response.json())
    .then(calorie => {
    
            let c = new Calorie(calorie.age, calorie.gender, calorie.weight, calorie.height, calorie.total_calories, calorie.goals[0].activity_level)    
            c.renderCalorie()
            
    })
    
}

function addURLbutton() {
    let urlBtn = document.getElementById("resources")

    urlBtn.insertAdjacentHTML("beforeend", 
        `
        <form>
            <input type="text" id="url">
            <input type="submit" value="Add URL">
        </form>
        `
    );
    
    urlBtn.addEventListener("submit", addURL)
}

function addURL() {
    event.preventDefault();
    
    let url = document.getElementById("url").value

    fetch(`${BASE_URL}resources`, {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            url: url
        })
    })
    .then(response => response.json())
    .then(resource => {
    
            let r = new Resource(resource.url)    
            r.renderResource()
            
    })
    
}


