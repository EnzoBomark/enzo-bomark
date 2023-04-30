import { createGlobalStyle } from 'styled-components';
import Black from 'assets/fonts/Black.ttf';
import BlackItalic from 'assets/fonts/BlackItalic.ttf';
import Bold from 'assets/fonts/Bold.ttf';
import BoldItalic from 'assets/fonts/BoldItalic.ttf';
import Light from 'assets/fonts/Light.ttf';
import LightItalic from 'assets/fonts/LightItalic.ttf';
import Medium from 'assets/fonts/Medium.ttf';
import MediumItalic from 'assets/fonts/MediumItalic.ttf';
import Roman from 'assets/fonts/Roman.ttf';
import RomanItalic from 'assets/fonts/RomanItalic.ttf';
import Thin from 'assets/fonts/Thin.ttf';
import ThinItalic from 'assets/fonts/ThinItalic.ttf';
import XThin from 'assets/fonts/XThin.ttf';
import XThinItalic from 'assets/fonts/XThinItalic.ttf';
import XXThin from 'assets/fonts/XXThin.ttf';
import XXThinItalic from 'assets/fonts/XXThinItalic.ttf';

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

html {
  background-color: ${(props) => props.theme.color.g25};
}

body, #root {
  height: fit-content;
  min-height: 100vh;
  font-family: "NeueHaas", sans-serif;
  overflow-y: scroll;
  overflow-x: hidden;
}



@font-face {
    font-family: NeueHaas;
    font-style: normal; 
    font-weight: 900; 
    src: url(${Black}) format('opentype')
}
@font-face {
    font-family: NeueHaas;
    font-style: italic; 
    font-weight: 900; 
    src: url(${BlackItalic}) format('opentype')
}
@font-face {
    font-family: NeueHaas;
    font-style: normal; 
    font-weight: 700; 
    src: url(${Bold}) format('opentype')
}
@font-face {
    font-family: NeueHaas;
    font-style: italic; 
    font-weight: 700; 
    src: url(${BoldItalic}) format('opentype')
}
@font-face {
    font-family: NeueHaas;
    font-style: normal; 
    font-weight: 600; 
    src: url(${Medium}) format('opentype')
}
@font-face {
    font-family: NeueHaas;
    font-style: italic; 
    font-weight: 600; 
    src: url(${MediumItalic}) format('opentype')
}
@font-face {
    font-family: NeueHaas;
    font-style: normal; 
    font-weight: 500; 
    src: url(${Roman}) format('opentype')
}
@font-face {
    font-family: NeueHaas;
    font-style: italic; 
    font-weight: 500; 
    src: url(${RomanItalic}) format('opentype')
}
@font-face {
    font-family: NeueHaas;
    font-style: normal; 
    font-weight: 400; 
    src: url(${Light}) format('opentype')
}
@font-face {
    font-family: NeueHaas;
    font-style: italic; 
    font-weight: 400; 
    src: url(${LightItalic}) format('opentype')
}
@font-face {
    font-family: NeueHaas;
    font-style: normal; 
    font-weight: 300; 
    src: url(${Thin}) format('opentype')
}
@font-face {
    font-family: NeueHaas;
    font-style: italic; 
    font-weight: 300; 
    src: url(${ThinItalic}) format('opentype')
}
@font-face {
    font-family: NeueHaas;
    font-style: normal; 
    font-weight: 200; 
    src: url(${XThin}) format('opentype')
}
@font-face {
    font-family: NeueHaas;
    font-style: italic; 
    font-weight: 200; 
    src: url(${XThinItalic}) format('opentype')
}
@font-face {
    font-family: NeueHaas;
    font-style: normal; 
    font-weight: 100; 
    src: url(${XXThin}) format('opentype')
}
@font-face {
    font-family: NeueHaas;
    font-style: italic; 
    font-weight: 100; 
    src: url(${XXThinItalic}) format('opentype')
}
`;
