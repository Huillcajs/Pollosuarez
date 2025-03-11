class HeaderComponent extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <header>
                <div class="logo">
                    <img src="../img/polleria.png" alt="Logo de la pollería">
                </div>
                <nav>
                    <ul class="nav-links">
                        <li><a href="index.html">Inicio</a></li>
                        <li><a href="menu.html">Menú</a></li>
                        <li><a href="servicio.html">Servicio</a></li>
                        <li><a href="nosotros.html">Nosotros</a></li>
                    </ul>
                </nav>
                <a href="contactanos.html" class="contact-button">📞 Contáctanos</a>
            </header>
        `;
    }
}

// Registra el componente
customElements.define("header-component", HeaderComponent);
