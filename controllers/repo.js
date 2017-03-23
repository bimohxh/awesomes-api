const Repo = require('../models/repo')
module.exports = {
  get_latest: (req, res) => {
    // let limit = Math.min((req.query.limit || 10), 100)
    // let skip = req.query.skip || 0
    console.log('来请求了')
    Repo.query({limit: 15, offset: 0, orderByRaw: 'id desc', select: ['id', 'name', 'cover', 'description_cn']}).fetchAll().then((repo) => {
      res.send(repo)
    }).catch((err) => {
      console.error(err)
    })
  }
}
