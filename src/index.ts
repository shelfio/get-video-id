import getVideoId from 'get-video-id';

export type VideoMeta = ReturnType<typeof getVideoId> & {
  embedURL?: string;
};

export default function (url: string): VideoMeta {
  const meta = getVideoId(url);

  if (meta.service === 'youtube') {
    const uri = new URL(url);
    const youtubeURL = new URL(`https://www.youtube.com/embed/${meta.id}`);

    if (uri.searchParams.has('t')) {
      youtubeURL.searchParams.set('start', uri.searchParams.get('t')!);
    }

    return {
      ...meta,
      embedURL: youtubeURL.toString(),
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
