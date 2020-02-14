const Header = {
  render: async () => {
    const view = /*html*/`
    <header class="header">
      <h1>Header</h1>

      <a class="navbar-item" href="/#/">Home</a>
      <a class="navbar-item" href="/#/about">About</a>
    </header>
    `;
    return view;
  },
  after_render: async () => { }
}

export default Header;
