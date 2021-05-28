import React from 'react';

interface Props {
  Styles: any;
  toggle: any;
  condition: boolean;
  trueMessage: string;
  falseMessage: string;
}

export default function PrimaryButton({
  Styles,
  toggle,
  condition,
  trueMessage,
  falseMessage,
}: Props) {
  return (
    <button
      type="button"
      className={`primaryButton ${Styles.ControlsButton} ${
        condition ? Styles.activeButton : Styles.recordButton
      }`}
      onClick={() => {
        toggle();
      }}
    >
      {condition ? trueMessage : falseMessage}
    </button>
  );
}
