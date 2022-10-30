import styles from '../css/Topo.module.css'

function Topo(){
    return (
     <div className={styles.containerTopo}>
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

        <nav className={styles.navLinks}>
            <ul>
                <li>Inicio</li>
                <li>Sobre o Banco</li>
                <li> Parceiros</li>
                <li>Cartões</li>
                <li>Contato</li>
            </ul>
        </nav>
    </div>
    )
}
export default Topo;