// --- LÓGICA DE TEMA CLARO / ESCURO ---
document.addEventListener("DOMContentLoaded", function () {
    const themeToggleBtn = document.getElementById("theme-toggle");
    const currentTheme = localStorage.getItem("theme");

    // Se o aluno já tinha escolhido o tema escuro antes, aplica direto
    if (currentTheme === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
    }

    // Escuta o clique no botão de alternar tema
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", function () {
            let theme = document.documentElement.getAttribute("data-theme");
            
            if (theme === "dark") {
                document.documentElement.removeAttribute("data-theme");
                localStorage.setItem("theme", "light");
            } else {
                document.documentElement.setAttribute("data-theme", "dark");
                localStorage.setItem("theme", "dark");
            }
        });
    }
});
// -------------------------------------

// ... (Mantenha todo o resto do seu código antigo do quiz.js aqui para baixo) ...