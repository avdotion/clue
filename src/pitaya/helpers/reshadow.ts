import {css as reshadowCss} from 'reshadow';

type ReshadowCss = {[key: string]: string};

// @see https://github.com/lttb/reshadow/issues/113
const buildParsedExpression = (body: string): TemplateStringsArray => {
    const parsedExpression: TemplateStringsArray = Object.assign([body], {
      raw: [body],
  });

  return parsedExpression;
};

export const css = (styles: string): ReshadowCss =>
  reshadowCss(buildParsedExpression(styles));
