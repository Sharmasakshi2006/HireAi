document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // SIGNUP
    // =========================
    const signupForm = document.getElementById("signupForm");

    if (signupForm) {
        signupForm.addEventListener("submit", async (event) => {
            event.preventDefault();

            const username = document.getElementById("username").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            try {
                const response = await fetch(
                    "https://hireai-1-6nz5.onrender.com/api/signup/",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            username: username,
                            email: email,
                            password: password,
                        }),
                    }
                );

                const data = await response.json();

                console.log(data);

                if (response.ok) {
                    alert("Signup successful!");
                    window.location.href = "login.html";
                } else {
                    alert(data.error || "Signup failed");
                }
            } catch (error) {
                console.error("Signup Error:", error);
                alert("Server error during signup");
            }
        });
    }

    // =========================
    // LOGIN
    // =========================
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", async (event) => {
            event.preventDefault();

            const email = document.getElementById("loginEmail").value;
            const password = document.getElementById("loginPassword").value;

            try {
                const response = await fetch(
                    "https://hireai-1-6nz5.onrender.com/api/login/",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            email: email,
                            password: password,
                        }),
                    }
                );

                const data = await response.json();

                console.log(data);

                if (response.ok) {
                    alert("Login successful!");

                    localStorage.setItem("user", JSON.stringify(data));

                    window.location.href = "dashboard.html";
                } else {
                    alert(data.error || "Login failed");
                }
            } catch (error) {
                console.error("Login Error:", error);
                alert("Server error during login");
            }
        });
    }

});