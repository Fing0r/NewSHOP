
  
  
  
  function spanPercent() {
    let elementsData = document.querySelectorAll('.apartment-card__percent');
    elementsData.forEach(elData => {
      let elPercent = elData.getAttribute('data-per').match(/\d+/);
      let elSpan = elData.previousElementSibling;
      elSpan.querySelector('span').style.height = elPercent + '%';
    });
  }
  spanPercent()

  document.querySelectorAll('.politics__descr').forEach(el => {
    new SimpleBar(el)
  });

  AOS.init({
    once: true,
    duration: 1000,
  });

  const tabItem = document.querySelectorAll('.dynamics__tab')
  const tabItemParent = document.querySelectorAll('.dynamics__item')
  const tabBtn = document.querySelector('.dynamics__btn')
  const tabActive = document.querySelector('.dynamics__tab--active')
  const tabList = document.querySelector('.dynamics__list')
  const tabDynamics = document.querySelectorAll('.dynamics-tabs__tab')

  if (tabBtn) {
    tabBtn.addEventListener('click', function () {
      tabList.classList.toggle('dynamics__list--active')
      tabBtn.classList.toggle('dynamics__btn--active')
    })

    tabBtn.innerHTML = tabActive.textContent
    tabActive.closest('.dynamics__item').classList.add('dynamics__item--hidden')

    tabItem.forEach(el => {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        e.target.classList.contains('dynamics__tab')
        const hrefTab = e.target.getAttribute('href').replace('#', '')
        tabItem.forEach(el => {
          el.classList.remove('dynamics__tab--active')
          e.target.classList.add('dynamics__tab--active')
        })


        tabDynamics.forEach(el => {
          el.classList.remove('dynamics-tabs__tab--active')
          document.getElementById(hrefTab).classList.add('dynamics-tabs__tab--active')
        })

        const tabActiveCheck = setTimeout(e.target.classList.contains('dynamics__tab--active'), 100)

        if (tabActiveCheck) {
          tabItem.forEach(el => {
            el.closest('.dynamics__item').classList.remove('dynamics__item--hidden')
          })
          tabBtn.innerHTML = el.textContent
          el.closest('.dynamics__item').classList.add('dynamics__item--hidden')
          tabList.classList.remove('dynamics__list--active')
          tabBtn.classList.remove('dynamics__btn--active')
        } else {
          console.log(error)
        }
      })
    })

    document.addEventListener('click', function (e) {
      if (!e.target.closest('.dynamics__list') && !e.target.closest('.dynamics__btn')) {
        tabList.classList.remove('dynamics__list--active')
        tabBtn.classList.remove('dynamics__btn--active')
      }
    })
  }
  const politicsBody = document.querySelector('.politics')
  const backCallBtn = document.querySelector('.back-call__politics')
  const footerPoliticsBtn = document.querySelector('.footer__politics')

  function getPoliticsTitleHeight() {
    const politicsDescr = document.querySelector('.politics__descr')
    const politicsTitle = document.querySelector('.politics__title')
    const politicsTitleMargin = parseInt(getComputedStyle(politicsTitle).getPropertyValue('margin-bottom'))
    setTimeout(() => {
      const politicsTitleHeight = politicsTitle.offsetHeight + politicsTitleMargin
      politicsDescr.style.setProperty('--element-offset', politicsTitleHeight + 'px')
    }, 0);
  }

  backCallBtn?.addEventListener('click', getPoliticsTitleHeight)
  footerPoliticsBtn?.addEventListener('click', getPoliticsTitleHeight)

  window.addEventListener('resize', function () {
    getPoliticsTitleHeight()
  })

  // const interval = setInterval(fontLoadListener, 0)
  const interval = fontLoadListener()

  function fontLoadListener() {
    let hasLoaded = false

    try {
      // hasLoaded = document.fonts.check('30px "Geometria"')
      hasLoaded = true
    } catch (error) {
      console.info("CSS font loading API error", error)
      fontLoadedSuccess()
      return
    }

    if (hasLoaded) {
      fontLoadedSuccess()
    }
  }

  function fontLoadedSuccess() {
    clearInterval(interval)

    if (document.querySelector('.specialists__more')) {

      const specListStyles = getComputedStyle(document.querySelector('.specialists__list', null))
      const specBtnMore = document.querySelector('.specialists__more')
      const gap = parseInt(specListStyles.getPropertyValue('--list-gap'))

      const mason = new Masonry(document.getElementById('masonry'), {
        responsive: {
          0: {
            columns: 1,
            gap: gap,
            maxItem: 2,
          },
          768: {
            columns: 2,
            gap: gap,
            maxItem: 4,
          },
          1024: {
            columns: 3,
            gap: gap,
            maxItem: 6,
          },
          1300: {
            columns: 4,
            gap: gap,
            maxItem: 4,
          },
        }
      })

      specBtnMore.addEventListener('click', function (e) {
        e.preventDefault
        mason.flag = 2
        mason.setParameters()
        specBtnMore.style.display = 'none'
      })
    }

  }

  // fontLoadedSuccess()

  /**
   * название функции
   *
   * @param {number} first - первое число
   * @returns {number}
   */
