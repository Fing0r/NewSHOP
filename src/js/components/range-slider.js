const sliderFormat = document.getElementById('slider-format')
const inputFormat = document.getElementById('input-format')
const surveyBtns = document.querySelectorAll('.survey__btn')
const stepperInputs = document.querySelectorAll('.survey__field');
const stepperRange = document.querySelectorAll('.survey__range');
const sliderYear = document.getElementById('slider-year');
const inputYear = document.getElementById('input-year');
const inputYearClass = document.querySelector('.survey__item--duration');
const inputYearSpan = document.querySelector('.survey__item--duration span');


if (sliderFormat) {
  noUiSlider.create(sliderFormat, {
        start: [500000],
        step: 50000,
        range: {
                'min': [500000],
                'max': [10000000]
        },
        format: wNumb({
                decimals: 0,
                thousand: ' ',
        })
});

 function getTextWidth(text, font) {
        let canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
        let context = canvas.getContext("2d");
        context.font = font;
        let metrics = context.measureText(text);
        return metrics.width;
}

function elWidth(el, text, font) {
  el.style.width = `${getTextWidth(text, font) + 5}px`;
}

stepperInputs.forEach(stepperInput => {
        function allowNumbersOnly(e) {
                var code = (e.which) ? e.which : e.keyCode;
                if (code === 13 || code > 31 && (code < 48 || code > 57)) {
                        e.preventDefault();
                }
        }

        stepperInput.addEventListener('keypress', (e) => {
                allowNumbersOnly(e)
        })
})

noUiSlider.create(sliderYear, {
        start: [0],
        step: 1,
        range: {
                'min': [0],
                'max': [5]
        },
        format: wNumb({
                decimals: 0,
        })
})

sliderYear.noUiSlider.on('update', function (values, handle) {
        inputYear.value = values[handle]
        let pars = parseInt(values[handle])

        setTimeout(window.onload = function () {
          elWidth(inputYear, values[handle], "bold 20px Geometria") 
        }, 100)

        elWidth(inputYear, values[handle], "bold 20px Geometria") 

        pars === 1 ? inputYearSpan.textContent = ' год' : pars === 0 || pars === 5 ? inputYearSpan.textContent = ' лет' : inputYearSpan.textContent = ' года'

        surveyBtns.forEach(surveyBtn => {
          pars === 0 ? (surveyBtn.setAttribute("disabled", "") || surveyBtn.setAttribute("aria-label", "не активна, выберите срок инвестиций") || surveyBtn.classList.add('survey__btn--disable')) : (surveyBtn.removeAttribute("disabled") || surveyBtn.removeAttribute("aria-label") || surveyBtn.classList.remove('survey__btn--disable'))
        });

        
})

inputYear.addEventListener('change', function () {
        sliderYear.noUiSlider.set(this.value)
})

sliderFormat.noUiSlider.on('update', function (values, handle) {
        inputFormat.value = values[handle]

        setTimeout(window.onload = function () {
          elWidth(inputFormat, values[handle], "bold 20px Geometria") 
        }, 100)
          elWidth(inputFormat, values[handle], "bold 20px Geometria") 
        

})

inputFormat.addEventListener('change', function () {
        sliderFormat.noUiSlider.set(this.value)
})

stepperInputs.forEach(el => {
        el.addEventListener('keyup', (e) => {
                let self = e.currentTarget
                elWidth(self, self.value, "bold 20px Geometria") 
        })
})

}


// Задаем цвет(HEX) страницы при нажатие на кнопку
if (false) {
const subBtn = document.querySelector('.subscribe__btn')
const body = document.querySelector('body')
function randomColor() {
  const hexColor = '1234567890abcdef'
  let randomHex = ''
      while (randomHex.length < 6) {
          randomHex += hexColor[Math.floor(Math.random() * hexColor.length)];
      }
  return '#' + randomHex
}

subBtn.addEventListener('click', function() {
      body.setAttribute('style', "background-color: " + randomColor())
      console.log('Hex цвет равен: ' + randomColor());
})
}
