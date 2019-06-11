const template = document.createElement('template');

template.innerHTML = `
  <style>
    button {
      background-color: #ff9900;
      padding: 16px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s;
    }
    button:hover {
      background-color: #E08600;
    }
  </style>
  <button>
    <slot></slot>
  </button>
`;

class FancyButton extends HTMLElement {

  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }


  connectedCallback() {
    // this.addEventListener('click', (e) => {
    //   console.log('Fancy button clicked...');
    //   e.preventDefault();
    //   e.stopPropagation();
    // });

    const btn = this.shadowRoot.querySelector('button');
    btn.addEventListener('click', (e) => {
      console.log('Button element clicked...');
      e.preventDefault();
      e.stopPropagation();
    });
  }

  


  disconnectedCallback() {

  }
}

window.customElements.define('fancy-button', FancyButton);