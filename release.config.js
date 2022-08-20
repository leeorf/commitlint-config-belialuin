require("dotenv").config();

module.exports = {
  branches: ["main"],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/npm",
    "@semantic-release/github",
    "@semantic-release/changelog",
    [
      "@semantic-release/git",
      {
        assets: ["package.json", "CHANGELOG.md", "README.md"],
        message:
          "build(release): release <%= nextRelease.version %> - <%= new Date().toLocaleDateString('en-US', {year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' }) %> [skip-cd]\n\n<%= nextRelease.notes %>",
      },
    ],
  ],
};
