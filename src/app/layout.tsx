import type { Metadata } from "next";
import "../styles/globals.scss";
import StyledComponentsRegistry from "../lib/AntdRegistry";
import { ConfigProvider } from "antd";

export const metadata: Metadata = {
  title: "VTOS - Vietnam Terminal Operating System",
  description: "Comprehensive Terminal Operating System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: '#1890ff',
                fontFamily: '"Roboto", sans-serif',
              },
            }}
          >
            {children}
          </ConfigProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
