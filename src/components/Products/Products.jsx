import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";
import useStyles from "./styles";

const product = [
  {
    id: 1,
    name: "shoes",
    price: 59.55,
    description: "sports shoes",
    image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/7ed0855435194229a525aad6009a0497_9366/Superstar_Shoes_White_EG4958_01_standard.jpg'
  },
  {
    id: 2,
    name: "razer laptop",
    price: 1499,
    description: "mx150 version",
    image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6409/6409401_sd.jpg'
  },
];

const Products = () => {

    const classes = useStyles()
  return (
    <main className={classes.content}>
        <div className={classes.toolbar} />
      <Grid container justify="center" spaceing={4}>
        {product.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
