import React from 'react';

import IconButton from '../../assets/images/icons/whatsapp.svg'

import PageHeader from '../../components/pageHeader';

import './styles.css'

function TeacherList(   ){
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Esses são os senseis disponiveis" >
                <form id="search-teacher">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type ="text" id="subject" / >
                    </div>

                    <div className="input-block">
                        <label htmlFor="week-day">Dia da semana</label>
                        <input type ="text" id="week-day" / >
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type ="text" id="time" / >
                    </div>
                </form>
            </PageHeader>

            <main>
                <article className="teacher-item">
                    <header>
                        <img src="https://avatars0.githubusercontent.com/u/48894573?s=460&u=889eeb1ad553dd6c27be0d2a4b1d35edb679dbac&v=4" alt="Minato"/>
                    <div>
                        <strong>Minato Namikaze</strong>
                        <span>Flash Amarelo</span>
                    </div>
                    </header>
                    <p>
                    Entusiasta dos melhores jutsus de konohagakure
                    <br /> <br />
                    Enquanto no Modo de Chakra do Nove-Caudas, o usuário é capaz de se mover a uma velocidade tremenda.
                    </p>
                    <footer>
                        <p>
                            Preço/Hora
                            <strong>R$ 70,00</strong>
                        </p>
                        <button type="button">
                            <img src={IconButton} alt=""/>
                            Entrar em contato
                        </button>
                    </footer>
                    <header>
                        <img src="https://pbs.twimg.com/profile_images/1274537537000943616/Alnba2Ab_400x400.jpg" alt="KKshi"/>
                    <div>
                        <strong>Kakashi Hatake</strong>
                        <span>Corte Relâmpago</span>
                    </div>
                    </header>
                    <p>
                    Ex membro da ANBU, e sensei da equipe 7
                    <br /> <br />
                    Uma vez que o Chidori é poderoso por si próprio, o Corte Relâmpago, sendo uma versão melhorada, requer uma concentração de chakra avançada.
                    </p>
                    <footer>
                        <p>
                            Preço/Hora
                            <strong>R$ 150,00</strong>
                        </p>
                        <button type="button">
                            <img src={IconButton} alt=""/>
                            Entrar em contato
                        </button>
                    </footer>
                    <header>
                        <img src="https://i.pinimg.com/originals/50/d0/c7/50d0c7362e364b8cef570727712eddc5.jpg" alt="Itacho"/>
                    <div>
                        <strong>Itachi Uchiha</strong>
                        <span>Katon: Gōkakyū no Jutsu</span>
                    </div>
                    </header>
                    <p>
                    Ex membro da ANBU, Nukennin da aldeia da Folha e membro da AKATSUKI
                    <br /> <br />
                    É uma técnica que envolve a transformação da natureza de fogo e que foi originalmente criada pelo Clã Uchiha, tornando-se uma de suas técnicas favoritas, em que eles se tornaram muito adeptos.
                    </p>
                    <footer>
                        <p>
                            Preço/Hora
                            <strong>R$ 500,00</strong>
                        </p>
                        <button type="button">
                            <img src={IconButton} alt=""/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
            </main>
        </div>
    )
}

export default TeacherList;