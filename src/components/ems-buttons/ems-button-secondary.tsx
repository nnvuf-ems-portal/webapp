import { Button } from "@headlessui/react";
import clsx from "clsx";
import { Fragment } from "react";
import { EmsButtonProps } from "./ems-button-props";

export const EmsButtonSecondary = (props: EmsButtonProps) => {
  const { children, onClick } = props;
  return (
    <Button as={Fragment}>
      {({ hover, active }) => (
        <button
          type={props.type || "button"}
          className={clsx(
            "rounded text-white",
            active && "bg-secondary-700",
            !active && hover && "bg-secondary-500",
            !active && !hover && "bg-secondary",
            'transition-colors duration-300',
            props.className
          )}
          onClick={onClick}
        >
          {children}
        </button>
      )}
    </Button>
  );
};

export const EmsButtonOutlineSecondary = (props: EmsButtonProps) => {
  const { children, onClick } = props;
  return (
    <Button as={Fragment}>
      {({ hover, active }) => (
        <button
          type={props.type || "button"}
          className={clsx(
            "rounded text-secondary border border-secondary",
            active && "bg-white-700",
            !active && hover && "bg-secondary-500 border-secondary",
            !active && !hover && "bg-white",
            'transition-colors duration-300',
            props.className
          )}
          onClick={onClick}
        >
          {children}
        </button>
      )}
    </Button>
  );
};
