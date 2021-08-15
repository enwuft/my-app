const enzyme = require('enzyme')
const Adapter = require('enzyme-adapter-react-16')

process.env.APP_THEME = 'default'

enzyme.configure({ adapter: new Adapter() })
