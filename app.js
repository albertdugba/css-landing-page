class GitHub {
  constructor(name, repo, stars) {
    this.name = name;
    this.repo = repo;
    this.stars = stars;
  }

  getProfile() {
    return `${this.name} has ${this.repo} on github`;
  }

  alertMessage(message, className) {
    const div = document.createElement("div");
    const node = document.createTextNode(div);
    div.className = `alert alert ${className}`;
  }
}

const github = new GitHub("Brian Holt", "fem-react-state-mgt", 42);
console.log(github.getProfile());
