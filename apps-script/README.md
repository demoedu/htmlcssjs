# Google Apps Script & 스프레드시트 설정 가이드

이 Apps Script는 브라우저에서 Google 스프레드시트로 데이터를 저장하기 위한 서버 역할을 합니다.

## 설정 방법

### 1. Google 스프레드시트에서 Apps Script 생성
1. https://sheets.google.com 접속
2. "새로 만들기" → "빈 스프레드시트" 클릭
3. 스프레드시트 이름 변경 (예: "폼 데이터 저장소")
4. **확장 프로그램** → **Apps Script** 클릭
   - 자동으로 연결된 Apps Script 프로젝트가 생성됩니다

### 2. 코드 설정
1. 기본 `Code.gs` 파일에 이 폴더의 `Code.gs` 내용을 복사
2. 저장 (Ctrl+S)

### 3. 배포 설정
1. 우측 상단 "배포" 클릭
2. "새 배포" 선택
3. 설정:
   - **유형**: 웹 앱
   - **실행**: 나
   - **액세스 권한**: 모든 사용자
4. "배포" 클릭
5. 권한 승인:
   - Google Sheets 접근 권한 허용
   - "고급" → "안전하지 않음으로 이동" (필요시)
6. **웹 앱 URL 복사** (매우 중요!)

### 4. JavaScript 설정
복사한 URL을 `script.js` 파일의 `APPS_SCRIPT_URL`에 입력:

```javascript
this.APPS_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';
```

## 작동 원리

1. 브라우저에서 FormData로 Apps Script에 POST 요청
2. Apps Script가 스프레드시트에 데이터 저장
3. 자동으로 헤더(이름, 메시지, 날짜) 생성
4. 타임스탬프와 함께 데이터 추가

## 스프레드시트 구조

| 이름 | 메시지 | 날짜 |
|------|--------|------|
| 홍길동 | 안녕하세요 | 2025-01-15 10:30:25 |

## 장점

✅ **간단함**: API 키 없이 Google 계정만으로 사용  
✅ **실시간**: 바로 스프레드시트에서 데이터 확인  
✅ **무료**: Google 서비스 사용  
✅ **확장성**: 스프레드시트 기능 모두 활용 가능