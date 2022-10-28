import getVideoId from './index';

describe('getVideoId', () => {
  it('should return embded url youtube videos', function () {
    const meta = getVideoId('https://youtu.be/LqTuxFElqag');

    expect(meta.service).toEqual('youtube');
    expect(meta.id).toEqual('LqTuxFElqag');
    expect(meta.embedURL).toEqual('https://www.youtube.com/embed/LqTuxFElqag');
  });

  it('should return embded with start time params for youtube videos', function () {
    const meta = getVideoId('https://youtu.be/LqTuxFElqag?t=7939');

    expect(meta.service).toEqual('youtube');
    expect(meta.id).toEqual('LqTuxFElqag');
    expect(meta.embedURL).toEqual('https://www.youtube.com/embed/LqTuxFElqag?start=7939');
  });

  it('should return embded url for vimeo youtube videos', function () {
    const meta = getVideoId('https://vimeo.com/259411563#t=50s');

    expect(meta.service).toEqual('vimeo');
    expect(meta.id).toEqual('259411563');
    expect(meta.embedURL).toEqual('https://player.vimeo.com/video/259411563');
  });
});
