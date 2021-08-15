module.exports = {
  roots: ['<rootDir>'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFiles: ['<rootDir>/config/setup.js'],
  testEnvironment: 'jsdom',
  globals: {
    'ts-jest': {
      tsconfig: 'jest.tsconfig.json'
    }
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  testURL: 'http://localhost',
  testRegex: '.*\\.(test|spec)\\.tsx?$',
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg)$': '<rootDir>/__mocks__/fileMock.js'
  },
  snapshotSerializers: ['enzyme-to-json/serializer']
}
