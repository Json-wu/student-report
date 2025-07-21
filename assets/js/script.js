const baseUrl = 'https://test-student.kouyujie.cn';

const evaluationTemplate = {
    'typeA': {
        'ChildsEngagement': "You were highly engaged in class, showing exceptional participation! You asked questions proactively and made great efforts to use new sentence structures in your responses. Excellent work in class today!​",
        'ListeningAbility': "You grasped information accurately and followed instructions flawlessly—for example, ${part2} (repeat after me/match/draw a line/circle/eyes on me).You also demonstrated clear understanding of key details like greetings, class extensions, and dialogues/passages in the materials.",
        'OralAbility': "You demonstrated excellent speaking skills with clear pronunciation—only minor slips, such as [${part3}], and fluent verbal output. You voluntarily spoke in full sentences, showing strong command of the content.",
        'ReadingAbility': "You read fluently and expressively, with a strong grasp of underlying logic. New and high-frequency words were pronounced correctly, with natural pauses at phrase chunks.",
        'GrammarVocabulary': "Your grammar and vocabulary are advanced. You make only occasional minor grammar errors  ${part4}  (e.g., tense misuse, article/plural mistakes, verb collocation issues, sentence fragments, or confusing adjectives/adverbs) and show a strong ability to self-correct. You voluntarily use advanced vocabulary and confidently experiment with creating new sentences.",
        'Summary': "Overall, I was thoroughly impressed with your engagement in today’s class! Your proactive questions and eagerness to experiment with new sentence structures made your participation truly standout. It was a joy to have you in class, and I’m already looking forward to our next session—keep up this fantastic energy!"
    },
    'typeB': {
        'ChildsEngagement': "You were overall active in class participation, though you occasionally needed gentle prompts (e.g., hand gestures) to share more details or join in. Keep up the good work—your involvement is fantastic!",
        'ListeningAbility': "You comprehended information adequately and followed most instructions correctly (e.g., ${part2} repeat after me/match/draw a line/circle/eyes on me). You understood surface-level details such as basic greetings, simple class extensions, and straightforward dialogues from the materials.",
        'OralAbility': "Your speaking skills were moderate, with minor pronunciation issues (e.g., [${part3}]) and average fluency. You could expand into full sentences when prompted, showing basic ability to elaborate.",
        'ReadingAbility': "Your reading was somewhat halting, but you grasped surface meanings well. Most words were correct, with slight pauses on longer ones.",
        'GrammarVocabulary': "Your grammar and vocabulary are at a basic level. You make a few grammar errors ${part4} (e.g., tense misuse, article/plural mistakes, verb collocation issues, sentence fragments, or confusing adjectives/adverbs) but catch on quickly when reminded. You’re skilled at using familiar words and occasionally try new ones, though you may misuse them at times.",
        'Summary': " Overall, your participation in class was great to see! While you occasionally needed a little nudge to share more, you jumped in willingly and kept the momentum going. Keep building on that—your effort shines through, and I can’t wait to see you grow even more in our next class!​"
    },
    'typeC': {
        'ChildsEngagement': "You seemed a bit shy in class, responding to questions in a soft voice and rarely initiating conversations. It was wonderful to see you try when guided patiently, though! Looking forward to seeing more of your participation in future classes—you’ve got this!",
        'ListeningAbility': "You grasped information vaguely and followed some of the instructions correctly(e.g., ${part2} repeat after me/match/draw a line/circle/eyes on me).Besides, you required repeated instructions and demonstrations to process even foundational elements like basic greetings, simple class cues, or short phrases from the materials.",
        'OralAbility': "Your speaking skills were weak, with frequent pronunciation errors (e.g., [${part3}]). You often got stuck mid-sentence, struggling with words or phrases, and required word-by-word guidance to complete expressions.",
        'ReadingAbility': "Your reading was halting, with recognition limited to basics. Mispronunciations and struggles with new words were common.",
        'GrammarVocabulary': "Your grammar and vocabulary are developing and would benefit from focusing on basics first. You often make pronunciation errors or get stuck on new words, and you currently recognize mostly basic vocabulary. It would help to start with foundational grammar ${part4} (e.g., tense usage, article/plural rules, verb collocations, complete sentences, or adjective/adverb differences) and practice using new words in simple sentences step by step.",
        'Summary': "Overall, I appreciated seeing you step into class today—even if you felt a bit shy. You answered questions thoughtfully, and with a little patience, you opened up more than you might realize. Let’s keep that going! I’m looking forward to our next class, where I hope to hear your voice a little louder and see you start a conversation or two—you’ve got so much to share!"
    },
    'suggestion': "The demo level is ${part5} (a bit difficult/a perfect fit/a bit easy) for the student because ${part6} (fill the reason if level is a bit difficult or a bit easy)",
    'suggestion2': "try to read interesting English materials such as picture books and chapter books to accumulate vocabulary and sentence patterns through reading. For grammar, do targeted exercises on problematic grammar points to consolidate learning, and consult teachers for clarification on doubts. **学习建议可以单选后者多选**) Also,  I suggest starting your English journey from ${part7} (a particular level that we have) and taking classes twice or three times a week to ensure a great learning outcome. "
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

function setValById(id, val, html) {
    const element = document.getElementById(id);
    if (element) {
        if (html) {
            element.innerHTML = val;
        } else {
            element.innerText = val;
        }
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

function formatTemplate(name,type, content) {
    let message = `Hi ${name}，`;
    const template = evaluationTemplate[type];
    message += template.ChildsEngagement;//.replace('${part1}', content.part1);
    message += template.ListeningAbility.replace('${part2}', content.part2);
    message += template.OralAbility.replace('${part3}', content.part3);
    message += template.ReadingAbility.replace('${part4}', content.part4);
    message += template.GrammarVocabulary;//.replace('${part5}', content.part5);
    message += template.Summary;//.replace('${part6}', content.part6);
    return message;
}

function formatSuggestion(levelName, content) {
    // 首航缩进
    let message = `<p style="text-indent: 2em;">${evaluationTemplate.suggestion.replace('${part5}', content.part5).replace('${part6}', content.part6)}</p>`;
    message += `<p style="text-indent: 2em;"><span style="font-weight: bold;">*suggestion 1* For listening and speaking practice,</span> it is recommended to listen to English songs, podcasts, English stories, etc., and engage in shadowing, imitation, and even retelling exercises. For difficult pronunciations and vocabulary, learn from teachers. </p>`;
    message += `<p style="text-indent: 2em;"><span style="font-weight: bold;">*suggestion 2*In reading, grammar, and vocabulary sections,</span> ${evaluationTemplate.suggestion2.replace('${part7}', levelName)}</p>`;
    return message;
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
                setValById('student-name', data.nickname);
                setValByCssName('student-level-text', data.levelName);
                setBgByCssName('teacher-avatar', data.tchPic);
                setValByCssName('teacher-name', data.tchName);
                setValById('teacher-age', data.tchAge);
                setValById('teacher-edu', data.educational);
                setValById('teacher-cert', data.cert);

                setValByCssName('engagement', formatTemplate(data.nickname, data.templateCode, data.content));
                setValById('suggestion', '', formatSuggestion(data.levelName, data.content));

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