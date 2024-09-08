export interface Content {
  class: string;
  id: string;
  span: custom;
  title: custom;
  subtitle: custom;
  decorative: boolean;
  paragraph: custom;
  button: customButton;
}

interface custom {
  text: string;
  display: boolean;
}

interface customButton {
  text: string;
  display: boolean;
  href: string;
}
