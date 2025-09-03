const userList = document.getElementById("user-list");
const template = document.getElementById("user-card-template");

async function fetchUsers() {
  try {
    userList.innerHTML = "<p>Loading...</p>";
    const res = await fetch("https://randomuser.me/api/?results=20");
    const data = await res.json();
    const users = data.results;

    userList.innerHTML = ""; 

    users.forEach(user => {
    
      const clone = template.content.cloneNode(true);


      clone.querySelector("img").src = user.picture.large;
      clone.querySelector(".name").textContent = `${user.name.first} ${user.name.last}`;
      clone.querySelector(".email").textContent = user.email;
      clone.querySelector(".phone").textContent = user.phone;

      userList.appendChild(clone);
    });
  } catch (error) {
    userList.innerHTML = "<p style='color:red'>데이터를 불러올 수 없습니다.</p>";
  }
}

fetchUsers();
