import MainWindowView from '/src/views/MainWindowView.js'

export default {
  view: MainWindowView,
  initializer: function(mainApp){
    this._mainApp = mainApp
    this.updateView()
  },
  updateView: function(){
    this._mainApp.renderView(this.view)
  }
}
