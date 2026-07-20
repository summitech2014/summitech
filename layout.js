document.getElementById("site-header").innerHTML = `
<header>
  <div class="container nav">
    <div class="flex items-center">
      <a href="index.html" aria-label="Summit Technology Home">
        <img class="header-logo" src="images/summit.png" alt="Summit Technology Logo">
      </a>
    </div>
    <nav class="nav-links" id="site-menu">
      <a href="index.html" data-i18n="nav_home">首頁</a>
      <a href="about.html" data-i18n="nav_about">關於我們</a>

      <div class="nav-item has-dropdown">
        <a href="javascript:void(0)" class="nav-dropdown-trigger" data-i18n="nav_solutions">解決方案</a>
        <div class="nav-dropdown">
          <a href="imaging-solution.html" data-i18n="nav_imaging">攝像方案</a>
          <a href="bluetooth-solution.html" data-i18n="nav_bluetooth">藍牙方案</a>
          <a href="privacy-care-solution.html" data-i18n="nav_privacy_care">隱私看護方案</a>
        </div>
      </div>

      <a href="capabilities.html" data-i18n="nav_technology">開發能力</a>
      <a href="contact.html" data-i18n="nav_contact">聯絡我們</a>
    </nav>
    <div class="lang" aria-label="Language selector">
      <svg class="lang-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/>
        <path d="M3 12h18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        <path d="M12 3c2.4 2.5 3.6 5.5 3.6 9s-1.2 6.5-3.6 9c-2.4-2.5-3.6-5.5-3.6-9S9.6 5.5 12 3Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
      </svg>
      <button class="active" data-lang="zh-TW">繁</button>
      <button data-lang="zh-CN">简</button>
      <button data-lang="en">EN</button>
    </div>
    <button class="menu-toggle" type="button" aria-label="Open menu" aria-expanded="false">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </div>
</header>
`;

document.getElementById("site-footer").innerHTML = `
<footer>
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <img src="images/summit.png" alt="Summit Technology Logo">
        <p data-i18n="footer_brand_desc">Summit Technology 專注於攝像、藍牙與隱私看護方案，協助客戶從產品概念、軟硬體整合到量產導入，建立可靠且可商業化的嵌入式產品。</p>
      </div>
      <div>
        <strong class="footer-title" data-i18n="footer_links_title">快速連結</strong>
        <nav class="footer-links" aria-label="Footer navigation">
          <a href="index.html" data-i18n="nav_home">首頁</a>
          <a href="about.html" data-i18n="nav_about">關於我們</a>
          <a href="imaging-solution.html" data-i18n="nav_imaging">攝像方案</a>
          <a href="bluetooth-solution.html" data-i18n="nav_bluetooth">藍牙方案</a>
          <a href="privacy-care-solution.html" data-i18n="nav_privacy_care">隱私看護方案</a>
          <a href="capabilities.html" data-i18n="nav_technology">開發能力</a>
          <a href="contact.html" data-i18n="nav_contact">聯絡我們</a>
        </nav>
      </div>
      <div class="footer-contact">
        <strong class="footer-title" data-i18n="footer_contact_title">聯絡資料</strong>
        <p><strong>Email：</strong><a href="mailto:sales@summitech.com.tw">sales@summitech.com.tw</a></p>
        <p class="footer-office-title" data-i18n="footer_tw_title">翔米科技有限公司</p>
        <p data-i18n="footer_tw_address">新北市林口區文化二路一段266號 B1-8</p>
        <p data-i18n="footer_tw_tel">Tel：（886）2-2205-0572</p>
        <p data-i18n="footer_tw_fax">Fax：（886）2-2205-0573</p>
        <p class="footer-office-title" data-i18n="footer_sz_title">深圳翔迈特科技有限公司</p>
        <p data-i18n="footer_sz_address">深圳市宝安区留仙二路南天辉创研中心405</p>
        <p data-i18n="footer_sz_tel">Tel：（86）0755-2370-4507</p>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© <span id="year"></span> Summit Technology. All rights reserved.</span>
      <span data-i18n="footer_tagline">Embedded Solutions for Imaging, Bluetooth and Privacy Care.</span>
    </div>
  </div>
</footer>
`;

const menuToggle = document.querySelector(".menu-toggle");
const siteMenu = document.querySelector("#site-menu");

if (menuToggle && siteMenu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteMenu.classList.toggle("is-open");
    menuToggle.classList.toggle("is-open", isOpen);
    menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  siteMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteMenu.classList.remove("is-open");
      menuToggle.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const layoutTranslations = {
  "zh-TW": {
    nav_home: "首頁",
    nav_about: "關於我們",
    nav_solutions: "解決方案",
    nav_imaging: "攝像方案",
    nav_bluetooth: "藍牙方案",
    nav_privacy_care: "隱私看護方案",
    nav_technology: "技術平台",
    nav_contact: "聯絡我們",
    footer_links_title: "快速連結",
    footer_contact_title: "聯絡資料",
    footer_brand_desc: "Summit Technology 專注於攝像、藍牙與隱私看護方案，協助客戶從產品概念、軟硬體整合到量產導入，建立可靠且可商業化的嵌入式產品。",
    footer_tw_title: "翔米科技有限公司",
    footer_tw_address: "新北市林口區文化二路一段266號 B1-8",
    footer_tw_tel: "Tel：（886）2-2205-0572",
    footer_tw_fax: "Fax：（886）2-2205-0573",
    footer_sz_title: "深圳翔邁特科技有限公司",
    footer_sz_address: "深圳市寶安區留仙二路南天輝創研中心405",
    footer_sz_tel: "Tel：（86）0755-2370-4507",
    footer_tagline: "Embedded Solutions for Imaging, Bluetooth and Privacy Care."
  },
  "zh-CN": {
    nav_home: "首页",
    nav_about: "关于我们",
    nav_solutions: "解决方案",
    nav_imaging: "摄像方案",
    nav_bluetooth: "蓝牙方案",
    nav_privacy_care: "隐私看护方案",
    nav_technology: "技术平台",
    nav_contact: "联系我们",
    footer_links_title: "快速链接",
    footer_contact_title: "联系资料",
    footer_brand_desc: "Summit Technology 专注于摄像、蓝牙与隐私看护方案，协助客户从产品概念、软硬件整合到量产导入，建立可靠且可商业化的嵌入式产品。",
    footer_tw_title: "翔米科技有限公司",
    footer_tw_address: "新北市林口区文化二路一段266号 B1-8",
    footer_tw_tel: "Tel：（886）2-2205-0572",
    footer_tw_fax: "Fax：（886）2-2205-0573",
    footer_sz_title: "深圳翔迈特科技有限公司",
    footer_sz_address: "深圳市宝安区留仙二路南天辉创研中心405",
    footer_sz_tel: "Tel：（86）0755-2370-4507",
    footer_tagline: "Embedded Solutions for Imaging, Bluetooth and Privacy Care."
  },
  "en": {
    nav_home: "Home",
    nav_about: "About",
    nav_solutions: "Solutions",
    nav_imaging: "Imaging",
    nav_bluetooth: "Bluetooth",
    nav_privacy_care: "Privacy Care",
    nav_technology: "Technology",
    nav_contact: "Contact",
    footer_links_title: "Quick Links",
    footer_contact_title: "Contact",
    footer_brand_desc: "Summit Technology focuses on imaging, Bluetooth and privacy care solutions, supporting customers from product concept to mass production.",
    footer_tw_title: "Xiangmi Technology Co., Ltd.",
    footer_tw_address: "B1-8, No. 266, Sec. 1, Wenhua 2nd Rd., Linkou Dist., New Taipei City, Taiwan",
    footer_tw_tel: "Tel: +886-2-2205-0572",
    footer_tw_fax: "Fax: +886-2-2205-0573",
    footer_sz_title: "Shenzhen Summit Technology Co., Ltd.",
    footer_sz_address: "Room 405, Nantianhui Innovation Center, Liuxian 2nd Rd., Bao'an Dist., Shenzhen, China",
    footer_sz_tel: "Tel: +86-755-2370-4507",
    footer_tagline: "Embedded Solutions for Imaging, Bluetooth and Privacy Care."
  }
};