import { JSDOM } from "jsdom";

const dom = new JSDOM("<!doctype html><html><body></body></html>");

(globalThis as any).window = dom.window;
(globalThis as any).document = dom.window.document;
(globalThis as any).navigator = {
    userAgent: "node.js",
};
