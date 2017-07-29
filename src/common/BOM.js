const agent = navigator.userAgent.toLowerCase();

let lang = navigator.languages ? navigator.languages[0] : 'zh-CN';

if (/(msie\s|trident.*rv:)([\w.]+)/i.test(agent) || agent.match(/firefox/)) {
  lang = navigator.language;
}

export {
  lang,
}
