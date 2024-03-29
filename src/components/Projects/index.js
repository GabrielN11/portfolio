import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, A11y, Autoplay } from 'swiper'
import { StyledProjectSection } from './styles'
import { GlobalContext } from '../GlobalContext'
import Project from './Project'
import ImageZoom from './ImageZoom'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

const projects = [
    {
        name: 'Campos - Arquitetura e Engenharia',
        textPt: 'Este projeto foi meu primeiro freelance feito para uma empresa de engenharia arquitetura que precisava atualizar seu website. Foi inicialmente feito em ReactJS e posteriormente migrado para Next.JS para ser amigável aos SEOs e atingir mais clientes. Também foi desenvolvida uma API em NodeJS e um banco de dados mySQL para armazenar imagens que o proprietário queira publicar para os visitantes, além dos itens relacionados ao serviços que podem ser trocados dinamicamente pelo proprietário.',
        textEn: "This was my first freelance project developed for an architecture and engineering firm that needed to update their website. It was initially developed with ReactJS and later migrated to Next.JS to be SEO friendly and reach more clients. I've also developed a NodeJS API and a MySQL database to store images that the owner wants to publish for visitors, in addition to service-related items that can be dynamically exchanged by the owner.",
        images: [
            {
                url: '/arqeng1.png',
                description: 'Tela inicial do site'
            },
            {
                url: '/arqeng2.png',
                description: 'Página de serviços'
            },
            {
                url: '/arqeng3.png',
                description: 'Galeria de fotos'
            },
            {
                url: '/arqeng4.png',
                description: 'Painel de administrador'
            },
            {
                url: '/arqeng5.png',
                description: 'Versão mobile do site'
            },
        ],
        repo: false,
        site: 'https://camposarquitetura.eng.br/',
    },
    {
        name: 'E-Commerce',
        textPt: 'Inspirado no vídeo do youtube do canal JavaScript Mastery que ensinava como usar uma API de comércio eletrônico, decidi desenvolver este e-commerce utilizando a API CommerceJS junto ao front-end totalmente desenvolvido por mim. O site foi feito em ReactJS e responde a todos os dados vindos da API: categorias, produtos, imagens, etc, todos itens da loja eletrônica que pode ser criada no painel do CommerceJS. Você pode checar a documentação do projeto no GitHub para mais informações e também visitá-lo para conferir as funcionalidades.',
        textEn: "Inspired by the JavaScript Mastery channel YouTube video that teaches how to use an ecommerce API, I decided to develop this e-commerce using CommerceJS API and the front-end fully developed by me. The site was developed with ReactJS and responds to all data coming from the API: categories, products, images, etc. All the items from the electronic store that can be created through Commerce JS panel. You can check the project's documentation on GitHub for more information, and also visit it to check out the features.",
        images: [
            {
                url: '/ecommerce1.png',
                description: 'Página inicial do site'
            },
            {
                url: '/ecommerce2.png',
                description: 'Página demonstrando um produto do site'
            },
            {
                url: '/ecommerce3.png',
                description: 'Carrinho do e-commerce'
            },
            {
                url: '/ecommerce4.png',
                description: 'Site na versão mobile'
            },
        ],
        repo: 'https://github.com/GabrielN11/ecommerce',
        site: 'https://gabrieln-ecommerce.netlify.app/'
    },
    {
        name: 'Death Star Rampage',
        textPt: 'Este foi um projeto desenvolvido como desafio do Bootcamp MRV na DIO. Se trata de um jogo baseado na franquia Star Wars onde você assume a posição dos antagonistas, controlando a mortífera Estrela da Morte e precisa destruir planetas rebeldes pela galáxia. Se trata de um jogo 2D com alguns efeitos sonoros, movimentação dos elementos, detecção de impacto e outras funções. Foi desenvolvido com jQuery.',
        textEn: "This project was developed as a challenge for MRV Bootcamp at DIO. It's a game based on the Star Wars franchise where you assume the position of the antagonists, controlling the deadly Death Star to destroy rebel planets across the galaxy. It's a 2D game with sound effects, elements movement, impact detection and other features. It was developed using jQuery.",
        images: [
            {
                url: '/deathstar1.png',
                description: 'Introdução do jogo'
            },
            {
                url: '/deathstar2.png',
                description: 'Interface do jogo'
            },
            {
                url: '/deathstar3.png',
                description: 'Tela de falha'
            }
        ],
        repo: 'https://github.com/GabrielN11/deathstarrampage',
        site: 'https://deathstarrampage.netlify.app/'
    },
    {
        name: 'iFood Interface Clone',
        textPt: 'Meu primeiro aplicativo desenvolvido com React Native, este projeto foi feito como desafio do Bootcamp MRV na DIO. É uma cópia da interface inicial o iFood (12/2021) com uso de uma API pública disponibilizada pelo curso. Foi utilizado Expo, Android Studio para emular um Android no ambiente de desenvolvimento e testes no meu próprio dispostivo. Também foi utilizado React Navigation para gerenciar a navegação entre as páginas da aplicação.',
        textEn: "My first mobile app developed with React Native, this project was developed as a challenge from MRV Bootcamp at DIO. It is a clone from iFood's initial interface (12/2021) using a public API provided by the course. I used Expo, Android Studio to emulate an Android system in the development environment and tests using my own device. React Navigation was also used to manage navigation between the app pages.",
        images: [
            {
                url: '/ifood1.png',
                description: 'Tela inicial do aplicativo'
            },
            {
                url: '/ifood2.png',
                description: 'Sessão de restaurantes e categorias'
            },
            {
                url: '/ifood3.png',
                description: 'Sessão de pesquisa'
            },
            {
                url: '/ifood4.png',
                description: 'Sessão de configurações'
            },
        ],
        repo: 'https://github.com/GabrielN11/ifoodinterfaceclone',
        site: false,
        icon: 'download'
    },
    {
        name: 'Ask&Answer',
        textPt: 'Este pequeno projeto foi desenvolvido em poucas horas durante uma noite onde eu estava sem conexão com a internet, então decidi praticar um pouco de ReactJS. Criei rapidamente uma API NodeJS e um banco de dados MySQL e então desenvolvi este simples front-end onde você pode realizar perguntas e responder perguntas feitas por outros usuários.',
        textEn: "This small project was developed in a few hours during a night when I had no internet, so I decided to practice ReactJS a little. I quickly created a NodeJS API and a MySQL database, then I developed this simple front-end where you can ask questions and answer other users questions.",
        images: [
            {
                url: '/ask1.png',
                description: 'Página inicial do site'
            },
            {
                url: '/ask2.png',
                description: 'Formulário de pergunta'
            },
            {
                url: '/ask3.png',
                description: 'Página de pergunta'
            },
        ],
        repo: 'https://github.com/GabrielN11/askanswer',
        site: false
    },
    {
        name: 'Algorithm Visualizer',
        textPt: 'Este site demonstra de forma gráfica alguns dos principais algoritmos de ordenação de vetores na ciência da computação, sendo eles Bubble Sort, Selection Sort, Insertion Sort, Shell Sort e Merge Sort. O projeto foi desenvolvido em colaboração entre Omar Chaar (Link do GitHub abaixo) e eu. Eu desenvolvi maior parte do front end do projeto e sincronizei os elementos gráficos com os vetores e métodos de ordenação, que foram desenvolvidos por Omar. Também apliquei temporizadores e operações assincronas no código, para que a ordenação seja feita de forma lenta e pudesse ser acompanhada pelos usuários. Visite o site no link abaixo!',
        textEn: 'This site graphically demonstrates some of the main vector sorting algorithms in computer science, being them Bubble Sort, Selection Sort, Insertion Sort, Shell Sort and Merge Sort. The project was developed in Collaboration between Omar Chaar (Link to the GitHub below) and myself. I developed most of the front end of the project and synchronized the graphical elements with the arrays and the sorting methods, which were developed by Omar. I also applied timers and asynchronous operations in the code, so the sorting is done slowly and can be tracked by the users. Visit the site at the link below!',
        images: [
            {
                url: '/visualizer1.png',
                description: 'Pagina inicial'
            },
            {
                url: '/visualizer2.png',
                description: 'Selection Sort'
            },
            {
                url: '/visualizer3.png',
                description: 'Insertion Sort'
            },
            {
                url: '/visualizer4.png',
                description: 'Mobile'
            },
        ],
        repo: 'https://github.com/omar-chaar/algo-visu',
        site: 'https://omar-chaar.github.io/algo-visu/'
    },
    {
        name: 'Caixa Eletrônico / ATM',
        textPt: 'Um aplicativo web desenvolvido com intuíto de simular superficialmente o funcionamento de um caixa eletrônico. O administrador, que possui um painel próprio, pode criar usuários e suas respectivas contas no banco, além de também depositar as notas que estarão disponíveis no caixa eletrônico. O cliente pode depositar dinheiro na sua conta, sacar, transferir, conferir o saldo e histórico de transações. O caixa eletrônico possuí uma quantidade de cédulas disponíveis, essa quantidade é alterada de acordo com as transações do usuário e ações do adminsitrador. O aplicativo foi desenvolvido com a finalidade de praticar meus conhecimentos em Python e Angular. A API foi desenvolvida com Flask e o banco de dados com MySQL.',
        textEn: 'A web application developed with the aim of superficially simulating the operation of an ATM. The administrator, who has his own panel, can create users and their respective bank accounts, in addition to depositing the notes that will be available at the ATM. The customer can deposit money into their account, withdraw, transfer, check balance and transaction history. The ATM has a number of banknotes available, this amount is changed according to user transactions and administrator actions. The application was developed in order to practice my knowledge in Python and Angular. The API was developed with Flask and the database with MySQL.',
        images: [
            {
                url: '/atm1.png',
                description: 'Página de login do usuário.'
            },
            {
                url: '/atm2.png',
                description: 'Painel de operações do cliente.'
            },
            {
                url: '/atm3.png',
                description: 'Histórico de transações.'
            },
            {
                url: '/atm4.png',
                description: 'Página de sacar.'
            },
            {
                url: '/atm5.png',
                description: 'Página mostrando as notas sacadas.'
            },
            {
                url: '/atm6.png',
                description: 'Página de depósito.'
            },
            {
                url: '/atm7.png',
                description: 'Painel de administrador.'
            },
            {
                url: '/atm8.png',
                description: 'Painel de gerenciamento de contas de usuário.'
            },
            {
                url: '/atm9.png',
                description: 'Página de login versão mobile.'
            },
        ],
        repo: 'https://github.com/GabrielN11/caixa-eletronico',
        site: false
    },
    {
        name: 'Quoting',
        textPt: 'Quoting é uma aplicação mobile de mídia social criado com objetivo de compartilhar frases e citações. Os usuários podem ver frases de outras pessoas através de um feed que mostra publicações aleatórias de outros usuários. É possível comentar nas pulicações, as favoritar e seguir os outros usuários. A aplicação mobile foi desenvolvida com React Native e a API com Flask. Visite o README no repositório para ver mais sobre a aplicação e baixe o APK para Android abaixo.',
        textEn: 'Quoting is a social media mobile application developed for the users to share quotes and thoughts. The users can see other people quotes through a feed that dynamically shows random posts from other users. It is possible to comment on publications, favorite them and follow other users. The mobile application was developed with React Native and the API with Flask. Check the README in the repository to learn more about the application and download the APK for Android below.',
        images: [
            {
                url: '/quoting1.png',
                description: 'Tela de login.'
            },
            {
                url: '/quoting2.png',
                description: 'Feed de publicações.'
            },
            {
                url: '/quoting3.png',
                description: 'Sessão de comentários.'
            },
            {
                url: '/quoting4.png',
                description: 'Perfil de usuário.'
            },
            {
                url: '/quoting5.png',
                description: 'Lista de publicações de usuário.'
            },
            {
                url: '/quoting6.png',
                description: 'Tela de configurações.'
            },
            {
                url: '/quoting7.png',
                description: 'Menu lateral.'
            },
            {
                url: '/quoting8.png',
                description: 'Opções de publicações.'
            },
        ],
        repo: 'https://github.com/GabrielN11/quoting-app',
        site: 'https://github.com/GabrielN11/quoting-app/releases/tag/quotingv0.9-beta.3',
        icon: 'download'
    },
]

const Projects = () => {
    const { mode } = React.useContext(GlobalContext)
    const swiperRef = React.useRef(null)
    const projectsRef = React.useRef(null)
    const [visible, setVisible] = React.useState(false)
    const [image, setImage] = React.useState(false)

    React.useEffect(() => {
        if (!image) {
            swiperRef.current.swiper.autoplay.start()
        } else {
            swiperRef.current.swiper.autoplay.stop()
        }
    }, [image])

    React.useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                swiperRef.current.swiper.autoplay.stop()
            } else {
                swiperRef.current.swiper.autoplay.start()
            }
        }, { threshold: [0.4] })

        const imgObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setVisible(true)
            } else {
                setVisible(false)
            }
        }, { threshold: [0.01] })

        imgObserver.observe(projectsRef.current)
        observer.observe(projectsRef.current)
    }, [])

    React.useEffect(() => {
        const prev = document.querySelector('.swiper-button-prev')
        const next = document.querySelector('.swiper-button-next')
        const bullet = document.querySelectorAll('.swiper-pagination-bullet')
        const active = document.querySelector('.swiper-pagination-bullet-active')

        prev.style.color = mode === 'light' ? '#007aff' : mode === 'twilight' ? '#ad94ca' : '#c7c7c7'
        next.style.color = mode === 'light' ? '#007aff' : mode === 'twilight' ? '#ad94ca' : '#c7c7c7'
        for (let i = 0; i < bullet.length; i++) {
            bullet[i].style.backgroundColor = mode === 'light' ? '#007aff' : mode === 'twilight' ? '#ad94ca' : '#c7c7c7';
        }

    }, [mode])
    return (
        <>
            {image && <ImageZoom image={image} mode={mode} setImage={setImage} />}
            <StyledProjectSection mode={mode} id='projects' ref={projectsRef}>
                <Swiper pagination navigation className="mySwiper" modules={[Navigation, Pagination, Autoplay, A11y]}
                    allowTouchMove={false} autoplay={true} ref={swiperRef} loop={true}>
                    {projects.map(project => (
                        <SwiperSlide key={project.name}>
                            <Project name={project.name} textEn={project.textEn} textPt={project.textPt} images={project.images}
                                repo={project.repo} site={project.site} setImage={setImage} visible={visible} icon={project.icon} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </StyledProjectSection>
        </>
    )
}

export default Projects
