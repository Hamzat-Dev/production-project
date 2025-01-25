declare module "*.module.scss" {
  const classNames: { [key: string]: string };
  export default classNames;
}

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg" {
  import React from "react";
  const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}
// declare module "*.module.scss" {
//   interface IClassNames {
//     [className: string]: string;
//   }
//   const classNames: IClassNames;
//   export = classNames;
// }
