declare module "*.module.scss" {
  const classNames: { [key: string]: string };
  export default classNames;
}

// declare module "*.module.scss" {
//   interface IClassNames {
//     [className: string]: string;
//   }
//   const classNames: IClassNames;
//   export = classNames;
// }
