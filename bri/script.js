// 定义要飘落的图标文件路径
const iconPaths = [
    'smallcake.png', // 蛋糕图标
    'money.png', // 钱图标
    'flower.png', // 花瓣图标
    'gift.png',    // 绿叶图标
    'six.png'
];


// 随机生成图标并飘落
function createFallingIcons() {
    const container = document.getElementById('falling-icons-container');

    setInterval(() => {
        const icon = document.createElement('img');
        icon.src = iconPaths[Math.floor(Math.random() * iconPaths.length)];
        icon.classList.add('falling-icon');

        // 随机设置图片位置、动画时间、初始旋转角度
        icon.style.left = Math.random() * 100 + 'vw';  // 随机水平位置
        icon.style.animationDuration = Math.random() * 3 + 5 + 's';  // 随机飘落时间 (5-8秒)
        icon.style.animationDelay = Math.random() * 2 + 's';  // 随机延迟
        icon.style.transform = `rotate(${Math.random() * 360}deg)`;  // 随机初始旋转角度

        container.appendChild(icon);

        // 移除飘落到底部的图标
        setTimeout(() => {
            icon.remove();
        }, 10000); // 超过动画时间后移除图标
    }, 200); // 每隔200毫秒生成一个图标
}

// 页面加载时启动飘落动画
window.onload = createFallingIcons;




function showVideo() {
    const videoContainer = document.getElementById('video-container');
    videoContainer.classList.remove('hidden');

    // 动态创建 iframe，设置自动播放参数
    const videoFrame = document.getElementById('video-frame');
    const iframe = document.createElement('iframe');
    iframe.src = "https://player.bilibili.com/player.html?isOutside=true&aid=287950641&bvid=BV1Bf4y1v7ww&cid=259397743&p=1&autoplay=1"; // 自动播放
    iframe.width = "360";  // 竖屏宽度
    iframe.height = "640"; // 竖屏高度
    iframe.scrolling = "no";
    iframe.frameborder = "0";
    iframe.allowfullscreen = "true";
    iframe.allow = "autoplay; encrypted-media"; // 允许自动播放

    // 清空之前插入的 iframe，防止重复播放
    videoFrame.innerHTML = "";
    videoFrame.appendChild(iframe);
}

function hideVideo() {
    const videoContainer = document.getElementById('video-container');
    videoContainer.classList.add('hidden');

    // 停止视频播放，清除 iframe 内容
    const videoFrame = document.getElementById('video-frame');
    videoFrame.innerHTML = "";  // 清空内容以停止播放
}


// 默认显示主页内容
document.getElementById('birthday-section').classList.remove('hidden');
