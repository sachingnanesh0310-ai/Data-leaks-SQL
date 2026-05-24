// AES-256 Style Encryption Simulation

function encryptData(data) {
    return btoa(data + "_AES256");
}

function decryptData(data) {
    return atob(data).replace("_AES256", "");
}

// Fake Database

const users = [
    {
        username: encryptData("sachin"),
        password: encryptData("031008")
    }
];

// Capability Code

const capabilityCode = "SECURE_ACCESS_2026";

// SQL Injection Patterns

const sqlPatterns = [
    /(\%27)|(\')|(\-\-)|(\%23)|(#)/i,
    /UNION(.*?)SELECT/i,
    /DROP TABLE/i,
    /OR 1=1/i
];

// Input Validation

function validateInput(input) {

    input = input.trim();

    for(let pattern of sqlPatterns){

        if(pattern.test(input)){
            return false;
        }
    }

    const blockedPatterns = [
        "'",
        '"',
        ";",
        "--"
    ];

    for(let item of blockedPatterns){

        if(input.includes(item)){
            return false;
        }
    }

    return true;
}

// Attack Logging

function logAttack(input){

    const logList =
        document.getElementById("logList");

    const li =
        document.createElement("li");

    li.textContent =
        "⚠ SQL Injection Attempt: " + input;

    logList.appendChild(li);
}

// Secure Login

function secureLogin(){

    const username =
        document.getElementById("username").value;

    const password =
        document.getElementById("password").value;

    const capability =
        document.getElementById("capability").value;

    const result =
        document.getElementById("result");

    // SQL Injection Check

    if(!validateInput(username) ||
       !validateInput(password)){

        result.style.color = "red";

        result.innerHTML =
            "SQL Injection Attempt Blocked!";

        logAttack(username + " | " + password);

        return;
    }

    // Capability Code Check

    if(capability !== capabilityCode){

        result.style.color = "orange";

        result.innerHTML =
            "Invalid Capability Code!";

        return;
    }

    // Encryption Validation

    const encryptedUsername =
        encryptData(username);

    const encryptedPassword =
        encryptData(password);

    const validUser = users.find(user =>
        user.username === encryptedUsername &&
        user.password === encryptedPassword
    );

    // Final Result

    if(validUser){

        result.style.color = "lightgreen";

        result.innerHTML =
            "Secure Login Successful!";
    }
    else{

        result.style.color = "red";

        result.innerHTML =
            "Invalid Credentials!";
    }
}