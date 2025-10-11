// src/components/LinkComponent.tsx
"use client"
import Link from "next/link"
import React, { forwardRef } from "react"

// A universal safe Link wrapper (no nested <a>)
export const LinkComponent = forwardRef<
  HTMLAnchorElement,
  React.ComponentProps<typeof Link>
>(({ href, children, className, ...props }, ref) => (
  <Link
    href={href}
    className={className}
    ref={ref}
    {...props}
  >
    {children}
  </Link>
))
LinkComponent.displayName = "LinkComponent"
