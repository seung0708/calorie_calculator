class User {
    constructor(id,age, gender, weight, height, goal_level, total_calories) {
        this.id = id;
        this.age = age;
        this.gender = gender;
        this.weight = weight;
        this.height = height;
        this.goal_level = goal_level;
        this.total_calories = total_calories;
    }

    displayInfo() {
      let info = document.getElementById("results")

      info.innerHTML += 
      `
          <p id="totalResults" hidden> With a goal of ${this.goal_level}, 
          ${this.total_calories} calories is the minimum calorie intake for a ${this.age} year old ${this.male} weighing in at ${this.weight} lbs and ${this.height} inches tall.</p>  
      `

    }


    viewResults() {
      const viewResults = document.getElementById("calorieValues")

       viewResults.innerHTML +=
        `
         <ul id="allValues" class="list">
            <li>Age:    ${this.age}</li>
            <li>Gender:   ${this.gender}</li>
            <li>Weight(lbs):  ${this.weight}</li>
            <li>Height(inches)  ${this.height}</li>
            <li>Goal:   ${this.goal_level}</li>
            <li>Calories:   ${this.total_calories}</li>
         </ul>  
        `
    }

}