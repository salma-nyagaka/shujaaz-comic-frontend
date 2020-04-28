import React from 'react'
import styles from '../assets/styles/home.css';
import avengers from '../assets/images/avengers.jpeg'

// import NestedGrid from '../components/C÷ards'

const HomeComponent = (props) => {
  // console.log(props.comics.data, "props")
  // renderObj = () => { 
  //   props.comics.data.map((obj, i) => {
  //     return (
  //       <div>
  //         {props.data[obj].name}
  //       </div>
  //     )})}
  return (
    <div>
  {/* <div className={styles.topleft}>Top Left</div> */}

        <h1 className={styles.big}>Shujaaz Inc</h1>
        <h2 className={styles.big}>Comics!!!</h2>
        {/* {props.comics.data.map(comic => 
  <h1>{comic.title}</h1>
  
), "propppppppppps"} */}

      <div className={styles.gridContainer}>
        <div className={styles.container}>
          <div className={styles.cards}>
            {/* <Link to="/mm">sdfs></Link> */}
            <div className={styles.cardItem}>
              <div className={styles.cardImage}>
                <img src={avengers} className={styles.comicImage} alt='comic' />
              </div>
              <div className={styles.cardInfo}>
              <h1 className={styles.cardButton}>
                 <a href="/creators">STORIES</a>
                </h1>
                <h2 className={styles.cardTitle}>
                  <strong>CREATOR:</strong>SALMA NYAGAKA
                </h2>
              </div>
            </div>

          </div>
          <div className={styles.cards}>
            <div className={styles.cardItem}>
              <div className={styles.cardImage}>
                <img src={avengers} className={styles.comicImage} alt='comic' />
              </div>
              <div className={styles.cardInfo}>
                <h2 className={styles.cardTitle}>
                  <strong>Creator:</strong>Salma Nyagaka
                </h2>
              </div>
            </div>
          </div>
          <div className={styles.cards}>
            <div className={styles.cardItem}>
              <div className={styles.cardImage}>
                <img src={avengers} className={styles.comicImage} alt='comic' />
              </div>
              <div className={styles.cardInfo}>
                <h2 className={styles.cardTitle}>
                  <strong>Creator:</strong>Salma Nyagaka
                </h2>
              </div>
            </div>
          </div>
          <div className={styles.cards}>
            <div className={styles.cardItem}>
              <div className={styles.cardImage}>
                <img src={avengers} className={styles.comicImage} alt='comic' />
              </div>
              <div className={styles.cardInfo}>
                <h2 className={styles.cardTitle}>
                  <strong>Creator:</strong> Salma Nyagaka
                </h2>
              </div>
            </div>
          </div> <div className={styles.cards}>
            <div className={styles.cardItem}>
              <div className={styles.cardImage}>
                <img src={avengers} className={styles.comicImage} alt='comic' />
              </div>
              <div className={styles.cardInfo}>
                <h2 className={styles.cardTitle}>
                  <strong>Creator:</strong> Salma Nyagaka
                </h2>
              </div>
            </div>
          </div> <div className={styles.cards}>
            <div className={styles.cardItem}>
              <div className={styles.cardImage}>
                <img src={avengers} className={styles.comicImage} alt='comic' />
              </div>
              <div className={styles.cardInfo}>
                <h2 className={styles.cardTitle}>
                  <strong>Creator:</strong> Salma Nyagaka
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeComponent
