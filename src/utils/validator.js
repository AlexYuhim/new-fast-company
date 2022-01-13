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
 * if(error)
      errors[fieldName] = error
 * 
 * ),
 *
 */
export function validstor(data, config) {
  const errors = {}
  function validate(validateMetod, data, config) {
    switch (validateMetod) {
      case 'isRequired':
        if (data.trim() === '') return config.message
        break

      default:
        break
    }
  }
  for (const fieldName in data) {
    for (const validateMetod in config[fieldName]) {
      const error = validate(
        validateMetod,
        data[fieldName],
        config[fieldName][validateMetod]
      )
      if (error) errors[fieldName] = error
    }
  }
  return errors
}
