class Resource {
    constructor(url) {
        this.url = url
    }

    renderResource() {
        let resourceURL = document.getElementById("resources");

        resourceURL.innerHTML +=
        ` 
            
            <ul>
                <li>${this.url}</li>
            </ul>

        `
    }
}