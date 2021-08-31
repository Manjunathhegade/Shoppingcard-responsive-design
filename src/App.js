import React, { useState } from "react";
import {
  Button,
  Container,
  Grid,
  Card,
  AppBar,
  CardMedia,
} from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import Prod1 from "./components/assets/prod1.png";
import ReactStars from "react-rating-stars-component";
import Modal from "@material-ui/core/Modal";
import { SketchPicker } from "react-color";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import CloseIcon from "@material-ui/icons/Close";

const totalColor = `linear-gradient(45deg, #FE6B8B 40%, #FF8E53 80%)`;

const useStyles = makeStyles((theme) => ({
  body: {
    backgroundColor: "#000",
  },
  root: {
    flexGrow: 1,
  },
  navbar: {
    background: ({ backgroundColor }) =>
      `linear-gradient(45deg, ${backgroundColor.color1} 40%, ${backgroundColor.color2} 80%)`,
  },
  card: {
    background: "#fff",
    textAlign: "center",
    display: "flex",
    flexWrap: "wrap",
  },
  productList: {
    display: "flex",
    flexWrap: "wrap",
    padding: "10px",
    justifyContent: "center",
  },
  product: {
    width: 240,
    height: 350,
    borderRadius: 15,
    margin: 10,
  },
  img: {},
  prodTitle: {
    paddingLeft: 20,
    fontWeight: "bold",
  },
  prodBody: {
    paddingLeft: 20,
    paddingRight: 10,
  },
  title: {
    flexGrow: 1,
  },
  prodPrice: {
    // display: "flex",
    // justifyContent: "flex-end",
    color: "gray",
    fontWeight: "bold",
    marginRight: 15,
    fontSize: 25,
  },
  priceandcolor: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 20,
  },
  prodcolor: {
    fontSize: 15,
    color: "gray",
    fontWeight: "bold",
    // paddingRight: 5,
  },
  buttonColor: {
    with: 20,
    height: 20,
    background: "red",
  },
  btndiv: {
    display: "flex",
    justifyContent: "center",
  },
  stars: {
    paddingLeft: 15,
  },
  cartButton: {
    background: ({ backgroundColor }) =>
      `linear-gradient(45deg, ${backgroundColor.color1} 40%, ${backgroundColor.color2} 80%)`,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .4)",
    borderRadius: 15,
    color: "#fff",
    paddingLeft: 50,
    paddingRight: 50,
    fontWeight: "600",
  },

  colorChangeButton: {
    height: 30,
    background: ({ backgroundColor }) =>
      `linear-gradient(45deg, ${backgroundColor.color1} 40%, ${backgroundColor.color2} 80%)`,
    color: "#fff",
    fontWeight: "600",
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#fff",
    borderStyle: "solid",
    marginLeft: 20,
  },
  modelStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    marginTop: 20,
    // overflowY: "scroll",
  },
  prodTitleColormodel: {
    paddingLeft: 20,
    color: "#fff",
  },
  colorPickerContainer: {
    padding: theme.spacing(2),
  },
  leftMainContainer: {
    padding: theme.spacing(4),
  },
  filterHeader: {
    background: ({ backgroundColor }) =>
      `linear-gradient(45deg, ${backgroundColor.color1} 40%, ${backgroundColor.color2} 80%)`,
    height: 40,
    borderRadius: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "600",
    color: "#fff",
    fontSize: 17,
  },
  priceCategorycontainer: {
    // display: "flex",
    flexWrap: "wrap",
  },
  closeIcon: {
    display: "flex",
    justifyContent: "flex-end",
    color: "#fff",
    fontSize: 25,
  },
}));

function App() {
  const [modelOpen, setModelOpen] = useState(false);
  const [color1, setcolor1] = useState("#FE6B8B");
  const [color2, setcolor2] = useState("#FF8E53");

  const props = {
    backgroundColor: {
      color1: color1,
      color2: color2,
    },
  };

  const classes = useStyles(props);
  const handleOpen = () => setModelOpen(true);
  const handleClose = () => setModelOpen(false);

  //model body
  const body = (
    <Grid>
      <Button onClick={handleClose} className={classes.closeIcon}>
        x
      </Button>
      <Grid
        item
        xs={10}
        sm={10}
        md={12}
        lg={12}
        xl={12}
        className={classes.modelStyle}
      >
        <Grid>
          <Typography
            variant="h6"
            component="div"
            className={classes.prodTitleColormodel}
          >
            Color Left
          </Typography>
          <SketchPicker
            color={color1}
            onChangeComplete={(color) => {
              setcolor1(color.hex);
            }}
          />
        </Grid>
        <Grid item className={classes.colorPickerContainer}>
          <Typography
            variant="h6"
            component="div"
            className={classes.prodTitleColormodel}
          >
            Color Right
          </Typography>
          <SketchPicker
            color={color2}
            onChangeComplete={(color) => {
              setcolor2(color.hex);
            }}
          />
        </Grid>
      </Grid>
      <div style={{ height: 50 }}></div>
    </Grid>
  );

  return (
    <div className="App">
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          {/* navbar */}
          <Grid item xs={12}>
            <AppBar position="static" className={classes.navbar}>
              <Toolbar>
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="menu"
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                  SHOPPING CART
                </Typography>
                <Button
                  onClick={handleOpen}
                  className={classes.colorChangeButton}
                >
                  color
                </Button>
                <Button color="inherit">Login</Button>
              </Toolbar>
            </AppBar>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={3} xl={3}>
            <Card>
              <Grid item style={{ display: "flex", flexWrap: "wrap" }}>
                <Grid
                  item
                  className={classes.leftMainContainer}
                  xs={12}
                  sm={60}
                  md={6}
                  lg={12}
                  xl={12}
                >
                  <Card className={classes.filterHeader}>FILTER BY PRICE</Card>
                  <Card
                    style={{
                      marginTop: 20,
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <FormControl component="fieldset">
                      <RadioGroup
                        aria-label="gender"
                        name="gender1"
                        // value={value}
                        // onChange={handleChange}
                      >
                        <FormControlLabel
                          value="100-500"
                          control={<Radio />}
                          label="Below ₹500"
                        />
                        <FormControlLabel
                          value="500-1000"
                          control={<Radio />}
                          label="₹500 to ₹1000"
                        />
                        <FormControlLabel
                          value="1000-2000"
                          control={<Radio />}
                          label="₹1000 to 2000"
                        />
                        <FormControlLabel
                          value="2000-5000"
                          control={<Radio />}
                          label="₹2000 to ₹5000"
                        />
                        <FormControlLabel
                          value="5000 <"
                          control={<Radio />}
                          label="Above ₹5000"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Card>
                </Grid>
                <Grid
                  item
                  className={classes.leftMainContainer}
                  xs={12}
                  sm={60}
                  md={6}
                  lg={12}
                  xl={12}
                >
                  <Card className={classes.filterHeader}>
                    FILTER BY CATEGORY
                  </Card>
                  <Card
                    style={{
                      marginTop: 20,
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <FormControl component="fieldset">
                      <RadioGroup
                        aria-label="gender"
                        name="gender1"
                        // value={value}
                        // onChange={handleChange}
                      >
                        <FormControlLabel
                          value="Fashion"
                          control={<Radio />}
                          label="Fashion"
                        />
                        <FormControlLabel
                          value="Mobiles and Tablets"
                          control={<Radio />}
                          label="Mobiles and Tablets"
                        />
                        <FormControlLabel
                          value="Consumer Electronics"
                          control={<Radio />}
                          label="Consumer Electronics"
                        />
                        <FormControlLabel
                          value="Books"
                          control={<Radio />}
                          label="Books"
                        />
                        <FormControlLabel
                          value="Groceries"
                          control={<Radio />}
                          label="Groceries"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Card>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={9} xl={9}>
            <Card className={classes.productList}>
              {/* product card 1 */}
              <Card className={classes.product}>
                <CardMedia
                  className={classes.img}
                  component="img"
                  height="140"
                  image={Prod1}
                  alt="green iguana"
                />
                <Typography
                  variant="h6"
                  component="div"
                  className={classes.prodTitle}
                >
                  ADDIDAS GAZE ZX
                </Typography>
                <Typography variant="body2" className={classes.prodBody}>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species
                </Typography>

                <Grid className={classes.stars}>
                  <ReactStars
                    count={5}
                    value={4.5}
                    edit={false}
                    isHalf={true}
                    // onChange={ratingChanged}
                    size={24}
                    activeColor="#ffd700"
                  />
                </Grid>
                <Grid className={classes.priceandcolor}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      padding: 2,
                      marginTop: 7,
                    }}
                  >
                    <Typography
                      variant="h6"
                      component="div"
                      className={classes.prodcolor}
                    >
                      Color :
                    </Typography>

                    <div
                      style={{
                        width: 20,
                        height: 20,
                        background: "blue",
                        borderRadius: 10,
                        top: 5,
                        marginLeft: 5,
                      }}
                    ></div>
                    <div
                      style={{
                        width: 20,
                        height: 20,
                        background: "pink",
                        borderRadius: 10,
                      }}
                    ></div>
                    <div
                      style={{
                        width: 20,
                        height: 20,
                        background: "yellow",
                        borderRadius: 10,
                      }}
                    ></div>
                  </div>
                  <Typography
                    variant="h6"
                    component="div"
                    className={classes.prodPrice}
                  >
                    $09.00
                  </Typography>
                </Grid>
                <Grid className={classes.btndiv}>
                  <Button color="inherit" className={classes.cartButton}>
                    Add To Cart
                  </Button>
                </Grid>
              </Card>

              {/* product card 2 */}
              <Card className={classes.product}>
                <CardMedia
                  className={classes.img}
                  component="img"
                  height="140"
                  image={Prod1}
                  alt="green iguana"
                />
                <Typography
                  variant="h6"
                  component="div"
                  className={classes.prodTitle}
                >
                  ADDIDAS GAZE ZX
                </Typography>
                <Typography variant="body2" className={classes.prodBody}>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species
                </Typography>

                <Grid className={classes.stars}>
                  <ReactStars
                    count={5}
                    value={4.5}
                    edit={false}
                    isHalf={true}
                    // onChange={ratingChanged}
                    size={24}
                    activeColor="#ffd700"
                  />
                </Grid>
                <Grid className={classes.priceandcolor}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      padding: 2,
                      marginTop: 7,
                    }}
                  >
                    <Typography
                      variant="h6"
                      component="div"
                      className={classes.prodcolor}
                    >
                      Color :
                    </Typography>

                    <div
                      style={{
                        width: 20,
                        height: 20,
                        background: "blue",
                        borderRadius: 10,
                        top: 5,
                        marginLeft: 5,
                      }}
                    ></div>
                    <div
                      style={{
                        width: 20,
                        height: 20,
                        background: "pink",
                        borderRadius: 10,
                      }}
                    ></div>
                    <div
                      style={{
                        width: 20,
                        height: 20,
                        background: "yellow",
                        borderRadius: 10,
                      }}
                    ></div>
                  </div>
                  <Typography
                    variant="h6"
                    component="div"
                    className={classes.prodPrice}
                  >
                    $09.00
                  </Typography>
                </Grid>
                <Grid className={classes.btndiv}>
                  <Button color="inherit" className={classes.cartButton}>
                    Add To Cart
                  </Button>
                </Grid>
              </Card>
              {/* product card 1 */}
              <Card className={classes.product}>
                <CardMedia
                  className={classes.img}
                  component="img"
                  height="140"
                  image={Prod1}
                  alt="green iguana"
                />
                <Typography
                  variant="h6"
                  component="div"
                  className={classes.prodTitle}
                >
                  ADDIDAS GAZE ZX
                </Typography>
                <Typography variant="body2" className={classes.prodBody}>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species
                </Typography>

                <Grid className={classes.stars}>
                  <ReactStars
                    count={5}
                    value={4.5}
                    edit={false}
                    isHalf={true}
                    // onChange={ratingChanged}
                    size={24}
                    activeColor="#ffd700"
                  />
                </Grid>
                <Grid className={classes.priceandcolor}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      padding: 2,
                      marginTop: 7,
                    }}
                  >
                    <Typography
                      variant="h6"
                      component="div"
                      className={classes.prodcolor}
                    >
                      Color :
                    </Typography>

                    <div
                      style={{
                        width: 20,
                        height: 20,
                        background: "blue",
                        borderRadius: 10,
                        top: 5,
                        marginLeft: 5,
                      }}
                    ></div>
                    <div
                      style={{
                        width: 20,
                        height: 20,
                        background: "pink",
                        borderRadius: 10,
                      }}
                    ></div>
                    <div
                      style={{
                        width: 20,
                        height: 20,
                        background: "yellow",
                        borderRadius: 10,
                      }}
                    ></div>
                  </div>
                  <Typography
                    variant="h6"
                    component="div"
                    className={classes.prodPrice}
                  >
                    $09.00
                  </Typography>
                </Grid>
                <Grid className={classes.btndiv}>
                  <Button color="inherit" className={classes.cartButton}>
                    Add To Cart
                  </Button>
                </Grid>
              </Card>
              {/* product card 1 */}
              <Card className={classes.product}>
                <CardMedia
                  className={classes.img}
                  component="img"
                  height="140"
                  image={Prod1}
                  alt="green iguana"
                />
                <Typography
                  variant="h6"
                  component="div"
                  className={classes.prodTitle}
                >
                  ADDIDAS GAZE ZX
                </Typography>
                <Typography variant="body2" className={classes.prodBody}>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species
                </Typography>

                <Grid className={classes.stars}>
                  <ReactStars
                    count={5}
                    value={4.5}
                    edit={false}
                    isHalf={true}
                    // onChange={ratingChanged}
                    size={24}
                    activeColor="#ffd700"
                  />
                </Grid>
                <Grid className={classes.priceandcolor}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      padding: 2,
                      marginTop: 7,
                    }}
                  >
                    <Typography
                      variant="h6"
                      component="div"
                      className={classes.prodcolor}
                    >
                      Color :
                    </Typography>

                    <div
                      style={{
                        width: 20,
                        height: 20,
                        background: "blue",
                        borderRadius: 10,
                        top: 5,
                        marginLeft: 5,
                      }}
                    ></div>
                    <div
                      style={{
                        width: 20,
                        height: 20,
                        background: "pink",
                        borderRadius: 10,
                      }}
                    ></div>
                    <div
                      style={{
                        width: 20,
                        height: 20,
                        background: "yellow",
                        borderRadius: 10,
                      }}
                    ></div>
                  </div>
                  <Typography
                    variant="h6"
                    component="div"
                    className={classes.prodPrice}
                  >
                    $09.00
                  </Typography>
                </Grid>
                <Grid className={classes.btndiv}>
                  <Button color="inherit" className={classes.cartButton}>
                    Add To Cart
                  </Button>
                </Grid>
              </Card>
              {/* product card 1 */}
              <Card className={classes.product}>
                <CardMedia
                  className={classes.img}
                  component="img"
                  height="140"
                  image={Prod1}
                  alt="green iguana"
                />
                <Typography
                  variant="h6"
                  component="div"
                  className={classes.prodTitle}
                >
                  ADDIDAS GAZE ZX
                </Typography>
                <Typography variant="body2" className={classes.prodBody}>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species
                </Typography>

                <Grid className={classes.stars}>
                  <ReactStars
                    count={5}
                    value={4.5}
                    edit={false}
                    isHalf={true}
                    // onChange={ratingChanged}
                    size={24}
                    activeColor="#ffd700"
                  />
                </Grid>
                <Grid className={classes.priceandcolor}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      padding: 2,
                      marginTop: 7,
                    }}
                  >
                    <Typography
                      variant="h6"
                      component="div"
                      className={classes.prodcolor}
                    >
                      Color :
                    </Typography>

                    <div
                      style={{
                        width: 20,
                        height: 20,
                        background: "blue",
                        borderRadius: 10,
                        top: 5,
                        marginLeft: 5,
                      }}
                    ></div>
                    <div
                      style={{
                        width: 20,
                        height: 20,
                        background: "pink",
                        borderRadius: 10,
                      }}
                    ></div>
                    <div
                      style={{
                        width: 20,
                        height: 20,
                        background: "yellow",
                        borderRadius: 10,
                      }}
                    ></div>
                  </div>
                  <Typography
                    variant="h6"
                    component="div"
                    className={classes.prodPrice}
                  >
                    $09.00
                  </Typography>
                </Grid>
                <Grid className={classes.btndiv}>
                  <Button color="inherit" className={classes.cartButton}>
                    Add To Cart
                  </Button>
                </Grid>
              </Card>
              {/* product card 1 */}
              <Card className={classes.product}>
                <CardMedia
                  className={classes.img}
                  component="img"
                  height="140"
                  image={Prod1}
                  alt="green iguana"
                />
                <Typography
                  variant="h6"
                  component="div"
                  className={classes.prodTitle}
                >
                  ADDIDAS GAZE ZX
                </Typography>
                <Typography variant="body2" className={classes.prodBody}>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species
                </Typography>

                <Grid className={classes.stars}>
                  <ReactStars
                    count={5}
                    value={4.5}
                    edit={false}
                    isHalf={true}
                    // onChange={ratingChanged}
                    size={24}
                    activeColor="#ffd700"
                  />
                </Grid>
                <Grid className={classes.priceandcolor}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      padding: 2,
                      marginTop: 7,
                    }}
                  >
                    <Typography
                      variant="h6"
                      component="div"
                      className={classes.prodcolor}
                    >
                      Color :
                    </Typography>

                    <div
                      style={{
                        width: 20,
                        height: 20,
                        background: "blue",
                        borderRadius: 10,
                        top: 5,
                        marginLeft: 5,
                      }}
                    ></div>
                    <div
                      style={{
                        width: 20,
                        height: 20,
                        background: "pink",
                        borderRadius: 10,
                      }}
                    ></div>
                    <div
                      style={{
                        width: 20,
                        height: 20,
                        background: "yellow",
                        borderRadius: 10,
                      }}
                    ></div>
                  </div>
                  <Typography
                    variant="h6"
                    component="div"
                    className={classes.prodPrice}
                  >
                    $09.00
                  </Typography>
                </Grid>
                <Grid className={classes.btndiv}>
                  <Button color="inherit" className={classes.cartButton}>
                    Add To Cart
                  </Button>
                </Grid>
              </Card>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Modal
        open={modelOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}

export default App;
