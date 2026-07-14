module.exports = {
  publishers: [
    {
      name: '@electron-forge/publisher-github',
      config: {
        repository: {
          owner: 'nexuzcode-metanexuz',
          name: 'electron-qrwifi-app'
        },
        prerelease: false,
        draft: true
      }
    }
  ]
}