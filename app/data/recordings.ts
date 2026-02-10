export interface Recording {
  readonly id: string;
  readonly title: string;
  readonly date: string;
  readonly thumbnailUrl: string;
  readonly youtubeUrl: string;
}

export const recordings: readonly Recording[] = [];
