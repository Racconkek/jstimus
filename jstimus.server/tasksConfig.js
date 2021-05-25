const configs = {
    tasks: [
        {
            taskName: 'rle',
            taskFullName: 'Run-length encoding',
            link: '/tasks/rle',
            description: 'Необходимо реализовать кодирование строки алгоритмом RLE в функции code(input),' +
                ' где input – входные данные(строка). \n\n' +
                'После этого реализовать в том же файле декодирование строки в функции decode(input), ' +
                'где input – входные данные (закодированная строка). \n\n' +
                'Из каждой функции нужно возвращать результат – закодированную или декодированную строку.' +
                ' Результат функции decode должен совпадать с входными данными функции code.\n\n',
            taskFiles: [
                {
                    fileId: 'mainSolution',
                    fileName: 'Файл с решением'
                }
            ]
        },
        {
            taskName: 'entropy',
            taskFullName: 'Энтропия Шеннона',
            link: '/tasks/entropy',
            description: 'Необходимо в функции main(input), где input – строка: \n\n' +
                'Построить алфавит входной строки (множество различных символов) и найти частоту для всех символов алфавита.\n\n' +
                'Для полученной таблицы рассчитать энтропию.\n\n' +
                'Из функции необходимо вернуть число – энтропию.\n\n',
            taskFiles: [
                {
                    fileId: 'mainSolution',
                    fileName: 'Файл с решением'
                }
            ]
        },
        {
            taskName: 'float',
            taskFullName: 'Числа с плавающей точкой',
            link: '/tasks/float',
            description: 'Необходимо написать две функции conv(input), calc(input): первая функция осуществляет' +
                ' перевод числа, вторая осуществляет выполнение арифметических операций.\n\n' +
                'Функции conv(input) на вход подается строка, если строку интерпретировать как число,' +
                ' то функция возвращает внутреннее представление этого числа, в частности внутреннее' +
                ' представление бесконечности, если строку нельзя интерпретировать как число, то функция' +
                ' возвращает внутреннее представление не числа.\n\n' +
                'Функции calc(input) на вход подается строка, содержащая два числа, разделенных ' +
                'операцией + или -. Функция переводит операнды во внутреннее представление и выполняет' +
                ' сложение/вычитание над операндами в их внутреннем представлении' +
                ' и возвращает результат во внутреннем виде.\n\n',
            taskFiles: [
                {
                    fileId: 'mainSolution',
                    fileName: 'Файл с решением'
                }
            ]
        },
        {
            taskName: 'stringsearch',
            taskFullName: 'Поиск подстроки в строке',
            link: '/tasks/bruteforce',
            description: 'Дана строка S длины n и строка Т длины m. В дальнейшем, не оговаривая каждый' +
                ' раз отдельно, будем предполагать, что n >= m. Будем нумеровать символы строк ' +
                'начиная с 1. Обозначим через S [i.. j], 1 <= i < =j <= n, подстроку строки S,' +
                ' начинающуюся в i-й позиции и заканчивающуюся в j -й позиции. \n\n' +
                'Необходимо написать функцию main(S, T), которая реализует нахождение всех ' +
                'вхождений строки Т в строку S, т. е. возвращает все позиции строки S, начиная с' +
                ' которых читается строка Т в виде строки через пробел, например “1 3 5 9”.' +
                ' Если строка T в S ни разу не встретилась вернуть 0.\n\n' +
                'Методы решения:\n\n' +
                '\t1) Алгоритм грубой силы.\n' +
                '\t2) Использование хэш функций.\n' +
                '\t3) Использование конечного детерминированного автомата.\n' +
                '\t4) Алгоритм Бойера-Мура.\n',
            taskFiles: [
                {
                    fileId: 'mainSolution',
                    fileName: 'Файл с решением'
                }
            ]
        },
        // {
        //     taskName: 'hashes',
        //     taskFullName: 'Поиск подстроки в строке. Использование хэш-функций',
        //     link: '/tasks/hashes',
        //     description: 'Дана строка S длины n и строка Т длины m. В дальнейшем, не оговаривая каждый' +
        //         ' раз отдельно, будем предполагать, что n >= m. Будем нумеровать символы строк ' +
        //         'начиная с 1. Обозначим через S [i.. j], 1 <= i < =j <= n, подстроку строки S,' +
        //         ' начинающуюся в i-й позиции и заканчивающуюся в j -й позиции. \n\n' +
        //         'Необходимо написать функцию main(S, T), которая реализует нахождение всех ' +
        //         'вхождений строки Т в строку S, т. е. возвращает все позиции строки S, начиная с' +
        //         ' которых читается строка Т в виде строки через пробел, например “1 3 5 9”. ' +
        //         'Если строка T в S ни разу не встретилась вернуть 0.\n\n',
        //     taskFiles: [
        //         {
        //             fileId: 'mainSolution',
        //             fileName: 'Файл с решением'
        //         }
        //     ]
        // },
        // {
        //     taskName: 'auto',
        //     taskFullName: 'Поиск подстроки в строке. Использование конечного детерминированного автомата',
        //     link: '/tasks/auto',
        //     description: 'Дана строка S длины n и строка Т длины m. В дальнейшем, не оговаривая каждый' +
        //         ' раз отдельно, будем предполагать, что n >= m. Будем нумеровать символы строк ' +
        //         'начиная с 1. Обозначим через S [i.. j], 1 <= i < =j <= n, подстроку строки S,' +
        //         ' начинающуюся в i-й позиции и заканчивающуюся в j -й позиции. \n\n' +
        //         'Необходимо написать функцию main(S, T), которая реализует нахождение всех ' +
        //         'вхождений строки Т в строку S, т. е. возвращает все позиции строки S, начиная с' +
        //         ' которых читается строка Т в виде строки через пробел, например “1 3 5 9”.' +
        //         ' Если строка T в S ни разу не встретилась вернуть 0.\n\n',
        //     taskFiles: [
        //         {
        //             fileId: 'mainSolution',
        //             fileName: 'Файл с решением'
        //         }
        //     ]
        // },
        // {
        //     taskName: 'boyermoor',
        //     taskFullName: 'Поиск подстроки в строке. Алгоритм Бойера-Мура',
        //     link: '/tasks/boyermoor',
        //     description: 'Дана строка S длины n и строка Т длины m. В дальнейшем, не оговаривая каждый' +
        //         ' раз отдельно, будем предполагать, что n >= m. Будем нумеровать символы строк ' +
        //         'начиная с 1. Обозначим через S [i.. j], 1 <= i < =j <= n, подстроку строки S,' +
        //         ' начинающуюся в i-й позиции и заканчивающуюся в j -й позиции. \n\n' +
        //         'Необходимо написать функцию main(S, T), которая реализует нахождение всех ' +
        //         'вхождений строки Т в строку S, т. е. возвращает все позиции строки S, начиная с' +
        //         ' которых читается строка Т в виде строки через пробел, например “1 3 5 9”.' +
        //         ' Если строка T в S ни разу не встретилась вернуть 0.\n\n',
        //     taskFiles: [
        //         {
        //             fileId: 'mainSolution',
        //             fileName: 'Файл с решением'
        //         }
        //     ]
        // },
        {
            taskName: 'cesar',
            taskFullName: 'Шифр Цезаря',
            link: '/tasks/cesar',
            description: 'Необходимо написать две функции: cipher(input, n) и decipher(input): ' +
                'первая осуществляет шифрование входной строки input (состоящей из символов английского алфавита)' +
                ' по шифру цезаря со смещением n, вторая функция осуществляет расшифровку входных данных,' +
                ' используя частотные словари.\n\n' +
                'Из каждой функции нужно возвращать результат – из cipher(input, n) зашифрованную строку,' +
                ' из decipher(input)смещение n, которое является ключом дешифровки(исходное n - 26).\n\n',
            taskFiles: [
                {
                    fileId: 'mainSolution',
                    fileName: 'Файл с решением'
                }
            ]
        },
        {
            taskName: 'hamming',
            taskFullName: 'Код Хэмминга',
            link: '/tasks/hamming',
            description: 'Необходимо реализовать кодирование четырех информационных битов с помощью трех ' +
                'контрольных битов в функции code(input), где input – входные данные (строка из 0 и 1), ' +
                'контрольные биты записывать в конце исходной строки и возвращать закодированную строку.\n\n' +
                'После этого реализовать в том же файле проверку строки в функции decode(input), ' +
                'где input – входные данные (закодированная строка из 0 и 1), вернуть ту же строку и 0,' +
                ' если никаких ошибок в сообщении не было или вывести исправленную строку и номер позиции ' +
                'ошибочного бита (нумерация начинается с 1, возможен только один ошибочный бит).\n\n',
            taskFiles: [
                {
                    fileId: 'mainSolution',
                    fileName: 'Файл с решением'
                }
            ]
        },
        {
            taskName: 'polish',
            taskFullName: 'Обратная польская запись',
            link: '/tasks/polish',
            description: 'Необходимо реализовать конвертацию арифметического выражения в обратную польскую' +
                ' запись в функции main(input), где input – строка с выражением, функция должна возвращать ' +
                'строку с конвертированным выражением.\n\n' +
                'В выражении дробных чисел и чисел в научной нотации (4.5E-5), ' +
                'допускается наличие унарного минуса, сложения, скобок, возведения в степень,' +
                ' ассоциативность возведения в степень прямая (2^2^2 = 64).' +
                ' Выражение всегда верное (нет неправильно расставленных операндов или операторов).\n\n',
            taskFiles: [
                {
                    fileId: 'mainSolution',
                    fileName: 'Файл с решением'
                }
            ]
        }
    ]
};

module.exports = configs;