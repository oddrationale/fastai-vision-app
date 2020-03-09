# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.0.1] - 2020-03-10
### Added
- Added fastai favicon.
- Added html title.
- Disable **Analyze** button when analyzing.

### Changed
- Formatted web files.
  - [Prettyhtml](https://github.com/Prettyhtml/prettyhtml) for html.
  - [stylelint](https://stylelint.io/) for css.
  - [Prettier](https://prettier.io/) for js.
- Formatter Python files with [black](https://github.com/psf/black).
- Changed client-side js to use [Unobtrusive JavaScript](https://en.wikipedia.org/wiki/Unobtrusive_JavaScript) style.
- Moved `<script>` tags to end of `<body>`.

### Fixed
- Fixed issue where images were not rotated correctly when displayed on the web page using [JavaScript Load Image](https://github.com/blueimp/JavaScript-Load-Image) to rotate jpg images based on the EXIF tags.
- Also rotate images based on the EXIF tag using `PIL.ImageOps.exif_transpose` after opening the image and before feeding the image to the prediction.
- Fixed issue where **Analyze** button would stay on **Analyze...** if there was an error or no image selected.
