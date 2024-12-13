// Agregar funcionalidad de cerrar sesión
const logoutButton = document.createElement("button");
logoutButton.textContent = "Cerrar Sesión";
logoutButton.id = "logoutButton";
logoutButton.style.position = "absolute";
logoutButton.style.top = "10px";
logoutButton.style.right = "10px";
logoutButton.style.padding = "10px 15px";
logoutButton.style.backgroundColor = "#f44336";
logoutButton.style.color = "white";
logoutButton.style.border = "none";
logoutButton.style.borderRadius = "5px";
logoutButton.style.cursor = "pointer";
document.body.appendChild(logoutButton);

logoutButton.addEventListener("click", () => {
    localStorage.clear();
    window.location.href = "login.html";
    alert("Has cerrado sesión exitosamente.");
});
