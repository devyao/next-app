"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";
import styles from "./global-error.module.scss";
import { Button, Result } from "antd";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <html>
      <body>
        <div className={styles["P-global-error"]}>
          <Result
            status="500"
            title="500"
            subTitle="服务器错误~"
            extra={
              <Button type="primary" onClick={() => reset()}>
                重试
              </Button>
            }
          />
        </div>
      </body>
    </html>
  );
}
