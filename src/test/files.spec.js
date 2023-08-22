import { describe, it } from 'mocha'
import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'

chai.use(chaiHttp)
const url = 'http://localhost:3000/v1'

describe('File list (endpoint)', () => {
  it('/files/list (success)', async () => {
    const res = await chai.request(url).get('/files/list')
    expect(res, 'Status 200').to.have.status(200)
    expect(res.body, 'Should exists the "files" key').to.has.key('files')
    expect(res.body.files, 'Should be an array').to.be.an('array')
  })
})

describe('File data (endpoints)', () => {
  it('/files/data (success)', async () => {
    const res = await chai.request(url).get('/files/data')
    expect(res, 'Status 200').to.have.status(200)
    expect(res.body, 'Should be an array').to.be.an('array')
  })

  it('/files/data?fileName=test2.csv (success)', async () => {
    const res = await chai.request(url).get('/files/data?fileName=test2.csv')
    expect(res, 'Status 200').to.have.status(200)
    expect(res.body[0], 'Should exists the "file" key').to.have.property('file')
    expect(res.body[0], 'Should exists the "lines" key').to.have.property('lines')
    expect(res.body[0].lines, 'Should be an array').to.be.an('array')
  })

  it('/files/data?fileName=fileNotExists.csv (fail)', async () => {
    const res = await chai.request(url).get('/files/data?fileName=fileNotExists.csv')
    expect(res, 'Status 404').to.have.status(404)
  })
})
