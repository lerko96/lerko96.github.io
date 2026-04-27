"use client";

import { useEffect } from "react";

export default function ArchiveRedirect() {
  useEffect(() => {
    window.location.replace("/projects/");
  }, []);

  return (
    <>
      <meta httpEquiv="refresh" content="0; url=/projects/" />
      <p className="font-mono text-sm text-[var(--color-text)]">
        This page moved.{" "}
        <a
          href="/projects/"
          className="text-[var(--color-accent-green)] underline"
        >
          /projects/
        </a>
      </p>
    </>
  );
}
