# HistoryOperateRecord
紀錄一定筆數內操作過程，可回朔上一步及下一步。

It exposes useful methods and properties that let you navigate back and forth through the user's history, and manipulate the contents of the history stack.


<b>Example</b>

```javascript
let operate = new OperateRecord(); // 設置一個共用記憶物件
operate.setMaxStep(10); // 初始化記憶數

// 新增多筆操作
operate.add('t1');
operate.add('t2');
...
operate.add('t10');

// 將指針移動陣列中上一筆、取出上一步的值
let val = operate.previous();
console.log(val);

// 將指針移動到陣列中下一筆、取出下一步的值
let val = operate.next();
console.log(val);


```
