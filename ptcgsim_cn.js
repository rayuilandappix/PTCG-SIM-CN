// ==UserScript==
// @name        ptcgsim汉化
// @namespace   Violentmonkey Scripts
// @match       *://*ptcgsim.online/*
// @grant       none
// @version     1.2
// @author      -
// @description 2022/11/13 09:04:46
// ==/UserScript==

var allNodes = document.body.querySelectorAll('*')

var allNodeArr = Array.from(allNodes)

var textObj = {

"@version": "1.1",
    //功能
  "Attack": "招式",
  "Pass": "跳过",
  "Set Up": "开始",
  "Reset": "重开",
  "Set Up Both": "双方开始",
  "Reset Both": "双方重开",
  "+Turn":"+回合",
  "Coin":"硬币",
  "Options":"设置",
  "Online Multiplayer Mode":"在线多人模式",
  "Generate":"建房",
  " Join Room ":"加入房间",
  "Import":"导入",
  "Settings":"设置",
  "Dark mode":"深色模式",
  "Hide containers":"隐藏分区",
  "Watch Tutorial":"查看教程",
  "Upload File":"文件上传",
  //介绍文本
  "Welcome to PTCG-sim!":"欢迎来到PTCG-sim！",
  //说明
  "Move card...":"移动卡牌",
  "to Hand ":"到手牌",
  "to Discard ":"到弃牌区",
  "to Bench ":"到备战区",
  "to Active ":"到战斗场",
  "to Stadium ":"到竞技场",
  "to Lost Zone ":"到放逐区",
  "to Prizes ":"到奖赏卡区",
  "to Board ":"到展示区",
  "to Deck (top) ":"到牌库（顶端）",
  "to Deck (bottom) ":"到牌库（底）",
  "to Deck (switch) ":"到牌库（任意）",
  "to Deck (shuffle)":"到牌库（洗牌）",
  "Shuffle deck":"洗切牌库",
  "View top card(s)":"看牌库顶",
  "View bottom card(s)":"看牌库底",
  "View":"查看",
  "Hand":"手牌",
  "Discard hand":"丢弃手牌",
  "Shuffle hand into deck ":"洗回牌库",
  "Shuffle hand to bottom ":"洗切手牌并放到牌库底",
  "Playboard":"玩家展示区",
  "Discard all":"丢弃全部",
  "Move all to hand":"全部加入手牌",
  "Shuffle all into deck":"全部洗回牌库",
  "Card actions":"卡牌操作",
  "Attach ":"附加",
  "Evolve ":"进化",
  "View ":"查看",
  "Toggle ability/Use stadium":"发动特性/使用竞技场",
  "Damage counter":"伤害指示物",
  "Increase ":"增加",
  "Decrease ":"减少",
  "Remove ":"移除",
  "Special condition":"特殊状态",
  "Add/Toggle":"增加/标记",
  "Remoce":"移除",
  "Rotate card(s)":"旋转卡片",
  "Rotate Pokémon BREAK ":"旋转宝可梦BREAK",
  "Look/cover card (only yourself)":"查看/覆盖卡牌（只有自己）",
  "Hide card (both players)":"覆盖卡牌（双方都看不到）",
  "Reveal card (both players)":"翻开卡牌（双方）",
  "Put face-down card in active":"将卡牌反面朝上移入战斗场",
  "Change type...":"改变类型",
  "to Tool ":"为道具",
  "to Energy ":"为能量",
  "to Pokémon ":"为宝可梦",
  "General ":"通用",
  "Set up ":"开始",
  "Reset ":"重开",
  "Start turn ":"回合开始",
  "Flip coin ":"硬币",
  "Flip board ":"换向",
  "Announce mulligan ":"重抽（开始阶段无基础）",
  "Close popups ":"关闭弹窗",
  //二级菜单
  "Clear battle log":"清理战斗记录",
  "Export battle log":"导出战斗记录",
  "Confirm":"确认",
  "Cancel":"取消",
  "Save":"保存",
  "Shuffle deck":"洗牌",
  "Draw card(s)":"摸牌（复数）",
  "View top card(s)":"查看牌库顶的牌（复数）",
  "View bottom card(s)":"查看牌库底的牌（复数）",
  "Move card... ":"移动卡牌...",
  "to Hand":"到手牌",
  "to Discard":"到弃牌区",
  "to Bench":"到备战区",
  "to Active":"到战斗场",
  "to Stadium":"到竞技场",
  "to Lost Zone":"到放逐区",
  "to Prizes":"到奖赏卡区",
  "to Board":"到展示区",
  "to Deck (top)":"到牌库（顶端）",
  "to Deck (bottom)":"到牌库（底）",
  "to Deck (switch)":"到牌库（任意）",
  "to Deck (shuffle)":"到牌库（洗牌）",
  "Change type...\n":"改变类型",
  "to Energy":"能量",
  "to Tool":"道具",
  "to Pokémon":"宝可梦",
  "Hand":"手牌",
  "Prizes":"奖赏卡",
  "Deck":"牌库",
  "Playboard":"展示区",
  "Toggle ability":"标记特性使用",
  "Damage counter":"伤害指示物",
  "Shuffle prizes":"洗切奖赏卡",
  "Reveal/hide prizes":"展示/隐藏奖赏卡",
  "Look/cover prizes":"查看/盖上奖赏卡（自己）",
  "Move card...":"移动卡牌...",
  "Discard hand":"丢弃手牌",
  "Shuffle hand into deck":"手牌洗入牌库",
  "Shuffle hand to bottom":"手牌洗入牌堆底",
  "Reveal/hide hand":"展示/隐藏手牌",
  "Reveal/hide random card":"展示/隐藏随机卡牌",
  "Special condition":"特殊状态",


  //别的
  "Shuffle":"洗牌",
  "Close":"关闭",
  "Shuffle all to Deck":"全部洗回牌库",
  "Sort":"排序",
  "Discard all":"全部丢弃",
  "Shuffle all":"全部洗回牌库",
  "Lost Zone all":"全部放逐",
  "To Hand":"加入手牌",
  "Leave in play":"退出",
  "Looking at cards...":"查看卡牌",
  "Move attached cards":"移动附上的卡牌",
  "Alt (1P only)":"单人模式对手卡组",
  "Main":"主卡组",

}

let chatboxContent;
let chatboxContent_group;
let intervalId = setInterval(function() {
  try{
  chatboxContent_group = document.querySelectorAll("p");
  for (let i=0;i<chatboxContent_group.length;i++){
    if(i>chatboxContent_group.length-10){
      chatboxContent=chatboxContent_group[i].innerText;
      chatboxContent = chatboxContent.replace(/moved/g, '移动');
      chatboxContent = chatboxContent.replace(/move/g, '移动');
      chatboxContent = chatboxContent.replace(/tails/g, '反面');
      chatboxContent = chatboxContent.replace(/heads/g, '正面');
      chatboxContent = chatboxContent.replace(/flipped/g, '投出了');
      chatboxContent = chatboxContent.replace(/attacked/g, '使用招式');
      chatboxContent = chatboxContent.replace(/passed/g, '回合结束');
      chatboxContent = chatboxContent.replace(/deck/g, '牌库');
      chatboxContent = chatboxContent.replace(/discard/g, '弃牌区');
      chatboxContent = chatboxContent.replace(/stadium/g, '竞技场');
      chatboxContent = chatboxContent.replace(/hand/g, '手牌');
      chatboxContent = chatboxContent.replace(/in to/g, '到');
      chatboxContent = chatboxContent.replace(/card(s)/g, '卡牌');
      chatboxContent = chatboxContent.replace(/stopped/g, '停止');
      chatboxContent = chatboxContent.replace(/card/g, '卡牌');
      chatboxContent = chatboxContent.replace(/shuffled /g, '洗切');
      chatboxContent = chatboxContent.replace(/lost zone/g, '放逐区');
      chatboxContent = chatboxContent.replace(/prizes/g, '奖赏卡');
      chatboxContent = chatboxContent.replace(/bench/g, '备战区');
      chatboxContent = chatboxContent.replace(/board/g, '展示区');
      chatboxContent = chatboxContent.replace(/drew for turn/g, '回合开始抽牌');
      chatboxContent = chatboxContent.replace(/attached/g, '附上了');
      chatboxContent = chatboxContent.replace(/looked at /g, '查看了');
      chatboxContent = chatboxContent.replace(/ of /g, '');
      chatboxContent = chatboxContent.replace(/ card /g, '卡牌');
      chatboxContent = chatboxContent.replace(/ top /g, '上方');
      chatboxContent = chatboxContent.replace(/ in to /g, '加入');
      chatboxContent = chatboxContent.replace(/setup/g, '开始');
      chatboxContent = chatboxContent.replace(/hid /g, '隐藏了');
      chatboxContent = chatboxContent.replace(/evolved/g, '进化');
      chatboxContent = chatboxContent.replace(/drew/g, '抽');
      chatboxContent = chatboxContent.replace(/bottom/g, '底下');
      chatboxContent = chatboxContent.replace(/ and /g, '并');
      chatboxContent = chatboxContent.replace(/their/g, '他的');
      chatboxContent = chatboxContent.replace(/used/g, '使用了');
      chatboxContent = chatboxContent.replace(/ability/g, '特性');
      chatboxContent = chatboxContent.replace(/into/g, '到');
      chatboxContent = chatboxContent.replace(/'s/g, '的');
      chatboxContent = chatboxContent.replace(/revealed /g, '翻开');
      chatboxContent = chatboxContent.replace(/ in /g, '在');
      chatboxContent = chatboxContent.replace(/Blue /g, '蓝色方 ');
      chatboxContent = chatboxContent.replace(/Red /g, '红色方 ');
      chatboxContent = chatboxContent.replace(/active/g, '战斗场');
      chatboxContent = chatboxContent.replace(/ from /g, '从');
      chatboxContent = chatboxContent.replace(/ to /g, '到');
      chatboxContent = chatboxContent.replace(/imported/g, '导入了');
      chatboxContent = chatboxContent.replace(/ has no more /g, '没有更多的');
      chatboxContent = chatboxContent.replace(/ has an invalid /g, '无效');

      chatboxContent_group[i].innerText = chatboxContent;
      }
  }
  }catch (error) {
       console.error('Error occurred while monitoring chatbox content:', error);
  }
}, 3000); // 每3秒执行一次

var excutNode = ['IMG','BR','HR','FORM','SELECT','OPTION','INPUT','SCRIPT','STYLE','ts']

console.time('translate')
allNodeArr.forEach(item=>{
    if (item.childNodes && !excutNode.includes(item.nodeName)) {
        item.childNodes.forEach(item => {
            if(item.nodeName === '#text'){
                var text = textObj[item.data]
                if(text){
                    item.data = text
                }

            }
        })
    }
})
console.timeEnd('translate')
