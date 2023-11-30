import React from "react";
import esseMenu from "./img/menu.svg";
import profilePicture from "./img/profilePicture.svg";
import esseGoogle from "./img/logoGoogle.svg";
import lupa from "./img/Lupa.svg";
import teclado from "./img/teclado.svg";
import microfone  from "./img/Microfone.svg"
import security from "./img/security.svg"
import styles from "./Componente.module.css"

function Componentes(){
    

    return (
        <div>
            <div className={styles.primeiraLinha}>
                <ul>
                    <li>Gmail</li>
                    <li>Imagens</li>
                    <li>
                        <img src={esseMenu} alt="error" ></img>
                    </li>
                    <li>
                        <img src={profilePicture} alt="error" ></img>
                    </li>
                </ul>
            </div>

            <div className={styles.logoGooglee}>
                <img src={esseGoogle} width={276} alt="error" ></img>
            </div>

            <div className={styles.container}>
                <div className={styles.icones} tabIndex="0">
                    
                    <div className={styles.iconesl}>
                        <img src={lupa} alt="error" ></img>
                    </div>  
                    
                    <div className={styles.inputtext}>
                        <input type="text"></input>
                    </div>

                    <div className={styles.iconestm}>
                        <div>
                            <img src={teclado} alt="error" ></img>
                        </div>   
                        <div>
                            <img src={microfone} alt="error" ></img>
                        </div>
                    </div>                 
                </div>

                <div className={styles.botoes}>
                    <button>Pesquisa Google</button>
                    <button>Estou com sorte</button>
                </div>
            </div>

            <div className={styles.security}>
                <div>
                    <img src={security} alt="error" ></img>  
                </div>
                <div>
                    <p>Faça o Check-up de privacidade</p>
                </div>
            </div>
            

            <div className={styles.downContainer}>
                <div className={styles.paisAtual}>
                    <p> Brasil </p>
                </div>

                <div className={styles.downBartotal}>
                    <div className={styles.downBar}>
                        <ul>
                            <li> Sobre </li>
                            <li> Publicidade </li>
                            <li> Negócios </li>
                            <li> Como funciona a Pesquisa </li>
                        </ul>
                    </div>
                    <div className={styles.downBar}>
                        <ul>
                            <li> Privacidade </li>
                            <li> Termos </li>
                            <li> Configurações </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Componentes