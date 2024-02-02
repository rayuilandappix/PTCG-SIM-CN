# PTCG-SIM-CN
感谢[xiaoxiaolong](https://github.com/xxmichaellong),[PTCG-sim](https://ptcgsim.online/)上可以游玩简体中文版PTCG的标准赛制（TU-CRE）啦！
为了让中文玩家更好的游玩我尝试写了两个Tampermonkey脚本，分别是ptcg-sim界面中文化的脚本和将繁体中文版官网中的deck导出为ptcg-sim可接受的csv格式的脚本。

Thanks to [Xiaoxiaolong](https://github.com/xxmichaellong)'s work, now we can play simplified Chinese version standard format (like TU-CRE) on his [PTCG-sim](https://ptcgsim.online/)!
In order to allow Chinese players to better play this excellent simulator, I have attempted to write two Tampermonkey scripts, one to localize the ptcg-sim interface and the other to export decks from the traditional Chinese official website to csv. 
Let's practice together on ptcg-sim!

原本只是PTCG-SIM的中文化工具，但是现在追加了繁中、新加坡（asia english）、日版官网卡表导出为ptcg sim可用的csv格式的脚本。

Originally a tool for the localization of PTCG-SIM, it has been expanded to include scripts that export Decks from the official websites of Singapore, Traditional Chinese, and Japanese Pokémon card games into the csv format usable by PTCG-SIM.

原本はPTCG-SIMのローカライズツールでしたが、それ以外にシンガポール（asia english）、繁体字中国語と日本のポケモンカード公式サイトからデッキをPTCG-simで使用可能なcsv形式にエクスポートするスクリプトを追加しました。

你可以用asiaOfficialWebside_to_ptcg-sim_CN.js导出繁体中文的卡表为csv了。

By asiaOfficialWebside_to_ptcg-sim_EN.js.Now you can also use https://asia.pokemon-card.com/sg/deck-build/ to build your English deck, and output it to csv by "output PTCG-SIM csv" button.

TampermonkeyスクリプトasiaOfficialWebside_to_ptcg-sim_JP.js は、日本公式のポケモンカードページからptcg simで使用可能なcsv形式をエクスポートすることができます