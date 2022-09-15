export interface SharedUiNotificationProps {
  alertText: string;
  alertColor: string;
}

export function SharedUiNotification(props: SharedUiNotificationProps) {
  return <span style={{ color: props.alertColor }}>{props.alertText}</span>;
}

export default SharedUiNotification;
