import { lazy } from "react";
export const MainPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      //@ts-ignore
      // Так в работе делать нельзя .только в курсе для искусственной загрузки
      setTimeout(() => resolve(import("./MainPage")), 2000);
    })
);
