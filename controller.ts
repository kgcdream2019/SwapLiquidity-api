

let controller: any = {}
controller.getTest = (req: any, res: any, next: any) => {
  res.send({
    status: true,
    data: 'testing Ok'
  })
}
module.exports = controller
