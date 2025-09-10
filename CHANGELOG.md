# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic
Versioning](https://semver.org/spec/v2.0.0.html).

--------------------------------------------------------------------------------

## [Unreleased]

### Added

- Added the `--experimental-vm-modules` to the `npm test` script to allow Jest
  to import `stylelint`.

### Changed

- Upgraded the Node.js version listed in `engines` to be between `24.2.0` and
  `25.0.0`.
- Upgraded `stylelint` and its related plugins to the latest versions.
- Upgraded `jest` to the latest version.
- Upgraded `prettier` to the latest version.
- Simplified the unit test for deprecated Stylelint rules.

### Fixed

- Updated the Styelint configuration unit tests to be `async` (as a result of
  version upgrades).

--------------------------------------------------------------------------------

## [1.1.0] - 2023-10-12

### Changed

- Turned off the `selector-class-pattern` rule.

--------------------------------------------------------------------------------

## [1.0.0] - 2023-10-12

### Added

- Everything.

--------------------------------------------------------------------------------

[Unreleased]: https://github.com/dfranklinau/stylelint-config-dfranklinau/compare/v1.1.0...HEAD
[1.1.0]: https://github.com/dfranklinau/stylelint-config-dfranklinau/releases/tag/v1.1.0
[1.0.0]: https://github.com/dfranklinau/stylelint-config-dfranklinau/releases/tag/v1.0.0
