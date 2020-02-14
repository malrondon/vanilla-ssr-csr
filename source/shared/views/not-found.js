const NotFound = {
  render : async () => {
    const view = /*html*/`
      <section class="section">
        <h1>404</h1>
      </section>
    `;
    return view;
  },
  after_render: async () => {}
}
export default NotFound;
