# HistoryOperateRecord
紀錄一定筆數內操作過程，可回朔上一步及下一步。

It exposes useful methods and properties that let you navigate back and forth through the user's history, and manipulate the contents of the history stack.

<b>Live Previews</b>

https://jsfiddle.net/ux7em4dy/

<b>Example</b>

```javascript
let operate = new OperateRecord(); // 設置一個共用記憶物件
operate.setMaxStep(10); // 初始化記憶數 (Initialization maximum records)

// 新增操作 (add a new operation)
operate.add('t1');
operate.add('t2');
...
operate.add('t10');

// 將指針移動陣列中上一筆、取出上一步的值  (Move the pointer to the previous stroke in the array)
let val = operate.previous();
console.log(val);

// 將指針移動到陣列中下一筆、取出下一步的值 (Move the pointer to the next stroke in the array)
let val = operate.next();
console.log(val);


```

<b>進階使用</b>

判斷是否可讓使用點選下一步 (Determine if the user can click Next)
```javascript
if(operate.allowPrevious()){
    //previousElm.disabled = false; // 變更欄位為可用
}
```

判斷是否可讓使用回朔到上一步歷史紀錄 (Determine if it is possible to go back to the previous historical record)
```javascript
if(operate.allowNnext()){
    //nextElm.disabled = false; // 變更欄位為可用
}
```

清除所有使用者操作歷史紀錄 (Clear user all operation history)
```javascript
operate.clean();
```

列出所有使用者操作紀錄 (List user all operation history)
```javascript
operate.records()
```




