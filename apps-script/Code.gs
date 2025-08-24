function doPost(e) {
  try {
    const { name, message } = e.parameter;
    
    // 파라미터 검증
    if (!name || !message) {
      return ContentService
        .createTextOutput(JSON.stringify({
          success: false,
          error: '이름과 메시지를 입력해주세요.'
        }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // 현재 활성 스프레드시트 사용 (ID 불필요)
    const sheet = SpreadsheetApp.getActiveSheet();
    
    // 헤더가 없다면 추가
    if (sheet.getLastRow() === 0) {
      sheet.getRange(1, 1, 1, 3).setValues([['이름', '메시지', '날짜']]);
    }
    
    // 현재 날짜와 시간
    const now = new Date();
    const timestamp = Utilities.formatDate(now, Session.getScriptTimeZone(), 'yyyy-MM-dd HH:mm:ss');
    
    // 데이터 추가
    sheet.appendRow([name, message, timestamp]);
    
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: '스프레드시트에 성공적으로 저장되었습니다.',
        data: {
          name: name,
          message: message,
          timestamp: timestamp
        }
      }))
      .setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    console.error('Apps Script 오류:', error);
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService
    .createTextOutput('이 Apps Script는 POST 요청만 처리합니다.')
    .setMimeType(ContentService.MimeType.TEXT);
}