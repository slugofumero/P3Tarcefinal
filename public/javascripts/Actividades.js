class Actividades extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' }).innerHTML = `
        <style>

        .contenedor {
            display: flex;
            align-items: flex-start; 
            margin: 50px;
        }

        .imagen-redondeada {
            width: 800px;
            border-radius: 15px; 
            margin-right: 20px; 
        }

        .texto {
            flex-grow: 1;
        }
        .titulo {
            font-family: Arial, sans-serif;
            font-size: 40px;
        }
        .cuerpo {
            font-family: Arial, sans-serif;
            font-size: 20px;
            text-align: justify;
            margin-right: 20px;
        }
        </style>
        <div class="actividades-content">

        </div>

        `;
        
    }

    connectedCallback() {
        this.updateContent();
    }

    static get observedAttributes() {
        return ['data-content'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'data-content') {
            this.updateContent();
        }
    }

    updateContent() {
        const content = this.getAttribute('data-content');
        const infoDiv = this.shadowRoot.querySelector('.actividades-content');
        infoDiv.innerHTML = content;
    }

    toggle() {
        this.isContentVisible = !this.isContentVisible;
        const info = this.shadowRoot.querySelector('.actividades-content');
        info.style.display = this.isContentVisible ? 'block' : 'none';
    }
}

window.customElements.define('actividades-element', Actividades);
