import MainWindowView from '/src/views/MainWindowView.js'
import HistoryController from '/src/controllers/HistoryController.js'

export default {
  view: MainWindowView,
  histController: HistoryController,
  initializer: function(mainApp){
    this._mainApp = mainApp
    this.setStorage()
    this.updateView()
  },
  setMainApp: function (mainApp) {
    this._mainApp = mainApp
  },
  setStorage: function () {
    this.histController.setStorage(this._mainApp.storage)
  },
  updateView: function(){
    const summary = this.histController.summarize()
    const formatedToday = (new Intl.DateTimeFormat('pt-br')).format(new Date())
    if (summary[formatedToday]) this.view.setData(summary[formatedToday].length)
    this._mainApp.renderView(this.view)
  }
}
