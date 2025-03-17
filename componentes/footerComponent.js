class Footer extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <footer class="footer">
            <section class="footer-container">
                <section class="footer-section logo-section">
                    <img src="/img/polleria.png" alt="Logo de la pollería" class="footer-logo">
                    <p>Disfruta del mejor pollo a la brasa con el sabor y calidad que nos caracteriza.</p>
                </section>
                
                <nav class="footer-section links-section">
                    <h4>Enlaces útiles</h4>
                    <ul>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Menú</a></li>
                        <li><a href="#">Promociones</a></li>
                        <li><a href="#">Pedidos Online</a></li>
                    </ul>
                </nav>
                
                <nav class="footer-section menu-section">
                    <h4>Menú principal</h4>
                    <ul>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Categoría Popular</a></li>
                        <li><a href="#">Menú</a></li>
                        <li><a href="#">Reservación</a></li>
                    </ul>
                </nav>
                
                <address class="footer-section contact-section">
                    <h4>Contactos</h4>
                    <p>example@email.com</p>
                    <p>+51 999 999 999</p>
                    <section class="social-icons">
                        <a href="#"><img src="/img/fb.png" alt="Facebook"></a>
                        <a href="#"><img src="/img/ig.png" alt="Instagram"></a>
                        <a href="#"><img src="/img/twitter.png" alt="Twitter"></a>
                        <a href="#"><img src="/img/YT.png" alt="YouTube"></a>
                    </section>
                </address>
            </section>
            
            <section class="footer-bottom">
                <p>Copyright © 2023 | All rights reserved</p>
            </section>
        </footer>
        `;
    }

}

customElements.define("footer-component", Footer);

