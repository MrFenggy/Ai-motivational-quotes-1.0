// 语言切换功能
const languageToggle = document.getElementById('languageToggle');
let currentLang = 'en';

const translations = {
    en: {
        createQuote: 'Create Quote',
        generateRandom: 'Generate Random Quote',
        uploadPhoto: 'Upload Your Photo',
        heroTitle: 'Create Inspiring Postcards',
        heroSubtitle: 'Transform your photos into beautiful motivational postcards with AI-generated quotes',
        downloadPostcard: 'Download Postcard',
        shareOn: 'Share on',
        fontSelect: 'Select Font',
        languageText: 'English',
        contactUs: 'Contact Us',
        questions: 'Have any questions? Contact us anytime.',
        share: 'Share',
        socialShare: 'Share on social media',
        weibo: 'Weibo',
        wechat: 'WeChat',
        qq: 'QQ'
    },
    zh: {
        createQuote: '创建名言',
        generateRandom: '随机生成名言',
        uploadPhoto: '上传照片',
        heroTitle: '创建激励人心的明信片',
        heroSubtitle: '使用AI生成的名言，将您的照片转换成精美的励志明信片',
        downloadPostcard: '下载明信片',
        shareOn: '分享到',
        fontSelect: '选择字体',
        languageText: '中文',
        contactUs: '联系我们',
        questions: '有任何问题？随时联系我们。',
        share: '分享',
        socialShare: '分享到社交媒体',
        weibo: '微博',
        wechat: '微信',
        qq: 'QQ'
    }
};

// 切换语言
languageToggle.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'zh' : 'en';
    updateLanguage();
});

function updateLanguage() {
    // 更新所有带有语言标签的元素
    document.querySelectorAll('[data-lang-en]').forEach(element => {
        const key = currentLang === 'en' ? 'data-lang-en' : 'data-lang-zh';
        element.textContent = element.getAttribute(key);
    });

    // 更新语言切换按钮文本
    languageToggle.textContent = translations[currentLang].languageText;

    // 更新动态生成的内容
    const downloadBtns = document.querySelectorAll('.download-btn');
    downloadBtns.forEach(btn => {
        btn.textContent = translations[currentLang].downloadPostcard;
    });

    // 更新分享按钮文本
    const shareButtons = document.querySelectorAll('.btn-primary');
    shareButtons.forEach(btn => {
        const platform = btn.getAttribute('data-platform');
        if (platform) {
            btn.textContent = `${translations[currentLang].shareOn} ${platform}`;
        }
    });

    // 更新字体选择文本
    const fontOptionsTitle = document.querySelector('.font-options-title');
    if (fontOptionsTitle) {
        fontOptionsTitle.textContent = translations[currentLang].fontSelect;
    }
}

// 随机生成名言
const generateRandomBtn = document.getElementById('generateRandom');
const generatedContent = document.getElementById('generatedContent');

const sampleQuotes = {
    en: [
        "The only way to do great work is to love what you do.",
        "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        "Believe you can and you're halfway there.",
        "Everything you've ever wanted is on the other side of fear.",
        "The future belongs to those who believe in the beauty of their dreams.",
        "Don't watch the clock; do what it does. Keep going.",
        "The best way to predict the future is to create it.",
        "Your time is limited, don't waste it living someone else's life."
    ],
    zh: [
        "成功不是终点，失败也不是终结，继续前进的勇气才是最重要的。",
        "相信自己，你已经成功了一半。",
        "所有你想要的，都在恐惧的另一边。",
        "未来属于那些相信梦想之美的人。",
        "不要只盯着时钟，要像时钟一样，永远向前。",
        "预测未来最好的方式就是创造未来。",
        "你的时间有限，不要浪费时间过别人的生活。",
        "成功的秘诀是开始行动。"
    ]
};

const sampleImages = [
    'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
    'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d',
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e',
    'https://images.unsplash.com/photo-1519681393784-d120267933ba',
    'https://images.unsplash.com/photo-1472214103451-9374bd1c798e',
    'https://images.unsplash.com/photo-1542224566-6e85f2e6772f'
];

generateRandomBtn.addEventListener('click', () => {
    const quotes = sampleQuotes[currentLang];
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    const image = sampleImages[Math.floor(Math.random() * sampleImages.length)];
    createPostcard(quote, image);
});

// 上传照片功能
const uploadPhotoBtn = document.getElementById('uploadPhoto');

uploadPhotoBtn.addEventListener('click', () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    
    input.onchange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const quotes = sampleQuotes[currentLang];
                const quote = quotes[Math.floor(Math.random() * quotes.length)];
                createPostcard(quote, e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };
    
    input.click();
});

// 创建明信片
function createPostcard(quote, imageUrl) {
    const container = document.createElement('div');
    container.className = 'max-w-2xl mx-auto mb-8';
    
    const postcard = document.createElement('div');
    postcard.className = 'postcard';
    postcard.style.backgroundImage = `url(${imageUrl})`;
    postcard.style.backgroundSize = 'cover';
    postcard.style.backgroundPosition = 'center';

    const overlay = document.createElement('div');
    overlay.className = 'postcard-overlay';

    const quoteText = document.createElement('p');
    quoteText.className = 'quote-text';
    quoteText.textContent = quote;
    quoteText.style.fontFamily = 'Georgia';

    overlay.appendChild(quoteText);
    postcard.appendChild(overlay);

    // 添加控制按钮容器
    const controlsContainer = document.createElement('div');
    controlsContainer.className = 'controls-container';

    // 添加字体选择
    const fontOptions = document.createElement('div');
    fontOptions.className = 'font-options';
    
    const fonts = ['Georgia', 'Inter', 'Arial', 'Verdana'];
    fonts.forEach(font => {
        const option = document.createElement('button');
        option.className = 'font-option';
        option.textContent = font;
        if (font === 'Georgia') {
            option.classList.add('active');
        }
        option.onclick = () => {
            document.querySelectorAll('.font-option').forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');
            quoteText.style.fontFamily = font;
        };
        fontOptions.appendChild(option);
    });

    // 添加下载按钮
    const downloadBtn = document.createElement('button');
    downloadBtn.className = 'download-btn';
    downloadBtn.textContent = translations[currentLang].downloadPostcard;
    downloadBtn.onclick = () => {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.src = imageUrl;
        img.onload = () => {
            html2canvas(postcard, {
                allowTaint: true,
                useCORS: true,
                backgroundColor: null
            }).then(canvas => {
                const link = document.createElement('a');
                link.download = 'motivational-quote.png';
                link.href = canvas.toDataURL('image/png');
                link.click();
            });
        };
    };

    // 添加分享按钮
    const shareButtons = document.createElement('div');
    shareButtons.className = 'flex justify-center gap-4 mt-4';
    
    const platforms = ['Twitter', 'Facebook', 'Reddit'];
    platforms.forEach(platform => {
        const button = document.createElement('button');
        button.className = 'btn btn-primary';
        button.textContent = `${translations[currentLang].shareOn} ${platform}`;
        button.onclick = () => shareToSocial(platform, quote, imageUrl);
        shareButtons.appendChild(button);
    });

    controlsContainer.appendChild(fontOptions);
    controlsContainer.appendChild(downloadBtn);
    controlsContainer.appendChild(shareButtons);

    container.appendChild(postcard);
    container.appendChild(controlsContainer);

    generatedContent.innerHTML = '';
    generatedContent.appendChild(container);
}

// 社交媒体分享功能
function shareToSocial(platform, quote, imageUrl) {
    const text = encodeURIComponent(`${quote} - Created with AI Motivational Quotes`);
    const url = encodeURIComponent(window.location.href);

    const shareUrls = {
        Twitter: `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
        Facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`,
        Reddit: `https://reddit.com/submit?url=${url}&title=${text}`
    };

    window.open(shareUrls[platform], '_blank');
}

// 初始化语言
updateLanguage();