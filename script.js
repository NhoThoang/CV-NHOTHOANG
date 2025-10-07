const PASSWORD = "nhothoang@1994";
let isAuthenticated = false;

const passwordTranslations = {
  vi: {
    'password-title': '🔒 Nhập mật khẩu để xem CV',
    'password-subtitle': 'Enter password to view CV',
    'password-placeholder': 'Nhập mật khẩu...',
    'submit-text': 'Xác nhận',
    'error-text': 'Mật khẩu không đúng!'
  },
  en: {
    'password-title': '🔒 Enter password to view CV',
    'password-subtitle': 'Nhập mật khẩu để xem CV',
    'password-placeholder': 'Enter password...',
    'submit-text': 'Submit',
    'error-text': 'Incorrect password!'
  }
};

// Language and theme data
const translations = {
  vi: {
    // Header
    'cv-title': 'CV – NGUYỄN NHO THOÁNG',
    'fullname-label': 'Họ tên:',
    'birthday-label': 'Ngày sinh:',
    'email-label': 'Email:',
    'phone-label': 'Điện thoại:',
    'github-label': 'GitHub:',
    'avatar-alt': 'Ảnh cá nhân',
    
    // Sections
    'summary-title': '👨‍💻 Tóm tắt chuyên môn',
    'summary-content': 'Kỹ sư CNTT với 7 năm kinh nghiệm làm việc tại <strong>Samsung</strong> trong mảng <strong>Cloud Platform</strong> và <strong>Software Quality Engineering</strong>. Thành thạo các công nghệ <strong>DevOps</strong> (AWS, Docker, Kubernetes, Terraform, CI/CD), có kinh nghiệm về <strong>tự động hóa kiểm thử</strong> (Selenium, Appium, Uiautomator2, AI-based automation), và xây dựng <strong>AI Agent</strong> phục vụ tự động hóa và hỗ trợ công việc. Có khả năng phát triển <strong>backend (FastAPI, Flask)</strong> và <strong>frontend (React, HTML, CSS, JavaScript)</strong>. Linh hoạt trong việc học và ứng dụng công nghệ mới, có kinh nghiệm làm việc trong các dự án quy mô lớn và môi trường áp lực cao.',
    
    'experience-title': '💼 Kinh nghiệm làm việc',
    'job-title': 'Kỹ sư Cloud Platform | Samsung SVMC (nay là Samsung SRV) | 2017 – 2022',
    'monitoring-title': 'Dịch vụ giám sát hệ thống (AWS & On-Premise)',
    'monitoring-list': [
      'Triển khai và quản lý hệ thống giám sát toàn cầu bằng <strong>Grafana</strong> và <strong>Prometheus</strong>.',
      'Xây dựng hệ thống cảnh báo tự động (Warning, Critical) tích hợp <strong>Alarm & Auto-healing</strong>.',
      'Xử lý sự cố nhanh chóng, đảm bảo tính ổn định cho các dịch vụ quan trọng.',
      'Thành thạo trong việc triển khai ứng dụng bằng <strong>Docker, Kubernetes, Ansible, Terraform, Jenkins, GitLab</strong> trên cả môi trường Cloud và On-Premise.'
    ],
    'automation-title': 'Tự động hóa kiểm thử (Selenium, Appium, Uiautomator2, AI-based)',
    'automation-list': [
      'Phát triển và bảo trì script tự động cho các nền tảng <strong>Samsung Developer</strong> và <strong>Tizen Developer</strong>.',
      'Xây dựng framework tự động kiểm thử ứng dụng di động (<strong>Appium</strong>, <strong>Uiautomator2</strong>, <strong>ADB</strong>) chạy sau Pull Request.',
      'Tự động chạy test case, thu thập kết quả và tạo báo cáo kiểm thử.'
    ],
    'sqe-title': 'Software Quality Engineering (SQE)',
    'sqe-list': [
      'Thực hiện kiểm thử phần mềm cho các sản phẩm Samsung trước khi phát hành.',
      'Xây dựng framework kiểm thử tự động trên nhiều thiết bị với <strong>Appium</strong>, <strong>Uiautomator2</strong>, <strong>STP</strong>, <strong>ACT</strong>.'
    ],
    'ai-title': 'Nghiên cứu và ứng dụng AI nội bộ',
    'ai-list': [
      'Nghiên cứu huấn luyện và tinh chỉnh mô hình AI để tăng hiệu quả tự động hóa.',
      'Ứng dụng <strong>RAG</strong>, <strong>MCP</strong>, <strong>LLM</strong> hỗ trợ quy trình kiểm thử và truy xuất dữ liệu nội bộ.',
      'Xây dựng nguyên mẫu chatbot hỗ trợ tra cứu tài liệu kiểm thử nội bộ (triển khai fullstack backend + frontend).'
    ],
    // Job 2022 - now (Vietnamese)
    'job2-title': 'Kỹ sư Kiểm thử Phần mềm | Samsung SRV | 2022 – nay',
    'job2-automation-title': 'Tự động hóa kiểm thử (Selenium, Appium, Uiautomator2, AI-based)',
    'job2-automation-list': [
      'Phát triển và bảo trì script tự động cho các nền tảng <strong>Samsung Developer</strong> và <strong>Tizen Developer</strong>.',
      'Xây dựng framework tự động kiểm thử ứng dụng di động (<strong>Appium</strong>, <strong>Uiautomator2</strong>, <strong>ADB</strong>) chạy sau Pull Request.',
      'Tự động chạy test case, thu thập kết quả và tạo báo cáo kiểm thử.'
    ],
    'job2-sqe-title': 'Software Quality Engineering (SQE)',
    'job2-sqe-list': [
      'Thực hiện kiểm thử phần mềm cho các sản phẩm Samsung trước khi phát hành.',
      'Xây dựng framework kiểm thử tự động trên nhiều thiết bị với <strong>Appium</strong>, <strong>Uiautomator2</strong>, <strong>STP</strong>, <strong>ACT</strong>.'
    ],
    'job2-ai-title': 'Nghiên cứu và ứng dụng AI nội bộ',
    'job2-ai-list': [
      'Nghiên cứu huấn luyện và tinh chỉnh mô hình AI để tăng hiệu quả tự động hóa.',
      'Ứng dụng <strong>RAG</strong>, <strong>MCP</strong>, <strong>LLM</strong> hỗ trợ quy trình kiểm thử và truy xuất dữ liệu nội bộ.',
      'Xây dựng nguyên mẫu chatbot hỗ trợ tra cứu tài liệu kiểm thử nội bộ (triển khai fullstack backend + frontend).'
    ],
    
    'projects-title': '📂 Dự án cá nhân',
    'projects-list': [
      '<strong>AI Chatbot tra cứu tài liệu (RAG-based)</strong><br>Xây dựng chatbot nội bộ giúp nhân viên tra cứu tài liệu kỹ thuật và hỗ trợ khắc phục sự cố.',
      '<strong>DevOps AI Agent (Tự động hóa AWS)</strong><br>Phát triển AI Agent có khả năng tương tác với <strong>AWS (EC2, S3, ECR, IAM, v.v.)</strong>, tự động kiểm tra môi trường và hỗ trợ triển khai CI/CD.',
      '<strong>Testing AI Agent (Kiểm thử tự động trên điện thoại)</strong><br>Xây dựng agent hỗ trợ chạy test case tự động trên thiết bị Android thông qua <strong>Appium</strong> và <strong>Uiautomator2</strong>, tự động ghi log và tạo báo cáo kết quả.',
      '<strong>Sales Chatbot</strong><br>Chatbot hỗ trợ tư vấn sản phẩm, trả lời câu hỏi khách hàng và gợi ý mua hàng — ứng dụng kiến trúc <strong>LLM + RAG</strong>.',
      '<strong>Healthcare Chatbot</strong><br>Xây dựng chatbot cung cấp thông tin sức khỏe, tra cứu thuốc, và hỗ trợ đặt lịch khám, dựa trên dữ liệu y tế và mô hình LLM.',
      'Các <strong>dự án DevOps & Automation khác</strong> được chia sẻ trên GitHub:<br>👉 <a href="https://github.com/NhoThoang" target="_blank" rel="noopener">https://github.com/NhoThoang</a>'
    ],
    
    'education-title': '🎓 Học vấn',
    'university': '<strong>Đại học Điện lực | 2010 – 2015</strong>',
    'education-list': [
      'Chuyên ngành: Cơ điện tử',
      'Xếp loại: Giỏi'
    ],
    
    'skills-title': '🛠 Kỹ năng',
    'skills-list': [
      '<strong>DevOps & Cloud:</strong> AWS, Kubernetes, Terraform, Ansible, Docker, Jenkins, GitLab',
      '<strong>Automation Testing:</strong> Selenium, Appium, Uiautomator2',
      '<strong>Ngôn ngữ lập trình:</strong> Python',
      '<strong>Backend:</strong> FastAPI, Flask',
      '<strong>Frontend:</strong> React, HTML, CSS, JavaScript',
      '<strong>Cơ sở dữ liệu:</strong> MySQL, PostgreSQL, MongoDB',
      '<strong>AI & Machine Learning:</strong> LLMs, RAG, Fine-tuning, Model Deployment'
    ],
    
    'objective-title': '🎯 Mục tiêu nghề nghiệp',
    'objective-list': [
      'Làm việc trong môi trường chuyên nghiệp, sáng tạo và hiện đại.',
      'Tham gia phát triển các dự án có tác động thực tế lớn.',
      'Không ngừng học hỏi, chinh phục thử thách và nâng cao năng lực kỹ thuật cá nhân.'
    ]
  },
  en: {
    // Header
    'cv-title': 'CV – NGUYỄN NHO THOÁNG',
    'fullname-label': 'Full Name:',
    'birthday-label': 'Date of Birth:',
    'email-label': 'Email:',
    'phone-label': 'Phone:',
    'github-label': 'GitHub:',
    'avatar-alt': 'Personal Photo',
    
    // Sections
    'summary-title': '👨‍💻 Professional Summary',
    'summary-content': 'IT Engineer with 7 years of experience in <strong>Cloud Platform</strong> and <strong>Software Quality Engineering</strong> at Samsung. Proficient in <strong>DevOps technologies</strong> (AWS, Docker, Kubernetes, Terraform, CI/CD), experienced in <strong>automation testing</strong> (Selenium, Appium, Uiautomator2, AI-based automation), and building <strong>AI Agents</strong> for automation and integration. Strong skills in <strong>backend (FastAPI, Flask)</strong> and <strong>frontend (React, HTML, CSS, JavaScript)</strong> development. Capable of adapting quickly to new technologies and delivering high-quality solutions in large-scale, high-pressure environments.',
    
    'experience-title': '💼 Work Experience',
    'job-title': 'Cloud Platform Engineer | Samsung SVMC (now Samsung SRV) | 2017 – 2022',
    'monitoring-title': 'Monitoring Service (AWS & On-Premise)',
    'monitoring-list': [
      'Deployed and managed global monitoring systems using <strong>Grafana</strong> and <strong>Prometheus</strong>.',
      'Developed automated alert systems (Warning, Critical) integrated with <strong>Alarm & Auto-healing</strong> mechanisms.',
      'Handled incident response for large-scale services to ensure high availability and stability.',
      'Experienced with <strong>Docker, Kubernetes, Ansible, Terraform, Jenkins, GitLab</strong> for CI/CD and multi-environment deployments.'
    ],
    'automation-title': 'Automation Testing (Selenium, Appium, Uiautomator2, AI-based Automation)',
    'automation-list': [
      'Developed and maintained automated test scripts for <strong>Samsung Developer</strong> and <strong>Tizen Developer</strong> platforms.',
      'Built automation frameworks for mobile app testing triggered after Pull Requests using <strong>Appium</strong>, <strong>Uiautomator2</strong>, and <strong>ADB</strong>.',
      'Maintained test cases, generated automated reports, and improved test coverage.'
    ],
    'sqe-title': 'Software Quality Engineering (SQE)',
    'sqe-list': [
      'Conducted pre-release software validation for Samsung products.',
      'Designed automation frameworks running across multiple devices using <strong>Appium</strong>, <strong>Uiautomator2</strong>, <strong>STP</strong>, <strong>ACT</strong>.'
    ],
    'ai-title': 'AI Research & Internal Applications',
    'ai-list': [
      'Researched and fine-tuned AI models to improve automation workflows.',
      'Experimented with <strong>RAG</strong>, <strong>MCP</strong>, and <strong>LLM</strong> to assist testing and data retrieval tasks.',
      'Built an AI-powered chatbot prototype to support internal testing documentation lookup (fullstack deployment: backend + frontend).'
    ],
    // Job 2022 - now (English)
    'job2-title': 'Software Test Engineer | Samsung SRV | 2022 – Present',
    'job2-automation-title': 'Automation Testing (Selenium, Appium, Uiautomator2, AI-based)',
    'job2-automation-list': [
      'Developed and maintained automated test scripts for <strong>Samsung Developer</strong> and <strong>Tizen Developer</strong> platforms.',
      'Built automation frameworks for mobile app testing triggered after Pull Requests using <strong>Appium</strong>, <strong>Uiautomator2</strong>, and <strong>ADB</strong>.',
      'Automated test case execution, collected results and produced test reports.'
    ],
    'job2-sqe-title': 'Software Quality Engineering (SQE)',
    'job2-sqe-list': [
      'Performed pre-release software validation for Samsung products.',
      'Designed automation frameworks running across multiple devices using <strong>Appium</strong>, <strong>Uiautomator2</strong>, <strong>STP</strong>, <strong>ACT</strong>.'
    ],
    'job2-ai-title': 'AI Research & Internal Applications',
    'job2-ai-list': [
      'Researched and fine-tuned AI models to improve automation workflows.',
      'Applied <strong>RAG</strong>, <strong>MCP</strong>, and <strong>LLM</strong> techniques to support testing and internal data retrieval.',
      'Built a prototype chatbot for internal testing documentation lookup (fullstack deployment: backend + frontend).'
    ],
    
    'projects-title': '📂 Personal Projects',
    'projects-list': [
      '<strong>AI Chatbot (RAG-based)</strong><br>Developed a chatbot to assist employees in document lookup and troubleshooting through a RAG (Retrieval-Augmented Generation) pipeline.',
      '<strong>DevOps AI Agent (AWS Automation)</strong><br>Built an AI agent capable of interacting with <strong>AWS services</strong> (EC2, S3, ECR, IAM, etc.), performing automated environment checks and CI/CD workflows.',
      '<strong>Testing AI Agent (Mobile Automation)</strong><br>Developed an agent that runs automated test cases on Android devices using <strong>Appium</strong> and <strong>Uiautomator2</strong>, collects results, and generates test reports.',
      '<strong>Sales Chatbot</strong><br>Designed a chatbot that assists in product recommendation, customer Q&A, and order-related interactions — built using LLM + RAG architecture.',
      '<strong>Healthcare Chatbot</strong><br>Created a prototype chatbot that provides basic medical information, symptom lookup, and appointment booking suggestions using medical data with RAG.',
      'Additional <strong>DevOps & Automation projects</strong> are available on GitHub:<br>👉 <a href="https://github.com/NhoThoang" target="_blank" rel="noopener">https://github.com/NhoThoang</a>'
    ],
    
    'education-title': '🎓 Education',
    'university': '<strong>Electric Power University | 2010 – 2015</strong>',
    'education-list': [
      'Major: Mechatronics Engineering',
      'GPA: Good'
    ],
    
    'skills-title': '🛠 Skills',
    'skills-list': [
      '<strong>DevOps & Cloud:</strong> AWS, Kubernetes, Terraform, Ansible, Docker, Jenkins, GitLab',
      '<strong>Automation Testing:</strong> Selenium, Appium, Uiautomator2',
      '<strong>Programming:</strong> Python',
      '<strong>Backend:</strong> FastAPI, Flask',
      '<strong>Frontend:</strong> React, HTML, CSS, JavaScript',
      '<strong>Database:</strong> MySQL, PostgreSQL, MongoDB',
      '<strong>AI & ML:</strong> LLMs, RAG, Fine-tuning, Model Deployment'
    ],
    
    'objective-title': '🎯 Career Objective',
    'objective-list': [
      'To work in a professional and innovative environment.',
      'To contribute to real-world, high-impact projects shaping modern technology products.',
      'To continuously grow as an engineer by building and integrating intelligent systems.'
    ]
  }
};

// Current language and theme state
let currentLanguage = 'en';
let currentTheme = 'dark';

document.addEventListener('DOMContentLoaded', function onReady() {
  // Check if user is already authenticated
  const savedAuth = localStorage.getItem('cv_authenticated');
  if (savedAuth === 'true') {
    isAuthenticated = true;
    showCVContent();
  } else {
    showPasswordModal();
  }

  // Set current year
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  // Initialize language and theme from localStorage
  const savedLanguage = localStorage.getItem('language') || 'en';
  const savedTheme = localStorage.getItem('theme') || 'dark';
  
  currentLanguage = savedLanguage;
  currentTheme = savedTheme;
  
  // Apply saved settings
  applyLanguage(currentLanguage);
  applyTheme(currentTheme);
  
  // Set up event listeners
  setupEventListeners();
  setupPasswordProtection();
});

function setupEventListeners() {
  // Language toggle
  const languageToggle = document.getElementById('language-toggle');
  if (languageToggle) {
    languageToggle.addEventListener('click', toggleLanguage);
  }
  
  // Theme toggle
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }
}

function toggleLanguage() {
  currentLanguage = currentLanguage === 'en' ? 'vi' : 'en';
  applyLanguage(currentLanguage);
  localStorage.setItem('language', currentLanguage);
}

function toggleTheme() {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  applyTheme(currentTheme);
  localStorage.setItem('theme', currentTheme);
}

function applyLanguage(lang) {
  const langData = translations[lang];
  if (!langData) return;
  
  // Update all text elements
  Object.keys(langData).forEach(key => {
    const element = document.getElementById(key);
    if (element) {
      if (key.includes('list')) {
        // Handle list elements
        const listItems = langData[key];
        element.innerHTML = listItems.map(item => `<li>${item}</li>`).join('');
      } else {
        element.innerHTML = langData[key];
      }
    }
  });
  
  // Update language button text
  const langText = document.getElementById('lang-text');
  if (langText) {
    langText.textContent = lang === 'en' ? 'VI' : 'EN';
  }
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  
  // Update theme button icon
  const themeIcon = document.getElementById('theme-icon');
  if (themeIcon) {
    themeIcon.textContent = theme === 'dark' ? '🌙' : '☀️';
  }
}

// Password protection functions
function setupPasswordProtection() {
  const passwordInput = document.getElementById('password-input');
  const passwordSubmit = document.getElementById('password-submit');
  const passwordError = document.getElementById('password-error');

  if (passwordSubmit) {
    passwordSubmit.addEventListener('click', handlePasswordSubmit);
  }

  if (passwordInput) {
    passwordInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        handlePasswordSubmit();
      }
    });
  }
}

function showPasswordModal() {
  document.body.classList.add('password-protected');
  const modal = document.getElementById('password-modal');
  if (modal) {
    modal.classList.remove('hidden');
    // Focus on password input
    const passwordInput = document.getElementById('password-input');
    if (passwordInput) {
      setTimeout(() => passwordInput.focus(), 100);
    }
  }
  updatePasswordModalLanguage();
}

function hidePasswordModal() {
  const modal = document.getElementById('password-modal');
  if (modal) {
    modal.classList.add('hidden');
  }
  document.body.classList.remove('password-protected');
}

function showCVContent() {
  hidePasswordModal();
  isAuthenticated = true;
  localStorage.setItem('cv_authenticated', 'true');
}

function handlePasswordSubmit() {
  const passwordInput = document.getElementById('password-input');
  const passwordError = document.getElementById('password-error');
  const passwordSubmit = document.getElementById('password-submit');
  
  if (!passwordInput || !passwordError || !passwordSubmit) return;

  const enteredPassword = passwordInput.value.trim();
  
  // Disable submit button during processing
  passwordSubmit.disabled = true;
  passwordSubmit.innerHTML = '<span>Đang xác thực...</span>';

  // Simulate a small delay for better UX
  setTimeout(() => {
    if (enteredPassword === PASSWORD) {
      // Correct password
      passwordError.style.display = 'none';
      passwordInput.value = '';
      showCVContent();
    } else {
      // Wrong password
      passwordError.style.display = 'block';
      passwordInput.value = '';
      passwordInput.focus();
      
      // Shake animation
      passwordError.style.animation = 'none';
      setTimeout(() => {
        passwordError.style.animation = 'errorShake 0.5s ease-in-out';
      }, 10);
    }
    
    // Re-enable submit button
    passwordSubmit.disabled = false;
    updatePasswordModalLanguage();
  }, 500);
}

function updatePasswordModalLanguage() {
  const langData = passwordTranslations[currentLanguage];
  if (!langData) return;

  // Update password modal text
  Object.keys(langData).forEach(key => {
    const element = document.getElementById(key);
    if (element) {
      if (key === 'password-placeholder') {
        element.placeholder = langData[key];
      } else {
        element.textContent = langData[key];
      }
    }
  });
}

// Override the existing applyLanguage function to include password modal
const originalApplyLanguage = applyLanguage;
applyLanguage = function(lang) {
  originalApplyLanguage(lang);
  updatePasswordModalLanguage();
};

