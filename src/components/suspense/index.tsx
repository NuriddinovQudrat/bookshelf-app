import { LinearProgress } from "@mui/material";
import { Suspense as ReactSuspense, type ReactNode } from "react";

interface ISuspense {
  children: ReactNode;
}

export const Suspense = ({ children }: ISuspense) => (
  <ReactSuspense fallback={<LinearProgress />}>{children}</ReactSuspense>
);
