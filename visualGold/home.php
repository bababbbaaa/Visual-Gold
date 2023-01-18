<?php
/*
Template Name: Home
*/
?>

<?php get_header(); ?>
        <main class="main">
            <h1 class="visually-hidden">Visual Gold</h1>
            <section class="header-slider swiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide slide"style="background-image: url(<?php the_field('swiper-wrapper'); ?>)">
                        <div class="slide__info">
                            <div class="slide__info--wrapper">
                                <p class="slide__info--subtitle"><?php the_field('slide__info--subtitle'); ?></p>
                                <h2 class="slide__info--title"><?php the_field('slide__info--title'); ?></h2>
                                <p><?php the_field('slide__info--text'); ?></p>
                                <a class="slide__info--button link icon-arrow button" href="<?php the_field('"slide__info--button'); ?>">
                                    <span class="slide__info--button-span"><?php the_field('slide__info--button-span'); ?></span>
                                    <svg aria-hidden="true" focusable="false" width="23" height="23" style="fill:#fff" data-name="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.6 47">
                                        <path d="m2 47-2-2 21.6-21.6L.2 2l2-2 23.4 23.4L2 47z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div class="slide__image">
                            <img class="slide__image-img" src="<?php the_field('slide__image-img'); ?>" alt="Изображение">
                        </div>
                    </div>
                </div>    
                <div class="swiper-button slide__image--scroll scroll">
                    <div class="swiper-button-prev scroll-prev" type="button" aria-label="Previous slide">
                    </div>
                    <div class="swiper-button-next scroll-next" type="button" aria-label="Next slide">
                    </div>
                </div>
            </section>
            <section class="about">
                <div class="container">
                    <div class="about__wrapper">
                        <img class="about__wrapper--image" src="<?php the_field('about__wrapper--image'); ?>" alt="О компании">
                        <div class="about__wrapper--info">
                            <h2 class="about__wrapper--info-title"><?php the_field('about__wrapper--info-title'); ?></h2>
                            <div class="about__wrapper--info-text info-text">
                                <div class="info-text__column">
                                <?php the_field('info-text'); ?>
                                </div>
                            </div>
                            <div class="about__wrapper--info-button info-button">
                                <a class="info-button__link link icon-arrow button" href="<?php the_field('info-button__link'); ?>">Подробнее
                                    <svg aria-hidden="true" focusable="false" width="23" height="23" style="fill:#000"
                                        data-name="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.6 47">
                                        <path d="m2 47-2-2 21.6-21.6L.2 2l2-2 23.4 23.4L2 47z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="categories" style="background-image: url(<?php the_field('categories-img'); ?>)">
                <div class="container">
                    <div class="categories__head">
                        <h2 class="categories__head-title"><?php the_field('categories__head-title'); ?></h2>
                        <a class="categories__head-links link icon-arrow button" href="<?php the_field('categories__head-links'); ?>" target="_blank">
                            <span>Все товары</span>
                            <svg aria-hidden="true" focusable="false" width="23" height="23"
                                data-name="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.6 47">
                                <path d="m2 47-2-2 21.6-21.6L.2 2l2-2 23.4 23.4L2 47z" />
                            </svg>
                        </a>
                    </div>
                    <div class="swiper cards">
                        <div class="categories__wrapper swiper-wrapper">
                            <?php
                                global $post;

                                $myposts = get_posts([ 
                                    'numberposts' => 4,
                                    'category'    => 2,
                                ]);

                                if( $myposts ){
                                    foreach( $myposts as $post ){
                                        setup_postdata( $post );
                            ?>
                            <div class="categories__cards swiper-slide">
                                    <a class="card__link  link" href="#">
                                    <?php the_post_thumbnail(
                                    ); ?>
                                        <div class="card__text">
                                            <h3 class="card__title"><?php the_title(); ?></h3>
                                            <svg aria-hidden="true" focusable="false" width="23" height="26"
                                                style="fill:#fff" data-name="arrow" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 25.6 47">
                                                <path d="m2 47-2-2 21.6-21.6L.2 2l2-2 23.4 23.4L2 47z" />
                                            </svg>
                                        </div>
                                    </a>
                            </div>
                            <?php 
                                    }
                                } else {
                                    // Постов не найдено
                                }
                                wp_reset_postdata(); // Сбрасываем $post
                            ?>
                        </div>
                        <div class="swiper-button categories__scroll scroll">
                            <div class="swiper-button-prev categories__scroll-prev scroll-prev" type="button" aria-label="Previous slide">
                            </div>
                            <div class="swiper-button-next categories__scroll-next scroll-next" type="button" aria-label="Next slide">
                            </div>
                        </div>   
                    </div>
                </div>
            </section>
        </main>
<?php get_footer(); ?>