const baseUrl = 'https://test-student.kouyujie.cn';

const typeTempate = {
    'A': {

    },

};

const levelTempate = {
    '1':{
        img: './assets/images/level1.jpg',
        text: '本级别涉及17个主题，孩子跟随Capt.一起学习动作，身体部位，家人感觉，动物，食物，玩具，衣服，天气，乐园，形状等相关词汇表达。'
    },
    '2':{
        img: './assets/images/level1.jpg',
        text: '本级别涉及17个主题，孩子跟随Capt.一起学习动作，身体部位，家人感觉，动物，食物，玩具，衣服，天气，乐园，形状等相关词汇表达。'
    },
    '3':{
        img: '../assets/images/level1.jpg',
        text: '本级别涉及17个主题，孩子跟随Capt.一起学习动作，身体部位，家人感觉，动物，食物，玩具，衣服，天气，乐园，形状等相关词汇表达。'
    },
    '4':{
        img: '../assets/images/level1.jpg',
        text: '本级别涉及17个主题，孩子跟随Capt.一起学习动作，身体部位，家人感觉，动物，食物，玩具，衣服，天气，乐园，形状等相关词汇表达。'
    },
    '5':{
        img: '../assets/images/level1.jpg',
        text: '本级别涉及17个主题，孩子跟随Capt.一起学习动作，身体部位，家人感觉，动物，食物，玩具，衣服，天气，乐园，形状等相关词汇表达。'
    },
    '6':{
        img: '../assets/images/level1.jpg',
        text: '本级别涉及17个主题，孩子跟随Capt.一起学习动作，身体部位，家人感觉，动物，食物，玩具，衣服，天气，乐园，形状等相关词汇表达。'
    },
    '7':{
        img: '../assets/images/level1.jpg',
        text: '本级别涉及17个主题，孩子跟随Capt.一起学习动作，身体部位，家人感觉，动物，食物，玩具，衣服，天气，乐园，形状等相关词汇表达。'
    },
    '8':{
        img: '../assets/images/level1.jpg',
        text: '本级别涉及17个主题，孩子跟随Capt.一起学习动作，身体部位，家人感觉，动物，食物，玩具，衣服，天气，乐园，形状等相关词汇表达。'
    },
};

function setValById(id, val) {
    const element = document.getElementById(id);
    if (element) {
        element.innerText = val;
    } else {
        console.warn(`Element with id ${id} not found.`);
    }
}

function setValByCssName(name, val) {
    const element = document.getElementsByClassName(name);
    if (element) {
        element[0].innerText = val;
    } else {
        console.warn(`Element with className ${name} not found.`);
    }
}

function setBgByCssName(name, val) {
    const element = document.getElementsByClassName(name);
    if (element) {
        element[0].style.backgroundImage = `url(${val})`;
        element[0].textContent = '';
    } else {
        console.warn(`Element with className ${name} not found.`);
    }
}

function setSrcByCssName(name, val) {
    const element = document.getElementsByClassName(name);
    if (element) {
        element[0].src = val;
    } else {
        console.warn(`Element with className ${name} not found.`);
    }
}

// 实现调用第三方api
document.addEventListener('DOMContentLoaded', function () {
    // 获取加载动画元素
    const loadingElement = document.getElementById('loading');

    // 添加隐藏类名，触发淡出动画
    loadingElement.classList.remove('hidden');

    // 从query参数中获取bookLessonId
    const urlParams = new URLSearchParams(window.location.search);
    const bookLessonId = urlParams.get('bookLessonId') || '123'; // 默认值为123
    const apiUrl = baseUrl + '/app/api/v2/filipino/demo-evaluate?bookLessonId=' + bookLessonId;

    fetch(apiUrl, {
        method: 'GET', // 使用GET方法
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxODc3MjIzMTk2NCIsInN0dWRlbnRJZCI6MTcxNzgzLCJleHAiOjE3Njg0ODMxMDR9.TwAV9laDqL8QMlZdqlgcfP8DD2HmU4bmAtSjg2k3RfUgj4YRgAlmHp9lqLg9RN8fc29o2JulD2BZusYhGr39Aw'
        },
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(res => {
            if (res.code == 200) {
                const data = res.data;
                // 处理数据并更新页面内容
                console.log(data);

                setValById('student-name', data.nickname);
                setValByCssName('student-level-text', data.levelName);
                setBgByCssName('teacher-avatar', data.tchPic);
                setValByCssName('teacher-name', data.tchName);
                setValById('teacher-age', data.tchAge);
                setValById('teacher-edu', data.educational);
                setValById('teacher-cert', data.cert);
                setValByCssName('engagement', data.content);
                setValById('suggestion', data.suggestion);

                // 获取levelName中的数字
                const levelNumber = data.levelName.match(/\d+/);
                const levelData = levelTempate[levelNumber ? levelNumber[0] : '1'];
                setSrcByCssName('levelBg', levelData.img);
            } else {
                throw new Error('API error: ' + data.message);
            }
        })
        .catch(error => {
            console.log('error', error);
        }).finally(() => {
            loadingElement.classList.add('hidden');
        });
});