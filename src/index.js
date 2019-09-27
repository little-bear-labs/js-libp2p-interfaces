/* eslint-env mocha */
'use strict'

module.exports = (common) => {
  describe('interface-peer-discovery', () => {
    let discovery

    before(() => {
      discovery = common.setup()
    })

    after(() => common.teardown && common.teardown())

    it('can start the service', async () => {
      await discovery.start()
    })

    it('can start and stop the service', async () => {
      await discovery.start()
      await discovery.stop()
    })

    it('should not fail to stop the service if it was not started', async () => {
      await discovery.stop()
    })

    it('should not fail to start the service if it is already started', async () => {
      await discovery.start()
      await discovery.start()
    })
  })
}
