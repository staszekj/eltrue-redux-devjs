module.exports = {
  "verbose": true,
  "testURL": "http://localhost:8888/",
  "bail": true,
  "collectCoverage": true,
  "coverageDirectory": "coverage",
  "moduleNameMapper": {
    "\\.(jpe?g|png|gif|eot|otf|webp|svg|ttf|woff2?|mp[34]|webm|wav|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less|s[ac]ss|styl)$": "<rootDir>/__mocks__/styleMock.js"
  },
  "moduleFileExtensions": [
    "js",
    "jsx"
  ],
  "moduleDirectories": [
    "node_modules"
  ],
  "setupTestFrameworkScriptFile": "<rootDir>/setupEnzyme.js"
};
