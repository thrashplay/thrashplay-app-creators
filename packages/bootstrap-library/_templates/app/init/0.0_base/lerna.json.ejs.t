---
to: "<%= projectDir %>/lerna.json"
---
{
  "command": {
    "publish": {
      "conventionalCommits": true,
      "message": "chore(publish): Publish latest versions [ci skip]."
    },
    "version": {
      "allowBranch": ["master", "develop"],
      "conventionalCommits": true
    }
  },
  "ignore-changes": [
    "**/*.md",
    "**/*.test.ts",
    "**/_templates/**"
  ],
  "npmClient": "yarn",
  "useWorkspaces": true,
  "packages": [
    "packages/*"
  ],
  "version": "independent"
}
