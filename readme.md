# 프리즘엑스 채용 과제: 간단 포인트 적립 API 서버

## 1. 프로젝트 개요

본 프로젝트는 프리즘엑스 개발자 채용 사전 과제 A안인 '간단한 포인트 적립 API 서버 만들기' 요구사항을 기반으로 구축되었습니다.

### 기술 스택
* **언어/런타임:** Node.js
* **프레임워크:** Express
* **인증:** JWT (JSON Web Token)
* **데이터 저장:** In-memory (JavaScript Object)

### 문제 접근 방식 및 구조 설계

| 평가 항목 | 설계 방식 |
| :--- | :--- |
| **코드 구조 및 가독성** | **Controller-Service-Router-Middleware** 계층 구조를 적용하여 역할 분리 및 유지보수성을 확보했습니다. |
| **데이터 저장** | 과제의 간결성에 맞춰 **In-memory 방식**을 채택했습니다. 사용자별 잔액(`balance`)을 캐시하고 거래 내역(`history`)을 별도로 기록하여 빠른 잔액 조회를 가능하게 했습니다. |
| **인증 방식** | 실무에서 널리 사용되는 **JWT Bearer Token** 방식을 채택하여 API 요청의 무상태성(Stateless)을 유지했습니다. |

---

## 2. 실행 가이드

### 2.1. 필수 설치 및 실행
1.  **의존성 설치:**
    ```bash
    npm i
    ```
2.  **서버 실행:**
    ```bash
    node server.js
    ```
    (서버는 `http://localhost:3000`으로 실행됩니다.)

### 2.2. API 테스트 (Bash/Shell)

로그인부터 내역 조회까지의 전체 과정을 테스트하는 명령어입니다.

```bash
# 서버 시작 후 실행

# 1. 로그인 (user1/1234) 및 JWT 토큰 추출
LOGIN_RESPONSE=$(curl -s -X POST http://localhost:3000/api/login \
-H "Content-Type: application/json" \
-d '{"username":"user1","password":"1234"}')

TOKEN=$(echo $LOGIN_RESPONSE | grep -oP '(?<="token":")[^"]+')
echo "JWT Token: $TOKEN"

# 2. 포인트 적립 (100 포인트)
curl -X POST http://localhost:3000/api/earn \
-H "Content-Type: application/json" \
-H "Authorization: Bearer $TOKEN" \
-d '{"amount":100}'
echo

# 3. 잔액 조회
curl -X GET "http://localhost:3000/api/balance" \
-H "Authorization: Bearer $TOKEN"
echo

# 4. 내역 조회
curl -X GET "http://localhost:3000/api/history" \
-H "Authorization: Bearer $TOKEN"
echo

## 1. 프로젝트 개요

본 프로젝트는 프리즘엑스 개발자 채용 사전 과제 A안인 '간단한 포인트 적립 API 서버 만들기' 요구사항을 기반으로 구축되었습니다.

### 기술 스택
* **언어/런타임:** Node.js
* **프레임워크:** Express
* **인증:** JWT (JSON Web Token)
* **데이터 저장:** In-memory (JavaScript Object)

### 문제 접근 방식 및 구조 설계

| 평가 항목 | 설계 방식 |
| :--- | :--- |
| **코드 구조 및 가독성** | **Controller-Service-Router-Middleware** 계층 구조를 적용하여 역할 분리 및 유지보수성을 확보했습니다. |
| **데이터 저장** | 과제의 간결성에 맞춰 **In-memory 방식**을 채택했습니다. 사용자별 잔액(`balance`)을 캐시하고 거래 내역(`history`)을 별도로 기록하여 빠른 잔액 조회를 가능하게 했습니다. |
| **인증 방식** | 실무에서 널리 사용되는 **JWT Bearer Token** 방식을 채택하여 API 요청의 무상태성(Stateless)을 유지했습니다. |

---

## 2. 실행 가이드

### 2.1. 필수 설치 및 실행
1.  **의존성 설치:**
    ```bash
    npm i
    ```
2.  **서버 실행:**
    ```bash
    node server.js
    ```
    (서버는 `http://localhost:3000`으로 실행됩니다.)

### 2.2. API 테스트 (Bash/Shell)

로그인부터 내역 조회까지의 전체 과정을 테스트하는 명령어입니다.

```bash
# 서버 시작 후 실행

# 1. 로그인 (user1/1234) 및 JWT 토큰 추출
LOGIN_RESPONSE=$(curl -s -X POST http://localhost:3000/api/login \
-H "Content-Type: application/json" \
-d '{"username":"user1","password":"1234"}')

TOKEN=$(echo $LOGIN_RESPONSE | grep -oP '(?<="token":")[^"]+')
echo "JWT Token: $TOKEN"

# 2. 포인트 적립 (100 포인트)
curl -X POST http://localhost:3000/api/earn \
-H "Content-Type: application/json" \
-H "Authorization: Bearer $TOKEN" \
-d '{"amount":100}'
echo

# 3. 잔액 조회
curl -X GET "http://localhost:3000/api/balance" \
-H "Authorization: Bearer $TOKEN"
echo

# 4. 내역 조회
curl -X GET "http://localhost:3000/api/history" \
-H "Authorization: Bearer $TOKEN"
echo
3. API 명세Base URL: http://localhost:3000/api3.1. 인증 API기능URLMethod인증설명로그인/loginPOSTX사용자 인증 후 JWT 토큰 발급요청 (Body):JSON{
  "username": "user1",
  "password": "1234"
}
응답 (Success 200):JSON{
  "message": "로그인이 완료되었습니다",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
3.2. 포인트 API (인증 필요)모든 API는 요청 헤더에 **Authorization: Bearer <JWT 토큰>**이 필요합니다.기능URLMethod설명포인트 적립/earnPOST사용자에게 포인트를 적립하고 내역 기록잔액 조회/balanceGET현재까지의 포인트 잔액 조회내역 조회/historyGET적립/차감 내역을 최신순으로 조회1. 포인트 적립 (/earn)요청 (Body)응답 (Success 200)json{"amount": 100}json{"userId": 1,"balance": 100}2. 잔액 조회 (/balance)요청 (Body)응답 (Success 200)(없음)json{"userId": 1,"balance": 100}3. 내역 조회 (/history)요청 (Body)응답 (Success 200)(없음)json{ "userId": 1, "history": [ { "type": "earn", "amount": 100, "date": "2025-11-10T..." } ]}