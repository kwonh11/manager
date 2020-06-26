
# [Management-app](https://devhyuk.com) (데이터관리 프로그램, 스프레드시트)
[MANAGEMENT APP ](https://devhyuk.com)

# 목차

 - **소개**
 - **특징**
 - **개발자 및 개발기간**
 - **개발환경**
   - 프론트엔드
     - 프레임워크 및 라이브러리
       - React
       - 기타 라이브러리
     - 번들러 
       - 플러그인과 로더
       - 스플릿
     - 템플릿
   - 백엔드
     - 런타임
     - 미들웨어
 - **배포**
     - 프론트엔드
     - 백엔드
 - **개발후기** : 블로그

## 소개
 - 나만의 데이터테이블을 만들고 관리할 수 있는 웹입니다.
 - 데이터 테이블을 생성하고 **입력**, **수정**, **삭제**, **열 선택**, **그룹화**,**검색**, **CSV파일로 내보내기(엑셀)** 등의 기능을 사용할 수도 있습니다.
 - **구글계정**을 이용해 로그인하면 다른 PC에서도 동일한 데이터를 관리할 수 있습니다.

## 특징

 - SPA 앱
 - 비동기통신
 - RestAPI
 - Json Web Token 사용
 - 화면 아무 곳이나 더블클릭하면 간단 메뉴얼이 열립니다.
 - 사이트 내에서 이동할 시에는 데이터가 자동으로 저장됩니다.
 - 올바르지 않은 입력일 경우, 자동저장되지 않습니다.
 - DEMO를 이용해볼 수 있습니다.
 - 로그인 유효시간은 2시간입니다.
 - 비 로그인의 경우 조회와 데모를 이용해볼 수 있지만 저장 등의 기능은 제한됩니다.
 - 방명록에 글을 남길 수 있습니다. 구글계정의 프로필사진과 닉네임, 작성시간이 저장됩니다.
 - HTTPS로 안전한 연결을 사용합니다. http로 접속할 경우 https로 리다이렉트 됩니다.
 - 모바일로 접속할 경우 화면이 깨질 수 있습니다. 스프레드 시트 앱 특성상 PC만 지원합니다. (추후 모바일버전 UI 업데이트 예정)
 - 사용자 구글계정의 고유 ID는 jwt를 이용해 인코딩되어 브라우저에 전송됩니다.

## 개발자 및 개발기간
 - 권준혁 1인
 - 약 3주 (22일)
## 개발환경

 - 백 과 프론트 분리개발 분리배포
 
 | OS | 개발 툴 | 개발언어 |
 |---|---| --- |
 | windows7 | VisualStudioCode 1.46.1 | Javascript ES6↑ |
 
### 프론트엔드
 - Single Page App
 - react-router-dom을 이용한 클라이언트 사이드 라우팅
 - axios를 이용한 비동기통신
 
#### 프레임워크 및 라이브러리
- ##### 리액트
  - React 16.13.1
   - 클래스형 컴포넌트를 사용하지 않고 훅 스타일만을 사용해 개발
   - constructor 커스텀훅, OnFirstRender훅, ComponentDidMount훅, 스크롤이벤트 훅 등을 만들어 사용
- ##### 비동기통신
  - axios
- ##### 템플릿
  - material-ui 템플릿과 css-in-js스타일
  - material-table : 데이터 테이블
  - nuka-carousel : 이미지 슬라이더
- ##### 기타 사용 라이브러리
  - prop-types,  react-cookie, qs ...
#### 번들러 : webpack
 - ##### 플러그인과 로더
   - 로더 : babel-loader , css-loader, style-loader, file-loader, url-loader
   - 플러그인 : clean-webpack-plugin, html-webpack-plugin, provided-plugin(내부)
- ##### 스플릿
   - vendors(모듈), app(하드코딩), react.bundle(react,react-router)
### 백엔드
 - MVC 패턴 : 컨트롤러 분리 , Mongoose 데이터모델 사용
#### 런타임
 - NodeJS 12.16.1
#### 미들웨어
 - ##### 외부모듈
   - cors, cookie-parser, express.json, express.urlencoded
 - ##### 커스텀 미들웨어
   - request의 logging 기능, 브라우저에서 전송된 토큰을 key를 통해 디코딩하고 사용자 인증
#### DB
 - ##### MongoDB
---
## 배포
 
 | 프론트 | 백 | DB | 인증서 |
 | --- | --- | --- | --- |
 | AWS s3, cloudfront | HEROKU | HEROKU MongoDB | AWS Certificate Manager |

## 개발후기
 [블로그](https://velog.io/@kwonh)


