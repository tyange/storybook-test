export class CustomParagraph extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <p>hi</p>
    `;
  }
}

customElements.define("custom-paragraph", CustomParagraph);
