/**
 * data - наш обьект с полями которые мы будем проветрять , запускаем цикл for in
 * for (const fieldName in data) получаем поле
 * for (const validateMetod in [config[fieldName]])теперь необходимо получить конфигурацию для данного поля
 *  validate - метод который будет обрабатывать полученные значения(
 * 1 validateMetod - метод валидации из конфигурации методов
 * 2 data[fieldName] - данные поле полученое из нашего состояния
 * 3  config[fieldName][validateMetod] - конфигурация валидации, чтобы получить сообщение или какиениибудь другие парппметры
 * так как у нас может быть не один мктод , а несклоко, то реализуем  метод validate через switch case
 * в первом кейсе мы проверяем if (data.trim() === '') return config.message если пустое поле, то выдаем сообщение
 * для этого создаем обьект errors  и присваеваем ему возрашенное значение  метода validate()
 *
 * return errors - возвращяем обьект
 * //////////////////////////////////////////
 * так ка наш метод возвращает либо сообщение об ошибке либо undefind сделаем еще одну проверку
 * создадим переменную error  и присвоим ему наш метод validate()  и далее
 * если ошибка сушествует, то errors[fieldName]  присвоим ему значение наешй ошибки 
 * if(error)errors[fieldName] = error
 * 
 * добавляем новый case с регулярнфм выражением 
 * emailRegExp.test(data) в случае совподенияч вернется true иначе false
 * 
*  let statusValidation для избежания дублирования вынесем проверку if (statusValidation) return config.message за пределы case 


 case 'isRequired': поверка на наличие заполнения 
 case 'isEmail': { проверка на совподение с шаблоном 
 * case 'isCapitalSymbol': { на наличие заглавной буквы 
  case 'isContainDigit': { на наличие минимум одной циыфры
    case 'min': { на длинну
 * ),
 *
 */
export function validator(data, config) {
  const errors = {}
  function validate(validateMetod, data, config) {
    let statusValidation
    switch (validateMetod) {
      case 'isRequired':
        statusValidation = data.trim() === ''

        break
      case 'isEmail': {
        const emailRegExp = /^\S+\@\S+\.\S+$/g
        statusValidation = !emailRegExp.test(data)

        break
      }
      case 'isCapitalSymbol': {
        const capitalRegExp = /[A-Z,А-Я]+/g
        statusValidation = !capitalRegExp.test(data)

        break
      }
      case 'isContainDigit': {
        const numRegExp = /\d/g
        statusValidation = !numRegExp.test(data)
        break
      }
      case 'min': {
        statusValidation = data.length < config.value
      }
      default:
        break
    }
    if (statusValidation) return config.message
  }
  for (const fieldName in data) {
    for (const validateMetod in config[fieldName]) {
      const error = validate(
        validateMetod,
        data[fieldName],
        config[fieldName][validateMetod]
      )
      if (error && !errors[fieldName]) errors[fieldName] = error
    }
  }
  return errors
}
