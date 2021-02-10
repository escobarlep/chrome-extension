'use strict'

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
          <div class="input-field col s12">
            <i class="material-icons prefix">search</i>
            <input type="text" id="search-templ">
            <label for="search-templ">Pesquisar Templates</label>
          </div>
          <ul class="collection">
            ${ 
              this._data.map(item => {
                return '<li style="cursor:pointer" class="collection-item find-template">' +
                  item + '</li>'
              }).join('')
            }
          </ul>
        </div>
      `
    }
    
    return '<div class="row"><p class="red-text"> TEMPLATES NÃO ENCONTRADOS <i class="material-icons red-text">error</i></p></div>'
  },
  _activateSearch: function(dom) {
    var inputSearch = dom.querySelector('#search-templ')

    inputSearch.addEventListener('input', function(){
      const word = new RegExp(inputSearch.value, 'gi')
      const templates = dom.querySelectorAll('.find-template')

      templates.forEach(function(el) {
        if (word.test(el.innerText)) el.hidden = false
        else el.hidden = true
      })
    })
  },
  postRender: function(dom) {
    this._activateSearch(dom)
  }
}
