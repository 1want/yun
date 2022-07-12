var express = require('express')
var multer = require('multer')
var upload = multer({ dest: 'upload/' })
const router = express.Router()

// 上传单张图片，并指定上传时input的name为avatar
router.post('/upload', upload.single('avatar'), function (req, res, next) {
  let file = req.file

  console.log(file)

  res.send('ok')
  // req.file 对象类型，包含上传文件的基本信息
  // req.body 将具有文本域数据，如果存在的话
})

module.exports = router
