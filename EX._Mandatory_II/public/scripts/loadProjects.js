(async function getProjects() {
    const response = await fetch("/api/projects");
    const result = await response.json();
    console.log(result);


    result.projects.map(project => {
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project");

        const projectTitle = document.createElement("h2");
        projectTitle.classList.add("project-title");
        projectTitle.innerText = project.title;

        const projectPic = document.createElement("img");
        projectPic.classList.add("project-pic");
        projectPic.src = project.imageURL;

        const projectDesc = document.createElement("p");
        projectDesc.classList.add("project-desc");
        projectDesc.innerText = project.desc;

        const projectGit = document.createElement("a")
        projectGit.href = project.gitURL;
        projectGit.classList.add("project-git")
        projectGit.innerText = "Git Repo";
        
        const techTags = document.createElement("p");
        techTags.classList.add("project-tags");
        techTags.innerText = project.tech;


        projectDiv.appendChild(projectTitle);
        projectDiv.appendChild(projectPic);
        projectDiv.appendChild(projectDesc);
        projectDiv.appendChild(projectGit);
        projectDiv.appendChild(techTags);
        document.getElementById("main-content").appendChild(projectDiv);
    });
})();

