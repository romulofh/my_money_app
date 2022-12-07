const express = require('express')

module.exports = function(server) {
  //Url Base
  const router = express.Router()
  server.use('/api', router)

  //Rotas do Ciclo de pagamento
  const BillingCycle = require('../api/billingCycle/billingCycleService')
  BillingCycle.register(router, '/billingCycles')
}
