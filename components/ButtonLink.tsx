import Link, { LinkProps } from "next/link";
import React from "react";

// ButtonLink type extends the `LinkProps` from 'next/link'.
// It ensures that the BackButtonLink has the same props as the "Link" component.
// It has an additional props which is optional (not required): customText, that sets the text of the button.
type ButtonLinkProps = LinkProps & {
  customText?: string;
};

export function ButtonLink({ href, customText }: ButtonLinkProps) {
  return (
    <Link
      className="px-8 py-2 bg-gray-600 rounded-full mt-10 w-52 flex items-center justify-center text-white font-bold active:opacity-85 hover:opacity-90"
      href={href} // The href from the props
    >
      {/* If there's a custom text passed as props, use it, otherwise, just use the default text: "Go back" */}
      {customText ?? "Go back"}
    </Link>
  );
}
