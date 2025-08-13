# YoungStyle
- **Firebase**와 **Cloudinary**를 활용하여 구현한 반응형 쇼핑몰 웹사이트입니다.
<br/><br/>

## 🖥 화면 구성
<details>
 <summary><h3 style="display:inline; margin-left:4px">1️⃣ 메인 화면</h3></summary>
 <h4>로그인</h4>
 <img src=".github/assets/main-login.png" />
 <h4>로그아웃</h4>
 <img src=".github/assets/main-logout.png" />
</details>

<details>
 <summary><h3 style="display:inline; margin-left:4px">2️⃣ 제품 목록 화면</h3></summary>
 <img src=".github/assets/product.png" />
</details>

<details>
 <summary><h3 style="display:inline; margin-left:4px">3️⃣ 제품 상세 화면</h3></summary>
 <img src=".github/assets/product-detail.png" />
</details>

<details>
 <summary><h3 style="display:inline; margin-left:4px">4️⃣ 제품 등록 화면</h3></summary>
 <img src=".github/assets/new-product.png" />
</details>

<details>
 <summary><h3 style="display:inline; margin-left:4px">5️⃣ 장바구니 화면</h3></summary>
 <img src=".github/assets/my-cart.png" />
</details>
<br/>

## 💡 주요 기능 및 구현
<details>
 <summary><h3 style="display:inline; margin-left:4px">구글 로그인/로그아웃 기능</h3></summary>
 
- **Firebase Authentication**의 GoogleAuthProvider를 사용하여 팝업 기반 구글 로그인 및 로그아웃 기능 구현
- `prompt: 'select_account'` 옵션으로 계정 선택 화면 제공
</details>

<details>
 <summary><h3 style="display:inline; margin-left:4px">제품 목록 조회 기능</h3></summary>
 
- **Firebase Realtime Database**에서 `products` 데이터 조회
- 존재하는 경우 배열 형태로 변환 후 반환
</details>

<details>
 <summary><h3 style="display:inline; margin-left:4px">새로운 제품 등록 기능</h3></summary>
 
- 고유 ID(`uuid`)를 생성하여 제품 식별
- 이미지 파일은 Cloudinary에 업로드 후 URL 저장
- 가격 데이터는 숫자형으로 변환, 옵션은 배열로 변환하여 저장
</details>

<details>
 <summary><h3 style="display:inline; margin-left:4px">장바구니 조회 기능</h3></summary>
 
- 사용자별 장바구니 데이터를 **Firebase Realtime Database**에서 `carts` 데이터 조회
- 빈 경우 빈 배열을 반환하여 예외 처리
</details>

<details>
 <summary><h3 style="display:inline; margin-left:4px">장바구니 추가/수정 기능</h3></summary>
 
- 사용자 장바구니에 새로운 제품 추가 또는 기존 제품 정보 업데이트
- 데이터 저장 경로: `carts/{userId}/{productId}`
</details>

<details>
 <summary><h3 style="display:inline; margin-left:4px">장바구니 삭제 기능</h3></summary>
 
- 사용자 장바구니에서 특정 제품 데이터 삭제
- 데이터 삭제 경로: `carts/{userId}/{productId}`
</details>
<br/>

## 🌐 라우터 구조
<table>
    <thead>
      <tr>
        <th>경로</th>
        <th>설명</th>
      </tr>
    </thead>
    <tbody>
     <tr>
        <td>/</td>
        <td>메인 페이지</td>
      </tr>
      <tr>
        <td>/products</td>
        <td>제품 목록을 조회하는 페이지</td>
      </tr>
      <tr>
        <td>/products/new</td>
        <td>새로운 제품을 등록하는 페이지</td>
      </tr>
     <tr>
        <td>/products/:id</td>
        <td>선택한 제품의 상세 정보를 보여주는 페이지</td>
      </tr>
     <tr>
        <td>/carts</td>
        <td>사용자의 장바구니를 보여주는 페이지</td>
      </tr>
    </tbody>
  </table>
  <br/>

## 🛠 기술 스택
#### 🕹 프론트엔드
- **프레임워크/빌드:**
  <img src="https://img.shields.io/badge/React-%2320232a.svg?style=flat-square&logo=react&logoColor=%2361DAFB" />&nbsp;
  <img src="https://img.shields.io/badge/Vite-%23646CFF.svg?style=flat-square&logo=vite&logoColor=white" />
- **라우팅:** <img src="https://img.shields.io/badge/React_Router-CA4245?style=flat-square&logo=react-router&logoColor=white" />
- **상태 관리:**
  <img src="https://img.shields.io/badge/Context_API-000000?style=flat-square&logoColor=white" />&nbsp;
  <img src="https://img.shields.io/badge/-React%20Query-FF4154?style=flat-square&logo=react%20query&logoColor=white" />
- **스타일링:** <img src="https://img.shields.io/badge/Tailwind_CSS-%2338B2AC.svg?style=flat-square&logo=tailwind-css&logoColor=white" />
- **API:** Firebase에서 제공하는 API
- **데이터베이스:** Firebase Realtime Database
- **인증:** Firebase Authentication
- **미디어 관리:** Cloudinary
<br/>

#### 🚀 배포 도구
- **플랫폼:**
  <img src="https://img.shields.io/badge/Netlify-%23000000.svg?style=flat-square&logo=netlify&logoColor=#00C7B7">
<br/>

## 🧩 폴더 구조
```
📦src
 ┣ 📂api
 ┃ ┣ 📜firebase.js                     // Firebase API 호출 모듈 (인증, 데이터베이스 CRUD)
 ┃ ┗ 📜uploader.js                     // Cloudinary 이미지 업로드 모듈
 ┣ 📂components
 ┃ ┣ 📂ui
 ┃ ┃ ┗ 📜Button.jsx                    // 공통 버튼 UI 컴포넌트
 ┃ ┣ 📜Banner.jsx                      // 메인 배너 컴포넌트
 ┃ ┣ 📜CartItem.jsx                    // 장바구니 아이템 컴포넌트(추가/수정/삭제 기능 포함)
 ┃ ┣ 📜CartStatus.jsx                  // 네비게이션 장바구니 개수 표시 컴포넌트
 ┃ ┣ 📜Navbar.jsx                      // 상단 네비게이션 바 컴포넌트
 ┃ ┣ 📜PriceCard.jsx                   // 장바구니 총액 표시 카드 컴포넌트
 ┃ ┣ 📜ProductCard.jsx                 // 개별 제품 카드 컴포넌트
 ┃ ┣ 📜Products.jsx                    // 제품 카드 목록 컴포넌트
 ┃ ┗ 📜User.jsx                        // 네비게이션 사용자 정보(프로필 사진, 이름) 컴포넌트
 ┣ 📂context
 ┃ ┗ 📜AuthContext.jsx                 // 로그인/로그아웃 상태 관리 Context
 ┣ 📂hooks
 ┃ ┣ 📜useCart.jsx                     // 장바구니 관련 커스텀 훅
 ┃ ┗ 📜useProducts.jsx                 // 제품 관련 커스텀 훅
 ┣ 📂pages
 ┃ ┣ 📜AllProducts.jsx                 // 전체 제품 목록 페이지
 ┃ ┣ 📜Home.jsx                        // 홈 페이지 (배너 + 제품 목록)
 ┃ ┣ 📜MyCart.jsx                      // 장바구니 페이지
 ┃ ┣ 📜NewProduct.jsx                  // 신제품 등록 페이지
 ┃ ┣ 📜NotFound.jsx                    // 에러 페이지
 ┃ ┣ 📜ProductDetail.jsx               // 제품 상세 정보 페이지
 ┃ ┗ 📜ProtectedRoute.jsx              // 관리자 전용 라우팅 처리 (권한 검증)
 ┣ 📜App.jsx
 ┣ 📜index.css
 ┗ 📜main.jsx
```
