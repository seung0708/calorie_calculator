const BASE_URL = "http://localhost:3000/"

document.addEventListener("DOMContentLoaded", () => {
    createForm()
    //fetchBMI()
    addURLbutton()
    deleteButton()
})

// Calories GET request
/**
const fetchBMI = () => {
   
    fetch(`${BASE_URL}users`)
    .then(response => response.json())
    .then(users => {
            for (user of users.splice(-1)) {
                let u = new User(user.id, user.age, user.gender, user.weight, user.height, user.goals[0].goal_level, user.goals[0].total_calories)
                console.log(u)
                u.displayInfo(  
                    document.getElementById("myForm").onsubmit = function() {
                        document.getElementById("totalResults").removeAttribute("hidden")
        
                })
                
                
            }
                
         })
}; **/

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
        <select id="goal_level"><br>
            <option value="0">Choose your Goal</option>
            <option value="fat loss">Fat Loss</option>
            <option value="maintenance">Maintenance</option>
            <option value="gain weight"">Weight gain</option>
           
        </select><br />
        <input type="submit" value="Calculate Calories" id="totalCalories"><br />
    </form>
    `
    caloriesForm.addEventListener("submit", formSubmit)

}
// Calories POST request
const formSubmit = event => {
    event.preventDefault();

    let age = document.getElementById("age").value
    let gender = document.getElementById("gender").value
    let weight = document.getElementById("weight").value
    let height = document.getElementById("height").value
    let goal = document.getElementById("goal_level")
    let goal_level = goal.options[goal.selectedIndex].value
    let total_calories = Goal.caloriesGoal(age, gender, weight, height, goal_level)
    fetch(`${BASE_URL}users`, {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            age: age, 
            gender: gender,
            weight: weight,
            height: height,
            goals_attributes: [{
              goal_level: goal_level,
              total_calories: total_calories
            }]
        })
    })
    .then(response => response.json())
    .then(user => {
            
            let u = new User(user.id, user.age, user.gender, user.weight, user.height, user.goals[0].goal_level, user.goals[0].total_calories) 
                u.viewResults()
        
    })
    
}



const addURLbutton = () => {
    let urlBtn = document.getElementById("resources")

    urlBtn.insertAdjacentHTML("beforeend", 
        `
        <form id="urlForm">
            <input type="textarea" id="url">
            <input type="submit" value="Add URL">
        </form>
        `
    );
    
    urlBtn.addEventListener("submit", addURL)
}

const addURL = () => {
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

const resetBtn = () => {
    document.getElementById('reset').onclick = function() {

        document.getElementById("age").value = "";
        document.getElementById("gender").value = "";
        document.getElementById("weight").value = "";
        document.getElementById("height").value = "";
        document.getElementById("totalResults").remove();
    }

}

const deleteButton = () => {
    const deleteButton = document.createElement("button")
    deleteButton.setAttribute("id", "delete")
    deleteButton.innerHTML = "Delete"
    const results = document.getElementById("calorieValues")
    results.appendChild(deleteButton)

    deleteButton.addEventListener("click", deleteResults)
}

const deleteResults = (e) => {
    e.preventDefault()

    fetch(`${BASE_URL}users/${id}`, {
        method: 'DELETE', headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            url: url
        })
    })
    }
