# Portfolio - Gabriel Nunes

This project serves as my personal portfolio website. It contains informations about my knowledge as a front end developer and showcases projects i've developed.

## Themes

The website contains 3 themes: Light, Dark and Twilight. In your first land at the website, it will detect your preferred color theme (light or dark) and automatically set the preferred theme. You can also change the theme through a menu, then the new preferred theme will be saved in your local storage to automatically set it when you visit the page. The current theme is saved in a state in the Context API file.

## Language

You can check my information either in portuguese (my native language) or english. Like the themes, the browser will check your browser's language thought "navigator.language" when you visit the page, if it is not Portuguese (pt-BR or pt-PT), it will automically set it to english. If you change the preferred language, it will also store your preference in the local storage. Like the themes, the current language is saved in the Context API file.

## Animations

In order to keep the site visually pleasing, some sections contains animations when you scroll over them, this is checked through IntersectionObserver API. The "About" and "Contact" (only in desktop) sections contains specific animations when you first scroll over them, displaying the texts and informations in a intuitive way.

The "react-responsive" hook "useMediaQuery" is used to change the IntersectionObserver thresholds in different screen resolutions so the UX is not compromised in mobile.

## Projects

Swiper was used in this section to showcases all my projects in a carousel. The swiper is by default in autoplay, however it will stop changind the slides if you're scrolling over the section, this is also detected through IntersectionObserver. Inside each project slide there is another Swiper slides with the images of each project, they are loaded when you scroll over the projects section.

## Contact

In this section i created a form so anyone can contact me, i used [FormSubmit](https://formsubmit.co/ "FormSubmit") to manage the emails, so it is very simple to contact me!

## Conclusion

The website was hosted on vercel and are currently in this domain: https://gabrielnunes.vercel.app/. You can check it to see the page for yourself and know more about me and my work! 
