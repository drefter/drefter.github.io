(function() {

          const template = document.createElement('template');

          template.innerHTML = `
            <style>
            </style>
            <div>
              <div><img image/></div>
              <div><b>Name: </b><span name></span></div>
              <div><b>Description: </b><span description></span></div>
              <a link></a>
              <p details></p>
            </div>
          `;

        // Create a class for the element
        class KGWidget extends HTMLElement {

            static get observedAttributes() {
                return ['film', 'description', 'image', 'link', 'details'];
            }

          constructor() {
            // Always call super first in constructor
            super();

              //this.increment = this.increment.bind(this);
              //this.decrement = this.decrement.bind(this);

              this.attachShadow({ mode: 'open' });
              this.shadowRoot.appendChild(template.content.cloneNode(true));

              this.name         = this.shadowRoot.querySelector('[name]');
              this.description  = this.shadowRoot.querySelector('[description]');
              this.image        = this.shadowRoot.querySelector('[image]');
              this.link         = this.shadowRoot.querySelector('[link]');
              this.details      = this.shadowRoot.querySelector('[details]');
             // this.displayVal = this.shadowRoot.querySelector('span');

          }

          get film(){
            console.log("getter film")
            return this.getAttribute("film");
          }

          set film(sVal){
            console.log("setter called");
            return this.setAttribute("film", sVal);
          }

          connectedCallback() {
            console.log('Custom square element added to page.');
           // updateStyle(this);
          }

          disconnectedCallback() {
            console.log('Custom square element removed from page.');
          }

          adoptedCallback() {
            console.log('Custom square element moved to new page.');
          }

          attributeChangedCallback(name, oldValue, newValue) {
            console.log(name, oldValue, newValue);
            if(name && name === 'film'){
                this.name.innerText = newValue;
            }

            if(name && name === 'description'){
                this.description.innerText = newValue;
            }

            if(name && name === 'image'){
                this.image.setAttribute("src", newValue);
            }

            if(name && name === 'details'){
                this.details.innerText = newValue;
            }

            if(name && name === 'link'){
                this.link.setAttribute("href", newValue);
                this.link.innerText = newValue;
            }

          }

        }

        customElements.define('kg-widget', KGWidget);

})();
