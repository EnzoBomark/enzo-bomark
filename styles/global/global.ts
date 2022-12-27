import { createGlobalStyle } from "styled-components";
const CandorRegular = "assets/fonts/Candor-Regular.ttf";
const CandorBlack = "assets/fonts/Candor-Black.ttf";
const CandorBlackItalic = "assets/fonts/Candor-BlackItalic.ttf";
const CandorBold = "assets/fonts/Candor-Bold.ttf";
const CandorBoldItalic = "assets/fonts/Candor-BoldItalic.ttf";
const CandorLight = "assets/fonts/Candor-Light.ttf";
const CandorLightItalic = "assets/fonts/Candor-LightItalic.ttf";
const CandorMedium = "assets/fonts/Candor-Medium.ttf";
const CandorMediumItalic = "assets/fonts/Candor-MediumItalic.ttf";
const CandorRegularItalic = "assets/fonts/Candor-RegularItalic.ttf";
const CandorSemiBold = "assets/fonts/Candor-Semibold.ttf";
const CandorSemiBoldItalic = "assets/fonts/Candor-SemiboldItalic.ttf";
const CandorThin = "assets/fonts/Candor-Thin.ttf";
const CandorThinItalic = "assets/fonts/Candor-ThinItalic.ttf";
const UniSansSemiBold = "assets/fonts/UniSans-SemiBold.ttf";
const UniSansRegular = "assets/fonts/UniSans-Regular.ttf";

export const GlobalStyles = createGlobalStyle`

* {
  box-sizing: border-box;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
 margin: 0;
 padding: 0;
 border: 0;
 font-size: 62.5%;
 vertical-align: baseline;

}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
 display: block;
}
body {
 line-height: 1;
 overflow: hidden;
 background-color: ${(props) => props.theme.color.g25};
}
ol, ul {
 list-style: none;
}
blockquote, q {
 quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
 content: '';
 content: none;
}
table {
 border-collapse: collapse;
 border-spacing: 0;
}
body, #root {
    height: 100vh;
    font-family: "Candor", sans-serif;
}

.icon-4xs {
  font-size: .6rem;
}

.icon-3xs {
  font-size: .8rem;
}

.icon-xxs {
  font-size: 1.2rem;
}

.icon-xs {
  font-size: 1.6rem;
}

.icon-s {
  font-size: 2.0rem;
}

.icon-m {
  font-size: 3.2rem;
}

.icon-l {
  font-size: 4.6rem;
}


@font-face {
    font-family: UniSans;
    font-style: normal; 
    font-weight: 700; 
    src: url(${UniSansSemiBold}) format('opentype')
}
@font-face {
    font-family: UniSans;
    font-style: normal; 
    font-weight: 400; 
    src: url(${UniSansRegular}) format('opentype')
}
@font-face {
    font-family: Candor;
    font-style: normal; 
    font-weight: 400; 
    src: url(${CandorRegular}) format('opentype')
}
@font-face {
    font-family: Candor;
    font-style: normal; 
    font-weight: 900; 
    src: url(${CandorBlack}) format('opentype')
}
@font-face {
    font-family: Candor;
    font-style: italic; 
    font-weight: 400; 
    src: url(${CandorBlackItalic}) format('opentype')
}
@font-face {
    font-family: Candor;
    font-style: normal; 
    font-weight: 700; 
    src: url(${CandorBold}) format('opentype')
}
@font-face {
    font-family: Candor;
    font-style: italic; 
    font-weight: 700; 
    src: url(${CandorBoldItalic}) format('opentype')
}
@font-face {
    font-family: Candor;
    font-style: normal; 
    font-weight: 300; 
    src: url(${CandorLight}) format('opentype')
}
@font-face {
    font-family: Candor;
    font-style: italic; 
    font-weight: 300; 
    src: url(${CandorLightItalic}) format('opentype')
}
@font-face {
    font-family: Candor;
    font-style: normal; 
    font-weight: 500; 
    src: url(${CandorMedium}) format('opentype')
}
@font-face {
    font-family: Candor;
    font-style: italic; 
    font-weight: 500; 
    src: url(${CandorMediumItalic}) format('opentype')
}
@font-face {
    font-family: Candor;
    font-style: italic; 
    font-weight: 400; 
    src: url(${CandorRegularItalic}) format('opentype')
}
@font-face {
    font-family: Candor;
    font-style: normal; 
    font-weight: 600; 
    src: url(${CandorSemiBold}) format('opentype')
}
@font-face {
    font-family: Candor;
    font-style: italic; 
    font-weight: 600; 
    src: url(${CandorSemiBoldItalic}) format('opentype')
}
@font-face {
    font-family: Candor;
    font-style: normal; 
    font-weight: 100; 
    src: url(${CandorThin}) format('opentype')
}
@font-face {
    font-family: Candor;
    font-style: italic; 
    font-weight: 100; 
    src: url(${CandorThinItalic}) format('opentype')
}`;
