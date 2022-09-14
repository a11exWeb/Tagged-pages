{"version":3,"sources":["messenger.component.textarea.bundle.js"],"names":["exports","BX","Vue","component","props","siteId","default","userId","dialogId","enableCommand","enableMention","desktopMode","enableEdit","enableFile","sendByEnter","autoFocus","writesEventLetter","styles","type","Object","_default","listenEventInsertText","listenEventFocus","listenEventBlur","data","placeholderMessage","currentMessage","previousMessage","commandListen","mentionListen","stylesDefault","freeze","button","backgroundColor","iconColor","created","this","event","$on","onInsertText","$root","onFocusSet","onFocusClear","localStorage","Messenger","LocalStorage","textareaHistory","get","beforeDestroy","$off","clearTimeout","messageStoreTimeout","set","computed","textareaClassName","Utils","device","isMobile","buttonStyle","assign","isIconDark","isDarkColor","className","style","localize","getFilteredPhrases","$bitrixMessages","directives","bx-im-focus","inserted","element","params","value","focus","methods","insertText","text","breakline","arguments","length","undefined","position","cursor","textarea","$refs","selectionStart","selectionEnd","substring","trim","textChangeEvent","sendMessage","$emit","_this","previousSelectionStart","previousSelectionEnd","toString","setTimeout","onKeyDown","target","isMac","platform","isCtrlTEnable","isBitrixDesktop","browser","isChrome","altKey","ctrlKey","shiftKey","keyCode","document","activeElement","preventDefault","stopPropagation","metaKey","key","includes","tagStart","toLowerCase","tagEnd","selected","startsWith","endsWith","indexOf","onKeyUp","onPaste","$nextTick","onInput","onFocus","onBlur","onAppButtonClick","appId","blur","onFileClick","onFileSelect","fileInput","template","window"],"mappings":"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","file":"messenger.component.textarea.bundle.map.js"}