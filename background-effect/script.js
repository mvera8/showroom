document.getElementById("toggleTheme").addEventListener("click", function() {
      let bgWhites = document.querySelectorAll('.bg-white');
              let bgDarks = document.querySelectorAll('.bg-dark');


        bgWhites.forEach(function(bgWhite) {
            bgWhite.classList.remove('bg-white');
            bgWhite.classList.add('bg-dark');

            bgWhite.classList.remove('text-dark');
            bgWhite.classList.add('text-white');
        });


        bgDarks.forEach(function(bgDark) {
            bgDark.classList.remove('bg-dark');
            bgDark.classList.add('bg-white');

            bgDark.classList.remove('text-white');
            bgDark.classList.add('text-dark');
        });
    });

