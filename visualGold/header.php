<!DOCTYPE html>
<html <?php language_attributes(); ?> >

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">

    <?php wp_head(); ?>
    
</head>

<body>
    <div class="wrapper">
        <header class="main-header">
            <div class="main-header__wrapper">
                <div class="main-header__supinfo supinfo">
                    <div class="supinfo-container container">
                        <p class="supinfo-text">качество, на которое можно рассчитывать</p>
                        <div class="supinfo-data">
                            <div class="supinfo-data__text">
                                <a class="supinfo-data__text-link link" href="#">оплата и доставка</a>
                                <a class="supinfo-data__text-link link" href="#">контакты</a>
                            </div>
                            <div class="supinfo-data__social">
                                <a class="supinfo-data__social-tel link" href="tel:<?php the_field('phone-number'); ?>" target="_blank"><?php the_field('phone'); ?></a>
                                <a class="supinfo-data__social-facebook link facebook" href="<?php the_field('link-facebook'); ?>" target="_blank">
                                    <svg class="facebook-header" aria-hidden="true" focusable="false" width="23"
                                        height="23" fill="currentColor" data-name="facebook"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.9 23.9">
                                        <path
                                            d="M17.7 0H6.2A6.2 6.2 0 0 0 0 6.2v11.5a6.2 6.2 0 0 0 6.2 6.2h11.5a6.2 6.2 0 0 0 6.2-6.2V6.2A6.2 6.2 0 0 0 17.7 0Zm4.8 17.7a4.8 4.8 0 0 1-4.8 4.8H13v-8.2h3.1l.5-3.6H13v-2c0-2 1-2 1.8-2h1.9V3.5c-3.6-.3-5-.1-6.3 1.3-.9 1-1 2.3-1 4.6v1.3H6.1v3.6h3.1v8.2H6.1a4.8 4.8 0 0 1-4.7-4.8V6.2a4.8 4.8 0 0 1 4.8-4.8h11.5a4.8 4.8 0 0 1 4.8 4.8Z" />
                                    </svg>
                                </a>
                                <a class="supinfo-data__social-instagram link instagram" href="<?php the_field('link-instagram'); ?>" target="_blank">
                                    <svg class="instagram-header" aria-hidden="true" focusable="false" width="23"
                                        height="23" fill="currentColor" data-name="instagram"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.9 23.9">
                                        <defs></defs>
                                        <path class="cls-1"
                                            d="M17.7 23.9H6.2A6.2 6.2 0 0 1 0 17.7V6.2A6.2 6.2 0 0 1 6.2 0h11.5a6.2 6.2 0 0 1 6.2 6.2v11.5a6.2 6.2 0 0 1-6.2 6.2ZM6.2 1.4a4.8 4.8 0 0 0-4.8 4.8v11.5a4.8 4.8 0 0 0 4.8 4.8h11.5a4.8 4.8 0 0 0 4.8-4.8V6.2a4.8 4.8 0 0 0-4.8-4.8Z" />
                                        <path class="cls-1"
                                            d="M12 18.8a6.8 6.8 0 1 1 6.8-6.9 6.8 6.8 0 0 1-6.9 6.8Zm0-11.4a4.5 4.5 0 1 0 4.4 4.5A4.5 4.5 0 0 0 12 7.4Z" />
                                        <circle class="cls-1" cx="18.9" cy="4.9" r="1.4" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="main-header__navigation navigation">
                    <div class="container">
                    <div class="navigation__menu">
                        <?php the_custom_logo(
                            array(
                                'class' => 'logo-header__img'
                            )
                        ); ?>
                        <div class="navigation__menu-link menu-link menu-link__close">
                            <a class="menu-link__auth-mobil link" href="#">
                                <span class="menu-link__auth-mobil__span">Вход/регистрация</span>
                                <svg class="menu-link__auth-mobil__svg" aria-hidden="true" focusable="false" width="30"
                                    height="26" data-name="Login" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 36.9 32.9">
                                    <path
                                        d="M28.4 17.4a11.5 11.5 0 1 0-19.8 0A18.5 18.5 0 0 0 0 32.9h2.8a15.6 15.6 0 0 1 7.5-13.3 11.5 11.5 0 0 0 16.3 0A15.6 15.6 0 0 1 34.1 33h2.8a18.5 18.5 0 0 0-8.5-15.5Zm-10 2.8a8.7 8.7 0 1 1 8.7-8.7 8.7 8.7 0 0 1-8.6 8.7Z" />
                                </svg>
                            </a>
                            <nav class="menu-link__nav nav">
                                <ul class="nav__list list">
                                    <li class="nav__item">
                                        <a class="nav__item-link link active-link" href="#">принтеры для печати</a>
                                    </li>
                                    <li class="nav__item">
                                        <a class="nav__item-link link" href="#">ленты</a>
                                    </li>
                                    <li class="nav__item">
                                        <a class="nav__item-link link" href="#">риббон</a>
                                    </li>
                                    <li class="nav__item">
                                        <a class="nav__item-link link" href="#">товары для ритуального сектора</a>
                                    </li>
                                    <li class="nav__item">
                                        <a class="nav__item-link link" href="#">исскуственные цветы</a>
                                    </li>
                                </ul>
                                <span class="nav-header__border"></span>
                            </nav>
                            <div class="menu-link__client">
                                <ul class="menu-link__client--list list">
                                    <li class="menu-link__client--item">
                                        <a class="link" href="#">
                                            <svg class="link__auth" aria-hidden="true" focusable="false" width="30" height="26"
                                                data-name="Login" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 36.9 32.9">
                                                <path
                                                    d="M28.4 17.4a11.5 11.5 0 1 0-19.8 0A18.5 18.5 0 0 0 0 32.9h2.8a15.6 15.6 0 0 1 7.5-13.3 11.5 11.5 0 0 0 16.3 0A15.6 15.6 0 0 1 34.1 33h2.8a18.5 18.5 0 0 0-8.5-15.5Zm-10 2.8a8.7 8.7 0 1 1 8.7-8.7 8.7 8.7 0 0 1-8.6 8.7Z" />
                                            </svg>
                                            <span class="visually-hidden">login</span>
                                        </a>
                                    </li>
                                    <li class="menu-link__client--item">
                                        <a class="link" href="#">
                                            <svg class="link__card" aria-hidden="true" focusable="false" width="35" height="26"
                                                data-name="Card" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 41.9 33.5">
                                                <path
                                                    d="M17.2 23.8a4.8 4.8 0 1 0 4.8 4.8 4.8 4.8 0 0 0-4.8-4.8Zm0 6.8a2 2 0 1 1 2-2 2 2 0 0 1-2 2ZM34 23.8a4.8 4.8 0 1 0 4.8 4.8 4.8 4.8 0 0 0-4.8-4.8Zm0 6.8a2 2 0 1 1 2-2 2 2 0 0 1-2 2ZM35.2 22.2v-2.8H19.5l-1.4-2.9h18.6L41.9 2H20v2.8h17.9l-3.2 8.9H16.8L10.5 0H0v2.8h8.7l9 19.4h17.5z" />
                                            </svg>
                                            <span class="visually-hidden">card</span>
                                        </a>
                                    </li>
                                    <li class="menu-link__client--item">
                                        <a class="link" href="#">
                                            <svg class="link__search" aria-hidden="true" focusable="false" width="25" height="25"
                                                data-name="Search" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 33.3 33.3">
                                                <path
                                                    d="M33.3 31.3 23.2 21a13 13 0 1 0-2 2l10.1 10.2ZM2.8 13A10.2 10.2 0 1 1 13 23.2 10.2 10.2 0 0 1 2.8 13Z" />
                                            </svg>
                                            <span class="visually-hidden">search</span>
                                        </a>
                                    </li>
                                </ul>
                                <button class="menu-link__client-button" type="button"><span
                                        class="visually-hidden">Открыть меню</span></button>
                            </div>
                            <div class="menu-link__info-mobil info-mobil">
                                <a class="info-mobil__email link" href="mailto:info@funeralprint.ru">e-mail:
                                    info@funeralprint.ru</a>
                                <a class="info-mobil__phone link" href="tel:<?php the_field('phone-number'); ?>" target="_blank"><?php the_field('phone'); ?></a>
                                <a class="info-mobil__phone link" href="tel:88007075727" target="_blank">8 800 707
                                    57 27</a>
                                <div class="info-mobil__social">
                                    <a class="info-mobil__social-facebook link facebook" href="#" target="_blank">
                                        <svg class="facebook-mobil" aria-hidden="true" focusable="false" width="23"
                                            height="23" fill="currentColor" data-name="facebook"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.9 23.9">
                                            <path
                                                d="M17.7 0H6.2A6.2 6.2 0 0 0 0 6.2v11.5a6.2 6.2 0 0 0 6.2 6.2h11.5a6.2 6.2 0 0 0 6.2-6.2V6.2A6.2 6.2 0 0 0 17.7 0Zm4.8 17.7a4.8 4.8 0 0 1-4.8 4.8H13v-8.2h3.1l.5-3.6H13v-2c0-2 1-2 1.8-2h1.9V3.5c-3.6-.3-5-.1-6.3 1.3-.9 1-1 2.3-1 4.6v1.3H6.1v3.6h3.1v8.2H6.1a4.8 4.8 0 0 1-4.7-4.8V6.2a4.8 4.8 0 0 1 4.8-4.8h11.5a4.8 4.8 0 0 1 4.8 4.8Z" />
                                        </svg>
                                    </a>
                                    <a class="info-mobil__social-instagram link instagram" href="#" target="_blank">
                                        <svg class="instagram-mobil" aria-hidden="true" focusable="false" width="23"
                                            height="23" fill="currentColor" data-name="instagram"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.9 23.9">
                                            <defs></defs>
                                            <path class="cls-1"
                                                d="M17.7 23.9H6.2A6.2 6.2 0 0 1 0 17.7V6.2A6.2 6.2 0 0 1 6.2 0h11.5a6.2 6.2 0 0 1 6.2 6.2v11.5a6.2 6.2 0 0 1-6.2 6.2ZM6.2 1.4a4.8 4.8 0 0 0-4.8 4.8v11.5a4.8 4.8 0 0 0 4.8 4.8h11.5a4.8 4.8 0 0 0 4.8-4.8V6.2a4.8 4.8 0 0 0-4.8-4.8Z" />
                                            <path class="cls-1"
                                                d="M12 18.8a6.8 6.8 0 1 1 6.8-6.9 6.8 6.8 0 0 1-6.9 6.8Zm0-11.4a4.5 4.5 0 1 0 4.4 4.5A4.5 4.5 0 0 0 12 7.4Z" />
                                            <circle class="cls-1" cx="18.9" cy="4.9" r="1.4" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                
            </div>
        </header>