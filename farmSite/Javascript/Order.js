// 3つの選択肢の内1つ選択されてたら色を変える
document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.select-item button');
  const submitBtn = document.getElementById('submit-btn');
  let lastClickedButton = null;

  buttons.forEach(button => {
    button.addEventListener('click', function () {
      // 前回クリックされたボタンの背景色とボーダーカラーをリセット
      if (lastClickedButton && lastClickedButton !== this) {
        lastClickedButton.style.backgroundColor = '#ff9933';
        const borderElement = lastClickedButton.closest('.border');
        if (borderElement) {
          borderElement.style.borderColor = '#ff9933'; // 元のボーダーカラーに戻す
        }
      }

      // クリックされたボタンの背景色を変更
      this.style.backgroundColor = '#0000FF';
      // ボーダーカラーを変更
      const borderElement = this.closest('.border');
      if (borderElement) {
        borderElement.style.borderColor = '#0000FF';
      }

      // 現在のボタンを記録
      lastClickedButton = this;

      submitBtn.style.backgroundColor = '#ff9933'
    });
  });

  submitBtn.addEventListener('click', function () {
    if (submitBtn.style.backgroundColor == 'rgb(255, 153, 51)') {
      window.location.href = '../Order/Settlement.html';
    }
  });
}); 