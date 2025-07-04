const video = document.getElementById("promoVideo");
const playBtn = document.getElementById("customPlayBtn");
let hasUnmuted = false;

// ▶️ Auto play mutado ao aparecer na tela
const observer = new IntersectionObserver(
    ([entry]) => {
        if (entry.isIntersecting && video.paused) {
            video.play().catch((e) => console.warn("Autoplay bloqueado:", e));
        }
    },
    { threshold: 0.6 }
);
observer.observe(video);

// 🔈 Desmutar e ocultar botão personalizado no primeiro clique
function unmuteAndPlay() {
    if (!hasUnmuted) {
        video.muted = false;
        hasUnmuted = true;
        playBtn.style.display = "none";
    }
    video.play();
}

playBtn.addEventListener("click", unmuteAndPlay);

// Opcional: permite ativar som clicando diretamente no vídeo (apenas 1 vez)
video.addEventListener("click", () => {
    if (!hasUnmuted) unmuteAndPlay();
});


// PROJETOS

document.addEventListener("DOMContentLoaded", function () {
    const pdfModal = document.getElementById("pdfModal");
    const iframe = document.getElementById("pdfViewer");
    const pdfCloseBtn = document.querySelector(".close-btn");

    const descModal = document.getElementById("descricaoModal");
    const descTitle = document.getElementById("descricaoTitle");
    const descText = document.getElementById("descricaoText");
    const descCloseBtn = document.querySelector(".descricao-close");

    // Botão "Imagens"
    document.querySelectorAll(".btn-imagens").forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const card = btn.closest(".card_proj");
            const pdfUrl = card.getAttribute("data-pdf");
            iframe.src = pdfUrl + "#toolbar=0&navpanes=0&scrollbar=0";
            pdfModal.style.display = "flex";
        });
    });

    // Botão "Descrição"
    document.querySelectorAll(".btn-descricao").forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const card = btn.closest(".card_proj");
            descTitle.textContent = card.getAttribute("data-title");
            descText.innerHTML = card.getAttribute("data-descricao-html");
            descModal.style.display = "flex";
        });
    });

    // Fechar modal PDF
    pdfCloseBtn.addEventListener("click", () => {
        pdfModal.style.display = "none";
        iframe.src = "";
    });

    pdfModal.addEventListener("click", (e) => {
        if (e.target === pdfModal) {
            pdfModal.style.display = "none";
            iframe.src = "";
        }
    });

    // Fechar modal descrição
    descCloseBtn.addEventListener("click", () => {
        descModal.style.display = "none";
    });

    descModal.addEventListener("click", (e) => {
        if (e.target === descModal) {
            descModal.style.display = "none";
        }
    });

    // ESC fecha os modais
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            pdfModal.style.display = "none";
            iframe.src = "";
            descModal.style.display = "none";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});