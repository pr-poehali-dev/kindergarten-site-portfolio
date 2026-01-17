import json
import os
import urllib.request
import urllib.parse


def send_message(chat_id: str, text: str, reply_markup: dict = None) -> bool:
    '''Отправка сообщения в Telegram'''
    bot_token = os.environ.get('TELEGRAM_BOT_TOKEN')
    url = f'https://api.telegram.org/bot{bot_token}/sendMessage'
    
    payload = {
        'chat_id': chat_id,
        'text': text,
        'parse_mode': 'HTML'
    }
    
    if reply_markup:
        payload['reply_markup'] = json.dumps(reply_markup)
    
    data = urllib.parse.urlencode(payload).encode('utf-8')
    req = urllib.request.Request(url, data=data, method='POST')
    
    try:
        with urllib.request.urlopen(req) as response:
            return response.status == 200
    except:
        return False


def get_main_menu():
    '''Главное меню бота'''
    return {
        'inline_keyboard': [
            [{'text': '🌐 Открыть сайт-портфолио', 'url': 'https://preview--kindergarten-site-portfolio.poehali.dev'}],
            [{'text': '👤 О воспитателе', 'callback_data': 'about'}],
            [{'text': '🎓 Достижения и опыт', 'callback_data': 'achievements'}],
            [{'text': '📚 Советы родителям', 'callback_data': 'tips'}],
            [{'text': '📸 Наши будни', 'callback_data': 'gallery'}],
            [{'text': '✉️ Задать вопрос', 'callback_data': 'ask'}]
        ]
    }


def handle_start(chat_id: str, first_name: str = 'Друг'):
    '''Обработка команды /start'''
    text = f'''Здравствуйте, {first_name}! 👋

Я — помощник воспитателя МБДОУ «Детский сад № 180».

Здесь вы можете:
• Узнать о воспитателе и её достижениях
• Получить полезные советы по воспитанию
• Посмотреть фото из жизни группы
• Задать вопрос напрямую

Выберите интересующий раздел:'''
    
    return send_message(chat_id, text, get_main_menu())


def handle_about(chat_id: str):
    '''Информация о воспитателе'''
    text = '''👤 <b>О воспитателе</b>

Опыт работы: 12 лет
Образование: Высшее педагогическое
Квалификация: Воспитатель дошкольного образования

<b>Профессиональные интересы:</b>
• Развитие речи и коммуникативных навыков
• Творческое развитие детей
• Подготовка к школе
• Работа с родителями

Подробнее на сайте-портфолио 👇'''
    
    keyboard = {
        'inline_keyboard': [
            [{'text': '🌐 Открыть сайт', 'url': 'https://preview--kindergarten-site-portfolio.poehali.dev'}],
            [{'text': '⬅️ Назад в меню', 'callback_data': 'menu'}]
        ]
    }
    
    return send_message(chat_id, text, keyboard)


def handle_achievements(chat_id: str):
    '''Достижения и опыт'''
    text = '''🎓 <b>Повышение квалификации</b>

📌 2024 — «Современные образовательные технологии в ДОУ» (72 ч.)
📌 2023 — «ФГОС дошкольного образования» (108 ч.)
📌 2023 — «Развитие речи детей дошкольного возраста» (36 ч.)
📌 2022 — «Психология детского развития» (48 ч.)

<b>Участие в конкурсах:</b>
🏆 Лауреат городского конкурса «Лучший воспитатель года»
🏆 Участник всероссийских педагогических форумов

Больше на сайте 👇'''
    
    keyboard = {
        'inline_keyboard': [
            [{'text': '🌐 Все достижения', 'url': 'https://preview--kindergarten-site-portfolio.poehali.dev#portfolio'}],
            [{'text': '⬅️ Назад в меню', 'callback_data': 'menu'}]
        ]
    }
    
    return send_message(chat_id, text, keyboard)


def handle_tips(chat_id: str):
    '''Советы родителям'''
    text = '''📚 <b>Консультации для родителей</b>

Выберите тему:'''
    
    keyboard = {
        'inline_keyboard': [
            [{'text': '💛 Адаптация к детскому саду', 'callback_data': 'tip_adaptation'}],
            [{'text': '🗣️ Развитие речи дома', 'callback_data': 'tip_speech'}],
            [{'text': '📖 Подготовка к школе', 'callback_data': 'tip_school'}],
            [{'text': '⚠️ Кризис 3-х лет', 'callback_data': 'tip_crisis'}],
            [{'text': '⬅️ Назад в меню', 'callback_data': 'menu'}]
        ]
    }
    
    return send_message(chat_id, text, keyboard)


def handle_tip_detail(chat_id: str, tip_type: str):
    '''Детальная информация по советам'''
    tips = {
        'adaptation': {
            'title': '💛 Адаптация к детскому саду',
            'text': '''Первые недели в саду — важный этап для ребенка.

<b>Рекомендации:</b>
• Приходите на 2-3 часа в первые дни
• Принесите любимую игрушку ребенка
• Сохраняйте спокойствие при расставании
• Обязательно забирайте вовремя

Период адаптации обычно длится 2-3 недели.'''
        },
        'speech': {
            'title': '🗣️ Развитие речи дома',
            'text': '''Речь развивается через постоянное общение.

<b>Что делать:</b>
• Читайте вслух минимум 15 минут в день
• Обсуждайте прочитанное, задавайте вопросы
• Пойте песенки, учите стихи
• Играйте в словесные игры
• Разговаривайте обо всем, что видите вокруг'''
        },
        'school': {
            'title': '📖 Подготовка к школе',
            'text': '''Готовность к школе — это не только знания.

<b>Развивайте:</b>
• Внимание через настольные игры
• Мелкую моторику (рисование, лепка)
• Самостоятельность (одеваться, убирать игрушки)
• Позитивное отношение к учебе через игру
• Умение слушать и следовать инструкциям'''
        },
        'crisis': {
            'title': '⚠️ Кризис 3-х лет',
            'text': '''Это нормальный этап развития личности ребенка.

<b>Как справиться:</b>
• Предлагайте выбор из 2-3 вариантов
• Сохраняйте спокойствие
• Устанавливайте четкие границы
• Поддерживайте самостоятельность в безопасных ситуациях
• Будьте последовательны в требованиях'''
        }
    }
    
    tip = tips.get(tip_type, tips['adaptation'])
    text = f'''<b>{tip['title']}</b>

{tip['text']}'''
    
    keyboard = {
        'inline_keyboard': [
            [{'text': '⬅️ Все советы', 'callback_data': 'tips'}],
            [{'text': '🏠 Главное меню', 'callback_data': 'menu'}]
        ]
    }
    
    return send_message(chat_id, text, keyboard)


def handle_gallery(chat_id: str):
    '''Фотогалерея'''
    text = '''📸 <b>Фотогалерея</b>

У нас много интересных фото из жизни группы:

🎨 Творческая мастерская — 32 фото
🎉 Наши праздники — 18 фото
📚 Наши будни — 24 фото

Смотрите все фото на сайте 👇'''
    
    keyboard = {
        'inline_keyboard': [
            [{'text': '📸 Открыть галерею', 'url': 'https://preview--kindergarten-site-portfolio.poehali.dev#gallery'}],
            [{'text': '⬅️ Назад в меню', 'callback_data': 'menu'}]
        ]
    }
    
    return send_message(chat_id, text, keyboard)


def handle_ask(chat_id: str):
    '''Форма для вопросов'''
    text = '''✉️ <b>Задать вопрос</b>

Чтобы задать вопрос, напишите мне текстовое сообщение прямо в этом чате.

Я передам ваш вопрос воспитателю, и она свяжется с вами в ближайшее время!

Также вы можете заполнить форму на сайте 👇'''
    
    keyboard = {
        'inline_keyboard': [
            [{'text': '📝 Форма на сайте', 'url': 'https://preview--kindergarten-site-portfolio.poehali.dev#contact'}],
            [{'text': '⬅️ Назад в меню', 'callback_data': 'menu'}]
        ]
    }
    
    return send_message(chat_id, text, keyboard)


def forward_question_to_admin(chat_id: str, username: str, first_name: str, text: str):
    '''Пересылка вопроса администратору'''
    admin_chat_id = os.environ.get('TELEGRAM_CHAT_ID')
    
    message = f'''❓ <b>Новый вопрос через бота</b>

👤 От: {first_name} (@{username if username else "без username"})
🆔 Chat ID: {chat_id}

💬 Вопрос:
{text}

---
Чтобы ответить, используйте команду:
/reply {chat_id} ваш_ответ'''
    
    send_message(admin_chat_id, message)
    send_message(chat_id, '✅ Ваш вопрос отправлен воспитателю! Ответ придет в этот чат.', get_main_menu())


def handler(event: dict, context) -> dict:
    '''Webhook для Telegram бота с полным функционалом'''
    
    method = event.get('httpMethod', 'POST')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            'body': ''
        }
    
    try:
        body = json.loads(event.get('body', '{}'))
        
        # Обработка callback запросов (нажатия на кнопки)
        if 'callback_query' in body:
            callback = body['callback_query']
            chat_id = str(callback['message']['chat']['id'])
            data = callback['data']
            
            if data == 'menu':
                handle_start(chat_id, callback['from'].get('first_name', 'Друг'))
            elif data == 'about':
                handle_about(chat_id)
            elif data == 'achievements':
                handle_achievements(chat_id)
            elif data == 'tips':
                handle_tips(chat_id)
            elif data.startswith('tip_'):
                tip_type = data.replace('tip_', '')
                handle_tip_detail(chat_id, tip_type)
            elif data == 'gallery':
                handle_gallery(chat_id)
            elif data == 'ask':
                handle_ask(chat_id)
        
        # Обработка текстовых сообщений
        elif 'message' in body:
            message = body['message']
            chat_id = str(message['chat']['id'])
            text = message.get('text', '')
            first_name = message['from'].get('first_name', 'Друг')
            username = message['from'].get('username', '')
            
            if text.startswith('/start'):
                handle_start(chat_id, first_name)
            elif text.startswith('/menu'):
                handle_start(chat_id, first_name)
            elif text.startswith('/reply'):
                # Команда для ответа администратора (только для админа)
                admin_id = os.environ.get('TELEGRAM_CHAT_ID')
                if str(chat_id) == admin_id:
                    parts = text.split(' ', 2)
                    if len(parts) >= 3:
                        target_chat_id = parts[1]
                        reply_text = parts[2]
                        send_message(target_chat_id, f'📩 <b>Ответ от воспитателя:</b>\n\n{reply_text}', get_main_menu())
                        send_message(chat_id, '✅ Ответ отправлен!')
            else:
                # Любое другое сообщение считается вопросом
                forward_question_to_admin(chat_id, username, first_name, text)
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'ok': True})
        }
        
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': str(e)})
        }
