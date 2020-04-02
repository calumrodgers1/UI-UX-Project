window.onload = function() {
  document.querySelectorAll('#banner').forEach((arrow, index) => {
    arrow.querySelector('.material-icons').addEventListener('click', event => {
      updateDot(event.target.dataset.index);
      navigateToImage(parseInt(event.target.dataset.index - 1));
    });
  });

  window.onscroll = function() {
    document.querySelectorAll('#banner').forEach((arrow, index) => {
      if((arrow.offsetTop + arrow.clientHeight) <= (window.pageYOffset + window.innerHeight)) {
        updateDot(index);
      }
    });
  }
}

function updateDot(index) {
  document.querySelectorAll('.nav-dot').forEach((dot, count) => {
    if(count == index) {
      dot.innerHTML = '<span class="material-icons">radio_button_checked</span>';
    } else {
      dot.innerHTML = '<span class="material-icons">radio_button_unchecked</span>';
    }
  });
}

function navigateToImage(index) {
  window.scrollTo(0, document.querySelectorAll('#banner')[index].offsetTop + document.querySelectorAll('#banner')[index].clientHeight);
}