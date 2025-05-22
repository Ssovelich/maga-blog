import Image from 'next/image';
import myImg from './img.webp'
import styles from './about.module.css';

export default function AboutPage() {
  return (
    <article className={styles.root}>
      <Image src={myImg} alt='myImg' loading='eager'/>
      <div className=''>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
        consequatur nulla sed, laudantium quasi repudiandae dolore ullam fugiat
        nisi quaerat recusandae obcaecati porro, ipsum laboriosam neque. Hic,
        repudiandae vel a libero totam suscipit autem, esse veritatis accusamus
        repellat consequatur aspernatur quaerat ullam commodi dolores corrupti
        necessitatibus ipsa sapiente sunt aliquam magni tempora soluta? Rerum
        illo iste at, accusamus distinctio consectetur obcaecati earum dolore!
        Recusandae eligendi vel similique. Necessitatibus, nesciunt! Ipsa quo
        cupiditate inventore animi, in minima ab obcaecati distinctio impedit
        sit, tempore facere illo doloribus, vel sint dicta voluptatem eaque
        neque maiores repellendus delectus eius. Voluptas deserunt dolor labore.
        Asperiores.
      </div>
    </article>
  );
}
