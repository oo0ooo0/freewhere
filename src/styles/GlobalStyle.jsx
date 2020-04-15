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
  font: normal normal 14px/20px 'Noto Sans KR';
  color: #4C4C4C;
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
  transition: all 0.3s ease; 
  a{
     color: #00ABFF;
  }
  }

  button:hover {
  border: 1px solid #00ABFF;  
  }

  button:active {
    background: #00ABFF;
    border: 1px solid #E0E0E0;
    a{
     color: #fff;
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

 

/* 
Item common style
components/ SimillarItem
components/ ProblemItem
*/
.item{
  background-color: #fff;

  .problemText {
    display: flex;
    align-items: center;
    padding: 10px 15px 6px 37px;
    border-bottom: 1px solid #F5F5F5;

    .problemType {
      margin-right: 18px;
      white-space: nowrap;
    }
    .unitName {
      display: inline-block;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    button {
      
      margin-left: 8px;
    }
  }
  .problemImg {
    display: flex;
    align-items: flex-start;
    margin-left: 47px;
    padding: 17px 0px 23px 0px;
    b {
      margin-right: 37px;
    }
    img {
      width: 34vw;
    }
  }
  @media (max-width: 900px) {
    .problemImg {
      img {
        width: 305px;
      }
    }
  }
}




/* 
List common style
components/ SimillarsList
components/ ProblemsList
*/
.list{
  width: 49.8%;

  .my-masonry-grid {
    display: flex;
    width: auto;
  }
  .my-masonry-grid_column {
    background-clip: padding-box;
  }

  .my-masonry-grid_column > div {
    margin-bottom: 8px;
  }
  .my-masonry-grid_column > div:last-child {
    margin-bottom: 8px;
  }
}
`;

export default GlobalStyle;
