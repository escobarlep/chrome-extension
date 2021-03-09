import db from '../infra/db.js'

export default function(storage, version) {
  if ( storage.getItem('app-max-migration') === version ) return
  storage.setItem(`app-max-templates`, JSON.stringify(db))
  storage.setItem('app-max-migration', version)
}