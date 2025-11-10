# 첫 실행 모듈 다운
npm init -y 

# 1. 로그인
LOGIN_RESPONSE=$(curl -s -X POST http://localhost:3000/api/login \
-H "Content-Type: application/json" \
-d '{"username":"user1","password":"1234"}')

TOKEN=$(echo $LOGIN_RESPONSE | grep -oP '(?<="token":")[^"]+')
echo "JWT Token: $TOKEN"

# 2. 포인트 적립
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

-------------- API 명세서----------------

# 간단 포인트 적립 API 서버

## 1. 서버 정보
- **Base URL:** `http://localhost:3000/api`  
- **인증:** JWT (Bearer Token) 사용  

---

## 2. 로그인 API

- **URL:** `/login`  
- **Method:** POST  
- **Headers:**  
  - `Content-Type: application/json`  
- **Body Example:**

```json
{
  "username": "user1",
  "password": "1234"
}
Response Example:

json
코드 복사
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
3. 포인트 적립 API
URL: /earn

Method: POST

Headers:

Content-Type: application/json

Authorization: Bearer <JWT 토큰>

Body Example:

json
코드 복사
{
  "amount": 100
}
Response Example:

json
코드 복사
{
  "userId": 1,
  "balance": 100
}
4. 잔액 조회 API
URL: /balance

Method: GET

Headers:

Authorization: Bearer <JWT 토큰>

Response Example:

json
코드 복사
{
  "userId": 1,
  "balance": 100
}
5. 적립/차감 내역 조회 API
URL: /history

Method: GET

Headers:

Authorization: Bearer <JWT 토큰>

Response Example:

json
코드 복사
{
  "userId": 1,
  "history": [
    {
      "type": "earn",
      "amount": 100,
      "date": "2025-11-10T07:25:00.000Z"
    }
  ]
}