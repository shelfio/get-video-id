import getVideoId from 'get-video-id';
import {parse, stringify} from 'querystring';
import {isEmpty} from 'lodash';

export type VideoService =
  | 'youtube'
  | 'vimeo'
  | 'vine'
  | 'videopress'
  | 'microsoftstream'
  | 'tiktok'
  | 'dailymotion'
  | null;

export type VideoMeta = {
  id: string | null;
  service: VideoService;
  embedURL?: string;
};

export default function (url: string): VideoMeta {
  const meta = getVideoId(url);

  if (meta.service === 'youtube') {
    const qs: any = {};

    if (url.indexOf('?') > -1) {
      const queryParams = url.slice(url.indexOf('?') + 1);

      const {t} = parse(queryParams);

      if (t) {
        qs.start = t;
      }
    }

    const querystring = !isEmpty(qs) ? `?${stringify(qs)}` : '';

    return {
      ...meta,
      embedURL: `https://www.youtube.com/embed/${meta.id}${querystring}`,
    };
  }

  if (meta.service === 'vimeo') {
    return {
      ...meta,
      embedURL: `https://player.vimeo.com/video/${meta.id}`,
    };
  }

  return meta;
}
