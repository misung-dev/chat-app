[유튜브] 웹소켓을 이용해 채팅앱을 만들어보자!

## TODO

1. 백엔드 세팅: 데이터베이스 세팅(유저정보, 채팅 메세지 정보), 웹소켓 세팅
2. 프론트엔드 세팅: 웹소켓 세팅
3. 벡엔드 프론트엔드 연결 테스트
4. 유저 로그인
5. 메세지 주고 받기

<br>

## 초기 세팅에 필요한 라이브러리

- express: node.js로 서버를 만드는데 도아줌. 데이터 베이스 위에 express를 올려둠
- mongoose: mongo DB를 쉽게 사용하게 도와줌
- cors: 프론트백엔드 문제 없이 통신하는데 도와줌
- dotenv: 내가 설치한 환경변수를 들고오는데 필요
- http: http 서버를 만듦
- socket.io:
- nodemon: 파일에 변화가 생기면 자동 리도딩을 해줌 (매번 재시작 할 필요 없음)
