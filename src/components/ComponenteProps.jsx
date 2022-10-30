import styles from '../css/ComponenteProps.module.css'

function ComponenteProps(props){
    return(
        <div className={styles.corpo_texto}>
            <h1 className={styles.titulo}>{props.titulo}</h1>
            <h1 className={styles.tituloBranco}>{props.tituloBranco}</h1>
            <p>{props.texto}</p>           
        </div>
   
    )
}
export default ComponenteProps