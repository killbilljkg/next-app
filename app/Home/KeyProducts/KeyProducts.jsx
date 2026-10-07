import Badge from "../../Components/Badge/Badge";
import Button from "../../Components/Button/Button";
import ProductCard from "../../Components/ProductCard/ProductCard";
import styles from "./KeyProducts.module.css";
import products from "./Products"

function KeyProducts() {
  return (
    <section className={styles.keyProducts} id="keyproducts">
      <div className="swcontainer">
        <div className={styles.sectionWrapper}>
            <h2 className={styles.title}>Key Products</h2>
            <p className={styles.description}>
              ARCA’s AI modules are fully proprietary, built from the ground up with in-house expertise. Every
              product blends clinical expertise with robust engineering.
            </p>

            <Badge bgColor="#bce9ea" textColor="#111">Featured Solutions:</Badge>

            <div className={styles.productGrid}>
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  icon={product.icon}
                  title={product.title}
                  description={product.description}
                  cardBg={product.cardBg}
                  textColor={product.textColor}
                  href={product.href}
                />
              ))}
            </div>

            <Button href='/product/provider' variant="filled" bgColor="#008584" textColor="#fff">
              View All Products
            </Button>

        </div>
      </div>
    </section>
  );
}

export default KeyProducts;
