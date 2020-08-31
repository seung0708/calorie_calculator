const BASE_URL = "http://localhost:3000/"

document.addEventListener("DOMContentLoaded", () => {
    createForm()
    goalsForm()
    resetBtn()

})

// Calories Form 
const createForm = () => {
    const caloriesForm = document.createElement("div")
    const div = document.getElementById("container")
    div.appendChild(caloriesForm)

    caloriesForm.innerHTML +=  
    `
    <form id="myForm" name="myForm" onsubmit="return validateForm()">
        <label>Age:</label><br />
        <input type="number" id="age" name="age"><br />
        <br>
        <label>Gender:</label><br />
        <input type="radio" name="genderS" id="gender" value="Male">Male</input>
        <input type="radio" name="genderS" id="gender" value="Female">Female</input>
        <br /><br>
        <label>Weight:</label><br />
        <input type="number" id="weight" name="weight" placeholder="in Pounds">
        <br /><br>
        <label>Height</label><br />
        <input type="number" id="height" name="weight" placeholder="in Inches">
        <br /><br>
        <input type="submit" value="Calculate Calories" id="totalCalories"><br />
        <input type="button" value="Reset" id="reset">
    </form>
    `
    caloriesForm.addEventListener("submit", formSubmit)

    /**document.getElementById("myForm").onsubmit = function () {
        document.getElementById("totalCalories").setAttribute("disabled", true)
    } **/

}

// Calories POST 
const formSubmit = event => {
    event.preventDefault();

   
    let age = document.getElementById("age").value
    let gender = document.querySelector('input[name="genderS"]:checked').value;
    let weight = document.getElementById("weight").value
    let height = document.getElementById("height").value
    let bmi = Calorie.calculateCalories(age, gender, weight, height)
    debugger
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
            bmi: bmi,

        })
    })
    .then(response => response.json())
    .then(calorie => {
            if (calorie.message) {
                alert(calorie.message)
            } 
            else { 
                let u = new Calorie(calorie.id, calorie.age, calorie.gender, calorie.weight, calorie.height, calorie.bmi) 
                console.log(u)
                u.viewCalories()
            }
    })



}

// Goals Form
const goalsForm = () => {
    const goalsForm = document.createElement("form")
    goalsForm.setAttribute("id", "goalsForm")
    const div = document.getElementById("container")
    div.appendChild(goalsForm)
    

    goalsForm.innerHTML += 
    `
    <select id="goal_level"><br>
        <option value="0">Choose your Goal</option>
        <option value="fat loss">Fat Loss</option>
        <option value="maintenance">Maintenance</option>
        <option value="gain weight"">Weight gain</option>
       
    </select><br />
    <input type="submit" value="Calculate Calorie Goals" id="goalCalories"><br />
    <input type="button" value="Update Goals" id="update" hidden>
    `
    goalsForm.addEventListener("submit", goalSubmit)
    
    document.getElementById("goalsForm").onsubmit = function() {
            const updateButton = document.getElementById("update")
            updateButton.hidden = false
            
            updateButton.addEventListener("click", updateGoals)
    }

    
}

// Goals POST
const goalSubmit = (e) => {
    e.preventDefault()
    
    let id = document.getElementById("user").getAttribute("data-set-id")
    let bmi = document.getElementById("bmi").getAttribute("data-set-bmi")
       
    let goal = document.getElementById("goal_level")
    let goal_level = goal.options[goal.selectedIndex].value
    let total_calories = Goal.caloriesGoal(goal_level, bmi)
    //debugger
    fetch(`${BASE_URL}goals`, {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
          id,
          goal_level,
          total_calories
            
        })
    })
    .then(response => response.json())
    .then(goal => {
            if (goal.message) {
                alert(goal.message)
            }
            else {
                let g = new Goal(goal.id, goal.goal_level, goal.total_calories)
                g.viewGoals()
                //console.log(g)
            }
            
    })

}


// Goals PATCH
const updateGoals = () => {
    event.preventDefault();
    
    const id = parseInt(document.getElementsByClassName("goal-list")[0].getAttribute("data-set-id"))
    const goal = document.getElementById("goal_level")
    const goal_level = goal.options[goal.selectedIndex].value
    const total_calories = parseInt(document.getElementById("total-calories").getAttribute("data-set-goals"))
    const total = Goal.updateCalories(goal_level, total_calories)
    
    
    fetch(`${BASE_URL}goals/${id}`, {
        method: "PATCH",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            id,
            goal_level,
            total_calories: total
        })
    })
    .then(response => response.json())
    .then(goal => {
        if (goal.message) {
            alert(goal.message)
        }
        else {
            let g = new Goal(goal.id, goal.goal_level, goal.total_calories)          
            g.viewGoals()
                
        }
    })
    
}

// Calories DELETE
const deleteCalories = () => {
    event.preventDefault();
    
    let id = parseInt(document.getElementById("user").getAttribute("data-set-id"))
    
    fetch(`${BASE_URL}calories/${id}`, {
        method: "DELETE",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            id
        })
    })
    .then(response => response.json())
    .then(json.remove())

}


const resetBtn = () => {
    document.getElementById('reset').onclick = function() {

        document.getElementById("age").value = "";
        document.getElementById("gender").value = "";
        document.getElementById("weight").value = "";
        document.getElementById("height").value = "";
        document.getElementById("totalCalories").removeAttribute('disabled')
    }

}


const validateForm = () => {
    debugger
    var ageValid = document.forms["myForm"]["age"].value;
    if (ageValid == "") {
        alert("Not a valid Age")
        return false;
    }

    var genderValid = document.forms["myForm"]['input[name="genderS"]:checked'].value;
    if (genderValid == "" || genderValid == null) {
        alert("Not a valid Gender")
        return false;
    }    

    var weightValid = document.forms["myForm"]["weight"].value;
    if (weightValid == "") {
        alert("Not a valid Weight")
        return false;
    }

    var heightValid = document.forms["myForm"]["height"].value;
    if (heightValid== "") {
        alert("Not a valid Age")
        return false;
    }
}