/**
 * 歷史操作紀錄
 * Provide the ability to track history on User object.
 * 2022/05/25 Jwu
 */
 var OperateRecord = function () {
    this.maxStep = 5;
    this.currentStep = 1;
    this.stack = [];

    /**
     * 設置最大紀錄數
     * @param {int} maxStep
    */
    this.setMaxStep = function (maxStep) {
        this.maxStep = maxStep
    }

    /**
     * 取得最大紀錄數
     * @returns {int}
    */
    this.getMaxStep = function () {
        return this.maxStep;
    }
    this.getCurrentStep = function () {
        return this.currentStep;
    }
    
    /**
     * 取出所有陣列堆疊紀錄結果
     * @param {void}
     * @returns {Object}
     */
    this.records = function() { 
        return this.stack;
    }

    /**
     * 新增操作
     * @param {obj|string} val
     * @returns {void}
    */
    this.add = function(val) {
        if(this.currentStep > 1){
             this.stack = this.stack.slice(0, this.stack.length - this.currentStep +1); // 移除陣列中當前位至指針後方的紀錄
        }
        this.stack.push(val);
        if(this.stack.length > this.maxStep){
            this.stack = this.stack.slice(0 - this.maxStep); // 只保留最後10筆
        }
        this.currentStep = 1;// 將指針移動最後筆
    }

    /**
     * 取得當前值
     * @param {void}
     * @returns {Object}
     * @returns {string}
    */
    this.getCurrentVal = function() {
        return( this.stack [this.stack.length - this.currentStep] );
    }

    /**
     * 執行上一步以及回傳值
     * @param {void}
     * @returns {Object}
     * @returns {string}
    */
    this.previous = function() {
        if( this.currentStep < this.stack.length ){ // 小於陣列內數量
            this.currentStep = this.currentStep + 1;
        }
        return( this.stack [this.stack.length - this.currentStep] );
    }

    /**
     * 執行下一步以及回傳值
     * @param {void}
     * @returns {Object}
     * @returns {string}
    */
    this.next = function() {
        if(this.currentStep -1 > 0){
            this.currentStep = this.currentStep - 1;
        }
        return( this.stack [this.stack.length - this.currentStep] );
    }

    /**
     * 檢測是否允許上一步
     * @param {void}
     * @returns {boolean}
    */
    this.allowPrevious = function() {
        if(this.stack.length - this.currentStep > 0){
            return true;
        }
        return false;
    }

    /**
     * 檢測是否允許下一步
     * @param {void}
     * @returns {boolean}
    */
    this.allowNnext = function() {
        if(this.currentStep > 1){
            return true;
        }
        return false;
    }

    /**
     * 清除紀錄
     * @param {void}
    */
    this.clean = function() {
        this.currentStep = 1;// 將指針移動最後筆
        this.stack.length = 0;
        return this.stack;
    }
}
