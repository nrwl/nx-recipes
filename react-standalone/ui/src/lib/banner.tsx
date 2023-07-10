export interface BannerProps {
  text: string;
}

export function Banner(props: BannerProps) {
  return <header>{props.text}</header>;
}
