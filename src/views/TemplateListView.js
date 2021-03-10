export default {
  id: '#template-list-view',
  _data: null,
  setData: function(data) {
    this._data = data
  },
  template: function() {
    if (this._data) {
      return `
        <div class="row">
          <div class="col s12">
            <input placeholder="Pesquisar Templates" type="text" id="search-templ">
          </div>
          <ul class="collection">
            ${ 
              this._data
                .map(item => `<li data-id="${item.id}" style="cursor:pointer" class="collection-item find-template">${item.name}</li>`)
                .join('')
            }
          </ul>
        </div>`
    }
    
    return '<div class="row"><p class="red-text"> TEMPLATES NÃO ENCONTRADOS <i class="material-icons red-text">error</i></p></div>'
  },
  _activateSearch: function(dom) {
    var inputSearch = dom.querySelector('#search-templ')

    inputSearch.addEventListener('input', function(){
      var word = new RegExp(this.value.trim().toLowerCase(), 'gi')
      const templates = dom.querySelectorAll('.find-template')

      templates.forEach(function(el) {
        const content = el.innerText.trim().toLowerCase()
        el.hidden = !word.test(content)
        console.log(!word.test(content)) // for some reason, if I remove this console.log the search stops working. Long life to the JS
      })
    })
  },
  postRender: function(dom) {
    this._activateSearch(dom)
  }
}
