"use client";

import { Suspense } from "react";
import { BottomNav } from "@/components/shared/bottom-nav";

export function NavbarShell() {
  return (
    <Suspense fallback={null}>
      <BottomNav />
    </Suspense>
  );
}
