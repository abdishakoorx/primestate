"use client";
import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"

const Toaster = ({
  ...props
}) => {
  const { theme = "system" } = useTheme()

  return (
    (<Sonner
      theme={theme}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-primary group-[.toaster]:border-secondary group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-quantenary",
          actionButton:
            "group-[.toast]:bg-secondary group-[.toast]:text-black",
          cancelButton:
            "group-[.toast]:bg-tertiary group-[.toast]:text-primary",
        },
      }}
      {...props} />)
  );
}

export { Toaster }
