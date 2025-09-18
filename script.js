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
    'summary-content': 'Kỹ sư Cơ điện tử với 7 năm kinh nghiệm trong lĩnh vực Cloud Platform và Software Quality Engineering tại Samsung. Thành thạo các công nghệ <strong>DevOps</strong> (AWS, Docker, Kubernetes, Terraform, CI/CD), có kinh nghiệm trong <strong>kiểm thử tự động</strong> (Selenium, Appium, Uiautomator2, tự động hóa dựa trên AI), và ứng dụng <strong>AI (LLMs, RAG)</strong> trong các quy trình thực tế. Khả năng thích ứng cao với công nghệ mới, đã chứng minh khả năng cung cấp giải pháp trong các dự án quy mô lớn, áp lực cao.',
    
    'experience-title': '💼 Kinh nghiệm làm việc',
    'job-title': 'Kỹ sư Cloud Platform Samsung SVMC (nay là Samsung SRV) | 2016 – 2023',
    'monitoring-title': 'Dịch vụ Giám sát (AWS & On-Premise)',
    'monitoring-list': [
      'Triển khai và quản lý hệ thống giám sát toàn cầu với Grafana, Prometheus.',
      'Phát triển hệ thống cảnh báo tự động (Warning, Critical) tích hợp với Alarm & Auto-healing.',
      'Cung cấp giải pháp sự cố nhanh chóng cho các dịch vụ quan trọng.',
      'Thực hành với Docker, Kubernetes, Ansible, Terraform, Jenkins, GitLab để triển khai ứng dụng trên cả môi trường Cloud & On-Premise.'
    ],
    'automation-title': 'Kiểm thử Tự động (Selenium, Appium, Uiautomator2, Tự động hóa dựa trên AI)',
    'automation-list': [
      'Xây dựng script kiểm thử tự động cho Samsung Developer và Tizen Developer.',
      'Phát triển framework tự động hóa cho kiểm thử ứng dụng di động sau Pull Request sử dụng Appium, Uiautomator2, ADB.'
    ],
    'sqe-title': 'Kỹ thuật Chất lượng Phần mềm (SQE)',
    'sqe-list': [
      'Thực hiện kiểm thử phần mềm cho các sản phẩm Samsung trước khi phát hành.',
      'Xây dựng framework kiểm thử tự động chạy trên nhiều thiết bị (Appium, Uiautomator2, STP, ACT).'
    ],
    'ai-title': 'Nghiên cứu & Ứng dụng AI',
    'ai-list': [
      'Huấn luyện và fine-tune các mô hình AI để nâng cao tự động hóa.',
      'Ứng dụng RAG + MCP + LLM để hỗ trợ quy trình kiểm thử phần mềm.',
      'Thành công demo chatbot hỗ trợ kiểm thử dựa trên AI, chuẩn bị triển khai fullstack (backend + frontend) lên server nội bộ.'
    ],
    
    'projects-title': '📂 Dự án cá nhân',
    'projects-list': [
      'Phát triển <strong>chatbot AI (dựa trên RAG)</strong> để hỗ trợ nhân viên tra cứu tài liệu và khắc phục sự cố.',
      'Các <strong>dự án DevOps & Tự động hóa</strong> bổ sung có sẵn trên GitHub.'
    ],
    
    'education-title': '🎓 Học vấn',
    'university': '<strong>Đại học Điện lực | 2010 – 2015</strong>',
    'education-list': [
      'Chuyên ngành: Kỹ thuật Cơ điện tử',
      'GPA: Khá'
    ],
    
    'skills-title': '🛠 Kỹ năng',
    'skills-list': [
      '<strong>DevOps & Cloud:</strong> AWS, Kubernetes, Terraform, Ansible, Docker, Jenkins, GitLab',
      '<strong>Kiểm thử Tự động:</strong> Selenium, Appium, Uiautomator2, TensorFlow, PyTorch',
      '<strong>Lập trình:</strong> Python, Bash',
      '<strong>Cơ sở dữ liệu:</strong> MySQL, PostgreSQL, MongoDB',
      '<strong>AI & ML:</strong> LLMs, RAG, Fine-tuning, Model Deployment'
    ],
    
    'objective-title': '🎯 Mục tiêu nghề nghiệp',
    'objective-list': [
      'Làm việc trong môi trường chuyên nghiệp và đổi mới.',
      'Đóng góp vào các dự án thực tế, tác động cao định hình sản phẩm công nghệ.',
      'Đón nhận thử thách và phát triển mạnh mẽ dưới khối lượng công việc áp lực cao.'
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
    'summary-content': 'Mechatronics Engineer with 7 years of experience in Cloud Platform and Software Quality Engineering at Samsung. Proficient in <strong>DevOps technologies</strong> (AWS, Docker, Kubernetes, Terraform, CI/CD), experienced in <strong>automation testing</strong> (Selenium, Appium, Uiautomator2, AI-based automation), and applying <strong>AI (LLMs, RAG)</strong> in real-world workflows. Strong adaptability to new technologies, with a proven ability to deliver solutions in high-pressure, large-scale projects.',
    
    'experience-title': '💼 Work Experience',
    'job-title': 'Cloud Platform Engineer Samsung SVMC (now Samsung SRV) | 2016 – 2023',
    'monitoring-title': 'Monitoring Service (AWS & On-Premise)',
    'monitoring-list': [
      'Deployed and managed global monitoring systems with Grafana, Prometheus.',
      'Developed automated alert systems (Warning, Critical) integrated with Alarm & Auto-healing.',
      'Provided fast incident resolution for critical services.',
      'Hands-on with Docker, Kubernetes, Ansible, Terraform, Jenkins, GitLab for deploying apps on both Cloud & On-Premise environments.'
    ],
    'automation-title': 'Automation Testing (Selenium, Appium, Uiautomator2, AI-based Automation)',
    'automation-list': [
      'Built automated test scripts for Samsung Developer and Tizen Developer.',
      'Developed automation frameworks for mobile app testing post-Pull Request using Appium, Uiautomator2, ADB.'
    ],
    'sqe-title': 'Software Quality Engineering (SQE)',
    'sqe-list': [
      'Performed software testing for Samsung products before release.',
      'Built automation test frameworks running across multiple devices (Appium, Uiautomator2, STP, ACT).'
    ],
    'ai-title': 'AI Research & Application',
    'ai-list': [
      'Trained and fine-tuned AI models to enhance automation.',
      'Applied RAG + MCP + LLM to support software testing workflows.',
      'Successfully demoed an AI-powered chatbot for testing support, preparing fullstack deployment (backend + frontend) to internal servers.'
    ],
    
    'projects-title': '📂 Personal Projects',
    'projects-list': [
      'Developed an <strong>AI chatbot (RAG-based)</strong> to assist employees in documentation lookup and troubleshooting.',
      'Additional <strong>DevOps & Automation projects</strong> available on GitHub.'
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
      '<strong>Automation Testing:</strong> Selenium, Appium, Uiautomator2, TensorFlow, PyTorch',
      '<strong>Programming:</strong> Python, Bash',
      '<strong>Database:</strong> MySQL, PostgreSQL, MongoDB',
      '<strong>AI & ML:</strong> LLMs, RAG, Fine-tuning, Model Deployment'
    ],
    
    'objective-title': '🎯 Career Objective',
    'objective-list': [
      'To work in a professional and innovative environment.',
      'To contribute to real-world, high-impact projects shaping technology products.',
      'To embrace challenges and thrive under high-pressure workloads.'
    ]
  }
};

// Current language and theme state
let currentLanguage = 'en';
let currentTheme = 'dark';

document.addEventListener('DOMContentLoaded', function onReady() {
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

