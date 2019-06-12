const fancyLabelTmp = document.createElement('template');

fancyLabelTmp.innerHTML = `
  <style>
    :host {
      font-weight: 900;
      display: block;
      margin: 1rem 0;
    }
  </style>
  <slot></slot>
`;

class FancyLabel extends HTMLElement {

  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(fancyLabelTmp.content.cloneNode(true));
  }


  connectedCallback() {

  }

  disconnectedCallback() {

  }
}

window.customElements.define('fancy-label', FancyLabel);