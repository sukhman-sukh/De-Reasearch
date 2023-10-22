import "@/styles/globals.css";
import { MantineProvider } from "@mantine/core";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
  <ThemeProvider attribute="class" enableSystem={true} defaultTheme="dark">
  <MantineProvider>
    <Component {...pageProps} />
  </MantineProvider>
  </ThemeProvider>)
}
