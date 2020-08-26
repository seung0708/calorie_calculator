class Resource {
    constructor(url) {
        this.url = url
    }

    renderResource() {
        let resourceURL = document.getElementById("resources");

        resourceURL.innerHTML +=
        `             
            <ul style="list-style: none;">
                <li>${this.url}</li>
            </ul>

        `

    }
}