class UI {

    constructor() {

        this.profile = document.getElementById('profile');

    }

    // Display profile in ui

    showProfile(user) {

        this.profile.innerHTML = `
         <div class="card card-board mb-3">
             <div class="row">
                 <div class="col-md-3">
                     <img src="${user.avatar_url}" alt="" class="img-fluid mb-2">
                      <a href="${user.html_url}" target="blank" class="btn btn-primary btn-block">View Profile</a>
                 </div>
                 <div class="col-md-9">
                     <span class="col-md-9">
                         <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                         <span class="badge badge-secondary">Public Gists: ${user.gists}</span>
                         <span class="badge badge-success">Public Followers: ${user.followers}</span>
                         <span class="badge badge-info">Public Following: ${user.following}</span>
                         <br><br>
                         <ul class="list-group"></ul>
                         <li class="list-group-item"><b>Company:</b> ${user.company}</li>
                         <li class="list-group-item"><b>Website/Blog:</b> ${user.blog}</li>
                         <li class="list-group-item"><b>Location:</b> ${user.location}</li>
                         <li class="list-group-item"><b>Member Since:</b> ${user.created_at}</li>
                     </span>
                 </div>
                </div>
                <h3 class="page-heading mb-3">Latest Repos</h3>
                <div id="repos"></div>
         </div>   
        `;

    }

    showRepo(repos) {
        let output = '';

        repos.forEach(function(repo) {
            output += `<div class="card card-body mb-2">
    <div class="row">
        <div class="col-md-6">
            <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer"> ${repo.name}</a>
        </div>
        <div class="col-md-6">
                <span class="badge badge-primary">Stars: ${repo.stargazer_count}</span>
                <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
                <span class="badge badge-success">Forks Count: ${repo.forks_count}</span>
        </div>
    </div>
</div>
`
        });

        // Output repos
        document.getElementById('repos').innerHTML = output;
    }

    // Show alert message

    showAlert(message, className) {
        // Clear any remaining alerts
        this.clearAlert();
        // Create Div
        const div = document.createElement('div');
        // Add classes
        div.className = className;
        // Add text
        div.appendChild(document.createTextNode(message));
        // Get parent
        const container = document.querySelector('.searchContainer');
        // Get search box
        const search = document.querySelector('.search');
        // Insert Alert
        container.insertBefore(div, search);

        // Timeout after 3000 ms

        setTimeout(() => {
            this.clearAlert();
        }, 3000);

    }

    // Clear alert message

    clearAlert() {
        const currentAlert = document.querySelector('.alert');

        if (currentAlert) {
            currentAlert.remove();
        }
    }

    // Clear Profile

    clearProfile() {

        this.profile.innerHTML = '';
    }

}