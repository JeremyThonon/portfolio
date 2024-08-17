interface Content {
  class?: string;
  span: custom;
  title: custom;
  paragraph: custom;
  button: custom;
}

interface custom {
  text: string;
  display: boolean;
}

export type { Content as ContentType };
