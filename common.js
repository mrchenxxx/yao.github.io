// 公共JavaScript文件 - Common Scripts

// 汉堡菜单功能
function toggleMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    
    // 防止背景滚动
    if (navLinks.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

// 关闭移动端菜单
function closeMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
    document.body.style.overflow = '';
}

// 初始化公共功能
function initializeCommonFeatures() {
    // 汉堡菜单点击事件
    const hamburger = document.getElementById('hamburger');
    if (hamburger) {
        hamburger.addEventListener('click', toggleMobileMenu);
    }

    // 导航链接点击处理
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function(e) {
            // 移除所有active类
            document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
            // 添加active类到当前链接
            this.classList.add('active');
            
            // 在移动端关闭菜单
            if (window.innerWidth <= 768) {
                closeMobileMenu();
            }
        });
    });

    // 添加键盘快捷键支持
    document.addEventListener('keydown', function(e) {
        // ESC 关闭移动端菜单
        if (e.key === 'Escape') {
            if (window.innerWidth <= 768) {
                closeMobileMenu();
            }
        }
    });

    // 响应式处理 - 窗口大小改变时关闭移动端菜单
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            closeMobileMenu();
        }
    });

    // 设置当前页面的导航高亮
    setActiveNavigation();
}

// 设置当前页面的导航高亮
function setActiveNavigation() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        }
    });
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    initializeCommonFeatures();
});