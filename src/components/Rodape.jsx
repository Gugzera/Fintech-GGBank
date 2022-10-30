import styles from '../css/Rodape.module.css'
import linkedin from '../img/LinkedinLogo.svg'
import Linha from '../img/Line1.svg'
function Rodape(){
    return (
    <div>
     <div className={styles.containerRodape}>
        <section className={styles.container_logo}>
            <div className={styles.keyborad}>
            <div className={styles.keyboadr_inner}>
                <div className={styles.key}>
                <div className={styles.key_cotnent}>G</div>
                </div>
                <div className={styles.key}>
                <div className={styles.key_cotnent}>G</div>
                </div>
                <div className={styles.key}>
                <div className={styles.key_cotnent}>B</div>
                </div>
                <div className={styles.key}>
                <div className={styles.key_cotnent}>A</div>
                </div>
                <div className={styles.key}>
                <div className={styles.key_cotnent}>N</div>
                </div>
                <div className={styles.key}>
                <div className={styles.key_cotnent}>K</div>
                </div>
            </div>
            </div>  
        </section>
            <div className={styles.contato}>
                <h2>Contato</h2>
                <a href="https://www.linkedin.com/in/gustavo-gomes-da-silva/" target= "_blank" rel="noreferrer noopener">
                    <img src={linkedin} alt="icone linkedin" />
                </a>
            </div>     
     </div>
        <div className={styles.cnpj}>
            <img src={Linha} alt="linha divisoria" />
            <p>© 2022  GG Banking S.A. CNPJ: 00.000.0000/0000-00</p>
        </div>
    </div>
    )
}
export default Rodape;