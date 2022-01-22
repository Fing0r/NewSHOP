const surveySel = document.querySelector('.survey__select')

if (surveySel) {
const defaultSelect = () => {
  const choices = new Choices(surveySel, {
    searchEnabled: false,
     placeholder: false,
     position: 'bottom',
  })
}

defaultSelect()
}
