//Ключи со значениями будут записываться в объект, только в случае прохожденя валидации
//
// //Регулярные выражения
// const regEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
// const regPhone = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
// const regDomain = /(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/;
// const regDate = /^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.((?:19|20)\d{2})\s*$/;
//
// //Объект
// let validator = {
//     //Проверка почты
//     set isEmail(mail) {
//         mail.match(regEmail) ? this.mail = mail : console.log('Alert\nEmail address not correct!');
//     },
//     //Проверка телефона
//     set isPhone(phone) {
//         phone.match(regPhone) ? this.phone = phone : console.log('Alert\nPhone number not correct!');
//     },
//     //Проверка домена
//     set isDomain(domain) {
//         domain.match(regDomain) ? this.domain = domain : console.log('Alert\nDomain not correct!');
//     },
//     //Проверка даты
//     set isDate(date) {
//         date.match(regDate) ? this.date = date : console.log('Alert!\nDate not correct!');
//     },
//
// }
// //Тесты
// validator.isDate = '13.12.2001'
// validator.isDomain = 'habr.com'
// validator.isPhone = '89991231212'
// validator.isEmail = 'wfewfew@gmail.com';
// console.log(validator);

//#############################################################################//
//#############################################################################//
//#############################################################################//

//Простая проверка на валидность с выводом в консоль Correct/Not correct

//Регулярные выражения
const regEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const regPhone = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
const regDomain = /(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/;
const regDate = /^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.((?:19|20)\d{2})\s*$/;

//Объект
let validator = {
    //Проверка почты
    set isEmail(mail) {
        mail.match(regEmail) ? console.log('Correct!') : console.log('Alert\nEmail address not correct!');
    },
    //Проверка телефона
    set isPhone(phone) {
        phone.match(regPhone) ? console.log('Correct!') : console.log('Alert\nPhone number not correct!');
    },
    //Проверка домена
    set isDomain(domain) {
        domain.match(regDomain) ? console.log('Correct!') : console.log('Alert\nDomain not correct!');
    },
    //Проверка даты
    set isDate(date) {
        date.match(regDate) ? console.log('Correct!') : console.log('Alert!\nDate not correct!');
    },

}
//Тесты
validator.isDate = '13.12.2001'
validator.isDomain = 'habr.com'
validator.isPhone = '89991231212'
validator.isEmail = 'wfewfew@gmail.com';
console.log(validator);