class HeroBeranda extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="bgimage">
        `;
  }
}

customElements.define('heroberanda-app', HeroBeranda);