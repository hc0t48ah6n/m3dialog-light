(function(global){

  async function modal(message){
    const result = await M3Dialog.show({
      title: "確認",
      message: message,
      yesText: "はい",
      noText: "いいえ"
    });
    return result;
  }

  // グローバル公開
  global.modal = modal;

})(window);
