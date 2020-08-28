module.exports = {
  "roots": ["<rootDir>/src"],
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  "testMatch": [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  "moduleNameMapper": {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js"
  },
  "moduleFileExtensions": ["ts", "tsx", "js", "jsx", "json", "node"],
  "testEnvironment": "node",
  "globals": {
    "ts-jest": {
      "diagnostics": {
        "warnOnly": true
      }
    }
  },
  
  "snapshotSerializers": ["enzyme-to-json/serializer"],
  "setupFilesAfterEnv": ["<rootDir>/src/setupEnzyme.ts"]
}