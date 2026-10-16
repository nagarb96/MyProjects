// For Confirm file is connected to dashboad html
console.log("Connected")

const statusText = document.getElementById("status");
const usersContainer = document.getElementById("usersContainer");
const refreshBtn = document.getElementById("refreshBtn");
const searchInput = document.getElementById("searchInput");
const clearSearchBtn = document.getElementById("clearSearchBtn");
const sortBtn = document.getElementById("sortBtn");
const apiUrl = "https://jsonplaceholder.typicode.com/users";

let allUsers = [];
let isSortedAZ = false;
let currentSearch = "";


refreshBtn.addEventListener("click", () => {
    searchInput.value = "";
    currentSearch = "";
    isSortedAZ = false;
    sortBtn.classList.remove("active");
    sortBtn.textContent = "Sort by Name A–Z";

    loadUsers();
    
});

async function loadUsers() {
    try {
        refreshBtn.disabled = true;
        searchInput.disabled = true;
        clearSearchBtn.disabled = true;
        refreshBtn.textContent = "Loading...";
        statusText.textContent = "Loading users...";
        statusText.classList.remove("error");
        usersContainer.innerHTML = "";
    await new Promise(resolve => setTimeout(resolve, 1000));
    const response = await fetch(apiUrl);

    if(!response.ok) {
        throw new Error("Failed to fetch users");
    }

    const users = await response.json();
    allUsers = users;
    displayUsers(allUsers);        
    statusText.textContent = "Users loaded successfully!";
    
    
    }
    

    catch(error){
        console.log("Error:", error.message);
        statusText.textContent = "Error loading users. Please try again.";
        statusText.classList.add("error");
        usersContainer.innerHTML = "";
        allUsers = [];
    }

    finally{
        refreshBtn.disabled = false;
        searchInput.disabled = false;
        clearSearchBtn.disabled = false;
        refreshBtn.textContent = "Refresh Users"
    }
}

loadUsers();


searchInput.addEventListener("input", function() {
    const searchValue = searchInput.value.toLowerCase();
    currentSearch = searchValue;
    statusText.classList.remove("error");
    if (allUsers.length === 0) {
    return;
}
    if (searchValue === "") {
    if (isSortedAZ) {
        const sortedUsers = [...allUsers].sort(function(a, b) {
            return a.name.localeCompare(b.name);
        });
        displayUsers(sortedUsers);
    } else {
        displayUsers(allUsers);
    }

    statusText.textContent = "Users loaded successfully!";
    return;
}

    const filteredUsers = filterUsers(searchValue);

    if (isSortedAZ) {
    filteredUsers.sort(function(a, b) {
        return a.name.localeCompare(b.name);
    });
    }

    displayUsers(filteredUsers);        
    if(filteredUsers.length === 0){
        statusText.textContent = "No users found.";
    } else {
        statusText.textContent = "Users found: " + filteredUsers.length;
    }
});



function displayUsers(users) {
    usersContainer.innerHTML = "";

    users.forEach(function(user) {
        const card = document.createElement("div");
        card.classList.add("user-card");

        const name = document.createElement("h2");
        name.textContent = user.name;

        const email = document.createElement("p");
        email.textContent = user.email;

        const address = document.createElement("p");
        address.textContent = user.address.city;

        card.appendChild(name);
        card.appendChild(email);
        card.appendChild(address);

        usersContainer.appendChild(card);
    });
}

clearSearchBtn.addEventListener("click", function() {
    searchInput.value = "";
    currentSearch = "";
    if (allUsers.length === 0) {
    usersContainer.innerHTML = "";
    statusText.textContent = "No users available. Please refresh.";
    return;
}
    if (isSortedAZ) {
        const sortedUsers = [...allUsers].sort(function(a, b) {
            return a.name.localeCompare(b.name);
        });

        displayUsers(sortedUsers);
    } else {
        displayUsers(allUsers);
    }
    statusText.textContent = "Users loaded successfully!";
});



sortBtn.addEventListener("click", function() {
    if (allUsers.length === 0) {
    statusText.textContent = "No users available. Please refresh.";
    return;
}
    isSortedAZ = !isSortedAZ;
    sortBtn.classList.toggle("active", isSortedAZ);
    
    if (isSortedAZ) {
    sortBtn.textContent = "Show Original Order";

    const sortedUsers = [...allUsers].sort(function(a, b) {
        return a.name.localeCompare(b.name);
    });

    displayUsers(sortedUsers);
} else {
    sortBtn.textContent = "Sort by Name A–Z";

    if (currentSearch === "") {
        displayUsers(allUsers);
    } else {
        const filteredUsers = filterUsers(currentSearch);

        if (filteredUsers.length > 0) {
            displayUsers(filteredUsers);
        } else {
            displayUsers([]);
        }
    }
}
});

function filterUsers(searchValue) {
    return allUsers.filter(function(user) {
        return user.name.toLowerCase().includes(searchValue) ||
               user.email.toLowerCase().includes(searchValue) ||
               user.address.city.toLowerCase().includes(searchValue);
    });
}