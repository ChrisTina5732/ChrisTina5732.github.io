var storyContent = ﻿{"inkVersion":20,"root":[["^獻給所有的小助手玩耍~!","\n","^前排提示：劇情、角色皆為杜撰，有些借鑒了遊戲中的角色，以及感謝瑟琳姐姐提供了部分想法！","\n","^劇情可能會有邏輯以及各種問題，因為小偵探平時還得探案，只能抽空完成啦，沒辦法做太多測試，所以僅供娛樂！能接受的話就繼續下去吧！","\n",{"->":"main"},["done",{"#f":5,"#n":"g-0"}],null],"done",{"main":[["ev","str","^開始","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^結束","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["\n","^事件的開端...","\n",{"->":"Start_1"},{"#f":5}],"c-1":["\n","^嗚嗚嗚小助手你不跟大偵探玩?!","\n",{"->":"main"},{"#f":5}]}],{"#f":1}],"Start_1":[["^閣樓上的怪聲音","\n","^報案人：瑪麗","\n","^事由：這陣子自家的閣樓上總是出現不知名的腳步聲以及細碎的噪音，多次自行探勘卻一無所獲，希望治安局派人前往探查。","\n","ev","str","^繼續","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^……嗯，看起來只是一個非常簡單的案件，照理來說不會分派到管理局，但後來在這起案件的事發地周圍檢測到狂厄反應，不得已只好向管理局呈報。","\n",{"->":"Start_2"},{"#f":5}]}],{"#f":1}],"Start_2":[["^克里斯正紀錄著從局長那邊得來的消息，她的想法是：","\n",["ev",{"^->":"Start_2.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^\"所以最後分配到了我身上——這樣的走向是吧！哼哼，果然小助手是需要克里斯探長協助的~！\"",{"->":"$r","var":true},null]}],["ev",{"^->":"Start_2.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^\"又一位受謎團所困擾的民眾？別擔心，克里斯探長來了！\"",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Start_2.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":"A_Start_2"},{"#f":5}],"c-1":["ev",{"^->":"Start_2.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n",{"->":"A_Start_2"},{"#f":5}]}],{"#f":1}],"A_Start_2":[["^大偵探的腦子裡迅速閃過自己閃亮登場的畫面，一時間有些飄飄然，一邊哼著歌一邊收拾著要去現場探勘的物品，斧杖、探案簿肯定是必備的！接下來還可以帶上一個物品，要帶什麼呢。","\n","ev","str","^手電筒（說不定會用上…）","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^螢光粉（等等，這是我什麼時候帶過來的！？）","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^放大鏡（……是不是看起來更像名偵探了？）","/str","/ev",{"*":".^.c-2","flg":20},"ev","str","^都不帶（你好像忘記拿包包了！）","/str","/ev",{"*":".^.c-3","flg":20},{"c-0":["\n","ev",1,"/ev",{"VAR=":"item","re":true},{"->":"choose_A"},{"#f":5}],"c-1":["\n","ev",2,"/ev",{"VAR=":"item","re":true},{"->":"choose_B"},{"#f":5}],"c-2":["\n","ev",3,"/ev",{"VAR=":"item","re":true},{"->":"choose_C"},{"#f":5}],"c-3":["\n","ev",4,"/ev",{"VAR=":"item","re":true},{"->":"choose_D"},{"#f":5}]}],{"#f":1}],"choose_A":["^[提示]克里斯最後選擇了手電筒","\n",{"->":"After_A_Start_2"},{"#f":1}],"choose_B":["^[提示]克里斯最後選擇了螢光粉","\n",{"->":"After_A_Start_2"},{"#f":1}],"choose_C":["^[提示]克里斯最後選擇了放大鏡","\n",{"->":"After_A_Start_2"},{"#f":1}],"choose_D":["^[提示]克里斯忘記帶包包出門","\n",{"->":"After_A_Start_2_1"},{"#f":1}],"After_A_Start_2":[["^確認東西都沒有漏下後，克里斯去找了小助手打了聲招呼，信誓旦旦地說肯定很快就破案回來啦！","\n","ev","str","^出發","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":"go"},{"#f":5}]}],{"#f":1}],"After_A_Start_2_1":[["^克里斯去找了小助手打了聲招呼，信誓旦旦地說肯定很快就破案回來啦！不過離開前總感覺忘記了什麼。","\n","ev","str","^出發","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":"go"},{"#f":5}]}],{"#f":1}],"go":[["^抵達目的地時恰好在中午，瑪麗夫人很熱情地邀請自己與她的家人享用午餐。","\n","ev","str","^答應用餐","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^拒絕用餐","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n",{"->":"agree_meal"},{"#f":5}],"c-1":["\n",{"->":"notagree_meal"},{"#f":5}]}],{"#f":1}],"agree_meal":[["^探長有些不好意思的答應了瑪麗夫人的邀約，在跟著對方進入住宅時恰好瞥見了躲在門後偷偷看著自己的小女孩，是瑪麗夫人的孩子吧？","\n","ev","str","^朝她眨眨眼","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^朝她揚起笑臉","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^朝她吐舌頭","/str","/ev",{"*":".^.c-2","flg":20},{"c-0":["\n","^小女孩歪了歪腦袋，學著你眨眨眼睛。","\n",{"->":"After_meal"},{"#f":5}],"c-1":["\n","^小女孩害羞的對你笑了一下，隨後躲到了瑪麗夫人的背後。","\n",{"->":"After_meal"},{"#f":5}],"c-2":["\n","^小女孩也學你吐了吐舌頭，你們同時笑了出聲，瑪麗夫人見狀也微笑著搖了搖頭。","\n","^瑪麗夫人：萊絲莉看起來很喜歡你，她一向不怎麼喜歡見陌生人的，畢竟新城人對我們的態度總有些不同，小孩子是很敏感的。","\n","^克里斯想起檔案中這家人的背景，不免理解地點了點頭。","\n",{"->":"After_meal"},{"#f":5}]}],{"#f":1}],"notagree_meal":[["^剛把拒絕的話講出口，肚子毫不客氣地發出咕嚕——的聲音，害得小探長止住了後續話語，不好意思地紅了臉頰，最後依舊被和藹的瑪麗夫人帶進住宅中。","\n","ev","str","^答應用餐","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^行動:[答應用餐]","\n",{"->":"After_meal"},{"#f":5}]}],{"#f":1}],"After_meal":[["^用過午餐後克里斯跟隨著瑪麗夫人的帶領，第一次用自己的雙眼確認過案發現場，陰暗、悶熱，帶著些許木頭腐朽的氣息與霉味，不像是有人會想躲在這裡的地點。","\n","ev","str","^環顧四周","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^行動:[環顧四周]","\n","^藉著瑪麗夫人手電筒的光只能看見堆滿的雜物。","\n",["ev","str","^詢問瑪麗夫人","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^行動:[詢問瑪麗夫人]","\n",{"->":"ask1"},{"#f":5}]}],{"#f":5}]}],{"#f":1}],"ask1":[["^瑪麗夫人：小偵探，想問什麼嗎？","\n","ev","str","^詢問發生情形","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^詢問是否有窗戶","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^閒聊","/str","/ev",{"*":".^.c-2","flg":20},"ev","str","^結束","/str","/ev",{"*":".^.c-3","flg":20},{"c-0":["\n","ev",1,"/ev",{"VAR=":"ask","re":true},"^行動:[詢問發生情形]","\n","^瑪麗夫人：發生時間……我記得在半夜，接近凌晨兩點的時候。萊斯莉房間正上方就是閣樓，我去檢查她有沒有踢被子時就能聽見細碎的腳步聲。","\n","^我檢查了很久，最後確定是從閣樓發出來的。","\n","^克里斯：半夜嗎？能聽見腳步聲的前提下，小動物似乎能先排除了。……人？禁閉者？（克里斯悄悄嘀咕著）","\n",{"->":"ask1"},{"#f":5}],"c-1":["\n","ev",1,"/ev",{"VAR=":"ask","re":true},"^行動:[詢問是否有窗戶]","\n","^瑪麗夫人：窗戶？窗戶啊……聽你一問似乎有一扇，但已經被那堆雜物給擋起來了，我已經很久沒有搬開那堆雜物了。","\n","^克里斯：嗯！看來窗戶也是一個可以確認的部分。","\n",{"->":"ask1"},{"#f":5}],"c-2":["\n","ev",1,"/ev",{"VAR=":"ask","re":true},"^行動:[閒聊]","\n","^瑪麗夫人：萊斯莉她在房間裡聽到奇怪的聲音這麼久了，都沒有跟我們說。","\n","^克里斯：這個狀況持續很久了嗎？","\n","^瑪麗夫人：至少有一周了。","\n",{"->":"ask1"},{"#f":5}],"c-3":["\n","^行動:[結束詢問]","\n",{"->":"After_ask1"},{"#f":5}]}],{"#f":1}],"After_ask1":[[["ev",{"^->":"After_ask1.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"VAR?":"ask"},1,"==","/ev",{"*":".^.^.c-0","flg":3},{"s":["^克里斯將這些訊息唰唰地寫在探案簿上，一邊寫著一邊點著腦袋，最後啪的一下合了起來，笑瞇瞇地對著瑪麗夫人說：別擔心，克里斯探長會解決問題的！",{"->":"$r","var":true},null]}],["ev",{"^->":"After_ask1.0.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"VAR?":"ask"},0,"==","/ev",{"*":".^.^.c-1","flg":3},{"s":["^克里斯大力的搖搖腦袋，一邊插著腰，一邊笑瞇瞇地對著瑪麗夫人說：別擔心，克里斯探長會親自確認的！",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"After_ask1.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->":"ask2"},{"#f":5}],"c-1":["ev",{"^->":"After_ask1.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n",{"->":"ask2"},{"#f":5}]}],{"#f":1}],"ask2":[["^接下來你想？","\n",["ev",{"^->":"ask2.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^\"瑪麗夫人，再來我想檢查一下閣樓。唔、需要在夫人您的陪同下進行這項活動嗎？\"",{"->":"$r","var":true},null]}],["ev",{"^->":"ask2.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^\"瑪麗夫人，再來我要搬開那些雜物，嗯、可能會有些灰塵，您要先下樓等我檢查完畢嗎？\"",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"ask2.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n","^瑪麗夫人：小探長就放心的檢查吧。這裡頭也沒什麼值錢的物品，都是些破舊的家具而已。","\n","^好脾氣的婦人拍了拍小探長的腦袋後離開了。","\n","^......瑪麗夫人離開了，接下來想要怎麼探查呢？","\n",{"->":"action1"},{"#f":5}],"c-1":["ev",{"^->":"ask2.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n","^瑪麗夫人：哈哈，好的。小探長你也要注意一些，不要被灰塵弄得噴嚏連連啦。","\n","^好脾氣的婦人拍了拍小探長的腦袋後離開了。","\n","^......瑪麗夫人離開了，接下來想要怎麼探查呢？","\n",{"->":"action1"},{"#f":5}]}],{"#f":1}],"action1":[["ev","str","^查看雜物","/str",{"VAR?":"item"},1,"==","/ev",{"*":".^.c-0","flg":5},"ev","str","^查看雜物","/str",{"VAR?":"item"},1,"!=","/ev",{"*":".^.c-1","flg":5},{"c-0":["\n",{"->":"hasflashLight"},{"#f":5}],"c-1":["\n",{"->":"noflashLight"},{"#f":5}]}],{"#f":1}],"hasflashLight":[["^行動:[查看雜物]","\n","^探長拿著手電筒先是查看了一下那堆紙箱，上面滿是灰塵且沒有被觸碰過的痕跡，粗略判斷可能不是從窗戶進入……或者是不需要碰觸也能進入的類型。","\n","ev","str","^搬開雜物","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^行動:[搬開雜物]","\n","^探長花了一些時間以及力氣把雜物搬開了，灰塵四溢，克里斯忍不住咳了幾聲，一邊用衣服捂住口鼻一邊湊到窗邊查看。","\n",{"->":"After_action1"},{"#f":5}]}],{"#f":1}],"noflashLight":["^行動:[查看雜物]","\n","^瑪麗夫人走了，也帶走了唯一的光源。忘記帶上手電筒的小探長忍不住一拍腦袋，懊惱地嘀咕幾句，連忙跟上瑪麗夫人，不好意思地借來了她的手電筒。","\n",{"->":"After_action1"},{"#f":1}],"After_action1":[["ev","str","^查看窗戶","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^使用螢光粉","/str",{"VAR?":"item"},2,"==","/ev",{"*":".^.c-1","flg":21},{"c-0":["\n","^行動:[查看窗戶]","\n","^窗戶上堆積滿灰塵，與方才推理的結果相符。","\n",{"->":"After_action1_1"},{"#f":5}],"c-1":["\n","ev",1,"/ev",{"VAR=":"clue","re":true},"^行動:[使用螢光粉]","\n","^嗯……這種特製的螢光粉只在紫外線下有螢光反應，在窗邊灑下一些或許能捕捉到一些蹤跡？不過看來明日還需要來確認。","\n",{"->":"After_action1_1"},{"#f":5}]}],{"#f":1}],"After_action1_1":[["ev","str","^離開","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":"action2"},{"#f":5}]}],{"#f":1}],"action2":[["^接下來要?","\n","ev","str","^查看地板","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^行動:[查看地板]","\n","^本想確認地板上的灰塵分佈與痕跡，但實際上早已被自己與瑪麗夫人的來回走動給破壞了現場，未來的名偵探懊惱地撓撓臉頰，應該想到這點的才對。","\n",["ev","str","^使用放大鏡","/str",{"VAR?":"item"},3,"==","/ev",{"*":".^.c-0","flg":21},"ev","str","^什麼都沒帶","/str",{"VAR?":"item"},4,"==","/ev",{"*":".^.c-1","flg":21},"ev","str","^使用螢光粉","/str",{"VAR?":"item"},2,"==","/ev",{"*":".^.c-2","flg":21},"ev","str","^結束行動","/str",{"VAR?":"item"},4,"!=",{"VAR?":"item"},3,"!=","&&","/ev",{"*":".^.c-3","flg":21},{"c-0":["\n","ev",2,"/ev",{"VAR=":"clue","re":true},"^行動:[使用放大鏡]","\n","^（在仔細的搜索下克里斯發現了廢棄的沙發旁有許多明顯看起來不是成人的腳印痕跡，以及許多兩條很細的平行線，延伸了一小段距離。）","\n","^嗯？這麼小的腳印——小孩子？是萊斯莉嗎？……還有這是什麼痕跡？克里斯摸不清，只好先拍下來方便稍後查看。","\n",["ev","str","^結束行動","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^行動:[結束行動]","\n","^克里斯結束了行動","\n",{"->":"finish_investigation_1"},{"#f":5}]}],{"#f":5}],"c-1":["\n","ev",0,"/ev",{"VAR=":"clue","re":true},"^背包:[什麼都沒帶]","\n","^克里斯東摸西摸了半天，不可置信地眨眨眼睛。","\n","^克里斯：......","\n","^克里斯：完啦!!包包忘記帶了!!","\n","^克里斯挫敗地想倒在地板上。","\n",["ev","str","^結束行動","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^行動:[結束行動]","\n","^克里斯結束了行動","\n",{"->":"finish_investigation_1"},{"#f":5}]}],{"#f":5}],"c-2":["\n","ev",1,"/ev",{"VAR=":"clue","re":true},"^既然窗邊都灑了，這邊也灑一些看看會有什麼收穫吧！……哎呀，不過要先跟瑪麗夫人說暫時不要上來閣樓了。同樣的錯探長我可不會犯第二次——！","\n",["ev","str","^結束行動","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^行動:[結束行動]","\n","^克里斯結束了行動","\n",{"->":"finish_investigation_1"},{"#f":5}]}],{"#f":5}],"c-3":["\n","ev",0,"/ev",{"VAR=":"clue","re":true},"^行動:[結束行動]","\n","^克里斯結束了行動","\n",{"->":"finish_investigation_1"},{"#f":5}]}],{"#f":5}]}],{"#f":1}],"finish_investigation_1":[["ev","str","^整理思緒","/str",{"VAR?":"clue"},0,"==",{"VAR?":"item"},4,"==","&&","/ev",{"*":".^.c-0","flg":5},"ev","str","^整理思緒","/str",{"VAR?":"clue"},0,"==",{"VAR?":"item"},1,"==","&&","/ev",{"*":".^.c-1","flg":5},"ev","str","^整理思緒","/str",{"VAR?":"clue"},1,"==","/ev",{"*":".^.c-2","flg":5},"ev","str","^整理思緒","/str",{"VAR?":"clue"},2,"==","/ev",{"*":".^.c-3","flg":5},{"c-0":["\n","^\"……這樣回去會不會被小助手笑呀?唉、算啦－－！畢竟本來就是我自己忘記嘛。\"","\n","^克里斯嘀嘀咕咕半天後才做好心理建設。","\n",{"->":"goodbye_1"},{"#f":5}],"c-1":["\n","^\"……哎呀、看來裝備帶的不夠齊全呢，看來明天也得帶上一些裝備。\"","\n",{"->":"goodbye_1"},{"#f":5}],"c-2":["\n","^\"看來還得來幾趟確認犯人是否有再光臨。還以為一天之內能解決呢！回去會不會被小助手笑話啊？……哎呀、肯定不會的！不過裝備帶的不夠齊全呢，看來明天也得把放大鏡帶上。\"","\n",{"->":"goodbye_1"},{"#f":5}],"c-3":["\n","^\"目前線索有……嗯，小孩子的腳印，奇怪的平行線，等等去問一下萊斯莉有沒有上來過閣樓吧。如果有的話是因為什麼原因上來的呢？沒有的話，或許犯人就是小孩子禁閉者？哎呀，看來得讓道爾探長幫忙查查這附近的報案紀錄了。\"","\n",["ev","str","^下樓詢問萊斯莉","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^行動:[詢問]","\n","^小探長順著瑪麗夫人的指引來到了萊斯莉的房間，她聽見敲門聲便乖巧地開了門，克里斯透過門縫能看見她方才正在玩玩具汽車。","\n","^（克里斯蹲下身子讓自己不會顯得過於壓迫對方，並且在萊斯莉的手心中放了一小顆糖果，朝她眨眨眼。）","\n","^克里斯：不好意思呀打擾了你的玩耍時間，但我想問一個小問題，可以用這顆糖果跟你交換嗎？","\n","^（萊斯莉看起來有些猶豫以及害羞，但最後還是握起掌心將糖果收下了。）","\n","^萊斯莉：姐姐想問什麼問題？","\n",["ev","str","^繼續詢問萊斯莉","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^行動:[繼續詢問]","\n","^克里斯：你最近有上去閣樓嗎？","\n","^萊斯莉：……有。","\n","^（她的視線緩緩飄移開，聲音很小聲，看起來不是很願意多說。）","\n","^克里斯：好啦！我的問題問完了！謝謝你呀萊斯莉。","\n","^克里斯的腦中大致上有了一些猜測，她嘿咻一聲站直了身體，隨後摸了摸萊斯莉的腦袋，捲捲的頭髮在掌心的觸感不錯，瑟琳姐姐當初是不是也會這麼覺得？……思緒跑掉了！快回來！","\n","^克里斯晃了晃腦袋，又給小萊斯莉了一顆糖果。","\n",{"->":"goodbye_1"},{"#f":5}]}],{"#f":5}]}],{"#f":5}]}],{"#f":1}],"goodbye_1":[["ev","str","^道別","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^行動:[道別]","\n","^克里斯眼看時間有些晚了，先是跟瑪麗夫人通知了一下這幾天都先不要上去閣樓，以及自己明後天應該會再來一趟的消息。得到同意後才朝著她們揮手道別。","\n",[["ev",{"^->":"goodbye_1.0.c-0.5.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^回管理局",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"goodbye_1.0.c-0.5.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","^有了些許收穫的小探長一回去就往局長辦公室奔去。你正好將公文處理到一個段落，心情正好，就聽見克里斯那熟悉的腳步聲。","\n",{"->":"finish_day_1"},{"#f":5}]}],{"#f":5}]}],{"#f":1}],"finish_day_1":[["ev","str","^抬頭","/str",{"VAR?":"clue"},0,"==","/ev",{"*":".^.c-0","flg":5},"ev","str","^抬頭","/str",{"VAR?":"clue"},1,"==","/ev",{"*":".^.c-1","flg":5},"ev","str","^抬頭","/str",{"VAR?":"clue"},2,"==","/ev",{"*":".^.c-2","flg":5},{"c-0":["\n","^克里斯：小助手，我回來啦——。唔、這次的現場探勘找到的線索太少了，恐怕還得明天再帶上一些工具！","\n","^克里斯：還有這些，這些是我採訪完報案人與探勘完現場後整理出來的時間線，具體的就等我明天探案回來再跟小助手一起討論吧！","\n","^克里斯：……嘿嘿、沒想到這次是我說得太自信啦。下次一定改善！","\n","^克里斯劈裡啪啦講了一連串的話之後又風風火火的跑掉了。而你甚至來不及跟她講上一句辛苦了，只好嘆了口氣，給毛毛躁躁的小探長發消息讓她好好休息。","\n",{"->":"END1"},{"#f":5}],"c-1":["\n","^克里斯：小助手，我回來啦——。唔、這次的現場探勘找到的線索太少了，恐怕還得明天再帶上一些工具！","\n","^克里斯：我在重點位置灑上了一些螢光粉，如果這幾天犯人有重返現場的話，那麼——只要用我特製的燈照過去，就能看見犯人留下的痕跡啦！","\n","^克里斯：既然能發出腳步聲，那麼一定是有實體的吧？這樣的話，總會有碰觸到粉末的機率。","\n","^克里斯：只要等待幾天……哼哼！就是克里斯探長的收割時刻！","\n","^克里斯非常興奮地扶正自己的獵鹿帽，一邊哼著歌一邊蹦蹦跳跳的離開了你的辦公室。","\n",{"->":"END1"},{"#f":5}],"c-2":["\n","^克里斯：小助手——！我回來啦！咳咳、雖然沒有今天就逮出犯人，但我也找到了不少線索喔！","\n","^克里斯：你瞧，這裡有小孩子的腳印。還有這種……嗯，不太理解的痕跡，主要分佈在沙發旁。","\n","^克里斯：我問過報案人家的孩子了，說她有去過閣樓，但在這之前她也跟報案人說過有聽見奇怪的聲音。……嗯，是聽見聲音後獨自上去查看嗎？小助手，你怎麼想？","\n",["ev","str","^講訴猜測","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^行動:[講訴猜測]","\n","^克里斯：嗯？實際上沒有犯人？……沒錯，或許也有這個可能性，先入為主可不是一個好習慣！我這幾天會再留意一下的。","\n","^克里斯：我知道萊斯莉肯定有什麼沒有說出來，但既然她不願意說的話，就讓克里斯探長來親自找出真相吧！探長我可沒有逼問小孩子的壞習慣呢。","\n",["ev","str","^誇獎","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^行動:[誇獎]","\n","^克里斯：小助手你誇得我都不好意思起來了……。你可以看見克里斯不好意思地壓低帽沿，紅了耳尖，嘀嘀咕咕地走出了你的辦公室。","\n",{"->":"END1"},{"#f":5}]}],{"#f":5}]}],{"#f":5}]}],{"#f":1}],"END1":["^☆°．﹒☆°．﹒ ☆°．﹒ ☆°．﹒ ☆°．﹒ ☆°．﹒☆°．﹒☆°．","\n","^目前遊戲劇情就到這裡啦！是不是很期待犯人？是不是很好奇後續？嘿嘿、好奇的話就繼續期待小探長把後續的案件過程寫出來吧!","\n","^——差點忘了，如果對流程有建議、有BUG或者想跟我說什麼的話，可以發送到下面的信箱！小探長在探案空閒時會查看的！","\n","^christina57320915@gmail.com","\n","end",{"#f":1}],"global decl":["ev",0,{"VAR=":"item"},0,{"VAR=":"ask"},0,{"VAR=":"clue"},"/ev","end",null],"#f":1}],"listDefs":{}};