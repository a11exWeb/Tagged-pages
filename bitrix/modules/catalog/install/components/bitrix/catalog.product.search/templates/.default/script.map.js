{"version":3,"sources":["script.js"],"names":["BX","namespace","Catalog","ProductSearchDialog","parameters","this","callback","event","tableId","callerName","currentUri","popup","iblockName","searchTimer","ignoreFilter","me","keydownListener","e","dialogExists","altKey","ctrlKey","metaKey","document","activeElement","tagName","keyCode","focus","removeEventListener","detachEvent","addEventListener","attachEvent","prototype","getIblockId","value","getForm","SelEl","arParams","scope","qtyElement","parent","hasClass","addClass","findParent","className","type","isElementNode","IBLOCK_ID","onCustomEvent","window","fShowSku","sku","i","item","expanded","isArray","length","show","parentNode","hide","toggleClass","onSubmitForm","url","buildUrl","GetAdminList","onSearch","s","time","queryInput","oldValue","clearTimeout","setTimeout","style","display","clearQuery","el","old","checkSubstring","input","checked","search","query","onIblockChange","id","action","SECTION_ID","ajax","get","proxy","result","innerHTML","onSectionClick","sectionId","labelText","openEl","findChildren","removeClass","sectionEl","arrow","findChild","click","openEltext","labelEl","toggleSection","cell","res","toggleDynSection","padding","level","active_id","target","hasChildNodes","bAjaxLoaded","img","create","props","marginLeft","parseInt","text","message","appendChild","util","trim","toggleExecuted","openBranchByPath","arPath","activeId","pop","getAttribute","offset","targetEl","childrenTargetEl","setBreadcrumbs","data","title","arHtml","htmlspecialchars","breadcrumbs","hasOwnProperty","push","ID","NAME","SetTitle","htmlspecialcharsback","isDomNode","join","setIgnoreFilter","flag","appendParameters","params","prepareForm","k","changeIblock","isPlainObject","isNotEmptyString","indexOf","encodeURIComponent"],"mappings":"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","file":"script.map.js"}