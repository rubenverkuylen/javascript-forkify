class SearchView {
  _parentEl = document.querySelector(".search");

  getQuery() {
    const query = this._parentEl.querySelector(".search__field").value;
    this._clearInput();
    return query;
  }

  // private methodd
  _clearInput() {
    this._parentEl.querySelector(".search__field").value = "";
  }

  // Publisher
  addHandlerSearch(handler) {
    this._parentEl.addEventListener("submit", function (e) {
      e.preventDefault();
      handler();
    });
  }
}
// export instance
export default new SearchView();
