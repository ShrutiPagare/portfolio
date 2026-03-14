declare module "gsap-trial/SplitText" {
  export class SplitText {
    chars: HTMLElement[];
    words: HTMLElement[];
    lines: HTMLElement[];
    constructor(
      target: string | HTMLElement | HTMLElement[],
      options?: {
        type?: string;
        linesClass?: string;
        wordsClass?: string;
        charsClass?: string;
        position?: string;
        absolute?: boolean;
        tag?: string;
        reduceWhiteSpace?: boolean;
        specialChars?: string[] | ((char: string) => boolean);
        wordDelimiter?: string;
        span?: boolean;
        autoSplit?: boolean;
        onSplit?: (self: SplitText) => void;
      }
    );
    revert(): void;
    split(options?: object): SplitText;
  }
}

declare module "gsap-trial/ScrollSmoother" {
  export class ScrollSmoother {
    static create(options?: object): ScrollSmoother;
    paused(value?: boolean): boolean | ScrollSmoother;
    scrollTop(value?: number): number | ScrollSmoother;
    kill(): void;
    normalizer(): object;
  }
}
