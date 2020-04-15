import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

body,
div,
ul,
li,
dl,
dt,
ol,
h1,
h2,
h3,
h4,
h5,
h6,
input,
fieldset,
legend,
p,
select,
table,
span,
th,
td,
tr,
textarea,
button,
form,
img,
section,
svg,
text,
figure {
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
}

/* link reset */
a {
  font: normal bold 14px/1 'Noto Sans KR';
  text-decoration: none;
}

a:hover {
 }

/* font reset */
body {
  font: normal normal 14px/1 'Noto Sans KR';
}

/* font style reset */
h1 {
  font: normal bold 14px/20px 'Noto Sans KR';
  color: #4C4C4C;
}

h2 {
  font: normal bold 14px/20px 'Noto Sans KR';
  color: #4C4C4C;
}

h3 {
  font: normal 500 14px/42px 'Noto Sans KR';
  color: #1d1e21;
}

h4 {
  font: normal 900 24px/34px 'Noto Sans KR';
  color: #1d1e21;
}

p {
  font: normal 400 14px/22px 'Noto Sans KR';
  color: #1d1e21;
}

em {
  font: normal bold 14px/1 'Noto Sans KR';
  color: #9F9F9F;
}

b{
  font: normal bold 23px/35px 'Noto Sans KR';
  color: #02C7F2;}


/* Bullet symbol set*/
dl,
ul,
li,
ol,
menu {
  list-style: none;
}

/* BORDER RESET  */
img,
fieldset {
  border: 0 none;
}

/* btn reset  */
button {
  width:80px;
  min-width:80px;
  height:36px;
  min-height:36px;
  border: 1px solid #E0E0E0;
  border-radius: 3px;
  background: #fff;
  cursor: pointer;
  display: inline-block;
  a{
     color: #00ABFF;
  }
  }


/* IR effect */
.ir_pm {
  display: block;
  overflow: hidden;
  font-size: 0;
  line-height: 0;
  text-indent: -9999px;
}

/* 의미있는 이미지의 대체 텍스트를 제공하는 경우(Phark Method) */
.ir_wa {
  display: block;
  overflow: hidden;
  position: relative;
  z-index: -1;
  width: 100%;
  height: 100%;
}

/* 의미있는 이미지의 대체 텍스트로 이미지가 없어도 대체 텍스트를 보여주고자 할 때(WA IR) */
.ir_su {
  overflow: hidden;
  position: absolute;
  width: 0;
  height: 0;
  line-height: 0;
  text-indent: -9999px;
}

 
/* margin, padding */
.mt10 {
  margin-top: 10px !important;
}

.mt15 {
  margin-top: 15px !important;
}

.mt20 {
  margin-top: 20px !important;
}

.mt25 {
  margin-top: 25px !important;
}

.mt30 {
  margin-top: 30px !important;
}

.mt35 {
  margin-top: 35px !important;
}

.mt40 {
  margin-top: 40px !important;
}

.mt45 {
  margin-top: 45px !important;
}

.mt50 {
  margin-top: 50px !important;
}

/* clearfix */
.clearfix,
.clearfix::after,
.clearfix::before {
  content: '';
  clear: both;
  display: block;
}
`;

export default GlobalStyle;