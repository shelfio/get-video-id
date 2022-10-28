# @shelf/get-video-id [![CircleCI](https://app.circleci.com/pipelines/github/shelfio/get-video-id)](https://app.circleci.com/pipelines/github/shelfio/get-video-id)![](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)

Wrapper around https://github.com/radiovisual/get-video-id to return video service query params (youtube `starts from` as an example )

## Install

```shell script
yarn add @shelf/get-video-id
```

## Usage

```js
import getVideoId from '@shelf/get-video-id';

getVideoId('https://youtu.be/LqTuxFElqag');
/** => {
  id: 'LqTuxFElqag',
  service: 'youtube',
  embedURL: 'https://www.youtube.com/embed/LqTuxFElqag'
} **/

getVideoId('https://youtu.be/LqTuxFElqag?t=7939'); // With time param
/** => {
  id: 'LqTuxFElqag',
  service: 'youtube',
  embedURL: 'https://www.youtube.com/embed/LqTuxFElqag?start=7939'
} **/

getVideoId('https://vimeo.com/259411563#t=50s');
/** => {
  id: '259411563',
  service: 'vimeo',
  embedURL: 'https://player.vimeo.com/video/259411563'
} **/
```

## API

Documentation is available [here](https://github.com/radiovisual/get-video-id)

## Publish

```sh
$ git checkout master
$ yarn version
$ yarn publish
$ git push origin master --tags
```

## License

MIT © [Shelf](https://shelf.io)
