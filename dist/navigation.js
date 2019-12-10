function showNavMenu () {
  console.log ('showNavMenu');
  var x = document.getElementById ('nav-menu');
  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}

var sections = document.getElementsByClassName ('section');
$ (document).ready (function () {
  $ (document).on ('scroll', onScroll);
  $ ('a[href^="#"]').on ('click', function (e) {
    e.preventDefault ();
    $ (document).off ('scroll');
    $ ('a').each (function () {
      $ (this).removeClass ('active');
    });
    $ (this).addClass ('active');
    var target = this.hash, menu = target;
    $target = $ (target);
    $ ('html, body').stop ().animate ({
      scrollTop: $target.offset ().top + 2,
    }, 200, 'swing', function () {
      window.location.hash = target;
      $ (document).on ('scroll', onScroll);
    });
  });
});

function onScroll (event) {
  var scrollPos = $ (document).scrollTop ();
  // console.log("onScroll", scrollPos);

  $ ('#nav-menu a').each (function () {
    var currLink = $ (this);
    var refElement = $ (currLink.attr ('href'));
    var refElementHeight = refElement.height ();
    var refElementTop = refElement.position ().top + refElementHeight * 0.5;
    var refElementBottom = refElementTop + refElementHeight;

    if (refElementTop <= scrollPos && refElementBottom > scrollPos) {
      $ ('#nav-menu a').removeClass ('active');
      currLink.addClass ('active');
    } else {
      currLink.removeClass ('active');
    }
  });
}

// $('#nav-menu a').each(function () {
//   var currLink = $(this);
//   var refElement = $(currLink.attr("href"));
//   var refElementTop = refElement.position().top + 948*2
//   var refElementBottom = refElement.position().top + refElement.height()
//   console.log(refElement);
//   console.log("TOP",refElementTop);
//   console.log("height",refElement.height());
//   console.log("BOT",refElementBottom);
// });
