{"version":3,"sources":["filtertoolbar.bundle.js"],"names":["this","BX","Mail","exports","main_core","main_core_events","_templateObject","_templateObject2","_templateObject3","_wrapper","WeakMap","_filter","_statusBtn","_counterBtn","_filterApi","_readAllBtn","_counter","_filterTitle","FilterToolbar","_this","config","arguments","length","undefined","wrapper","filter","startDir","babelHelpers","classCallCheck","set","writable","value","EventEmitter","subscribe","event","isSeen","classPrivateFieldGet","getFilterFieldsValues","activateBtn","deactivateBtn","classPrivateFieldSet","getApi","createClass","key","setCount","num","Number","isNaN","textContent","classList","remove","add","onClickFilterButton","setUnreadFilter","removeUnreadFilter","Main","Filter","setFields","DIR","apply","hideCounter","showCounter","IS_SEEN","build","_this2","mailFilterToolbar","Tag","render","taggedTemplateLiteral","Loc","getMessage","counterBtn","readAllBtn","querySelector","onclick","Client","Message","List","onReadClick","mailFilterCounter","append","counters","hidden","currentDir","currentFolderCount","bind","Event"],"mappings":"AAAAA,KAAKC,GAAKD,KAAKC,IAAM,GACrBD,KAAKC,GAAGC,KAAOF,KAAKC,GAAGC,MAAQ,IAC9B,SAAUC,EAAQC,EAAUC,GAC5B,aAEA,IAAIC,EAAiBC,EAAkBC,EAEvC,IAAIC,EAAwB,IAAIC,QAEhC,IAAIC,EAAuB,IAAID,QAE/B,IAAIE,EAA0B,IAAIF,QAElC,IAAIG,EAA2B,IAAIH,QAEnC,IAAII,EAA0B,IAAIJ,QAElC,IAAIK,EAA2B,IAAIL,QAEnC,IAAIM,EAAwB,IAAIN,QAEhC,IAAIO,EAA4B,IAAIP,QAEpC,IAAIQ,EAA6B,WAC/B,SAASA,IACP,IAAIC,EAAQnB,KAEZ,IAAIoB,EAASC,UAAUC,OAAS,GAAKD,UAAU,KAAOE,UAAYF,UAAU,GAAK,CAC/EG,QAAS,GACTC,OAAQ,GACRC,SAAU,SAEZC,aAAaC,eAAe5B,KAAMkB,GAElCT,EAASoB,IAAI7B,KAAM,CACjB8B,SAAU,KACVC,WAAY,IAGdpB,EAAQkB,IAAI7B,KAAM,CAChB8B,SAAU,KACVC,WAAY,IAGdnB,EAAWiB,IAAI7B,KAAM,CACnB8B,SAAU,KACVC,MAAO,QAGTlB,EAAYgB,IAAI7B,KAAM,CACpB8B,SAAU,KACVC,WAAY,IAGdjB,EAAWe,IAAI7B,KAAM,CACnB8B,SAAU,KACVC,WAAY,IAGdhB,EAAYc,IAAI7B,KAAM,CACpB8B,SAAU,KACVC,WAAY,IAGdf,EAASa,IAAI7B,KAAM,CACjB8B,SAAU,KACVC,WAAY,IAGdd,EAAaY,IAAI7B,KAAM,CACrB8B,SAAU,KACVC,WAAY,IAGd1B,EAAiB2B,aAAaC,UAAU,wBAAwB,SAAUC,GACxE,IAAIC,EAASR,aAAaS,qBAAqBjB,EAAOR,GAAS0B,wBAAwB,WAEvF,GAAIF,IAAW,IAAK,CAClBhB,EAAMmB,kBACD,CACLnB,EAAMoB,oBAGVZ,aAAaa,qBAAqBxC,KAAMS,EAAUW,EAAO,YACzDO,aAAaa,qBAAqBxC,KAAMW,EAASS,EAAO,WACxDO,aAAaa,qBAAqBxC,KAAMc,EAAYa,aAAaS,qBAAqBpC,KAAMW,GAAS8B,UAGvGd,aAAae,YAAYxB,EAAe,CAAC,CACvCyB,IAAK,WACLZ,MAAO,SAASa,EAASC,GACvBA,EAAMC,OAAOD,GACbA,EAAME,MAAMF,GAAO,EAAIA,EAEvB,GAAIA,IAAQtB,UAAW,CACrBI,aAAaS,qBAAqBpC,KAAMgB,GAAUgC,YAAcH,EAEhE,GAAIA,IAAQ,EAAG,CACblB,aAAaS,qBAAqBpC,KAAMgB,GAAUiC,UAAUC,OAAO,yBAC9D,CACLvB,aAAaS,qBAAqBpC,KAAMgB,GAAUiC,UAAUE,IAAI,yBAIrE,CACDR,IAAK,cACLZ,MAAO,SAASO,IACdX,aAAaa,qBAAqBxC,KAAMY,EAAY,MACpDe,aAAaS,qBAAqBpC,KAAMa,GAAaoC,UAAUE,IAAI,sCAEpE,CACDR,IAAK,gBACLZ,MAAO,SAASQ,IACdZ,aAAaa,qBAAqBxC,KAAMY,EAAY,OACpDe,aAAaS,qBAAqBpC,KAAMa,GAAaoC,UAAUC,OAAO,sCAEvE,CACDP,IAAK,sBACLZ,MAAO,SAASqB,IACd,IAAKzB,aAAaS,qBAAqBpC,KAAMY,GAAa,CACxDZ,KAAKsC,cACLtC,KAAKqD,sBACA,CACLrD,KAAKuC,gBACLvC,KAAKsD,wBAGR,CACDX,IAAK,qBACLZ,MAAO,SAASuB,IACd,KAAM3B,aAAaS,qBAAqBpC,KAAMW,IAAYgB,aAAaS,qBAAqBpC,KAAMW,aAAoBV,GAAGsD,KAAKC,OAAQ,CACpI7B,aAAaS,qBAAqBpC,KAAMc,GAAY2C,UAAU,CAC5DC,IAAO/B,aAAaS,qBAAqBpC,KAAMW,GAAS0B,wBAAwB,SAElFV,aAAaS,qBAAqBpC,KAAMc,GAAY6C,WAGvD,CACDhB,IAAK,cACLZ,MAAO,SAAS6B,IACdjC,aAAaS,qBAAqBpC,KAAMa,GAAaoC,UAAUE,IAAI,6BACnExB,aAAaS,qBAAqBpC,KAAMiB,GAAcgC,UAAUE,IAAI,+BAErE,CACDR,IAAK,cACLZ,MAAO,SAAS8B,IACdlC,aAAaS,qBAAqBpC,KAAMa,GAAaoC,UAAUC,OAAO,6BACtEvB,aAAaS,qBAAqBpC,KAAMiB,GAAcgC,UAAUC,OAAO,+BAExE,CACDP,IAAK,kBACLZ,MAAO,SAASsB,IACd,KAAM1B,aAAaS,qBAAqBpC,KAAMW,IAAYgB,aAAaS,qBAAqBpC,KAAMW,aAAoBV,GAAGsD,KAAKC,OAAQ,CACpI7B,aAAaS,qBAAqBpC,KAAMc,GAAY2C,UAAU,CAC5DC,IAAO/B,aAAaS,qBAAqBpC,KAAMW,GAAS0B,wBAAwB,OAChFyB,QAAW,MAEbnC,aAAaS,qBAAqBpC,KAAMc,GAAY6C,WAGvD,CACDhB,IAAK,QACLZ,MAAO,SAASgC,IACd,IAAIC,EAAShE,KACb,IAAIiE,EAAoB7D,EAAU8D,IAAIC,OAAO7D,IAAoBA,EAAkBqB,aAAayC,sBAAsB,CAAC,yMAAoN,gDAAiDhE,EAAUiE,IAAIC,WAAW,8BACrZ,IAAIC,EAAanE,EAAU8D,IAAIC,OAAO5D,IAAqBA,EAAmBoB,aAAayC,sBAAsB,CAAC,yKAAkL,+EAAkFhE,EAAUiE,IAAIC,WAAW,yBAC/Y,IAAIE,EAAapE,EAAU8D,IAAIC,OAAO3D,IAAqBA,EAAmBmB,aAAayC,sBAAsB,CAAC,kFAAuF,0BAA2BhE,EAAUiE,IAAIC,WAAW,yBAC7P3C,aAAaa,qBAAqBxC,KAAMgB,EAAUuD,EAAWE,cAAc,wCAC3E9C,aAAaa,qBAAqBxC,KAAMiB,EAAcgD,EAAkBQ,cAAc,oCACtF9C,aAAaa,qBAAqBxC,KAAMe,EAAayD,GACrD7C,aAAaa,qBAAqBxC,KAAMa,EAAa0D,GAErDA,EAAWG,QAAU,WACnBV,EAAOZ,uBAGToB,EAAWE,QAAU,WACnBzE,GAAGC,KAAKyE,OAAOC,QAAQC,KAAK,4BAA4BC,YAAY,OAEpEd,EAAOV,sBAGT,IAAIyB,EAAoBd,EAAkBQ,cAAc,qCACxDM,EAAkBC,OAAOT,GACzBQ,EAAkBC,OAAOR,GACzB7C,aAAaS,qBAAqBpC,KAAMS,GAAUuE,OAAOf,GACzD5D,EAAiB2B,aAAaC,UAAU,gCAAiC,SAAUC,GACjF,GAAIA,EAAM,QAAQ,UAAY,OAAQ,CACpC,IAAI+C,EAAW/C,EAAM,QAAQ,YAC7B,IAAIgD,EAAShD,EAAM,QAAQ,UAC3B,IAAIiD,EAAajD,EAAM,QAAQ,qBAC/B,IAAIkD,EAAqBH,EAASE,GAElC,GAAID,EAAOC,GAAa,CACtBnF,KAAK4D,kBACA,CACL5D,KAAK4C,SAASwC,GACdpF,KAAK6D,iBAGTwB,KAAKrF,WAGX,OAAOkB,EApLwB,GAuLjCf,EAAQe,cAAgBA,GA5MzB,CA8MGlB,KAAKC,GAAGC,KAAKyE,OAAS3E,KAAKC,GAAGC,KAAKyE,QAAU,GAAI1E,GAAGA,GAAGqF","file":"filtertoolbar.bundle.map.js"}