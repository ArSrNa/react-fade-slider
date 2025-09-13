/// <reference types="vite/client" />


// 如果需要支持普通SCSS文件（非module）
declare module '*.scss' {
  const content: { [key: string]: string };
  export default content;
}
