// HTML + CSS + JavaScript 데모
class SimpleWebDemo {
  constructor() {
    this.isActivated = false;
    this.mouseTracking = false;
    this.currentTheme = 0;
    this.themes = [
      { name: '기본', bg: '#fff', text: '#333' },
      { name: '다크', bg: '#000', text: '#fff' },
      { name: '그레이', bg: '#f5f5f5', text: '#222' },
    ];

    this.APPS_SCRIPT_URL =
      'https://script.google.com/macros/s/AKfycbwRm1BQ4czUDK5Fz-rPab3nXeddzmcp8TX9Bnc0qrvXXmpJzMfXAmaBpwF5NizotofcYw/exec';

    this.init();
  }

  init() {
    this.bindEvents();
    this.showWelcomeMessage();
  }

  bindEvents() {
    // 메인 버튼 이벤트
    const mainButton = document.querySelector('#hero button');
    if (mainButton) {
      mainButton.addEventListener('click', () => this.handleMainButton());
    }

    // 키보드 단축키
    document.addEventListener('keydown', (e) =>
      this.handleKeyboardShortcuts(e),
    );

    // 폼 처리
    this.initFormHandling();

    // 네비게이션 개선
    this.enhanceNavigation();
  }

  handleMainButton() {
    const button = document.querySelector('#hero button');

    if (!this.isActivated) {
      this.isActivated = true;
      button.textContent = 'JavaScript가 활성화되었습니다!';
      button.style.backgroundColor = '#28a745';

      this.showNotification('JavaScript 기능이 활성화되었습니다!');

      setTimeout(() => {
        button.textContent = 'JavaScript 기능 체험';
        button.style.backgroundColor = '';
      }, 2000);
    } else {
      this.toggleTheme();
    }
  }

  handleKeyboardShortcuts(e) {
    if (e.ctrlKey || e.metaKey) {
      switch (e.key) {
        case 't':
          e.preventDefault();
          this.toggleTheme();
          break;
        case 'm':
          e.preventDefault();
          this.toggleMouseTracking();
          break;
        case 'p':
          e.preventDefault();
          this.createSimpleParticles();
          break;
      }
    }

    if (e.code === 'Space' && e.target === document.body) {
      e.preventDefault();
      this.handleMainButton();
    }
  }

  toggleTheme() {
    this.currentTheme = (this.currentTheme + 1) % this.themes.length;
    const theme = this.themes[this.currentTheme];

    // 기본 배경색과 텍스트 색상 변경
    document.body.style.backgroundColor = theme.bg;
    document.body.style.color = theme.text;

    // 헤더와 푸터 색상 조정
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');

    if (theme.bg === '#000') {
      // 다크 테마일 때
      if (header) {
        header.style.backgroundColor = '#111';
        header.style.color = '#fff';
      }
      if (footer) {
        footer.style.backgroundColor = '#111';
        footer.style.color = '#fff';
      }
      // 섹션 구분선도 밝게
      document
        .querySelectorAll('section:not(:last-child)')
        .forEach((section) => {
          section.style.borderBottomColor = '#333';
        });
      // 테이블 헤더 색상 조정
      document.querySelectorAll('th').forEach((th) => {
        th.style.backgroundColor = '#333';
        th.style.color = '#fff';
      });
      // aside 배경 색상 조정
      document.querySelectorAll('aside').forEach((aside) => {
        aside.style.backgroundColor = '#111';
      });
      // 제목들 색상 조정
      document.querySelectorAll('h3').forEach((h3) => {
        h3.style.color = '#fff';
      });
      // 한계 섹션에 다크 테마 클래스 추가
      const limitationsSection = document.querySelector('#limitations');
      if (limitationsSection) {
        limitationsSection.classList.add('dark-theme');
      }
      // 한계 섹션의 strong 태그 색상 조정
      document.querySelectorAll('#limitations strong').forEach((strong) => {
        strong.style.color = '#fff';
      });
    } else if (theme.bg === '#f5f5f5') {
      // 그레이 테마일 때
      if (header) {
        header.style.backgroundColor = '#333';
        header.style.color = '#fff';
      }
      if (footer) {
        footer.style.backgroundColor = '#333';
        footer.style.color = '#fff';
      }
      // 섹션 구분선
      document
        .querySelectorAll('section:not(:last-child)')
        .forEach((section) => {
          section.style.borderBottomColor = '#ddd';
        });
      // 테이블 헤더 원래대로
      document.querySelectorAll('th').forEach((th) => {
        th.style.backgroundColor = '#f8f8f8';
        th.style.color = '#333';
      });
      // aside 배경 색상
      document.querySelectorAll('aside').forEach((aside) => {
        aside.style.backgroundColor = '#e8e8e8';
      });
      // 제목들 색상
      document.querySelectorAll('h3').forEach((h3) => {
        h3.style.color = '#333';
      });
      // 한계 섹션 다크 테마 클래스 제거
      const limitationsSection1 = document.querySelector('#limitations');
      if (limitationsSection1) {
        limitationsSection1.classList.remove('dark-theme');
      }
      // 한계 섹션의 strong 태그 색상 원래대로
      document.querySelectorAll('#limitations strong').forEach((strong) => {
        strong.style.color = '#000';
      });
    } else {
      // 기본 테마일 때
      if (header) {
        header.style.backgroundColor = '#000';
        header.style.color = '#fff';
      }
      if (footer) {
        footer.style.backgroundColor = '#000';
        footer.style.color = '#fff';
      }
      // 섹션 구분선 원래대로
      document
        .querySelectorAll('section:not(:last-child)')
        .forEach((section) => {
          section.style.borderBottomColor = '#eee';
        });
      // 테이블 헤더 원래대로
      document.querySelectorAll('th').forEach((th) => {
        th.style.backgroundColor = '#f8f8f8';
        th.style.color = '#333';
      });
      // aside 배경 색상 원래대로
      document.querySelectorAll('aside').forEach((aside) => {
        aside.style.backgroundColor = '#f8f8f8';
      });
      // 제목들 색상 원래대로
      document.querySelectorAll('h3').forEach((h3) => {
        h3.style.color = '#333';
      });
      // 한계 섹션 다크 테마 클래스 제거
      const limitationsSection2 = document.querySelector('#limitations');
      if (limitationsSection2) {
        limitationsSection2.classList.remove('dark-theme');
      }
      // 한계 섹션의 strong 태그 색상 원래대로
      document.querySelectorAll('#limitations strong').forEach((strong) => {
        strong.style.color = '#000';
      });
    }

    this.showNotification(`테마가 "${theme.name}"로 변경되었습니다`);
  }

  toggleMouseTracking() {
    this.mouseTracking = !this.mouseTracking;

    if (this.mouseTracking) {
      this.startMouseTracking();
      this.showNotification('마우스 트래킹 활성화 (Ctrl+M으로 해제)');
    } else {
      this.stopMouseTracking();
      this.showNotification('마우스 트래킹 비활성화');
    }
  }

  startMouseTracking() {
    // 기존 트래커 제거
    if (this.mouseTracker) {
      this.mouseTracker.remove();
    }

    // 현재 테마에 맞는 색상 설정
    const theme = this.themes[this.currentTheme];
    const trackerBg = theme.bg === '#000' ? '#fff' : '#000';
    const trackerBorder = theme.bg === '#000' ? '#000' : '#fff';

    // 새 트래커 생성
    this.mouseTracker = document.createElement('div');
    this.mouseTracker.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            background: ${trackerBg};
            border: 2px solid ${trackerBorder};
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transition: all 0.1s ease;
        `;
    document.body.appendChild(this.mouseTracker);

    // 마우스 이벤트 리스너
    this.mouseMoveHandler = (e) => {
      if (this.mouseTracker) {
        this.mouseTracker.style.left = e.clientX - 10 + 'px';
        this.mouseTracker.style.top = e.clientY - 10 + 'px';
      }
    };

    document.addEventListener('mousemove', this.mouseMoveHandler);
  }

  stopMouseTracking() {
    if (this.mouseTracker) {
      this.mouseTracker.remove();
      this.mouseTracker = null;
    }

    if (this.mouseMoveHandler) {
      document.removeEventListener('mousemove', this.mouseMoveHandler);
      this.mouseMoveHandler = null;
    }
  }

  createSimpleParticles() {
    // 현재 테마에 맞는 파티클 색상 설정
    const theme = this.themes[this.currentTheme];
    let colors;
    if (theme.bg === '#000') {
      colors = ['#fff', '#ccc', '#999']; // 다크 테마용
    } else {
      colors = ['#000', '#666', '#999']; // 밝은 테마용
    }

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      particle.style.cssText = `
                position: fixed;
                width: 4px;
                height: 4px;
                background: ${
                  colors[Math.floor(Math.random() * colors.length)]
                };
                border-radius: 50%;
                pointer-events: none;
                z-index: 1000;
                left: ${centerX}px;
                top: ${centerY}px;
            `;

      document.body.appendChild(particle);

      // 애니메이션
      const angle = (Math.PI * 2 * i) / 20;
      const distance = 100 + Math.random() * 100;
      const endX = centerX + Math.cos(angle) * distance;
      const endY = centerY + Math.sin(angle) * distance;

      particle.animate(
        [
          { transform: 'translate(0, 0)', opacity: 1 },
          {
            transform: `translate(${endX - centerX}px, ${endY - centerY}px)`,
            opacity: 0,
          },
        ],
        {
          duration: 1000,
          easing: 'ease-out',
        },
      ).onfinish = () => particle.remove();
    }

    this.showNotification('파티클 효과 실행!');
  }

  enhanceNavigation() {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();

        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });

          // 간단한 하이라이트 효과
          const originalBorder = targetElement.style.border;
          targetElement.style.border = '2px solid #000';

          setTimeout(() => {
            targetElement.style.border = originalBorder;
          }, 2000);
        }
      });
    });
  }

  initFormHandling() {
    const form = document.querySelector('form');
    const nameInput = document.getElementById('name');
    const messageInput = document.getElementById('message');

    if (!form || !nameInput || !messageInput) return;

    // 실시간 유효성 검사
    [nameInput, messageInput].forEach((input) => {
      input.addEventListener('input', () => {
        this.validateForm();
      });
    });

    // 폼 제출 처리
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleFormSubmission();
    });

    // 제출 버튼 텍스트 변경
    const submitButton = form.querySelector('input[type="submit"]');
    if (submitButton) {
      submitButton.value = '전송하기 (JavaScript로 처리)';
    }
  }

  validateForm() {
    const nameInput = document.getElementById('name');
    const messageInput = document.getElementById('message');
    const submitButton = document.querySelector('input[type="submit"]');

    const isValid =
      nameInput.value.trim() !== '' && messageInput.value.trim() !== '';

    if (submitButton) {
      submitButton.disabled = !isValid;
      submitButton.style.opacity = isValid ? '1' : '0.5';
    }

    return isValid;
  }

  async handleFormSubmission() {
    const nameInput = document.getElementById('name');
    const messageInput = document.getElementById('message');
    const submitButton = document.querySelector('input[type="submit"]');

    if (!this.validateForm()) {
      this.showNotification('모든 필드를 입력해주세요!', 'error');
      return;
    }

    // Apps Script URL 확인
    if (this.APPS_SCRIPT_URL === 'YOUR_APPS_SCRIPT_URL_HERE') {
      this.showNotification(
        'Google Apps Script URL 설정이 필요합니다!',
        'error',
      );
      return;
    }

    // 로딩 상태
    const originalValue = submitButton.value;
    submitButton.value = '전송 중...';
    submitButton.disabled = true;

    try {
      // Google Apps Script를 통한 스프레드시트 저장 (no-cors 모드)
      const formData = new FormData();
      formData.append('name', nameInput.value);
      formData.append('message', messageInput.value);

      const response = await fetch(this.APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: formData,
      });

      // no-cors 모드에서는 응답을 읽을 수 없으므로 성공으로 간주
      this.showNotification(
        `${nameInput.value}님, 스프레드시트에 저장되었습니다!`,
        'success',
      );

      // 폼 초기화
      nameInput.value = '';
      messageInput.value = '';

      // 간단한 성공 효과
      this.createSimpleParticles();
    } catch (error) {
      console.error('전송 오류:', error);
      this.showNotification(`전송 실패: ${error.message}`, 'error');
    } finally {
      // 버튼 상태 복원
      submitButton.value = originalValue;
      submitButton.disabled = false;
    }
  }

  showNotification(message, type = 'info') {
    // 기존 알림 제거
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
      existingNotification.remove();
    }

    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${
              type === 'error'
                ? '#dc3545'
                : type === 'success'
                ? '#28a745'
                : '#000'
            };
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 4px;
            z-index: 10000;
            font-size: 0.9rem;
            max-width: 300px;
            opacity: 0;
            transform: translateX(20px);
            transition: all 0.3s ease;
        `;
    notification.textContent = message;

    document.body.appendChild(notification);

    // 페이드 인
    setTimeout(() => {
      notification.style.opacity = '1';
      notification.style.transform = 'translateX(0)';
    }, 10);

    // 자동 제거
    setTimeout(() => {
      notification.style.opacity = '0';
      notification.style.transform = 'translateX(20px)';
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  }

  showWelcomeMessage() {
    setTimeout(() => {
      const hasAppsScriptConfig =
        this.APPS_SCRIPT_URL !== 'YOUR_APPS_SCRIPT_URL_HERE';

      if (hasAppsScriptConfig) {
        this.showNotification(
          'JavaScript 로드됨! 스프레드시트 연동이 활성화되었습니다. 폼을 테스트해보세요!',
          'success',
        );
      } else {
        this.showNotification(
          'JavaScript 로드됨! Apps Script URL 설정 후 스프레드시트 저장이 가능합니다.',
        );
      }
    }, 1000);
  }

  // Google Apps Script 설정 확인 및 안내 메서드
  checkNotionConfiguration() {
    if (this.APPS_SCRIPT_URL === 'YOUR_APPS_SCRIPT_URL_HERE') {
      console.warn(`
⚠️ Google Apps Script & 스프레드시트 설정 가이드 ⚠️

1. Google 스프레드시트 생성:
   - https://sheets.google.com
   - 새 스프레드시트 생성
   - URL에서 스프레드시트 ID 복사 (예: docs.google.com/spreadsheets/d/[ID]/edit)

2. Google Apps Script 프로젝트 생성:
   - https://script.google.com
   - "새 프로젝트" 클릭
   - apps-script/Code.gs 내용을 복사하여 붙여넣기
   - SPREADSHEET_ID 변수에 스프레드시트 ID 입력

3. 배포:
   - "배포" > "새 배포"
   - "유형" > "웹 앱"
   - "액세스 권한" > "모든 사용자"
   - 배포 후 URL을 script.js의 APPS_SCRIPT_URL에 입력

4. 권한 설정:
   - Google Sheets API 접근 권한 허용
   - 스프레드시트에 자동으로 헤더가 생성됩니다

📊 이제 폼 데이터가 스프레드시트에 저장됩니다!
            `);
      return false;
    }
    return true;
  }
}

// DOM 로드 후 초기화
document.addEventListener('DOMContentLoaded', () => {
  window.webDemo = new SimpleWebDemo();
  // 설정 가이드 콘솔에 출력
  window.webDemo.checkNotionConfiguration();
});
