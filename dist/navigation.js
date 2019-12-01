const el = document.getElementById ('navigation');
el.addEventListener ('mouseenter', showMenu, false);

document
  .getElementById ('navigation')
  .addEventListener ('mouseenter', function () {
    TweenMax.to ('#navigation-menu', 1);
  });
