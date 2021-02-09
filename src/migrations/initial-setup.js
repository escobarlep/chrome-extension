import db from '../infra/db.js'

export default function(storage, version) {
  if ( storage.getItem('app-max-migration') === version ) return
  
  db.forEach(item => {
    const itemName = item.name.trim().replace(' ','-').toLowerCase()
    storage.setItem(`app-max-templ-${itemName}`, JSON.stringify(item))
  })
  
  storage.setItem('app-max-migration', version)
}