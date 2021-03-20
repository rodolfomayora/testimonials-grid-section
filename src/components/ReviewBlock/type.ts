export type ReviewBlockProps = {
  name: string,
  lastname: string,
  pictureSource: string,
  standout: boolean,
  reviewSummary: string,
  reviewDescription: string,
  customStyle?: 1 | 2 | 3 | 4;
}

export type SetStyle = (colorSet?: number) => string;