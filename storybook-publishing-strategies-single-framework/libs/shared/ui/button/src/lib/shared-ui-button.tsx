export interface SharedUiButtonProps {
  ctaText: string;
}

export function SharedUiButton(props: SharedUiButtonProps) {
  return <button>{props.ctaText}</button>;
}

export default SharedUiButton;
