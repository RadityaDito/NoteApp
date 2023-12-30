"use client";

import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";

//Chakra UI cant be used with ShadcnUI
export function ChakraUIProvider({ children }: { children: ReactNode }) {
  return <ChakraProvider>{children}</ChakraProvider>;
}
