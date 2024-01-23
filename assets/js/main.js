var cards = [
    new Card(
        1,
        "Приветствуем, Вы проснулись в лесу, не помня, как туда попали. Вокруг вас только деревья, тишина и... аниматроники. Ваш инвентарь - вода и лишь немного еды. Аниматроники - это роботы, которые были созданы для развлечения детей в парках развлечений. Однако что-то пошло не так, и они стали опасны. Вам нужно найти способ выбраться из леса и спастись от аниматроников. Но будьте осторожны, они вездесущи и могут напасть в любой момент.",
        [
            new Variant("Вперед", 2)
        ]
    ),
    new Card(
        2,
        "Издалека слышны звуки, стоит ли идти?",
        [
            new Variant("Да", 3),
            new Variant("Нет, хочу назад", 1)
        ]
    ),
    new Card(
        3,
        "Оказалось что звуки шли из старого заброшенного дома, и внутри были Аниматроники, на земле лежат 2 предмета.",
        [
            
            new Variant("Подобрать молоток", 4),
            new Variant("Подобрать фонарик", 5),
            new Variant("Пройти мимо", 6)
        ]
    ),
    new Card(
        4,
        "Вы подобрали молоток, теперь ваш инвентарь пополнен, Будь осторожны.",
        [
            new Variant("Продолжить",7)
        ]
    ),
    new Card(
        5,
        "Вы подобрали фонарик, но вас убили 😵😵😵!!! ",
        [
            new Variant("Начать заново",1),
            new Variant("Закончить игру", -1)
        ]
    ),
    new Card(
        6,
        "Вы прошли мимо, хотя могли и взять молоток, будьте осторожны.",
        [
            new Variant("Продолжить", 17),
            new Variant("Вернуться назад", 3)
        ]
    ),
    new Card(
        7,
        "Однако Анимантроники пробудились, скорее решайте что делать пока не поздно!",
        [
            new Variant("Бежать изо всех сил ",8),
            new Variant("Сразиться использую Молоток 🔨", 9)
        ]
    ),
    new Card(
        8,
        "Вас догнали, но не стали убивать, у вас есть шанс остаться в живых если правильно ответите на вопрос  - Сколько существует аниматроников?",
        [
            new Variant("Всего 3", 10),
            new Variant("Всего 5", 10),
            new Variant("Всего 4", 11),
            new Variant("Я не буду отвечать", 10)
        ]
    ),
    new Card(
        9,
        "Вы сражались как герой но, их оказалось слишком много, к сожалению вас убили 😵😵😵!!!",
        [
            new Variant("Начать заново",1),
            new Variant("Закончить игру", -1)
        ]
    ),
    new Card(
        10,
        "Эх, надо было отвечать правильно, вас убили 😵😵😵!!!",
        [
            new Variant("Начать заново",1),
            new Variant("Закончить игру", -1)
        ]
    ),
    new Card(
        11,
        "Вы ответили правильно!!! Вас оставили в живых и даже дали зелье невидимости",
        [
            new Variant("Продолжить",12),
            new Variant("Вернуть назад", 8)
        ]
    ),
    new Card(
        12,
        "Вы приближаетесь к выходу, перед вами 3 двери",
        [
            new Variant("Темная с голосами",13),
            new Variant("Светлая но подозрительная",14),
            new Variant("Сырой туннель с лужой,", 15)
        ]
    ),
    new Card(
        13,
        "Голоса были злых гоблинов, что делать?",
        [
            new Variant("Использовать зелье невидимости", 16),
            new Variant("Я буду сражаться ",9)
        ]
    ),
    new Card(
        14,
        "Ваша интуиция сработала это оказалась простой туннель на выход, вы желаете пройтись по нему?",
        [
            new Variant("Да", 16),
            new Variant("Нет, хочу обратно", 12)
        ]
    ),
    new Card(
        15,
        "Под ногами у вас лужа, стоит ли использовать зелье невидимости?",
        [
            new Variant("Да", 16),
            new Variant("Нет, я пройду и без него", 16)
        ]
    ),
    new Card(
        16,
        "Поздравляем вас, вы сделали все правильно, вы прошли КВЕСТ 🎆🔥🔥🔥",
        [
            new Variant("Сыграть еще раз", 1),
            new Variant("Закончить игру", 0)
        ]
    ),
    new Card(
        17,
        "Однако Анимантроники пробудились, скорее решайте что делать пока не поздно!",
        [
            new Variant("Бежать изо всех сил ",8),
            new Variant("Я сдаюсь, закончить игру", -1)
        ]
    ),
]

function ShowCard(IDcard, arr) {
    if(IDcard == -1 ) { // Герой погиб
        document.querySelector("#gameTxt").textContent = "Gave Over";
        document.querySelector("#vts").innerHTML = "";
        document.querySelector("#img").src = "assets/img/GameOver.gif"
        return;
    }
    else if (IDcard == 0) { // Квест пройден
        document.querySelector("#gameTxt").textContent = "The End";
        document.querySelector("#vts").innerHTML = "";
        document.querySelector("#img").src = "assets/img/TheEnd.jpg"
        return;
    }
    let cd;
    for(const card of arr) {
        if (card.ID == IDcard) {
            cd = card;
            break;
        }
    }
    document.querySelector("#gameTxt").textContent = cd.Text;
    document.querySelector("#vts").innerHTML = "";
    for(const vrt of cd.variants) {
        let btn = document.createElement("button");
        btn.textContent = vrt.text;
        btn.onclick = function() {
            ShowCard(vrt.nextCard, cards);
        };
        document.querySelector("#vts").append(btn);
    }
}

ShowCard(1, cards);