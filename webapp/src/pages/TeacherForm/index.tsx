import React from 'react';
import PageHeader from '../../components/pageHeader';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';

function TeacherForm(   ){
    return (
        <div id="page-teacher-form" className="container">
            <PageHeader 
            title="Que incrível que você quer ser sensei."
            description="O primeiro passo, é preencher esse formulário de inscrição."
            />

            <main>
                <fieldset>
                    <legend>Seus dados</legend>

                    <div className="input-block">
                        <label htmlFor="name">Nome completo</label>
                        <input type ="text" id="name" / >
                    </div>

                    <div className="input-block">
                        <label htmlFor="avatar">Link da sua foto</label>
                        <input type ="text" id="avatar" / >
                    </div>

                    <div className="input-block">
                        <label htmlFor="whatsapp">Whatsapp (somente o número)</label>
                        <input type ="text" id="whatsapp" / >
                    </div>

                </fieldset>
                <fieldset>
                <legend>Sobre a aula</legend>

                        <div className="input-block">
                            <label htmlFor="name">Matéria</label>
                            <input type ="text" id="name" / >
                        </div>

                        <div className="input-block">
                            <label htmlFor="avatar">Custo da sua aula (em r$)</label>
                            <input type ="text" id="avatar" / >
                        </div>
                </fieldset>
            </main>
        </div> 
    )

    
}


export default TeacherForm;