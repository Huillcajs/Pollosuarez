class Header extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <header>
                <div class="header-container">
                    <div class="logo">
                        <img src="../img/polleria.png" alt="Logo de la pollería">
                    </div>
                    <nav class="nav-links">
                        <ul>
                            <li><a href="index.html">Inicio</a></li>
                            <li><a href="menu.html">Menú</a></li>
                            <li><a href="servicio.html">Servicio</a></li>
                            <li><a href="nosotros.html">Nosotros</a></li>
                        </ul>
                    </nav>
                    <a href="contactanos.html" class="contact-button">📞 Contáctanos</a>
                    <div class="hamburger-menu">&#9776;</div>
                </div>
                <div class="mobile-nav">
                    <ul>
                        <li><a href="index.html">Inicio</a></li>
                        <li><a href="menu.html">Menú</a></li>
                        <li><a href="servicio.html">Servicio</a></li>
                        <li><a href="nosotros.html">Nosotros</a></li>
                    </ul>
                </div>
            </header>
        `;
    }

    connectedCallback() {
        const hamburger = this.querySelector(".hamburger-menu");
        const mobileNav = this.querySelector(".mobile-nav");

        hamburger.addEventListener("click", () => {
            mobileNav.classList.toggle("active");
        });
    }
}

customElements.define("header-component", Header);

