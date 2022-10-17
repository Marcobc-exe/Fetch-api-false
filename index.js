
const app = document.getElementById("app");

// Web page tittle
const titleWelcome = document.createElement("h1");
titleWelcome.innerHTML = "Hello Vanilla JavaScript!";

// Web page description
const description = document.createElement("p")
description.innerHTML = `
    This is a simple website where I make use a test false API =)
`;
description.className = "description"

app.appendChild(titleWelcome);
app.appendChild(description);

// Contains user of each data in a card
const containerUserCard = document.createElement("div")
containerUserCard.className = "containerUserCard"

// Descriptive labels on user data
const nameLabel = "Name: "
const userEmailLabel = "Email: "
const userCompanyNameLabel = "Name company: "

// Fetch data user from jsonplaceholder
const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.table(data);

    // Generate elements with user data and insert it to the front end
    data.forEach((dataUsers) => {
        const userCard = document.createElement("div");
        userCard.className = "userCard";

        const name = document.createElement("p");
        name.className = "Name";

        const userEmail = document.createElement("p");
        userEmail.className = "userEmail";

        const userCompanyName = document.createElement("p");
        userCompanyName.className = "userCompanyName";

        name.innerHTML = nameLabel + dataUsers.name;
        userEmail.innerHTML = userEmailLabel + dataUsers.email;
        userCompanyName.innerHTML = userCompanyNameLabel + dataUsers.company.name;

        userCard.append(name, userEmail, userCompanyName);
        containerUserCard.append(userCard)
        app.append(containerUserCard);
    });
};

getUsers();
